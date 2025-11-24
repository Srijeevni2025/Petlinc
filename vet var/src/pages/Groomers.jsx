

// import React, { useMemo, useState } from "react";
// import { Star, MapPin, Mail } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import { useQuery} from "@tanstack/react-query";
// import { getAllGroomers } from "@/features/groomers/queryFunction";



// export default function GroomersList() {


//     const {data:groomers, isPending} = useQuery({
//         queryKey:["groomers"],
//         queryFn: getAllGroomers,
//     })
   
    
//   const [query, setQuery] = useState("");
//   const [cityFilter, setCityFilter] = useState("");

   
//   const cities = useMemo(() => {
//     const s = new Set(groomers.data.map((g) => g.city));
//     return Array.from(s);
//   }, [groomers.data]);

  
//   const filtered = useMemo(() => {
//     const q = query.toLowerCase();
//     return groomers.data.filter(
//       (g) =>
//         (!cityFilter || g.city === cityFilter) &&
//         (g.name.toLowerCase().includes(q) ||
//           g.about.toLowerCase().includes(q) ||
//           g.city.toLowerCase().includes(q))
//     );
//   }, [groomers.data, query, cityFilter]);
 

 
// if(isPending)
//     return <h1>waiting</h1>
//   return (
//     <>
//         <Navbar/>
    
//     <div className="min-h-screen bg-slate-50 py-10 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Header + Controls */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//           <div>
//             <h1 className="text-2xl font-bold text-slate-900">Grooming Centers</h1>
//             <p className="text-sm text-slate-500">
//               Explore trusted groomers near you. Book appointments instantly.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-3">
//             <input
//               type="search"
//               placeholder="Search by name, service, or city..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-72 md:w-96 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-orange-400 outline-none"
//             />

//             <select
//               value={cityFilter}
//               onChange={(e) => setCityFilter(e.target.value)}
//               className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
//             >
//               <option value="">All Cities</option>
//               {cities.map((city) => (
//                 <option key={city}>{city}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* List of Groomers */}
//         <div className="space-y-6">
//           {filtered.length === 0 ? (
//             <p className="text-center text-slate-500 py-10">
//               No groomers found. Try a different search.
//             </p>
//           ) : (
//             filtered.map((g) => (
//               <div
//                 key={g._id}
//                 className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center gap-6 p-5"
//               >
//                 {/* Logo */}
//                 <img
//                   src={g.logo}
//                   alt={g.name}
//                   className="w-24 h-24 rounded-xl bg-slate-50 object-contain p-2"
//                 />

//                 {/* Content */}
//                 <div className="flex-1">
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
//                     <h3 className="text-lg font-semibold text-slate-900">{g.name}</h3>
//                     <div className="flex items-center gap-1 mt-2 sm:mt-0">
//                       <Star size={16} className="text-yellow-500" />
//                       <span className="font-medium text-slate-700">{g.rating}</span>
//                     </div>
//                   </div>

//                   <p className="mt-2 text-sm text-slate-600 max-w-2xl">{g.about}</p>

//                   <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600">
//                     <span className="flex items-center gap-1">
//                       <MapPin size={14} className="text-orange-500" />
//                       {g.address}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Mail size={14} className="text-orange-500" />
//                       <a href={`mailto:${g.email}`} className="hover:underline text-orange-600">
//                         {g.email}
//                       </a>
//                     </span>
//                   </div>

//                   {/* Actions */}
//                   <div className="mt-5 flex flex-wrap gap-3">
//                     <Link
//                       to={`/groomers/${g.id}`}
//                       className="px-5 py-2 rounded-md bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition"
//                     >
//                       View Details
//                     </Link>
//                     <a
//                       href={`mailto:${g.email}`}
//                       className="px-5 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
//                     >
//                       Contact
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }


// import React, { useMemo, useState } from "react";
// import { Star, MapPin, Mail, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import { useQuery } from "@tanstack/react-query";
// import { getAllGroomers } from "@/features/groomers/queryFunction";

