"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Overview", icon: "M3 12l9-9 9 9M5 10v10h14V10" },
  { href: "/campaigns", label: "Campaigns", icon: "M4 5h16M4 12h16M4 19h10" },
  { href: "/channels", label: "Channels", icon: "M4 19V5m6 14V9m6 10V4" },
  { href: "/leads", label: "Leads", icon: "M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r hairline bg-ink-900/60 px-4 py-6 md:flex">
      <div className="mb-8 flex items-center gap-2 px-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" />
          </svg>
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-wide">LUMEN</div>
          <div className="text-[11px] text-white/40">Marketing Intelligence</div>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {nav.map((n) => {
          const active = path === n.href;
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                active ? "bg-brand-500/15 text-brand-200" : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={n.icon} />
              </svg>
              {n.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto px-2 pt-6 text-[11px] text-white/30">v1.0 · Next.js + Supabase</div>
    </aside>
  );
}
