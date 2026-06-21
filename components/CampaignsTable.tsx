import { Campaign } from "@/lib/types";
import { usd, compact, pct } from "@/lib/format";
import StatusBadge from "./StatusBadge";

export default function CampaignsTable({ data }: { data: Campaign[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b hairline px-5 py-4 text-sm font-medium">Campaigns</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-white/40">
              <th className="px-5 py-3 font-medium">Campaign</th>
              <th className="px-5 py-3 font-medium">Channel</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 text-right font-medium">Spend</th>
              <th className="px-5 py-3 text-right font-medium">Clicks</th>
              <th className="px-5 py-3 text-right font-medium">Conv.</th>
              <th className="px-5 py-3 text-right font-medium">CTR</th>
              <th className="px-5 py-3 text-right font-medium">ROAS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c) => (
              <tr key={c.id} className="border-t hairline hover:bg-white/[0.02]">
                <td className="px-5 py-3 font-medium">{c.name}</td>
                <td className="px-5 py-3 text-white/60">{c.channel}</td>
                <td className="px-5 py-3"><StatusBadge status={c.status} /></td>
                <td className="px-5 py-3 text-right tabular-nums">{usd(c.spend)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-white/70">{compact(c.clicks)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-white/70">{compact(c.conversions)}</td>
                <td className="px-5 py-3 text-right tabular-nums text-white/70">{pct(c.clicks / Math.max(c.impressions, 1))}</td>
                <td className="px-5 py-3 text-right tabular-nums font-medium text-brand-300">
                  {(c.revenue / Math.max(c.spend, 1)).toFixed(1)}x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