// export default function GroomersList() {
//   const { data: groomers, isPending } = useQuery({
//     queryKey: ["groomers"],
//     queryFn: getAllGroomers,
//   });

//   const [query, setQuery] = useState("");
//   const [cityFilter, setCityFilter] = useState("");

//   if (isPending) return <h1 className="text-center mt-20 text-lg text-gray-600">Loading groomers...</h1>;

//   const cities = useMemo(() => {
//     const s = new Set(groomers?.data?.map((g) => g.city));
//     return Array.from(s);
//   }, [groomers?.data]);

//   const filtered = useMemo(() => {
//     const q = query.toLowerCase();
//     return groomers?.data?.filter(
//       (g) =>
//         (!cityFilter || g.city === cityFilter) &&
//         (g.name.toLowerCase().includes(q) ||
//           g.about.toLowerCase().includes(q) ||
//           g.city.toLowerCase().includes(q))
//     );
//   }, [groomers?.data, query, cityFilter]);

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-b from-orange-50/60 via-white to-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header + Search Controls */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
//             <div>
//               <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
//                 ✂️ Grooming Centers
//               </h1>
//               <p className="text-gray-500 mt-2 text-sm md:text-base">
//                 Discover trusted, verified pet grooming centers near you.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="search"
//                 placeholder="Search by name, service, or city..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-72 md:w-96 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-orange-400 outline-none"
//               />
//               <select
//                 value={cityFilter}
//                 onChange={(e) => setCityFilter(e.target.value)}
//                 className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm"
//               >
//                 <option value="">All Cities</option>
//                 {cities.map((city) => (
//                   <option key={city}>{city}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Groomer Cards */}
//           <div className="space-y-6">
//             {filtered?.length === 0 ? (
//               <p className="text-center text-gray-500 py-16 text-lg">
//                 No groomers found 🐾 Try another city or keyword.
//               </p>
//             ) : (
//               filtered.map((g) => (
//                 <div
//                   key={g._id}
//                   className="bg-white rounded-3xl shadow-md border border-orange-100 hover:shadow-lg hover:border-orange-200 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6"
//                 >
//                   {/* Logo */}
//                   <div className="relative">
//                     <img
//                       src={g.logo}
//                       alt={g.name}
//                       className="w-24 h-24 rounded-2xl bg-orange-50 object-contain p-3"
//                     />
//                     {g.isVerified && (
//                       <span className="absolute -top-2 -right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
//                         <ShieldCheck size={12} /> Verified
//                       </span>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                       <h3 className="text-xl font-semibold text-gray-900">{g.name}</h3>
//                       <div className="flex items-center gap-1">
//                         <Star size={18} className="text-yellow-500" />
//                         <span className="font-medium text-gray-700">
//                           {g.rating || "4.5"}
//                         </span>
//                       </div>
//                     </div>

//                     <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                       {g.about}
//                     </p>

//                     <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
//                       <span className="flex items-center gap-1">
//                         <MapPin size={15} className="text-orange-500" />
//                         {g.address}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Mail size={15} className="text-orange-500" />
//                         <a
//                           href={`mailto:${g.email}`}
//                           className="text-orange-600 hover:underline"
//                         >
//                           {g.email}
//                         </a>
//                       </span>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-5 flex flex-wrap gap-3">
//                       <Link
//                         to={`/groomers/${g._id}`}
//                         className="px-5 py-2.5 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 shadow-sm transition"
//                       >
//                         View Details
//                       </Link>
//                       <a
//                         href={`mailto:${g.email}`}
//                         className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
//                       >
//                         Contact
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Footer Line */}
//           <div className="text-center mt-14 text-gray-400 text-sm">
//             Showing {filtered?.length || 0} grooming centers 🐾
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useMemo, useState } from "react";
// import { Star, MapPin, Mail, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import { useQuery } from "@tanstack/react-query";
// import { getAllGroomers } from "@/features/groomers/queryFunction";

