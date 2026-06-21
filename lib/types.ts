export type Channel = {
  name: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
};

export type Campaign = {
  id: string;
  name: string;
  channel: string;
  status: "Active" | "Paused" | "Completed";
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
  start_date: string;
};

export type Lead = {
  id: string;
  name: string;
  company: string;
  source: string;
  status: "New" | "Qualified" | "Proposal" | "Won" | "Lost";
  value: number;
  created_at: string;
};

export type TrendPoint = {
  month: string;
  spend: number;
  revenue: number;
  conversions: number;
};
