"use client";
import { useMemo, useState } from "react";
import { seedTickets } from "@/lib/data";
import { TicketTable } from "@/components/ticket-table";

export default function TicketsPage() {
  const [query, setQuery] = useState("");
  const tickets = useMemo(() => seedTickets.filter((t) => `${t.subject} ${t.customer} ${t.id}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <><header className="mb-8"><p className="text-sm text-indigo-300">Operations</p><h1 className="mt-2 text-3xl font-semibold">Ticket queue</h1><p className="mt-2 text-slate-400">Triage, assign, and move conversations through your workflow.</p></header><div className="mb-5 flex gap-3"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tickets, customers, or IDs..." className="w-full max-w-md rounded-lg border border-[#29324a] bg-[#101522] px-4 py-3 text-sm outline-none focus:border-indigo-400" /><button className="rounded-lg bg-indigo-500 px-4 text-sm font-medium">+ New ticket</button></div><TicketTable tickets={tickets} /></>;
}