// export default function GroomersList() {
//   const { data: groomers, isPending } = useQuery({
//     queryKey: ["groomers"],
//     queryFn: getAllGroomers,
//   });

//   const [query, setQuery] = useState("");
//   const [cityFilter, setCityFilter] = useState("");

//   if (isPending)
//     return (
//       <div className="flex h-screen items-center justify-center text-lg text-gray-500">
//         Fetching groomers...
//       </div>
//     );

//   const cities = useMemo(() => {
//     const s = new Set(groomers?.data?.map((g) => g.city));
//     return Array.from(s);
//   }, [groomers?.data]);

//   const filtered = useMemo(() => {
//     const q = query.toLowerCase();
//     return groomers?.data?.filter(
//       (g) =>
//         (!cityFilter || g.city === cityFilter) &&
//         (g.name.toLowerCase().includes(q) ||
//           g.about.toLowerCase().includes(q) ||
//           g.city.toLowerCase().includes(q))
//     );
//   }, [groomers?.data, query, cityFilter]);

//   return (
//     <>
//       <Navbar  />

//       <div className="min-h-screen bg-gradient-to-b from-orange-50/70 via-white to-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
//             <div>
//               <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
//                 ✂️ Grooming Centers
//               </h1>
//               <p className="text-gray-500 mt-2 text-sm md:text-base">
//                 Discover verified, pet-friendly groomers in your area.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="search"
//                 placeholder="Search by name, service, or city..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-72 md:w-96 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition"
//               />
//               <select
//                 value={cityFilter}
//                 onChange={(e) => setCityFilter(e.target.value)}
//                 className="rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-orange-400"
//               >
//                 <option value="">All Cities</option>
//                 {cities.map((city) => (
//                   <option key={city}>{city}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Groomer Cards */}
//           <div className="space-y-8">
//             {filtered?.length === 0 ? (
//               <p className="text-center text-gray-500 py-16 text-lg">
//                 No groomers found 🐾 Try another city or keyword.
//               </p>
//             ) : (
//               filtered.map((g) => (
//                 <div
//                   key={g._id}
//                   className="relative bg-white/90 backdrop-blur-sm border border-orange-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col sm:flex-row gap-6 p-6"
//                 >
//                   {/* Logo */}
//                   <div className="flex-shrink-0 relative">
//                     <div className="w-24 h-24 rounded-full bg-orange-50 border border-orange-100 overflow-hidden flex items-center justify-center shadow-sm">
//                       <img
//                         src={g.logo}
//                         alt={g.name}
//                         className="w-16 h-16 object-contain"
//                       />
//                     </div>
//                     {g.isVerified && (
//                       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
//                         <ShieldCheck size={12} /> Verified
//                       </span>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                       <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                         {g.name}
//                       </h3>
//                       <div className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                         <Star size={14} className="text-yellow-500" />
//                         {g.rating || "4.7"}
//                       </div>
//                     </div>

//                     <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-2xl">
//                       {g.about}
//                     </p>

