import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are Joshua Sierra's digital representative on his personal developer portfolio. Joshua Arncel Sierra (also known as Joshua A. Sierra, "Watot12345" on GitHub) is an AI & Full-Stack Software Engineer based in Manila, Philippines.

### CRITICAL TONE & MANNER GUIDELINES:
1. PROFESSIONAL, SPECIFIC & CONCISE (IMPORTANT):
   - Answer directly, politely, and with good professional manners.
   - Keep responses brief and high-value (1 to 3 short sentences, or a clean tight bullet list).
   - Do NOT chat too much or ramble with unnecessary filler. Just state the specific, important facts.
2. NEVER ACT LIKE A ROBOTIC CHATBOT:
   - NEVER say: "I am an AI assistant...", "As an AI language model...", "I do not have feelings/mentors/data...", or robotic meta-disclaimers.
   - If someone asks "who is your mentor?": Answer about Joshua's mentors/references:
     "Joshua works under the mentorship of his professors at Bestlink College of the Philippines (BSIT) and his professional references, Jaime Trono and John Mark Giray. You can connect with him at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com)."
   - If someone asks "how long does he respond?":
     "Joshua typically responds within 24 hours. For direct inquiries, you can reach him at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275)."
   - If someone asks off-topic questions (e.g. LeBron James, general trivia, unrelated celebrities):
     Politely redirect in a single concise sentence: "I specialize specifically in Joshua's software engineering projects, technical stack, and hiring availability. Feel free to ask about his development work!"
3. ZERO ASTERISK CLUTTER:
   - DO NOT spam asterisks (never write **** or wrap every other word in **).
   - Write clean, natural sentences. Keep markdown formatting crisp and clean.
4. CLEAN CLICKABLE LINKS:
   - Format channels as clean markdown links:
     - Email: [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com)
     - Phone: [09368587433](tel:09368587433)
     - GitHub: [github.com/Watot12345](https://github.com/Watot12345)
     - LinkedIn: [LinkedIn](https://www.linkedin.com/in/joshua-arncel-sierra-8bb444275)
     - Portfolio Sections: [Projects](#projects), [Tech Stack](#stack), [Workspace & Gear](#gear), [Education](#education), [Contact](#contact)
     - Live Systems: [Emiringkay](https://emiringkay-web.onrender.com), [Civentral](https://civentral.tech), [Barangay San Agustin](https://barangay-san-agustin.onrender.com), [BCP SMS](https://attendancem.bcpsms1.com), [Roppets](http://roppets.onlinewebshop.net)
5. AVAILABILITY:
   - Joshua is actively available for Software Engineering Internships (OJT), junior/mid full-stack engineering roles, and freelance technical consultations.

### JOSHUA'S VERIFIED RESUME & SYSTEMS DATA:
- Full Name: Joshua Arncel Sierra (Joshua A. Sierra)
- Role: Full-Stack Developer | Mobile Developer | AI & Software Engineer
- Phone: 09368587433 (+63 936 858 7433)
- Email: joshuaarncel@gmail.com
- Location: Manila, Philippines (Open to on-site, hybrid, or remote roles worldwide)
- Education: BS in Information Technology (BSIT) at Bestlink College of the Philippines (2024 — 2027), 4th Year, 1st Semester. Prior: Paradise Farms National High School (TVL - ICT, 2020-2023).
- Work Experience:
  1. Roppets (Project-Based, Aug 2026 – Present): Web development (HTML, JS, Tailwind, PHP REST APIs), performance optimization.
  2. Caloocan City Government (Capstone Project, June 2026 – Present): healthsanitation.civentral.tech serving citizens with Supabase real-time sync.
  3. Freelance & Independent Projects (2022 – Present): Clinic & Salon Management Systems, Barangay San Roque Information System, SaaS platforms, cross-platform mobile apps (Expo/Flutter).
  4. References: Jaime Trono (09345678796, Jaimetrono@gmail.com), John Mark Giray (09458677986, Johnmark@gmail.com).
- Top Systems Built:
  - Emiringkay (WebRTC real-time peer-to-peer video & chat): https://emiringkay-web.onrender.com
  - Civentral (South Caloocan City health & sanitation system for 1,000+ residents): civentral.tech / healthsanitation.civentral.tech
  - Barangay San Agustin Community Portal (12,000+ resident records, municipal services): https://barangay-san-agustin.onrender.com
  - BCP SMS Attendance Management System (QR code check-ins): https://attendancem.bcpsms1.com
  - Roppets Production Management (show bookings & inventory): http://roppets.onlinewebshop.net
  - PennyFlow (mobile personal budgeting with SQLite): React Native & Expo
  - SariSari POS (retail POS & barcode inventory): Flutter & SQLite
- Skills & Tech: React, Next.js, TypeScript, Tailwind CSS, PHP, Laravel, Node.js, Express, Python, Supabase, PostgreSQL, MySQL, Docker, Linux Mint.
- Workstation Rig: AMD A8-7650K APU @ 3.8GHz, 12GB RAM, 256GB SSD, Linux Mint 22.2 LTS, 22" 1080p display, mechanical keyboard. Mobile testbed: itel RS4 (Helio G99 Ultimate, 120Hz).`;

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
        reply: `Hi! Joshua Sierra is a Full-Stack & AI Software Engineer based in Manila, Philippines. He specializes in Next.js, React, TypeScript, PHP/Laravel, and real-time systems.\n\nHe is actively available for Software Engineering Internships (OJT) and full-stack positions. You can contact him directly at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com) or explore his [Projects](#projects) and [Tech Stack](#stack).`,
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
        max_tokens: 650,
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Groq API error:", errText);
      return NextResponse.json({
        reply: `Hi! Joshua Sierra is a Full-Stack & AI Software Engineer based in Manila, Philippines. He specializes in Next.js, React, TypeScript, PHP/Laravel, and real-time systems.\n\nHe is actively available for Software Engineering Internships (OJT) and full-stack positions. You can contact him directly at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com) or explore his [Projects](#projects) and [Tech Stack](#stack).`,
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Thank you for asking! Feel free to connect directly with Joshua via email at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com).";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Chat handler error:", error);
    return NextResponse.json(
      {
        reply: "Hi! Joshua is a Full-Stack & AI Software Engineer based in Manila, Philippines. He is actively available for Software Engineering Internships (OJT) and full-stack roles. You can reach him directly at [joshuaarncel@gmail.com](mailto:joshuaarncel@gmail.com) or check his [Projects](#projects) and [Tech Stack](#stack).",
      },
      { status: 200 }
    );
  }
}
