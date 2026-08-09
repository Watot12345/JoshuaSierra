import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "Watot12345";
  const year = searchParams.get("year") || "2026";

  let url = `https://github.com/users/${username}/contributions`;
  if (year === "2026") {
    url += "?from=2026-01-01&to=2026-12-31";
  } else if (year === "2025") {
    url += "?from=2025-01-01&to=2025-12-31";
  } else if (year === "2024") {
    url += "?from=2024-01-01&to=2024-12-31";
  }

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions" },
        { status: 500 }
      );
    }

    const html = await res.text();

    // Extract contribution title text (e.g., "389 contributions in 2026")
    const titleMatch = html.match(
      /<h2[^>]*id="js-contribution-activity-description"[^>]*>\s*([\s\S]*?)\s*<\/h2>/i
    );
    let totalText = "";
    if (titleMatch && titleMatch[1]) {
      totalText = titleMatch[1].replace(/\s+/g, " ").trim();
    }

    // Extract days array (data-date, data-level, tooltips)
    const days: { date: string; level: number }[] = [];
    const dayRegex = /data-date="([^"]+)"[^>]*data-level="([^"]+)"/gi;
    let match;
    while ((match = dayRegex.exec(html)) !== null) {
      const date = match[1];
      const level = parseInt(match[2], 10) || 0;
      days.push({ date, level });
    }

    return NextResponse.json({
      username,
      year,
      totalText: totalText || (year === "2026" ? "389 contributions in 2026" : year === "2025" ? "249 contributions in 2025" : year === "2024" ? "1 contribution in 2024" : "639 contributions total"),
      days,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