//                     {/* Tag Row */}
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       {["Dog", "Cat", "Home Service"].map((tag) => (
//                         <span
//                           key={tag}
//                           className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100 font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
//                       <span className="flex items-center gap-1">
//                         <MapPin size={15} className="text-orange-500" />
//                         {g.address}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Mail size={15} className="text-orange-500" />
//                         <a
//                           href={`mailto:${g.email}`}
//                           className="text-orange-600 hover:underline"
//                         >
//                           {g.email}
//                         </a>
//                       </span>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-6 flex flex-wrap gap-3">
//                       <Link
//                         to={`/groomers/${g._id}`}
//                         className="px-5 py-2.5 rounded-lg bg-orange-600 text-white text-sm font-medium hover:-translate-y-0.5 hover:shadow-md hover:bg-orange-700 transition-transform"
//                       >
//                         View Details
//                       </Link>
//                       <a
//                         href={`mailto:${g.email}`}
//                         className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
//                       >
//                         Contact
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Footer */}
//           <div className="text-center mt-14 text-gray-400 text-sm">
//             Showing {filtered?.length || 0} grooming centers 🐾
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React, { useMemo, useState } from "react";
// import { Star, MapPin, Mail, ShieldCheck, Scissors } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import { useQuery } from "@tanstack/react-query";
// import { getAllGroomers } from "@/features/groomers/queryFunction";
// import LoadingScreen from "@/components/LoadingScreen";

// export default function GroomersList() {
//   const { data: groomers, isPending } = useQuery({
//     queryKey: ["groomers"],
//     queryFn: getAllGroomers,
//   });

//   const [query, setQuery] = useState("");
//   const [cityFilter, setCityFilter] = useState("");

  

//   const cities = useMemo(() => {
//     const s = new Set(groomers?.data?.map((g) => g.city));
//     return Array.from(s);
//   }, [groomers?.data]);

//   const filtered = useMemo(() => {
//     const q = query.toLowerCase();
//     return groomers?.data?.filter(
//       (g) =>
//         (!cityFilter || g.city === cityFilter) &&
//         (g.name.toLowerCase().includes(q) ||
//           g.about.toLowerCase().includes(q) ||
//           g.city.toLowerCase().includes(q))
//     );
//   }, [groomers?.data, query, cityFilter]);
 
//   if (isPending)
//     return (
//       <LoadingScreen/>
//     );
//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100/30 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* HEADER */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-2">
//                 <Scissors className="text-orange-600" size={28} />
//                 Grooming Centers
//               </h1>
//               <p className="text-gray-600 mt-2 text-sm md:text-base">
//                 Verified pet salons with love, care & expertise for your furry friends.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="search"
//                 placeholder="Search by name, service, or city..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-72 md:w-96 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-5 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all"
//               />
//               <select
//                 value={cityFilter}
//                 onChange={(e) => setCityFilter(e.target.value)}
//                 className="rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-5 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-orange-400"
//               >
//                 <option value="">All Cities</option>
//                 {cities.map((city) => (
//                   <option key={city}>{city}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* GROOMER CARDS */}
//           <div className="space-y-8">
//             {filtered?.length === 0 ? (
//               <p className="text-center text-gray-500 py-16 text-lg">
//                 No groomers found 🐾 Try another city or keyword.
//               </p>
//             ) : (
//               filtered.map((g) => (
//                 <div
//                   key={g._id}
//                   className="group relative bg-white border border-orange-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col sm:flex-row gap-6 overflow-hidden hover:-translate-y-1"
//                 >
//                   {/* Decorative Gradient Glow */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

//                   {/* Logo */}
//                   <div className="flex-shrink-0 relative">
//                     <div className="w-24 h-24 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-inner overflow-hidden">
//                       <img
//                         src={g.logo}
//                         alt={g.name}
//                         className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-105"
//                       />
//                     </div>
//                     {1 && (
//                       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm font-medium">
//                         <ShieldCheck size={12} /> Verified
//                       </span>
//                     )}
//                   </div>

//                   {/* CONTENT */}
//                   <div className="flex-1">
//                     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                       <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                         {g.name}
//                       </h3>
//                       <div className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
//                         <Star size={14} className="text-yellow-500" />
//                         {g.rating || "4.8"}
//                       </div>
//                     </div>

//                     <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                       {g.about.length > 450 ? g.about.slice(0, 450) + "..." : g.about}
//                     </p>

//                     {/* Category Tags */}
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       {["Dog", "Cat", "Spa", "Home Service"].map((tag) => (
//                         <span
//                           key={tag}
//                           className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border border-orange-100 font-medium shadow-sm"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Address & Email */}
//                     <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
//                       <span className="flex items-center gap-1">
//                         <MapPin size={15} className="text-orange-500" />
//                         {g.address}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Mail size={15} className="text-orange-500" />
//                         <a
//                           href={`mailto:${g.email}`}
//                           className="text-orange-600 hover:underline font-medium"
//                         >
//                           {g.email}
//                         </a>
//                       </span>
//                     </div>

//                     {/* BUTTONS */}
//                     <div className="mt-6 flex flex-wrap gap-3">
//                       <Link
//                         to={`/GroomingCenterProfile/${g._id}`}
//                         className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold hover:shadow-md hover:from-orange-700 hover:to-orange-600 transform hover:-translate-y-0.5 transition-all"
//                       >
//                         View Details
//                       </Link>
//                       <a
//                         href={`mailto:${g.email}`}
//                         className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition"
//                       >
//                         Contact
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* FOOTER */}
//           <div className="text-center mt-14 text-gray-400 text-sm">
//             Showing {filtered?.length || 0} grooming centers 🐾
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useMemo, useState } from "react";
import { Star, MapPin, Mail, ShieldCheck, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getAllGroomers } from "@/features/groomers/queryFunction";
import LoadingScreen from "@/components/LoadingScreen";

export default function GroomersList() {
  const { data: groomers, isPending } = useQuery({
    queryKey: ["groomers"],
    queryFn: getAllGroomers,
  });

  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const cities = useMemo(() => {
    const s = new Set(groomers?.data?.map((g) => g.city));
    return Array.from(s);
  }, [groomers?.data]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return groomers?.data?.filter(
      (g) =>
        (!cityFilter || g.city === cityFilter) &&
        (g.name.toLowerCase().includes(q) ||
          g.about.toLowerCase().includes(q) ||
          g.city.toLowerCase().includes(q))
    );
  }, [groomers?.data, query, cityFilter]);

  if (isPending) return <LoadingScreen />;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100/40 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-2">
                <Scissors className="text-orange-600" size={28} />
                Trusted Grooming Centers
              </h1>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                Book appointments with verified pet salons near you 🐶🐱
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="search"
                placeholder="Search by name, service, or city..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-72 md:w-96 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-5 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all"
              />
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm px-5 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-orange-400"
              >
                <option value="">All Cities</option>
                {cities.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-6">
            {filtered?.length === 0 ? (
              <div className="text-center py-20 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl shadow-sm">
                <Scissors className="mx-auto text-orange-400 mb-3" size={36} />
                <p className="text-gray-600 text-base">
                  No groomers found for your search. Try another city or keyword 🐾
                </p>
              </div>
            ) : (
              filtered.map((g) => (
                <div
                  key={g._id}
                  className="group relative bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-[2px] overflow-hidden"
                >
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                  <div className="flex flex-col sm:flex-row items-center gap-5 p-5">
                    {/* Logo */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <div className="w-full h-full rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={g.logo}
                          alt={g.name}
                          className="w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm font-medium">
                        <ShieldCheck size={12} /> Verified
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {g.name}
                        </h3>
                        <div className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                          <Star size={14} className="text-yellow-500" />
                          {g.rating || "4.8"}
                        </div>
                      </div>

                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {g.about.length > 400
                          ? g.about.slice(0, 400) + "..."
                          : g.about}
                      </p>

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Dog", "Cat", "Spa", "Home Service"].map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border border-orange-100 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Location & Contact */}
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-1">
                          <MapPin size={15} className="text-orange-500" />
                          {g.address}
                        </span>
                        <a
                          href={`mailto:${g.email}`}
                          className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
                        >
                          <Mail size={15} className="text-orange-500" />
                          {g.email}
                        </a>
                      </div>

                      {/* CTA Buttons */}
                      <div className="mt-5 flex flex-wrap gap-3">
                        <Link
                          to={`/GroomingCenterProfile/${g._id}`}
                          className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold hover:shadow-md hover:from-orange-700 hover:to-orange-600 transition-all"
                        >
                          View Details
                        </Link>
                        <a
                          href={`mailto:${g.email}`}
                          className="px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER */}
          <div className="text-center mt-12 text-gray-400 text-sm">
            Showing {filtered?.length || 0} trusted grooming centers 🐾
          </div>
        </div>
      </div>
    </>
  );
}
