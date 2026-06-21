-- ============================================================
-- LUMEN Marketing Intelligence — Supabase schema + seed data
-- Run this in Supabase Studio > SQL Editor (paste & Run).
-- ============================================================

-- ---------- Tables ----------
create table if not exists channels (
  name        text primary key,
  spend       numeric not null default 0,
  impressions bigint  not null default 0,
  clicks      bigint  not null default 0,
  conversions integer not null default 0,
  revenue     numeric not null default 0
);

create table if not exists monthly_trend (
  month       text primary key,
  sort_order  integer not null,
  spend       numeric not null default 0,
  revenue     numeric not null default 0,
  conversions integer not null default 0
);

create table if not exists campaigns (
  id          text primary key,
  name        text not null,
  channel     text not null,
  status      text not null default 'Active',
  spend       numeric not null default 0,
  impressions bigint  not null default 0,
  clicks      bigint  not null default 0,
  conversions integer not null default 0,
  revenue     numeric not null default 0,
  start_date  date
);

create table if not exists leads (
  id         text primary key,
  name       text not null,
  company    text not null,
  source     text not null,
  status     text not null default 'New',
  value      numeric not null default 0,
  created_at date not null default now()
);

-- ---------- Row Level Security (public read for the dashboard) ----------
alter table channels       enable row level security;
alter table monthly_trend  enable row level security;
alter table campaigns      enable row level security;
alter table leads          enable row level security;

do $$
begin
  if not exists (select 1 from pg_policies where tablename='channels' and policyname='public read channels') then
    create policy "public read channels" on channels for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename='monthly_trend' and policyname='public read trend') then
    create policy "public read trend" on monthly_trend for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename='campaigns' and policyname='public read campaigns') then
    create policy "public read campaigns" on campaigns for select using (true);
  end if;
  if not exists (select 1 from pg_policies where tablename='leads' and policyname='public read leads') then
    create policy "public read leads" on leads for select using (true);
  end if;
end $$;

-- ---------- Seed data ----------
insert into channels (name, spend, impressions, clicks, conversions, revenue) values
  ('Paid Search', 42500, 1840000, 62400, 1820, 198400),
  ('Paid Social', 31800, 2310000, 48900, 1240, 142600),
  ('SEO / Organic', 12000, 980000, 71200, 2140, 251300),
  ('Email', 6400, 412000, 38600, 1610, 174900),
  ('Display', 18200, 3120000, 21400, 540, 49800)
on conflict (name) do nothing;

insert into monthly_trend (month, sort_order, spend, revenue, conversions) values
  ('Jan', 1, 78000, 612000, 5100),
  ('Feb', 2, 82000, 648000, 5340),
  ('Mar', 3, 91000, 712000, 5980),
  ('Apr', 4, 88000, 734000, 6120),
  ('May', 5, 96000, 812000, 6750),
  ('Jun', 6, 110900, 917000, 7350)
on conflict (month) do nothing;

insert into campaigns (id, name, channel, status, spend, impressions, clicks, conversions, revenue, start_date) values
  ('c1','Summer Demand Gen','Paid Search','Active',18400,720000,24800,760,88200,'2026-05-02'),
  ('c2','Retargeting — Cart','Paid Social','Active',9600,540000,14200,410,53400,'2026-05-18'),
  ('c3','Brand Awareness Q2','Display','Paused',12200,2100000,12800,290,26100,'2026-04-10'),
  ('c4','Newsletter Nurture','Email','Active',3200,210000,19400,880,96300,'2026-03-01'),
  ('c5','Content Hub Launch','SEO / Organic','Active',5400,480000,38900,1180,138700,'2026-02-14'),
  ('c6','Spring Promo','Paid Search','Completed',14100,610000,18600,540,61200,'2026-03-20')
on conflict (id) do nothing;

insert into leads (id, name, company, source, status, value, created_at) values
  ('l1','Amelia Hartono','Nusantara Retail','Paid Search','Qualified',24000,'2026-06-18'),
  ('l2','Daniel Pratama','Garuda Logistics','SEO / Organic','Proposal',41000,'2026-06-17'),
  ('l3','Sinta Wijaya','Mekar Finance','Email','Won',58000,'2026-06-15'),
  ('l4','Reza Kurniawan','Cendana Media','Paid Social','New',12000,'2026-06-19'),
  ('l5','Maya Lestari','Bahari Foods','SEO / Organic','Qualified',33000,'2026-06-14'),
  ('l6','Hendra Saputra','Anugrah Tech','Paid Search','Lost',19000,'2026-06-12'),
  ('l7','Putri Anggraini','Sentosa Group','Email','Proposal',47000,'2026-06-16')
on conflict (id) do nothing;
