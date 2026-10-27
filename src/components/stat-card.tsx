export function StatCard({ label, value, detail, accent = "text-indigo-300" }: { label: string; value: string; detail: string; accent?: string }) {
  return <div className="panel p-5"><p className="text-sm text-slate-400">{label}</p><p className={`mt-3 text-3xl font-semibold ${accent}`}>{value}</p><p className="mt-2 text-xs text-slate-500">{detail}</p></div>;
}
