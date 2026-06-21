import Topbar from "@/components/Topbar";
import LeadsTable from "@/components/LeadsTable";
import KpiCard from "@/components/KpiCard";
import { getLeads, dataSourceLabel } from "@/lib/data";
import { usd } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await getLeads();
  const won = leads.filter((l) => l.status === "Won");
  const pipeline = leads.filter((l) => !["Won", "Lost"].includes(l.status)).reduce((s, l) => s + l.value, 0);
  const wonValue = won.reduce((s, l) => s + l.value, 0);

  return (
    <>
      <Topbar title="Leads" subtitle={`${leads.length} leads in pipeline`} source={dataSourceLabel()} />
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Total Leads" value={String(leads.length)} />
        <KpiCard label="Open Pipeline" value={usd(pipeline)} />
        <KpiCard label="Won Value" value={usd(wonValue)} />
        <KpiCard label="Win Rate" value={`${((won.length / Math.max(leads.length, 1)) * 100).toFixed(0)}%`} />
      </section>
      <section className="mt-6">
        <LeadsTable data={leads} />
      </section>
    </>
  );
}
