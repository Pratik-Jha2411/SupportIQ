import Link from "next/link";

const links = [["/", "Overview"], ["/tickets", "Ticket queue"], ["/conversations", "Conversations"], ["/performance", "Performance"], ["/recruiter", "Recruiter view"]];

export function Sidebar() {
  return <aside className="fixed inset-y-0 left-0 w-64 border-r border-[#22293b] bg-[#0d111d] p-6">
    <div className="mb-10 flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 font-bold">S</div><span className="text-xl font-semibold">Support<span className="text-indigo-400">IQ</span></span></div>
    <nav className="space-y-2">{links.map(([href, label], index) => <Link key={href} href={href} className={`block rounded-lg px-3 py-2.5 text-sm ${index === 0 ? "bg-indigo-500/15 text-indigo-300" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>{label}</Link>)}</nav>
    <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-[#22293b] bg-[#141a2a] p-3 text-xs text-slate-400"><p className="font-medium text-slate-200">Demo workspace</p><p className="mt-1">Portfolio showcase mode</p></div>
  </aside>;
}
