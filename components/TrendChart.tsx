"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { TrendPoint } from "@/lib/types";

export default function TrendChart({ data }: { data: TrendPoint[] }) {
  return (
    <div className="card p-5">
      <div className="mb-1 text-sm font-medium">Revenue vs Spend</div>
      <div className="mb-4 text-xs text-white/40">Monthly performance trend</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="spd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c9cff" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#7c9cff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="month" stroke="#7b8398" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#7b8398" fontSize={11} tickLine={false} axisLine={false}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ background: "#141823", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#e6e9ef" }}
              formatter={(v: number) => `$${v.toLocaleString()}`} />
            <Area type="monotone" dataKey="revenue" stroke="#2dd4bf" strokeWidth={2} fill="url(#rev)" name="Revenue" />
            <Area type="monotone" dataKey="spend" stroke="#7c9cff" strokeWidth={2} fill="url(#spd)" name="Spend" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
