import { NextRequest, NextResponse } from "next/server";
import { leadSubmissionSchema } from "@/lib/validation/leads";
import { saveLead } from "@/lib/lead-store";
import { checkRateLimit } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. Content-type check
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Request must be application/json",
        },
        { status: 400 }
      );
    }

    // 2. Rate limiting by IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(clientIp, 6, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          ok: false,
          code: "RATE_LIMITED",
          message: "Please wait before submitting another request.",
        },
        { status: 429 }
      );
    }

    // 3. Parse and validate body
    const body = await req.json();

    // Honeypot check
    if (body.websiteUrl && body.websiteUrl.length > 0) {
      // Silently discard bot submission
      return NextResponse.json(
        {
          ok: true,
          leadId: "lead_demo_ok",
          message: "Your request has been received.",
        },
        { status: 201 }
      );
    }

    const validation = leadSubmissionSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Please review the highlighted fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    // 4. Save lead to local durable store
    const storedLead = await saveLead(validation.data);

    // 5. Return success
    return NextResponse.json(
      {
        ok: true,
        leadId: storedLead.id,
        message: "Your request has been received. Our solutions specialist will contact you shortly.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Leads API Error]:", error);
    return NextResponse.json(
      {
        ok: false,
        code: "SUBMISSION_FAILED",
        message: "We could not submit your request. Please try again or call our verified sales desk.",
      },
      { status: 500 }
    );
  }
}
