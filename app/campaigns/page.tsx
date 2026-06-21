import Topbar from "@/components/Topbar";
import CampaignsTable from "@/components/CampaignsTable";
import KpiCard from "@/components/KpiCard";
import { getCampaigns, dataSourceLabel } from "@/lib/data";
import { usd, compact } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();
  const active = campaigns.filter((c) => c.status === "Active").length;
  const spend = campaigns.reduce((s, c) => s + c.spend, 0);
  const conv = campaigns.reduce((s, c) => s + c.conversions, 0);

  return (
    <>
      <Topbar title="Campaigns" subtitle={`${campaigns.length} campaigns · ${active} active`} source={dataSourceLabel()} />
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Total Campaigns" value={String(campaigns.length)} />
        <KpiCard label="Active" value={String(active)} />
        <KpiCard label="Total Spend" value={usd(spend)} />
        <KpiCard label="Conversions" value={compact(conv)} />
      </section>
      <section className="mt-6">
        <CampaignsTable data={campaigns} />
      </section>
    </>
  );
}
