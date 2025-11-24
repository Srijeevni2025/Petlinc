// import { useState } from "react";
// import { Link } from "react-router-dom";

// // Example grooming packages
// const allPackages = [
//   {
//     id: 1,
//     name: "Basic Care",
//     desc: "Bath + Nail Trim",
//     price: 699,
//     duration: "30 min",
//     type: "Dog",
//     emoji: "🛁",
//   },
//   {
//     id: 2,
//     name: "Full Grooming",
//     desc: "Bath + Haircut + Nail Trim + Ear Cleaning",
//     price: 1499,
//     duration: "60 min",
//     type: "Dog",
//     emoji: "✂️",
//   },
//   {
//     id: 3,
//     name: "Premium Spa",
//     desc: "Full Grooming + Massage + Styling",
//     price: 2499,
//     duration: "90 min",
//     type: "Dog",
//     emoji: "💆‍♂️",
//   },
//   {
//     id: 4,
//     name: "Cat Essential",
//     desc: "Bath + Nail Trim + Ear Cleaning",
//     price: 899,
//     duration: "40 min",
//     type: "Cat",
//     emoji: "🐱",
//   },
//   {
//     id: 5,
//     name: "Cat Deluxe",
//     desc: "Full Grooming + Styling",
//     price: 1799,
//     duration: "70 min",
//     type: "Cat",
//     emoji: "🐾",
//   },
// ];

// export default function GroomingPackages() {
//   const [petType, setPetType] = useState("All");
//   const [sort, setSort] = useState("default");

//   // Filtering
//   let filtered = allPackages.filter(
//     (pkg) => petType === "All" || pkg.type === petType
//   );

//   // Sorting
//   if (sort === "lowToHigh") {
//     filtered = filtered.sort((a, b) => a.price - b.price);
//   } else if (sort === "highToLow") {
//     filtered = filtered.sort((a, b) => b.price - a.price);
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Grooming Packages 🐶🐱
//         </h1>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
//           <div className="flex gap-3">
//             <button
//               onClick={() => setPetType("All")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 petType === "All"
//                   ? "bg-orange-600 text-white"
//                   : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setPetType("Dog")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 petType === "Dog"
//                   ? "bg-orange-600 text-white"
//                   : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               Dog
//             </button>
//             <button
//               onClick={() => setPetType("Cat")}
//               className={`px-4 py-2 rounded-full text-sm font-medium ${
//                 petType === "Cat"
//                   ? "bg-orange-600 text-white"
//                   : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               Cat
//             </button>
//           </div>

//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="px-4 py-2 rounded-md border border-gray-300 text-sm"
//           >
//             <option value="default">Sort by</option>
//             <option value="lowToHigh">Price: Low → High</option>
//             <option value="highToLow">Price: High → Low</option>
//           </select>
//         </div>

//         {/* Package Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
//             >
//               <p className="text-3xl">{pkg.emoji}</p>
//               <h3 className="mt-3 font-bold text-gray-900">{pkg.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">{pkg.desc}</p>
//               <p className="mt-2 text-sm font-medium text-gray-800">
//                 ₹{pkg.price} • {pkg.duration}
//               </p>
//               <p className="mt-1 text-xs text-gray-500 italic">{pkg.type}</p>
//               <Link
//                 to={`/booking/${pkg.id}`}
//                 className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
//               >
//                 Book Now
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { PawPrint, ArrowDownUp } from "lucide-react";
import Navbar from "@/components/Navbar";

const allPackages = [
  {
    id: 1,
    name: "Basic Care",
    desc: "Bath + Nail Trim",
    price: 699,
    duration: "30 min",
    type: "Dog",
    emoji: "🛁",
  },
  {
    id: 2,
    name: "Full Grooming",
    desc: "Bath + Haircut + Nail Trim + Ear Cleaning",
    price: 1499,
    duration: "60 min",
    type: "Dog",
    emoji: "✂️",
  },
  {
    id: 3,
    name: "Premium Spa",
    desc: "Full Grooming + Massage + Styling",
    price: 2499,
    duration: "90 min",
    type: "Dog",
    emoji: "💆‍♂️",
  },
  {
    id: 4,
    name: "Cat Essential",
    desc: "Bath + Nail Trim + Ear Cleaning",
    price: 899,
    duration: "40 min",
    type: "Cat",
    emoji: "🐱",
  },
  {
    id: 5,
    name: "Cat Deluxe",
    desc: "Full Grooming + Styling",
    price: 1799,
    duration: "70 min",
    type: "Cat",
    emoji: "🐾",
  },
];

export default function GroomingPackages() {
  const [petType, setPetType] = useState("All");
  const [sort, setSort] = useState("default");

  let filtered = allPackages.filter(
    (pkg) => petType === "All" || pkg.type === petType
  );

  if (sort === "lowToHigh") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === "highToLow") filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <>
      <Navbar/>
    
    <div className="relative bg-gradient-to-b from-orange-50 via-white to-orange-50 min-h-screen py-4 px-6 overflow-hidden">
      {/* background glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-200/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-orange-100/40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full shadow-sm mb-4">
            <PawPrint className="text-orange-600 w-8 h-8" />
          </div> */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Grooming Packages 🐶🐱
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Choose from tailored grooming packages for dogs & cats — pampering made easy!
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-3">
            {["All", "Dog", "Cat"].map((type) => (
              <button
                key={type}
                onClick={() => setPetType(type)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                  petType === type
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm">
            <ArrowDownUp className="text-gray-500 w-4 h-4" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent outline-none text-gray-700"
            >
              <option value="default">Sort by</option>
              <option value="lowToHigh">Price: Low → High</option>
              <option value="highToLow">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-50/0 via-orange-50/0 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <p className="text-4xl">{pkg.emoji}</p>
                <h3 className="mt-3 text-lg font-bold text-gray-900">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{pkg.desc}</p>

                <div className="mt-4">
                  <p className="text-gray-800 font-semibold text-sm">
                    ₹{pkg.price.toLocaleString()}{" "}
                    <span className="text-gray-500 text-xs font-normal">• {pkg.duration}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 italic">{pkg.type}</p>
                </div>

                <Link
                  to={`/booking/${pkg.id}`}
                  className="mt-5 inline-block w-full text-center bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-all hover:scale-[1.02] shadow-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
