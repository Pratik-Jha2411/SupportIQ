import { seedMetrics, seedTickets } from "@/lib/data";
import { StatCard } from "@/components/stat-card";
import { TicketTable } from "@/components/ticket-table";
import { RecommendationPanel } from "@/components/recommendation-panel";

export default function Dashboard() {
  return <><header className="mb-8 flex items-start justify-between"><div><p className="text-sm text-indigo-300">Tuesday, October 27, 2026</p><h1 className="mt-2 text-3xl font-semibold">Good morning, Alex</h1><p className="mt-2 text-slate-400">Here is what is happening across your support operation.</p></div><div className="rounded-lg border border-[#29324a] px-4 py-2 text-sm text-slate-300">Last 7 days ▾</div></header>
    <section className="grid gap-4 md:grid-cols-4"><StatCard label="Open tickets" value="24" detail="↓ 8% from last week" /><StatCard label="Avg. first response" value="6m 42s" detail="↓ 14% faster" accent="text-emerald-300" /><StatCard label="Customer satisfaction" value="94.8%" detail="↑ 2.4% this week" accent="text-emerald-300" /><StatCard label="AI-assisted resolutions" value="68%" detail="↑ 11% adoption" accent="text-violet-300" /></section>
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]"><div className="space-y-6"><TicketTable tickets={seedTickets.slice(0, 4)} /><RecommendationPanel /></div><div className="panel p-5"><div className="flex items-center justify-between"><h2 className="font-medium">Team pulse</h2><a href="/performance" className="text-xs text-indigo-300">View all</a></div><div className="mt-5 space-y-5">{seedMetrics.map((agent) => <div key={agent.name} className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-200">{agent.initials}</div><div className="min-w-0 flex-1"><p className="truncate text-sm">{agent.name}</p><p className="text-xs text-slate-500">{agent.resolved} resolved · {agent.csat}% CSAT</p></div><span className={agent.trend > 0 ? "text-xs text-emerald-300" : "text-xs text-rose-300"}>{agent.trend > 0 ? "+" : ""}{agent.trend}%</span></div>)}</div></div></div>
  </>;
}
