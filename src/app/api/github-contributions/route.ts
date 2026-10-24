import { NextResponse } from "next/server";

interface DayData {
  date: string;
  level: number;
}

async function fetchYearContributions(username: string, year: string) {
  const url = `https://github.com/users/${username}/contributions?from=${year}-01-01&to=${year}-12-31`;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3500),
    });

    if (!res.ok) {
      return { year, totalText: "", totalCount: 0, days: [] as DayData[] };
    }

    const html = await res.text();

    // Extract contribution title text (e.g., "392 contributions in 2026")
    const titleMatch = html.match(
      /<h2[^>]*id="js-contribution-activity-description"[^>]*>\s*([\s\S]*?)\s*<\/h2>/i
    );
    let totalText = "";
    if (titleMatch && titleMatch[1]) {
      totalText = titleMatch[1].replace(/\s+/g, " ").trim();
    }

    // Extract numeric contribution count
    const countMatch = totalText.match(/([\d,]+)\s+contribution/i);
    const totalCount = countMatch
      ? parseInt(countMatch[1].replace(/,/g, ""), 10)
      : 0;

    // Extract days array (data-date, data-level)
    const daysMap = new Map<string, DayData>();
    const dayRegex = /data-date="([^"]+)"[^>]*data-level="([^"]+)"/gi;
    let match;
    while ((match = dayRegex.exec(html)) !== null) {
      const date = match[1];
      const level = parseInt(match[2], 10) || 0;
      if (date && !daysMap.has(date)) {
        daysMap.set(date, { date, level });
      }
    }

    const days = Array.from(daysMap.values()).sort((a, b) => a.date.localeCompare(b.date));

    return { year, totalText, totalCount, days };
  } catch {
    return { year, totalText: "", totalCount: 0, days: [] as DayData[] };
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "Watot12345";
  const requestedYear = searchParams.get("year") || "2026";

  try {
    // Fetch all active profile years in parallel
    const [data2026, data2025, data2024] = await Promise.all([
      fetchYearContributions(username, "2026"),
      fetchYearContributions(username, "2025"),
      fetchYearContributions(username, "2024"),
    ]);

    const static2026 = 392;
    const static2025 = 249;
    const static2024 = 1;
    const resolved2026 = data2026.totalCount || static2026;
    const resolved2025 = data2025.totalCount || static2025;
    const resolved2024 = data2024.totalCount || static2024;
    const allTimeTotal = resolved2026 + resolved2025 + resolved2024;

    const yearTotals: Record<string, number> = {
      "2026": resolved2026,
      "2025": resolved2025,
      "2024": resolved2024,
      "All Time": allTimeTotal,
    };

    if (requestedYear === "All Time" || requestedYear === "all") {
      const combinedDays = [...data2024.days, ...data2025.days, ...data2026.days];
      return NextResponse.json({
        username,
        year: "All Time",
        totalText: `${allTimeTotal} total contributions across all years`,
        totalCount: allTimeTotal,
        allTimeTotal,
        yearTotals,
        days: combinedDays.length > 0 ? combinedDays : data2026.days,
      });
    }

    const currentYearData =
      requestedYear === "2025"
        ? data2025
        : requestedYear === "2024"
        ? data2024
        : data2026;

    return NextResponse.json({
      username,
      year: currentYearData.year,
      totalText:
        currentYearData.totalText ||
        `${currentYearData.totalCount} contributions in ${currentYearData.year}`,
      totalCount: currentYearData.totalCount,
      allTimeTotal,
      yearTotals,
      days: currentYearData.days,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

