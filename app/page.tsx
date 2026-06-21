import Topbar from "@/components/Topbar";
import KpiCard from "@/components/KpiCard";
import TrendChart from "@/components/TrendChart";
import ChannelChart from "@/components/ChannelChart";
import CampaignsTable from "@/components/CampaignsTable";
import { getChannels, getTrend, getCampaigns, dataSourceLabel } from "@/lib/data";
import { usd, compact, pct } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function OverviewPage() {
  const [channels, trend, campaigns] = await Promise.all([getChannels(), getTrend(), getCampaigns()]);

  const spend = channels.reduce((s, c) => s + c.spend, 0);
  const revenue = channels.reduce((s, c) => s + c.revenue, 0);
  const clicks = channels.reduce((s, c) => s + c.clicks, 0);
  const impressions = channels.reduce((s, c) => s + c.impressions, 0);
  const conversions = channels.reduce((s, c) => s + c.conversions, 0);
  const roas = revenue / Math.max(spend, 1);

  return (
    <>
      <Topbar title="Marketing Overview" subtitle="Cross-channel performance at a glance" source={dataSourceLabel()} />

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Revenue" value={usd(revenue)} delta="12.9%" positive />
        <KpiCard label="Ad Spend" value={usd(spend)} delta="8.1%" positive={false} />
        <KpiCard label="ROAS" value={`${roas.toFixed(2)}x`} delta="4.4%" positive />
        <KpiCard label="Conversions" value={compact(conversions)} delta="9.0%" positive />
      </section>

      <section className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Impressions" value={compact(impressions)} />
        <KpiCard label="Clicks" value={compact(clicks)} />
        <KpiCard label="CTR" value={pct(clicks / Math.max(impressions, 1))} />
        <KpiCard label="Cost / Conv." value={usd(spend / Math.max(conversions, 1))} />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <TrendChart data={trend} />
        <ChannelChart data={channels} />
      </section>

      <section className="mt-6">
        <CampaignsTable data={campaigns.slice(0, 6)} />
      </section>
    </>
  );
}
