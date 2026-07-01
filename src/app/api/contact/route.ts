import { NextResponse } from "next/server";
import type { ContactFormData, ContactFormResponse } from "@/types/portfolio";

/**
 * Contact form submission endpoint.
 * Validates input and returns a success message.
 * In production this would forward to an email service / database.
 */
export async function POST(
  request: Request
): Promise<NextResponse<ContactFormResponse>> {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;

    // Basic server-side validation
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, message: "Please enter your name." },
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
        { success: false, message: "Please add a subject." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Your message should be at least 10 characters." },
        { status: 400 }
      );
    }

    // Simulate async processing latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    // In a real app: persist to DB / send email / trigger notification here.
    // For this portfolio demo we simply acknowledge the submission.
    return NextResponse.json({
      success: true,
      message: `Thanks, ${name}! Your message has been received. I'll get back to you within 24 hours.`,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
