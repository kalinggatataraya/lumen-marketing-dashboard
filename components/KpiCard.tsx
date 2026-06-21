export default function KpiCard({
  label, value, delta, positive = true,
}: { label: string; value: string; delta?: string; positive?: boolean }) {
  return (
    <div className="card p-5">
      <div className="text-xs uppercase tracking-wider text-white/40">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      {delta && (
        <div className={`mt-2 inline-flex items-center gap-1 text-xs ${positive ? "text-brand-300" : "text-rose-400"}`}>
          <span>{positive ? "▲" : "▼"}</span>{delta}
          <span className="text-white/30">vs last mo.</span>
        </div>
      )}
    </div>
  );
}
