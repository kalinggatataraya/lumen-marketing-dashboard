# LUMEN — Marketing Intelligence Dashboard

A digital-marketing analytics dashboard built with **Next.js 14 (App Router)** + **Supabase** + **Tailwind** + **Recharts**, ready to deploy on **Vercel**. Same stack/spirit as the meridian dashboard.

It works **with or without** Supabase: if the database env vars are missing, the app renders built-in demo data — so it looks good on Vercel the moment it goes live, and switches to real data once Supabase is connected.

## Pages
- **Overview** — KPIs (revenue, spend, ROAS, conversions), revenue-vs-spend trend, ROAS by channel, top campaigns
- **Campaigns** — full campaign table with CTR & ROAS
- **Channels** — ROAS chart + per-channel breakdown
- **Leads** — pipeline table with status, value, win rate
- `GET /api/health` — JSON health check (shows whether Supabase is configured)

---

## Run locally
```bash
npm install
cp .env.example .env.local   # optional — fill in Supabase keys, or skip for demo data
npm run dev                  # http://localhost:3000
```
> If a stale `node_modules` exists, delete it first: `rm -rf node_modules && npm install`.

---

## ⚠️ Before you start (one-time cleanup)
This folder may contain a leftover `.git/` and a partial `node_modules/` from the build environment. Delete both on your machine first (instant in Explorer/Finder, or run the commands below), then proceed.
```bash
rm -rf .git node_modules package-lock.json
```

---

## Deploy — 3 steps

### 1) GitHub
You already have a repo. From this folder:
```bash
git init
git add .
git commit -m "LUMEN marketing dashboard"
git branch -M main
git remote add origin https://github.com/<you>/<your-repo>.git
git push -u origin main
```
(If the repo already has commits: `git pull --rebase origin main` before pushing.)

### 2) Supabase
1. Create a project at https://supabase.com → **New project**.
2. Open **SQL Editor**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql), and **Run**. This creates the tables (`channels`, `campaigns`, `leads`, `monthly_trend`), enables public-read RLS, and seeds demo rows.
3. Go to **Project Settings → API** and copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3) Vercel
1. https://vercel.com → **Add New → Project** → import your GitHub repo.
2. Framework preset is auto-detected (**Next.js**). No build settings to change.
3. Add **Environment Variables** (from step 2):
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | your project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your anon key |
4. **Deploy**. Done.

> Skip the env vars and it still deploys fine on demo data. Add them later and redeploy to switch to live Supabase data.

---

## Tech
- Next.js 14 App Router (server components, `force-dynamic` data fetching)
- `@supabase/supabase-js` with a safe demo-data fallback (`lib/data.ts`)
- Tailwind CSS dark theme, Recharts visualizations
- Verified with `next build` (all routes compile cleanly)

## Structure
```
app/            routes: / , /campaigns , /channels , /leads , /api/health
components/      Sidebar, Topbar, KpiCard, charts, tables, StatusBadge
lib/             types, supabase client, data layer, mock data, formatters
supabase/        schema.sql (tables + RLS + seed)
```
