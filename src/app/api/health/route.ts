import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  return NextResponse.json(
    {
      ok: true,
      status: "healthy",
      service: "vsanco-ttbs-portal",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
