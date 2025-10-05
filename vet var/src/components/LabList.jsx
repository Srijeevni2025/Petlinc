// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Star, MapPin, Filter } from "lucide-react";

// function LabList() {
//   const [labs] = useState([
//     { 
//       name: "PetCare Diagnostics", 
//       location: "Delhi", 
//       rating: 4.8, 
//       price: "₹1200 onwards", 
//       species: ["Dog", "Cat"], 
//       tags: ["Verified"] 
//     },
//     { 
//       name: "Happy Paws Lab", 
//       location: "Mumbai", 
//       rating: 4.6, 
//       price: "₹900 onwards", 
//       species: ["Dog"], 
//       tags: ["Popular"] 
//     },
//     { 
//       name: "VetTrust Lab", 
//       location: "Bangalore", 
//       rating: 4.9, 
//       price: "₹1500 onwards", 
//       species: ["Dog", "Cat"], 
//       tags: ["Best Rated"] 
//     },
//     { 
//       name: "FelineCare Labs", 
//       location: "Chennai", 
//       rating: 4.5, 
//       price: "₹1100 onwards", 
//       species: ["Cat"], 
//       tags: [] 
//     },
//   ]);

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-6 py-6 border-b bg-white">
//         <h1 className="text-2xl font-bold text-gray-900">Find Veterinary Labs</h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Showing {labs.length} labs for Dogs & Cats 🐶🐱
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
//         {/* Sidebar Filters */}
//         <aside className="hidden lg:block bg-white border rounded-xl p-6 h-fit shadow-sm">
//           <h2 className="text-lg font-semibold mb-4">Filters</h2>

//           {/* Species */}
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-700 mb-2">Species</h3>
//             <div className="space-y-2 text-sm text-gray-600">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" /> Dog
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" /> Cat
//               </label>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
//             <input type="range" min="500" max="2000" className="w-full" />
//             <div className="flex justify-between text-xs text-gray-500 mt-1">
//               <span>₹500</span>
//               <span>₹2000+</span>
//             </div>
//           </div>

//           {/* Rating */}
//           <div className="mb-6">
//             <h3 className="font-medium text-gray-700 mb-2">Rating</h3>
//             {[5, 4, 3].map((r) => (
//               <label key={r} className="block text-sm text-gray-600">
//                 <input type="checkbox" className="mr-2" /> {r}+ Stars
//               </label>
//             ))}
//           </div>

//           {/* Location */}
//           <div>
//             <h3 className="font-medium text-gray-700 mb-2">Location</h3>
//             <input
//               type="text"
//               placeholder="Enter city"
//               className="w-full border rounded-lg px-3 py-2 text-sm"
//             />
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="lg:col-span-3">
          
//           {/* Sorting */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
//             <p className="text-sm text-gray-600">{labs.length} labs found</p>
//             <select className="border rounded-lg px-3 py-2 text-sm">
//               <option>Sort by: Relevance</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Rating: High to Low</option>
//             </select>
//           </div>

//           {/* Lab Cards */}
//           <div className="grid gap-6">
//             {labs.map((lab, idx) => (
//               <div 
//                 key={idx} 
//                 className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col md:flex-row md:items-center justify-between"
//               >
//                 {/* Left Content */}
//                 <div className="flex gap-5">
//                   {/* Placeholder Logo */}
//                   <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center font-bold text-orange-600">
//                     {lab.name.charAt(0)}
//                   </div>

//                   {/* Lab Info */}
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//                       {lab.name}
//                       {lab.tags.includes("Verified") && (
//                         <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
//                           Verified
//                         </span>
//                       )}
//                     </h3>
//                     <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
//                       <MapPin size={16} className="text-orange-600" /> {lab.location}
//                     </p>
//                     <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
//                       <Star size={16} /> {lab.rating}
//                     </div>
//                     <p className="mt-2 text-sm text-gray-700">
//                       Starting at <span className="font-semibold">{lab.price}</span>
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Tests available for: {lab.species.join(", ")}
//                     </p>
//                     {lab.tags.length > 0 && (
//                       <div className="mt-2 flex gap-2 flex-wrap">
//                         {lab.tags.map((tag, i) => (
//                           <span 
//                             key={i} 
//                             className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Right Actions */}
//                 <div className="mt-4 md:mt-0 flex gap-3">
//                   <Link
//                     to="/LabProfile"
//                     className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
//                   >
//                     View Details
//                   </Link>
//                   <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50">
//                     Compare
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default LabList;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";

function LabList() {
  // Pretend the searched test is "CBC Test"
  const searchedTest = "CBC (Complete Blood Count)";

  const [labs] = useState([
    { 
      name: "PetCare Diagnostics", 
      location: "Delhi", 
      rating: 4.8, 
      testPrice: "₹1200", 
      tat: "24 hrs", 
      pickup: true, 
      tags: ["Verified"] 
    },
    { 
      name: "Happy Paws Lab", 
      location: "Mumbai", 
      rating: 4.6, 
      testPrice: "₹950", 
      tat: "12 hrs", 
      pickup: false, 
      tags: ["Popular"] 
    },
    { 
      name: "VetTrust Lab", 
      location: "Bangalore", 
      rating: 4.9, 
      testPrice: "₹1100", 
      tat: "18 hrs", 
      pickup: true, 
      tags: ["Best Rated"] 
    },
    { 
      name: "FelineCare Labs", 
      location: "Chennai", 
      rating: 4.5, 
      testPrice: "₹1000", 
      tat: "24 hrs", 
      pickup: false, 
      tags: [] 
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b bg-white">
        <h1 className="text-2xl font-bold text-gray-900">{searchedTest}</h1>
        <p className="text-sm text-gray-600 mt-1">
          Compare prices across {labs.length} labs
        </p>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Sorting */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600">{labs.length} labs found</p>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Fastest Reports</option>
          </select>
        </div>

        {/* Lab Comparison Cards */}
        <div className="grid gap-6">
          {labs.map((lab, idx) => (
            <div 
              key={idx} 
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              {/* Left Section */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  {lab.name}
                  {lab.tags.length > 0 && (
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
                      {lab.tags[0]}
                    </span>
                  )}
                </h3>
                <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <MapPin size={16} className="text-orange-600" /> {lab.location}
                </p>
                <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                  <Star size={16} /> {lab.rating}
                </div>
              </div>

              {/* Right Section (Comparison Data) */}
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-gray-900">{lab.testPrice}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Report TAT</p>
                  <p className="font-semibold text-gray-900">{lab.tat}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Home Pickup</p>
                  <p className="font-semibold text-gray-900">{lab.pickup ? "Yes" : "No"}</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    to="/LabProfile"
                    className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
                  >
                    Book Now
                  </Link>
                  <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LabList;
