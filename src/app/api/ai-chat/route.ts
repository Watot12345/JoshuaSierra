import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Joshua Sierra's official AI Portfolio Assistant. You represent Joshua Arncel Sierra (also known as Joshua A. Sierra, "Watot12345" on GitHub).

Your mission is to help recruiters, engineering leads, tech founders, and clients learn about Joshua's skills, projects, background, and availability.

### Verified Background Facts about Joshua:
- **Identity & Role:** AI & Full-Stack Software Engineer based in Manila, Philippines. Co-Founder and Tech Lead at Civentral.
- **Availability:** Actively available and seeking **Software Engineering Internships (OJT)**, Junior/Mid Full-Stack Engineer roles, and freelance technical consultations.
- **Academic Background:**
  - Bachelor of Science in Information Technology (BSIT) at Bestlink College of the Philippines (2024 — 2027), currently 4th Year, 1st Semester with specialization in Information Management.
  - TVL - ICT Track (Senior High School) at Paradise Farms National High School (2020 — 2023).
  - Research Forum on AI Integration on Web Development (2026 certification/seminar).
  - Active member of Bestlink Collegiate Information Technology Society.
- **Key Projects:**
  - **Emiringkay:** Real-time peer-to-peer video & chat application powered by WebRTC, WebSockets, PHP/Laravel backend, and Tailwind CSS. Live at https://emiringkay-web.onrender.com.
  - **Civentral:** Civic technology initiative providing digital community platforms and modern public infrastructure.
  - **Barangay San Agustin Community Portal:** High-scale municipal web portal managing 12,000+ resident profiles, disaster relief distribution, and healthcare records. Live at https://barangay-san-agustin.onrender.com.
  - **BCP SMS Attendance Management System:** Enterprise student & employee attendance tracking with QR verification and role-based portals. Live at https://attendancem.bcpsms1.com.
  - **Roppets Puppet Production:** Event management, bookings, and inventory platform (http://roppets.onlinewebshop.net).
  - **PennyFlow:** Offline-first personal finance tracker built with React Native and Expo.
  - **SariSari POS:** Cross-platform retail inventory management system.
- **Tech Stack:**
  - Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, Vite, Bootstrap.
  - Backend: PHP, Laravel, Node.js, Express.js, Python, REST APIs, Redis, WebRTC, WebSockets.
  - Mobile: React Native, Expo, Flutter, Android, iOS.
  - Databases: PostgreSQL, MySQL, Supabase, Prisma ORM, SQLite.
  - Infrastructure & Hosting: Dokploy (self-hosted PaaS), Hostinger, HostForge, InfinityFree, AwardSpace, Render, Railway, Cloudflare Tunnel, Vercel.
  - AI & Dev Tools: Gemini, Claude, ChatGPT, GitHub Copilot, Cline, VS Code, Postman, Figma, Miro, Obsidian.
- **Workstation & Hardware Setup:**
  - PC Rig: AMD A8-7650K APU (4 cores / 4 threads), MSI A68HM-E33 V2 motherboard, 12GB Kingston DDR3 (8+4GB @ 1800MHz), ADATA 256GB SSD.
  - OS: Linux Mint 22.2 (Zara) based on Ubuntu 24.04 Noble LTS.
  - Peripherals: Hanabishi HLED-22FHD 22″ 1080p Display, Nexion KL-802 Mechanical Keyboard (Blue Switches, Black & Red), F1 Wireless Rechargeable Mouse (500mAh, 1600 DPI, silent click), Promate Spike HD Headset.
  - Mobile Testbed: itel RS4 (120Hz refresh rate, Helio G99 Ultimate).
- **Contact Channels:**
  - Email: joshuaarncel@gmail.com
  - GitHub: https://github.com/Watot12345
  - LinkedIn: https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275
  - Location: Manila, Philippines (Open to on-site, hybrid, and remote work).

### Guidelines for Responses:
1. Always be professional, polite, humble, and technically precise.
2. Keep answers concise (2-4 short paragraphs or bullet points). Recruiters love crisp, direct answers.
3. If asked about contact or hiring, provide his email (joshuaarncel@gmail.com) and mention he is actively available for internships (OJT) and software roles.
4. If relevant, include markdown links to the portfolio sections like [Projects](#projects), [Tech Stack](#stack), [Workspace & Gear](#gear), [Education](#education), or [Contact](#contact).
5. Never invent qualifications not listed above. If something is unknown, politely direct the user to reach out to Joshua directly.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = typeof body?.message === "string" ? body.message.trim() : "";

    if (!userMessage) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    if (userMessage.length > 800) {
      return NextResponse.json({ error: "Message is too long (max 800 chars)." }, { status: 400 });
    }

    const rawHistory: ChatMessage[] = Array.isArray(body?.history) ? body.history : [];
    const formattedHistory: ChatMessage[] = rawHistory
      .slice(-6)
      .map((item) => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: String(item.content ?? "").slice(0, 1000),
      }));

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: `Hi! Joshua Sierra is an **AI & Full-Stack Software Engineer** based in Manila, Philippines. He specializes in Next.js, React, TypeScript, PHP/Laravel, WebRTC, and AI integrations.\n\nHe is currently **actively available for Software Engineering Internships (OJT)** and full-stack positions! You can contact him directly at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com) or explore his [Projects](#projects) and [Tech Stack](#stack).`,
      });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...formattedHistory,
      { role: "user", content: userMessage },
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages,
        max_tokens: 600,
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error:", errText);
      // Fallback response grounded in Joshua's knowledge base
      return NextResponse.json({
        reply: `Hi! Joshua Sierra is an **AI & Full-Stack Software Engineer** based in Manila, Philippines. He specializes in Next.js, React, TypeScript, PHP/Laravel, WebRTC, and AI integrations.\n\nHe is currently **actively available for Software Engineering Internships (OJT)** and full-stack positions! You can contact him directly at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com) or explore his [Projects](#projects) and [Tech Stack](#stack).`,
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Thank you for asking! Feel free to connect directly with Joshua via email at joshuaarncel@gmail.com.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Chat handler error:", error);
    return NextResponse.json(
      {
        reply: "Hi! I'm Joshua's AI Assistant. Joshua is an AI & Full-Stack Software Engineer based in Manila, Philippines, specializing in Next.js, WebRTC, and Laravel. He is currently open for **Internships (OJT)** and developer roles. Reach him directly at joshuaarncel@gmail.com!",
      },
      { status: 200 }
    );
  }
}
