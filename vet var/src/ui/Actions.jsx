export function Actions({ status, setStatus }) {
  return (
    <select
      className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs focus:ring-2 focus:ring-orange-400"
      value={status}
      onChange={e => setStatus(e.target.value)}
    >
      <option value="accepted">Accept</option>
      <option value="rejected">Reject</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
  );
}
