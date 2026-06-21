export default function Topbar({ title, subtitle, source }: { title: string; subtitle?: string; source: string }) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-white/45">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2 rounded-full border hairline bg-ink-850/70 px-3 py-1.5 text-xs text-white/55">
        <span className={`h-2 w-2 rounded-full ${source === "Supabase" ? "bg-brand-400" : "bg-amber-400"}`} />
        Source: {source}
      </div>
    </header>
  );
}
