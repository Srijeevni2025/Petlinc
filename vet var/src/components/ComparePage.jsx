// import { useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { Star, ShieldCheck } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import { getCategoryComparison } from "@/features/groomers/queryFunction"; // your API to get all partners for that category
// import LoadingScreen from "@/components/LoadingScreen";

// export default function ComparePage() {
//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category") || "basic";

//   const { data, isPending } = useQuery({
//     queryKey: ["compare", category],
//     queryFn: () => getCategoryComparison(category),
//   });

//   if (isPending) return <LoadingScreen />;

//   const groomers = data?.data || [];

//   if (groomers.length === 0) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
//           <h2 className="text-2xl font-bold text-gray-800">
//             No groomers found for {category} category 😔
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please try another category or check back later.
//           </p>
//         </div>
//       </>
//     );
//   }

//   // Collect all services from every groomer in this category
//   const allServices = Array.from(
//     new Set(groomers.flatMap((g) => g.services))
//   );

//   // Find which services are common across all groomers
//   const commonServices = allServices.filter((service) =>
//     groomers.every((g) => g.services.includes(service))
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//               Compare <span className="text-orange-600 capitalize">{category}</span> Grooming Packages
//             </h1>
//             <p className="text-gray-600 mt-2">
//               See what each grooming partner offers — side-by-side.
//             </p>
//           </div>

//           {/* Comparison Grid */}
//           <div className="overflow-x-auto">
//             <div
//               className="grid gap-6"
//               style={{
//                 gridTemplateColumns: `repeat(${groomers.length}, minmax(280px, 1fr))`,
//               }}
//             >
//               {groomers.map((g) => (
//                 <div
//                   key={g._id}
//                   className="bg-white border border-orange-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
//                 >
//                   {/* Top Section */}
//                   <div className="bg-gradient-to-r from-orange-100 to-white p-6 flex flex-col items-center text-center border-b border-orange-100">
//                     <div className="w-20 h-20 bg-white rounded-xl shadow-sm border border-orange-100 flex items-center justify-center overflow-hidden">
//                       <img
//                         src={g.logo}
//                         alt={g.name}
//                         className="max-w-[70%] max-h-[70%] object-contain"
//                       />
//                     </div>
//                     <h3 className="mt-3 text-lg font-bold text-gray-800">{g.name}</h3>
//                     <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold mt-1">
//                       <Star size={14} /> {g.rating || "4.7"}
//                     </div>
//                     {g.verified && (
//                       <div className="flex items-center gap-1 mt-1 text-green-600 text-xs font-semibold">
//                         <ShieldCheck size={12} /> Verified
//                       </div>
//                     )}
//                     <p className="mt-2 text-lg font-bold text-gray-900">
//                       ₹{g.price}
//                       <span className="text-gray-500 text-sm font-normal ml-1">/session</span>
//                     </p>
//                   </div>

//                   {/* Services */}
//                   <div className="p-6 space-y-2">
//                     {allServices.map((service) => {
//                       const isIncluded = g.services.includes(service);
//                       const isCommon = commonServices.includes(service);

//                       return (
//                         <div
//                           key={service}
//                           className={`px-3 py-2 rounded-md text-sm font-medium ${
//                             isIncluded
//                               ? isCommon
//                                 ? "bg-green-50 text-green-700 border border-green-100"
//                                 : "bg-orange-50 text-orange-700 border border-orange-100"
//                               : "bg-gray-50 text-gray-400 border border-gray-100 line-through"
//                           }`}
//                         >
//                           {service}
//                         </div>
//                       );
//                     })}
//                   </div>

//                   {/* Button */}
//                   <div className="p-5 border-t border-orange-100 text-center">
//                     <button className="px-5 py-2 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition">
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Legend */}
//           <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-green-100 border border-green-200 rounded-sm"></span>
//               Common Services
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-orange-100 border border-orange-200 rounded-sm"></span>
//               Unique Services
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-gray-100 border border-gray-200 rounded-sm"></span>
//               Not Included
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import { Star, ShieldCheck } from "lucide-react";
// import Navbar from "@/components/Navbar";

