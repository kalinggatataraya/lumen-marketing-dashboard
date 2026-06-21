import Topbar from "@/components/Topbar";
import ChannelChart from "@/components/ChannelChart";
import { getChannels, dataSourceLabel } from "@/lib/data";
import { usd, compact, pct } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function ChannelsPage() {
  const channels = await getChannels();
  return (
    <>
      <Topbar title="Channels" subtitle="Performance by acquisition channel" source={dataSourceLabel()} />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChannelChart data={channels} />
        <div className="card overflow-hidden">
          <div className="border-b hairline px-5 py-4 text-sm font-medium">Channel breakdown</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-white/40">
                  <th className="px-5 py-3 font-medium">Channel</th>
                  <th className="px-5 py-3 text-right font-medium">Spend</th>
                  <th className="px-5 py-3 text-right font-medium">Revenue</th>
                  <th className="px-5 py-3 text-right font-medium">CTR</th>
                  <th className="px-5 py-3 text-right font-medium">ROAS</th>
                </tr>
              </thead>
              <tbody>
                {channels.map((c) => (
                  <tr key={c.name} className="border-t hairline hover:bg-white/[0.02]">
                    <td className="px-5 py-3 font-medium">{c.name}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-white/70">{usd(c.spend)}</td>
                    <td className="px-5 py-3 text-right tabular-nums">{usd(c.revenue)}</td>
                    <td className="px-5 py-3 text-right tabular-nums text-white/70">{pct(c.clicks / Math.max(c.impressions, 1))}</td>
                    <td className="px-5 py-3 text-right tabular-nums font-medium text-brand-300">{(c.revenue / Math.max(c.spend, 1)).toFixed(1)}x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
