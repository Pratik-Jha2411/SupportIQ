export function GET() {
  return Response.json({ status: "ready", checks: { repository: "ok", aiProvider: "ok" } });
}
