import type { Ticket } from "@/types";

const colors: Record<string, string> = { Urgent: "text-rose-300 bg-rose-400/10", High: "text-amber-300 bg-amber-400/10", Medium: "text-blue-300 bg-blue-400/10", Low: "text-slate-300 bg-slate-400/10" };
export function TicketTable({ tickets }: { tickets: Ticket[] }) {
  return <div className="panel overflow-hidden"><div className="border-b border-[#22293b] px-5 py-4 font-medium">Recent ticket activity</div><div className="divide-y divide-[#22293b]">{tickets.map((ticket) => <div key={ticket.id} className="grid grid-cols-[90px_1fr_110px_110px] items-center gap-4 px-5 py-4 text-sm"><span className="font-mono text-xs text-slate-500">{ticket.id}</span><div><p className="font-medium text-slate-200">{ticket.subject}</p><p className="mt-1 text-xs text-slate-500">{ticket.customer} · {ticket.channel}</p></div><span className={`w-fit rounded-full px-2 py-1 text-xs ${colors[ticket.priority]}`}>{ticket.priority}</span><span className="text-xs text-slate-400">{ticket.status}</span></div>)}</div></div>;
}
