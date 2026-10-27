export type TicketStatus = "Open" | "In progress" | "Waiting" | "Resolved";
export type Priority = "Urgent" | "High" | "Medium" | "Low";

export type Ticket = {
  id: string;
  subject: string;
  customer: string;
  channel: "Email" | "Chat" | "Phone";
  priority: Priority;
  status: TicketStatus;
  assignee: string;
  sentiment: "Positive" | "Neutral" | "At risk";
  updatedAt: string;
  summary: string;
};

export type AgentMetric = {
  name: string;
  initials: string;
  resolved: number;
  csat: number;
  responseTime: string;
  trend: number;
};
