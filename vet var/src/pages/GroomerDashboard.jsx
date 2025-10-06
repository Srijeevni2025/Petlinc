import { DynamicTable } from '../ui/table-utils/DynamicTable';

// function GroomerDashboard(){
//     return (

//         <div className="min-h-screen bg-slate-50 text-slate-900">
//         {/* Top bar */}
//         <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between">
//             <div className="flex items-center gap-2">
//                 <img src={"paw logo.png"} alt="Logo" className="w-8 h-8 rounded-md" />
//                 <span className="text-lg font-extrabold tracking-wide text-orange-500">Petlinc</span>
//                 <span className="ml-3 text-sm text-slate-500 hidden sm:inlindefe">| Partner Lab Console</span>
//             </div>
//             <div className="flex items-center gap-2">
//                 <span className="hidden sm:inline text-sm text-slate-600">Lab: <b>lab name</b></span>
//                 <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">Settings</button>
//             </div>
//             </div>
//         </header>

//         <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[240px,1fr] gap-0">
//             {/* Sidebar */}
//             <aside className="border-r border-slate-200 bg-white">
//             <nav aria-label="Lab navigation" className="p-4">
//                 <ul className="space-y-1">
//                 <li>
//                     <a
//                     href="#"
//                     className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium bg-slate-900 text-white"
//                     aria-current="page"
//                     >
//                     <span>📊</span> Dashboard
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                     href="#"
//                     className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
//                     >
//                     <span>⚙️</span> Settings
//                     </a>
//                 </li>
//                 </ul>
//             </nav>

//             {/* Sidebar quick stats */}
//             <div className="m-4 rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2 text-sm">
//                 <div className="flex items-center justify-between">
//                 <span className="text-slate-600">Today’s Bookings</span>
//                 <span className="font-semibold">18</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                 <span className="text-slate-600">Pending</span>
//                 <span className="font-semibold">6</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                 <span className="text-slate-600">Collected</span>
//                 <span className="font-semibold">9</span>
//                 </div>
//             </div>
//             </aside>

//             {/* Main */}
//             <main className="min-h-[calc(100vh-3.5rem)] bg-white">
//             {/* Page header + filters */}
//             <div className="px-4 sm:px-6 pt-4">
//                 <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//                 <h2 className="text-lg font-semibold">Bookings</h2>
//                 <div className="flex flex-wrap items-center gap-2">
//                     <label className="relative">
//                     <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.1-4.4a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0Z" />
//                         </svg>
//                     </span>
//                     <input
//                         type="text"
//                         placeholder="Search by name / test / pincode"
//                         className="w-64 rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
//                     />
//                     </label>
//                     <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm">
//                     <option>All status</option>
//                     <option>Pending</option>
//                     <option>Accepted</option>
//                     <option>Rejected</option>
//                     <option>Collected</option>
//                     </select>
//                     <input type="date" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" />
//                     <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">Export CSV</button>
//                 </div>
//                 </div>
//             </div>

//             {/* Table wrapper */}
//             <div className="px-4 sm:px-6 py-4">
//                 <div className="overflow-auto rounded-xl border border-slate-200">
//                 <table className="min-w-full text-sm">
//                     <thead className="sticky top-0 bg-slate-100 text-slate-700">
//                     <tr className="divide-x divide-slate-200">
//                         <Th>S.No</Th>
//                         <Th className="text-left">Name</Th>
//                         <Th className="text-left">Tests</Th>
//                         <Th>Pincode</Th>
//                         <Th>Flebo contact</Th>
//                         <Th>Status</Th>
//                         <Th>Action</Th>
//                     </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-200">
//                     {/* Sample rows */}
//                     <TableRow data={{ sno: 1, name: "Rajan Chouhan", tests: "CBC", pincode: 700107, fleboContact: "9999999", Status: "pending" }} />
//                     <TableRow data={{ sno: 2, name: "Ananya D", tests: "LFT", pincode: 700091, fleboContact: "9898989", Status: "accepted" }} />
//                     <TableRow data={{ sno: 3, name: "S. Ghosh", tests: "TSH", pincode: 700156, fleboContact: "9797979", Status: "collected" }} />
//                     <TableRow data={{ sno: 4, name: "Vikram", tests: "Vitamin D", pincode: 700034, fleboContact: "9696969", Status: "rejected" }} />
//                     </tbody>
//                 </table>
//                 </div>

