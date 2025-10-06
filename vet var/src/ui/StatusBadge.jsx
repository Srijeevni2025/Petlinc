export  function StatusBadge({ status = "pending" }) {
  const map = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    accepted: "bg-emerald-50 text-emerald-700 border-emerald-200",
    completed: "bg-sky-50 text-sky-700 border-sky-200",
    rejected: "bg-rose-50 text-rose-700 border-rose-200",
  };
  const cls = map[status.toLowerCase()] || map.pending;
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${cls}`}
    >
      {status[0].toUpperCase() + status.slice(1)}
    </span>
  );
}