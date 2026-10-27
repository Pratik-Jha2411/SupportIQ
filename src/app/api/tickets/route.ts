import { listTickets } from "@/lib/repository";

export function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q") ?? "";
  return Response.json({ tickets: listTickets(query) });
}