// export default function ComparePage() {
//   const category = "Standard";

//   // Dummy groomer data
//   const groomers = [
//     {
//       id: 1,
//       name: "Vetic",
//       logo: "/vetic.webp",
//       rating: 4.8,
//       verified: true,
//       price: 1499,
//       services: [
//         "Bathing",
//         "Nail Clipping",
//         "Ear Cleaning",
//         "Hair Trim",
//         "Body Massage",
//         "Sanitary Cleaning",
//       ],
//     },
//     {
//       id: 2,
//       name: "Magic Paws",
//       logo: "/Magic Paws.png",
//       rating: 4.9,
//       verified: true,
//       price: 1599,
//       services: [
//         "Bathing",
//         "Ear Cleaning",
//         "Hair Trim",
//         "Anti-Tick Treatment",
//         "Body Massage",
//       ],
//     },
//     {
//       id: 3,
//       name: "Kross Paws",
//       logo: "/kross paws.png",
//       rating: 4.7,
//       verified: false,
//       price: 1399,
//       services: [
//         "Bathing",
//         "Nail Clipping",
//         "Ear Cleaning",
//         "Body Massage",
//         "Teeth Cleaning",
//       ],
//     },
//   ];

//   // Collect all unique services
//   const allServices = Array.from(
//     new Set(groomers.flatMap((g) => g.services))
//   );

//   // Find common services across all groomers
//   const commonServices = allServices.filter((service) =>
//     groomers.every((g) => g.services.includes(service))
//   );

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//               Compare <span className="text-orange-600">{category}</span> Grooming Packages
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Discover what each grooming partner offers — side-by-side.
//             </p>
//           </div>

//           {/* Comparison Grid */}
//           <div className="overflow-x-auto pb-8">
//             <div
//               className="grid gap-6"
//               style={{
//                 gridTemplateColumns: `repeat(${groomers.length}, minmax(280px, 1fr))`,
//               }}
//             >
//               {groomers.map((g) => (
//                 <div
//                   key={g.id}
//                   className="bg-white border border-orange-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
//                 >
//                   {/* Header */}
//                   <div className="bg-gradient-to-r from-orange-100 to-white p-6 flex flex-col items-center text-center border-b border-orange-100">
//                     <div className="w-20 h-20 bg-white rounded-xl shadow-sm border border-orange-100 flex items-center justify-center overflow-hidden">
//                       <img
//                         src={g.logo}
//                         alt={g.name}
//                         className="max-w-[70%] max-h-[70%] object-contain"
//                       />
//                     </div>
//                     <h3 className="mt-3 text-lg font-bold text-gray-800">{g.name}</h3>
//                     <div className="flex items-center gap-1 text-yellow-500 text-sm font-semibold mt-1">
//                       <Star size={14} /> {g.rating}
//                     </div>
//                     {g.verified && (
//                       <div className="flex items-center gap-1 mt-1 text-green-600 text-xs font-semibold">
//                         <ShieldCheck size={12} /> Verified
//                       </div>
//                     )}
//                     <p className="mt-2 text-lg font-bold text-gray-900">
//                       ₹{g.price}
//                       <span className="text-gray-500 text-sm font-normal ml-1">/session</span>
//                     </p>
//                   </div>

//                   {/* Services */}
//                   <div className="p-6 space-y-2">
//                     {allServices.map((service) => {
//                       const isIncluded = g.services.includes(service);
//                       const isCommon = commonServices.includes(service);

//                       return (
//                         <div
//                           key={service}
//                           className={`px-3 py-2 rounded-md text-sm font-medium ${
//                             isIncluded
//                               ? isCommon
//                                 ? "bg-green-50 text-green-700 border border-green-100"
//                                 : "bg-orange-50 text-orange-700 border border-orange-100"
//                               : "bg-gray-50 text-gray-400 border border-gray-100 line-through"
//                           }`}
//                         >
//                           {service}
//                         </div>
//                       );
//                     })}
//                   </div>

