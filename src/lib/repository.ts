import { seedTickets } from "./data";
import type { Ticket, TicketStatus } from "@/types";

// SQLite-compatible boundary: swap these functions for a SQLite client without changing routes.
let tickets = [...seedTickets];

export function listTickets(query = ""): Ticket[] {
  const normalized = query.toLowerCase().trim();
  return tickets.filter((ticket) =>
    !normalized || [ticket.id, ticket.subject, ticket.customer, ticket.assignee].some((value) => value.toLowerCase().includes(normalized))
  );
}

export function getTicket(id: string) {
  return tickets.find((ticket) => ticket.id === id);
}

export function updateTicketStatus(id: string, status: TicketStatus) {
  tickets = tickets.map((ticket) => ticket.id === id ? { ...ticket, status, updatedAt: "just now" } : ticket);
  return getTicket(id);
}
