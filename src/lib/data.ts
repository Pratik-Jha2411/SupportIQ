import type { AgentMetric, Ticket } from "@/types";

export const seedTickets: Ticket[] = [
  { id: "SUP-1042", subject: "Unable to export monthly invoice", customer: "Maya Chen", channel: "Email", priority: "Urgent", status: "Open", assignee: "Unassigned", sentiment: "At risk", updatedAt: "8 min ago", summary: "Customer receives a blank PDF after selecting the March invoice." },
  { id: "SUP-1041", subject: "SSO setup for new workspace", customer: "Jon Bell", channel: "Chat", priority: "High", status: "In progress", assignee: "Ava Rodriguez", sentiment: "Neutral", updatedAt: "24 min ago", summary: "Needs SAML metadata and a walkthrough for their IT team." },
  { id: "SUP-1040", subject: "Feature request: custom roles", customer: "Priya Shah", channel: "Email", priority: "Medium", status: "Waiting", assignee: "Noah Williams", sentiment: "Positive", updatedAt: "1 hr ago", summary: "Following up on the roadmap for granular workspace permissions." },
  { id: "SUP-1039", subject: "Webhook delivery delays", customer: "Alex Morgan", channel: "Phone", priority: "High", status: "Resolved", assignee: "Ava Rodriguez", sentiment: "Positive", updatedAt: "2 hrs ago", summary: "Retry queue was replayed and the customer confirmed recovery." },
  { id: "SUP-1038", subject: "How do I change my billing email?", customer: "Sam Taylor", channel: "Chat", priority: "Low", status: "Resolved", assignee: "Liam Patel", sentiment: "Positive", updatedAt: "3 hrs ago", summary: "Shared the billing settings article and confirmed completion." }
];

export const seedMetrics: AgentMetric[] = [
  { name: "Ava Rodriguez", initials: "AR", resolved: 142, csat: 98, responseTime: "4m 12s", trend: 12 },
  { name: "Noah Williams", initials: "NW", resolved: 128, csat: 95, responseTime: "6m 48s", trend: 8 },
  { name: "Liam Patel", initials: "LP", resolved: 119, csat: 93, responseTime: "7m 05s", trend: -3 }
];