//                   {/* CTA */}
//                   <div className="p-5 border-t border-orange-100 text-center">
//                     <button className="px-5 py-2 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition">
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Legend */}
//           <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-green-100 border border-green-200 rounded-sm"></span>
//               Common Services
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-orange-100 border border-orange-200 rounded-sm"></span>
//               Unique Services
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-4 h-4 bg-gray-100 border border-gray-200 rounded-sm"></span>
//               Not Included
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useState } from "react";
import { Star, ShieldCheck, Dog } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ComparePage() {
  const [size, setSize] = useState("medium");
  const category = "Standard";

  // Dummy Groomers Data
  const groomers = [
    {
      id: 1,
      name: "Vetic",
      logo: "/vetic.webp",
      rating: 4.8,
      verified: true,
      price: { small: 999, medium: 1499, large: 1899 },
      services: [
        "Bathing",
        "Nail Clipping",
        "Ear Cleaning",
        "Hair Trim",
        "Body Massage",
      ],
    },
    {
      id: 2,
      name: "Magic Paws",
      logo: "/Magic Paws.png",
      rating: 4.9,
      verified: true,
      price: { small: 1099, medium: 1599, large: 1999 },
      services: [
        "Bathing",
        "Ear Cleaning",
        "Body Massage",
        "Anti-Tick Treatment",
      ],
    },
    {
      id: 3,
      name: "Kross Paws",
      logo: "/kross paws.png",
      rating: 4.7,
      verified: false,
      price: { small: 899, medium: 1399, large: 1799 },
      services: [
        "Bathing",
        "Nail Clipping",
        "Ear Cleaning",
        "Body Massage",
        "Teeth Cleaning",
      ],
    },
  ];

  // Sort all services alphabetically for consistent order
  const allServices = Array.from(new Set(groomers.flatMap((g) => g.services))).sort();

  // Find common services across all
  const commonServices = allServices.filter((service) =>
    groomers.every((g) => g.services.includes(service))
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Compare <span className="text-orange-600">{category}</span> Grooming Packages
            </h1>
            <p className="text-gray-600 mt-2 text-base">
              See what each groomer offers — neatly aligned and size-based.
            </p>
          </div>

          {/* Size Selector */}
          <div className="flex justify-center mb-10">
            <div className="flex bg-white border border-orange-200 rounded-full overflow-hidden shadow-sm">
              {["small", "medium", "large"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-6 py-2 font-medium text-sm capitalize transition ${
                    size === s
                      ? "bg-orange-600 text-white"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  <Dog className="inline-block mr-1 w-4 h-4" />
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-8">
            {groomers.map((g) => (
              <div
                key={g.id}
                className="bg-white border border-orange-100 rounded-3xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-6 border-b border-orange-100">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl border border-orange-100 shadow-sm flex items-center justify-center overflow-hidden">
                      <img
                        src={g.logo}
                        alt={g.name}
                        className="max-w-[70%] max-h-[70%] object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{g.name}</h3>
                      <div className="flex items-center gap-2 text-yellow-500 text-sm font-semibold">
                        <Star size={14} /> {g.rating}
                        {g.verified && (
                          <span className="flex items-center gap-1 text-green-600 ml-2 text-xs font-semibold">
                            <ShieldCheck size={12} /> Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-center sm:text-right mt-4 sm:mt-0">
                    <p className="text-gray-500 text-sm">for {size} dogs</p>
                    <p className="text-lg font-bold text-orange-600">
                      ₹{g.price[size]}
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                  {allServices.map((service) => {
                    const isIncluded = g.services.includes(service);
                    const isCommon = commonServices.includes(service);

                    return (
                      <div
                        key={service}
                        className={`rounded-lg px-4 py-2 border text-sm font-medium ${
                          isIncluded
                            ? isCommon
                              ? "bg-green-50 text-green-700 border-green-100"
                              : "bg-orange-50 text-orange-700 border-orange-100"
                            : "bg-gray-50 text-gray-400 border-gray-100 line-through"
                        }`}
                      >
                        {service}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-green-100 border border-green-200 rounded-sm"></span>
              Common Services
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-orange-100 border border-orange-200 rounded-sm"></span>
              Unique Services
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-gray-100 border border-gray-200 rounded-sm"></span>
              Not Included
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
