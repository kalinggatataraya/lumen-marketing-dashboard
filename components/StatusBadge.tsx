const map: Record<string, string> = {
  Active: "bg-brand-500/15 text-brand-300",
  Paused: "bg-amber-500/15 text-amber-300",
  Completed: "bg-white/10 text-white/55",
  New: "bg-accent/15 text-accent",
  Qualified: "bg-brand-500/15 text-brand-300",
  Proposal: "bg-violet-500/15 text-violet-300",
  Won: "bg-emerald-500/15 text-emerald-300",
  Lost: "bg-rose-500/15 text-rose-300",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${map[status] ?? "bg-white/10 text-white/60"}`}>
      {status}
    </span>
  );
}
