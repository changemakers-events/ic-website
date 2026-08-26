import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/public";

export const dynamic = "force-dynamic";

// Supabase's free tier pauses a project after 7 days with no API activity.
// Vercel Cron hits this route on a schedule (see vercel.json) purely to keep
// the project active; the query result itself is discarded.
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient();
  const { error } = await supabase.from("jobs").select("id").limit(1);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
}
