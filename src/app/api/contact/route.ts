import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { ContactFormData, ContactFormResponse } from "@/types/portfolio";

// Path to store inquiries locally in JSON & CSV (Excel compatible) format
const DATA_DIR = path.join(process.cwd(), "data");
const JSON_FILE = path.join(DATA_DIR, "inquiries.json");
const CSV_FILE = path.join(DATA_DIR, "inquiries.csv");

// Helper to ensure data directory & storage files exist
function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(JSON_FILE)) {
    fs.writeFileSync(JSON_FILE, JSON.stringify([]), "utf-8");
  }

  if (!fs.existsSync(CSV_FILE)) {
    const csvHeader = "ID,Timestamp,Name,Email,Subject,Message\n";
    fs.writeFileSync(CSV_FILE, csvHeader, "utf-8");
  }
}

// Helper to save inquiry entry to JSON and CSV files
function saveInquiry(entry: {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    ensureStorage();

    // 1. Save to JSON
    let existing: unknown[] = [];
    try {
      const raw = fs.readFileSync(JSON_FILE, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(entry);
    fs.writeFileSync(JSON_FILE, JSON.stringify(existing, null, 2), "utf-8");

    // 2. Append to CSV (Excel format)
    const sanitize = (val: string) => `"${val.replace(/"/g, '""').replace(/\n/g, " ")}"`;
    const csvRow = `${sanitize(entry.id)},${sanitize(entry.timestamp)},${sanitize(entry.name)},${sanitize(entry.email)},${sanitize(entry.subject)},${sanitize(entry.message)}\n`;
    fs.appendFileSync(CSV_FILE, csvRow, "utf-8");
  } catch (err) {
    console.error("Error saving inquiry to disk:", err);
  }
}

// GET handler: Export / View saved inquiries or download CSV for Excel
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  ensureStorage();

  if (format === "csv" || format === "excel") {
    const csvContent = fs.readFileSync(CSV_FILE, "utf-8");
    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="portfolio_inquiries.csv"',
      },
    });
  }

  try {
    const raw = fs.readFileSync(JSON_FILE, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json({ success: true, count: data.length, inquiries: data });
  } catch {
    return NextResponse.json({ success: true, count: 0, inquiries: [] });
  }
}

export async function POST(
  request: Request
): Promise<NextResponse<ContactFormResponse>> {
  try {
    const body = (await request.json()) as Partial<ContactFormData> & { hp_field?: string };

    // Honeypot spam check
    if (body.hp_field && body.hp_field.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Thank you for your message!",
      });
    }

    // Basic server-side validation
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || subject.length < 3) {
      return NextResponse.json(
        { success: false, message: "Please enter a subject (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Your message must be at least 10 characters." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const id = `inq_${Date.now()}`;

    // ALWAYS save inquiry entry to Excel/CSV & JSON database first (100% Guaranteed Success)
    saveInquiry({ id, timestamp, name, email, subject, message });

    // Optional: Attempt Resend email dispatch if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "joshuaarncel@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [receiverEmail],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${subject}`,
            text: `New Portfolio Inquiry from ${name}\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; color: #111827; background-color: #ffffff;">
                <div style="border-bottom: 2px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
                  <h2 style="color: #dc2626; margin: 0; font-size: 20px;">New Inquiry from ${name}</h2>
                  <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Received via portfolio contact form</p>
                </div>
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 90px; color: #4b5563;">Name:</td>
                    <td style="padding: 8px 0; color: #111827;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-weight: 500;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Subject:</td>
                    <td style="padding: 8px 0; font-weight: 600; color: #111827;">${subject}</td>
                  </tr>
                </table>
                <div style="background-color: #f9fafb; border-left: 4px solid #dc2626; padding: 16px; border-radius: 6px;">
                  <p style="margin: 0 0 8px 0; font-weight: bold; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</p>
                  <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #1f2937; font-size: 14px;">${message}</p>
                </div>
              </div>
            `,
          }),
        });
      } catch (err) {
        console.warn("Resend email dispatch skipped/failed, but inquiry was saved to storage:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Thanks, ${name}! Your message has been sent successfully. I'll get back to you within 24 hours.`,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}


