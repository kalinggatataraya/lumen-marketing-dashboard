"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Channel } from "@/lib/types";

const palette = ["#2dd4bf", "#14b8a6", "#7c9cff", "#a78bfa", "#f59e0b"];

export default function ChannelChart({ data }: { data: Channel[] }) {
  const rows = data.map((c) => ({ name: c.name, roas: +(c.revenue / Math.max(c.spend, 1)).toFixed(2) }));
  return (
    <div className="card p-5">
      <div className="mb-1 text-sm font-medium">ROAS by Channel</div>
      <div className="mb-4 text-xs text-white/40">Return on ad spend (revenue ÷ spend)</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rows} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 0 }}>
            <XAxis type="number" stroke="#7b8398" fontSize={11} tickLine={false} axisLine={false}
              tickFormatter={(v) => `${v}x`} />
            <YAxis type="category" dataKey="name" stroke="#7b8398" fontSize={12} tickLine={false} axisLine={false} width={96} />
            <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{ background: "#141823", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#e6e9ef" }}
              formatter={(v: number) => [`${v}x`, "ROAS"]} />
            <Bar dataKey="roas" radius={[0, 6, 6, 0]}>
              {rows.map((_, i) => <Cell key={i} fill={palette[i % palette.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
