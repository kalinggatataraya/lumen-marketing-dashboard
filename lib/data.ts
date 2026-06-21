import { getSupabase, hasSupabase } from "./supabaseClient";
import { mockCampaigns, mockChannels, mockLeads, mockTrend } from "./mock";
import { Campaign, Channel, Lead, TrendPoint } from "./types";

// Each fetcher tries Supabase first; on any miss it falls back to demo data,
// so the dashboard always renders — even before the database is wired up.

export async function getChannels(): Promise<Channel[]> {
  const sb = getSupabase();
  if (!sb) return mockChannels;
  const { data, error } = await sb.from("channels").select("*").order("revenue", { ascending: false });
  if (error || !data || data.length === 0) return mockChannels;
  return data as Channel[];
}

export async function getTrend(): Promise<TrendPoint[]> {
  const sb = getSupabase();
  if (!sb) return mockTrend;
  const { data, error } = await sb.from("monthly_trend").select("*").order("sort_order", { ascending: true });
  if (error || !data || data.length === 0) return mockTrend;
  return data as TrendPoint[];
}

export async function getCampaigns(): Promise<Campaign[]> {
  const sb = getSupabase();
  if (!sb) return mockCampaigns;
  const { data, error } = await sb.from("campaigns").select("*").order("revenue", { ascending: false });
  if (error || !data || data.length === 0) return mockCampaigns;
  return data as Campaign[];
}

export async function getLeads(): Promise<Lead[]> {
  const sb = getSupabase();
  if (!sb) return mockLeads;
  const { data, error } = await sb.from("leads").select("*").order("created_at", { ascending: false });
  if (error || !data || data.length === 0) return mockLeads;
  return data as Lead[];
}

export function dataSourceLabel(): "Supabase" | "Demo data" {
  return hasSupabase ? "Supabase" : "Demo data";
}
