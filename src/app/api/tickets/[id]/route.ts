import { aiProvider } from "@/lib/ai";
import { getTicket } from "@/lib/repository";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const ticket = getTicket(params.id);
  if (!ticket) return Response.json({ error: "Ticket not found" }, { status: 404 });
  return Response.json({ ticket, recommendation: await aiProvider.recommend(ticket) });
}
