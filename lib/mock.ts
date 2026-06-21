import { Campaign, Channel, Lead, TrendPoint } from "./types";

export const mockChannels: Channel[] = [
  { name: "Paid Search", spend: 42500, impressions: 1840000, clicks: 62400, conversions: 1820, revenue: 198400 },
  { name: "Paid Social", spend: 31800, impressions: 2310000, clicks: 48900, conversions: 1240, revenue: 142600 },
  { name: "SEO / Organic", spend: 12000, impressions: 980000, clicks: 71200, conversions: 2140, revenue: 251300 },
  { name: "Email", spend: 6400, impressions: 412000, clicks: 38600, conversions: 1610, revenue: 174900 },
  { name: "Display", spend: 18200, impressions: 3120000, clicks: 21400, conversions: 540, revenue: 49800 },
];

export const mockTrend: TrendPoint[] = [
  { month: "Jan", spend: 78000, revenue: 612000, conversions: 5100 },
  { month: "Feb", spend: 82000, revenue: 648000, conversions: 5340 },
  { month: "Mar", spend: 91000, revenue: 712000, conversions: 5980 },
  { month: "Apr", spend: 88000, revenue: 734000, conversions: 6120 },
  { month: "May", spend: 96000, revenue: 812000, conversions: 6750 },
  { month: "Jun", spend: 110900, revenue: 917000, conversions: 7350 },
];

export const mockCampaigns: Campaign[] = [
  { id: "c1", name: "Summer Demand Gen", channel: "Paid Search", status: "Active", spend: 18400, impressions: 720000, clicks: 24800, conversions: 760, revenue: 88200, start_date: "2026-05-02" },
  { id: "c2", name: "Retargeting — Cart", channel: "Paid Social", status: "Active", spend: 9600, impressions: 540000, clicks: 14200, conversions: 410, revenue: 53400, start_date: "2026-05-18" },
  { id: "c3", name: "Brand Awareness Q2", channel: "Display", status: "Paused", spend: 12200, impressions: 2100000, clicks: 12800, conversions: 290, revenue: 26100, start_date: "2026-04-10" },
  { id: "c4", name: "Newsletter Nurture", channel: "Email", status: "Active", spend: 3200, impressions: 210000, clicks: 19400, conversions: 880, revenue: 96300, start_date: "2026-03-01" },
  { id: "c5", name: "Content Hub Launch", channel: "SEO / Organic", status: "Active", spend: 5400, impressions: 480000, clicks: 38900, conversions: 1180, revenue: 138700, start_date: "2026-02-14" },
  { id: "c6", name: "Spring Promo", channel: "Paid Search", status: "Completed", spend: 14100, impressions: 610000, clicks: 18600, conversions: 540, revenue: 61200, start_date: "2026-03-20" },
];

export const mockLeads: Lead[] = [
  { id: "l1", name: "Amelia Hartono", company: "Nusantara Retail", source: "Paid Search", status: "Qualified", value: 24000, created_at: "2026-06-18" },
  { id: "l2", name: "Daniel Pratama", company: "Garuda Logistics", source: "SEO / Organic", status: "Proposal", value: 41000, created_at: "2026-06-17" },
  { id: "l3", name: "Sinta Wijaya", company: "Mekar Finance", source: "Email", status: "Won", value: 58000, created_at: "2026-06-15" },
  { id: "l4", name: "Reza Kurniawan", company: "Cendana Media", source: "Paid Social", status: "New", value: 12000, created_at: "2026-06-19" },
  { id: "l5", name: "Maya Lestari", company: "Bahari Foods", source: "SEO / Organic", status: "Qualified", value: 33000, created_at: "2026-06-14" },
  { id: "l6", name: "Hendra Saputra", company: "Anugrah Tech", source: "Paid Search", status: "Lost", value: 19000, created_at: "2026-06-12" },
  { id: "l7", name: "Putri Anggraini", company: "Sentosa Group", source: "Email", status: "Proposal", value: 47000, created_at: "2026-06-16" },
];
