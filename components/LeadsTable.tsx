import { Lead } from "@/lib/types";
import { usd } from "@/lib/format";
import StatusBadge from "./StatusBadge";

export default function LeadsTable({ data }: { data: Lead[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b hairline px-5 py-4 text-sm font-medium">Recent Leads</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-white/40">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Company</th>
              <th className="px-5 py-3 font-medium">Source</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 text-right font-medium">Value</th>
              <th className="px-5 py-3 text-right font-medium">Created</th>
            </tr>
          </thead>
          <tbody>
            {data.map((l) => (
              <tr key={l.id} className="border-t hairline hover:bg-white/[0.02]">
                <td className="px-5 py-3 font-medium">{l.name}</td>
                <td className="px-5 py-3 text-white/60">{l.company}</td>
                <td className="px-5 py-3 text-white/60">{l.source}</td>
                <td className="px-5 py-3"><StatusBadge status={l.status} /></td>
                <td className="px-5 py-3 text-right tabular-nums">{usd(l.value)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-white/50">{l.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
