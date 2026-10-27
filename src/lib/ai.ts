import type { Ticket } from "@/types";

export type Recommendation = { decision: string; confidence: number; reasons: string[] };

export interface AIProvider {
  recommend(ticket: Ticket): Promise<Recommendation>;
}

export class DemoAIProvider implements AIProvider {
  async recommend(ticket: Ticket): Promise<Recommendation> {
    return {
      decision: ticket.priority === "Urgent" ? "Escalate to billing engineering" : "Prioritize standard response",
      confidence: ticket.priority === "Urgent" ? 94 : 82,
      reasons: [
        `${ticket.sentiment} customer sentiment detected`,
        `${ticket.priority} priority and ${ticket.channel.toLowerCase()} channel`,
        "Similar resolved tickets were handled within 2 hours"
      ]
    };
  }
}

export const aiProvider: AIProvider = new DemoAIProvider();
