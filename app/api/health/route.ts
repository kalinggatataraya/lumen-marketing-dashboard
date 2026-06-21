import { NextResponse } from "next/server";
import { hasSupabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ status: "ok", supabaseConfigured: hasSupabase, time: new Date().toISOString() });
}