//                 {/* Pagination (UI-only) */}
//                 <div className="mt-4 flex items-center justify-between text-sm">
//                 <span className="text-slate-600">Showing 1–10 of 48</span>
//                 <div className="inline-flex overflow-hidden rounded-lg border border-slate-200">
//                     <button className="px-3 py-1.5 hover:bg-slate-50">Prev</button>
//                     <button className="px-3 py-1.5 bg-slate-900 text-white">1</button>
//                     <button className="px-3 py-1.5 hover:bg-slate-50">2</button>
//                     <button className="px-3 py-1.5 hover:bg-slate-50">Next</button>
//                 </div>
//                 </div>
//             </div>
//             </main>
//         </div>
//         </div> 
//     )
// }

// /* ---- Small UI helpers ---- */
// function Th({ children, className = "" }) {
//   return (
//     <th className={`px-3 py-2 font-semibold text-xs uppercase tracking-wide ${className}`}>{children}</th>
//   );
// }

// function StatusBadge({ status = "pending" }) {
//   const s = status.toLowerCase();
//   const map = {
//     pending: "bg-amber-50 text-amber-700 border-amber-200",
//     accepted: "bg-emerald-50 text-emerald-700 border-emerald-200",
//     collected: "bg-sky-50 text-sky-700 border-sky-200",
//     rejected: "bg-rose-50 text-rose-700 border-rose-200",
//   };
//   const cls = map[s] || map.pending;
//   return (
//     <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${cls}`}>
//       {status[0].toUpperCase() + status.slice(1)}
//     </span>
//   );
// }

// function ActionSelect() {
//   return (
//     <select
//       defaultValue="Pending"
//       className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs hover:border-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
//     >
//       <option>Accept</option>
//       <option>Reject</option>
//       <option>Pending</option>
//       <option>Collected</option>
//     </select>
//   );
// }

// function Td({ children, align = "center" }) {
//   const alignCls = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
//   return <td className={`px-3 py-2 ${alignCls}`}>{children}</td>;
// }

// function TableRow({ data }) {
//   const { sno, name, tests, pincode, fleboContact, Status } = data;
//   return (
//     <tr className="odd:bg-white even:bg-slate-50 hover:bg-slate-100/70">
//       <Td>{sno}</Td>
//       <Td align="left">{name}</Td>
//       <Td align="left">{tests}</Td>
//       <Td>{pincode}</Td>
//       <Td className="tabular-nums">{fleboContact}</Td>
//       <Td>
//         <StatusBadge status={Status} />
//       </Td>
//       <Td>
//         <ActionSelect />
//       </Td>
//     </tr>)}


// export default GroomerDashboard;


import { useState } from "react";

function GroomerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const headers = [
  "SNo", "Name", "Pet Name", "Pet Bread", "Package", 
  "Pincode", "Contact", "Status", "Action"
];

const data = [
  {
    SNo: 1,
    Name: "Rajan",
    "Pet Name": "Rocky",
    "Pet Bread": "German Shepherd",
    Package: "Basic Bath",
    Pincode: 700107,
    Contact: "9999999999",
  },
  {
    SNo: 2,
    Name: "Ananya",
    "Pet Name": "Bella",
    "Pet Bread": "Labrador",
    Package: "Full Groom",
    Pincode: 700091,
    Contact: "9898989898",
  },
];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-md hover:bg-slate-100"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <img
              src="paw logo.png"
              alt="Logo"
              className="w-8 h-8 rounded-md"
            />
            <span className="text-lg font-extrabold tracking-wide text-orange-500">
              Petlinc
            </span>
            <span className="hidden sm:inline text-sm text-slate-500">
              | Partner Console
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-sm text-slate-600">
              Groomer: <b>Paw Palace</b>
            </span>
            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
              Settings
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-14 left-0 h-[calc(100vh-3.5rem)] w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out z-40
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          <nav aria-label="Sidebar" className="p-4 space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium bg-slate-900 text-white"
            >
              📊 Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              ⚙️ Settings
            </a>
          </nav>

          <div className="m-4 rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Today’s Bookings</span>
              <span className="font-semibold">18</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Pending</span>
              <span className="font-semibold">6</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Completed</span>
              <span className="font-semibold">9</span>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-white p-4 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold">Bookings</h2>
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto">
              <input
                type="text"
                placeholder="Search by name / package"
                className="w-60 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400"
              />
              <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm">
                <option>All status</option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>Completed</option>
                <option>Rejected</option>
              </select>
              <input
                type="date"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              />
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
                Export CSV
              </button>
            </div>
          </div>

          {/* Table */}
          <DynamicTable headers={headers} data={data} />
        </main>
      </div>
    </div>
  );
}

/* Helpers */
function Th({ children, className = "" }) {
  return (
    <th
      className={`px-3 py-2 font-semibold text-xs uppercase tracking-wide ${className}`}
    >
      {children}
    </th>
  );
}


export default GroomerDashboard;
