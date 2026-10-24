/**
 * Anti-Spam, Brute-Force, and Bot-Mining Guardrails
 * Protects portfolio API routes (/api/ai-chat, /api/contact) from automated abuse,
 * credential/token scraping, DDoS attempts, prompt injections, and mining scripts.
 */

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  dailyMax?: number;
  keyPrefix?: string;
}

interface RateLimitRecord {
  timestamps: number[];
  dailyCount: number;
  dailyResetTime: number;
}

// In-memory sliding window cache per IP
const rateLimitStore = new Map<string, RateLimitRecord>();

// Periodic memory cleanup every 10 minutes to prevent memory leaks
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      record.timestamps = record.timestamps.filter((t) => now - t < 3600000);
      if (record.timestamps.length === 0 && now > record.dailyResetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 10 * 60 * 1000).unref?.();
}

/**
 * Extracts real client IP address safely from proxy headers
 */
export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp) return firstIp;
  }
  const cfConnecting = req.headers.get("cf-connecting-ip");
  if (cfConnecting) return cfConnecting.trim();

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}

/**
 * Detects automated bot scrapers, headless miners, and command-line runners
 */
export function isSuspectedBot(req: Request): boolean {
  const userAgent = (req.headers.get("user-agent") || "").toLowerCase().trim();

  // 1. Missing user agent is almost exclusively scripted bots/curls
  if (!userAgent) return true;

  // 2. Known automated scraping tools, miners, and scanners
  const botPatterns = [
    "python-requests",
    "aiohttp",
    "httpx",
    "curl/",
    "wget/",
    "scrapy",
    "go-http-client",
    "masscan",
    "sqlmap",
    "nikto",
    "miner",
    "xmrig",
    "postmanruntime",
    "insomnia",
    "headlesschrome",
    "phantomjs",
    "selenium",
    "puppeteer",
    "crawl",
    "spider",
    "bot",
  ];

  // Whitelist legitimate search engines if needed, but for POST API routes they should not be calling
  for (const pattern of botPatterns) {
    if (userAgent.includes(pattern)) {
      return true;
    }
  }

  // 3. Origin verification: prevent third-party malicious sites from embedding & draining AI tokens
  const origin = req.headers.get("origin") || "";
  const host = req.headers.get("host") || "";

  if (origin) {
    try {
      const originHost = new URL(origin).host;
      // Allow localhost, vercel deployments, and host match
      const isAllowedHost =
        originHost === host ||
        originHost.includes("localhost") ||
        originHost.includes("127.0.0.1") ||
        originHost.endsWith(".vercel.app") ||
        originHost.endsWith("civentral.tech") ||
        originHost.includes("joshuasierra");

      if (!isAllowedHost) {
        return true; // Cross-origin abuse attempt from unauthorized domain
      }
    } catch {
      return true;
    }
  }

  return false;
}

/**
 * Enforces sliding window rate limits and daily quotas per IP address
 */
export function checkRateLimit(
  ip: string,
  config: RateLimitConfig
): {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
  reason?: string;
} {
  const now = Date.now();
  const cacheKey = `${config.keyPrefix || "general"}:${ip}`;

  let record = rateLimitStore.get(cacheKey);
  if (!record) {
    record = {
      timestamps: [],
      dailyCount: 0,
      dailyResetTime: now + 24 * 60 * 60 * 1000,
    };
    rateLimitStore.set(cacheKey, record);
  }

  // Reset daily quota if 24 hours passed
  if (now > record.dailyResetTime) {
    record.dailyCount = 0;
    record.dailyResetTime = now + 24 * 60 * 60 * 1000;
  }

  // Check daily maximum quota (anti-mining / token exhaustion)
  if (config.dailyMax && record.dailyCount >= config.dailyMax) {
    const retryAfter = Math.ceil((record.dailyResetTime - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(retryAfter, 60),
      reason: "Daily message quota reached. Please connect directly via email.",
    };
  }

  // Filter timestamps within current sliding window
  const windowStart = now - config.windowMs;
  record.timestamps = record.timestamps.filter((t) => t > windowStart);

  // Check burst rate limit
  if (record.timestamps.length >= config.maxRequests) {
    const oldestInWindow = record.timestamps[0];
    const retryAfter = Math.ceil((oldestInWindow + config.windowMs - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(retryAfter, 5),
      reason: "Too many rapid requests. Please slow down.",
    };
  }

  // Record this hit
  record.timestamps.push(now);
  record.dailyCount += 1;

  return {
    allowed: true,
    remaining: config.maxRequests - record.timestamps.length,
    retryAfterSeconds: 0,
  };
}

/**
 * Prompt Injection, XSS, and Malicious Payload Guardrails
 */
export function inspectPayload(text: string): { safe: boolean; reason?: string } {
  const clean = text.trim();

  // 1. Length check
  if (clean.length > 500) {
    return { safe: false, reason: "Payload length exceeds maximum allowable 500 characters." };
  }

  // 2. Character repetition spam (e.g., 'aaaaaa...' or endless newlines)
  if (/(.)\1{25,}/.test(clean)) {
    return { safe: false, reason: "Repeated character flooding detected." };
  }

  // 3. Prompt injection and jailbreak keywords
  const injectionPatterns = [
    /ignore (all )?(previous|prior) (instructions|prompts)/i,
    /disregard (all )?(previous|prior) (instructions|rules)/i,
    /reveal (your|the) (system prompt|hidden instructions|api key)/i,
    /you are now in (developer mode|dan mode|unrestricted)/i,
    /system prompt/i,
    /jailbreak/i,
    /api[_\s-]?key/i,
    /groq[_\s-]?key/i,
    /<script[\s\S]*?>[\s\S]*?<\/script>/i,
    /select[\s\S]+from[\s\S]+information_schema/i,
    /union[\s\S]+select/i,
  ];

  for (const pattern of injectionPatterns) {
    if (pattern.test(clean)) {
      return { safe: false, reason: "Forbidden prompt injection pattern detected." };
    }
  }

  return { safe: true };
}
