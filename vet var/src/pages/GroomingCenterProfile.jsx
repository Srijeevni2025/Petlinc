// import { useQuery } from "@tanstack/react-query";

// function GroomerProfile() {
//   // const { isPending, data: groomer, error } = useQuery({
//   //   queryKey: ["groomer"],
//   //   queryFn: async function () {
//   //     const res = await fetch(
//   //       "https://your-api-url.com/api/v1/groomers/kross-paws"
//   //     );
//   //     const data = await res.json();
//   //     console.log(data);
//   //     return data;
//   //   },
//   // });

//   // if (isPending) {
//   //   return <h1>Loading Groomer Profile...</h1>;
//   // }

//   // if (error) {
//   //   return <h1>Something went wrong 😿</h1>;
//   // }

//   return (
//     <div className="min-h-screen w-full bg-white text-slate-800">
//       {/* Groomer Hero Section */}
//       <section className="border-b border-teal-100 pb-5">
//         <div className="flex items-start gap-4">
//           <img
//             src={groomer.data.logo || "/pet-placeholder.png"}
//             alt={groomer.data.name}
//             className="h-16 w-16 rounded-xl object-cover"
//           />
//           <div className="flex-1">
//             <h1 className="font-bold text-2xl leading-tight">
//               {groomer.data.name}
//             </h1>
//             <p className="mt-1 text-sm text-slate-600">{groomer.data.address}</p>
//             <div className="mt-2 flex flex-wrap items-center gap-2">
//               <a
//                 href={groomer.data.mapsLink || "#"}
//                 className="text-[#20B3C9] text-sm font-medium hover:underline"
//               >
//                 Get directions
//               </a>
//               {groomer.data.isVerified && (
//                 <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
//                   ✅ Verified Partner
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section className="py-5 border-b border-teal-100">
//         <h2 className="font-semibold text-lg mb-2">About</h2>
//         <p className="text-sm text-slate-700 max-w-3xl">
//           {groomer.data.about || "Trusted grooming services for your pets."}
//         </p>
//       </section>

//       {/* Services & Packages */}
//       <section className="py-5 border-b border-teal-100">
//         <h3 className="font-semibold text-lg mb-3">Services & Packages</h3>
//         <ul className="grid gap-4 md:grid-cols-2">
//           {groomer.data.services.map((service, idx) => (
//             <li
//               key={idx}
//               className="rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition"
//             >
//               <h4 className="font-semibold">{service.name}</h4>
//               <p className="text-xs text-slate-500 mt-1">
//                 {service.description || "Quality pet grooming service"}
//               </p>
//               <div className="mt-2 flex items-center gap-2">
//                 <span className="text-sm font-semibold">
//                   ₹{service.price || "—"}
//                 </span>
//                 {service.duration && (
//                   <span className="text-xs text-slate-500">
//                     • {service.duration} mins
//                   </span>
//                 )}
//               </div>
//               <button className="mt-3 rounded-lg bg-amber-400 px-4 py-2 text-slate-900 font-semibold hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200">
//                 Book Now
//               </button>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Gallery */}
//       <section className="py-6 border-b border-teal-100">
//         <h3 className="font-semibold text-lg mb-3">Gallery</h3>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//           {groomer.data.gallery?.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt="Pet grooming"
//               className="rounded-lg object-cover h-40 w-full"
//             />
//           )) || <p className="text-sm text-slate-500">No photos available</p>}
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="py-6 border-b border-teal-100">
//         <h3 className="font-semibold text-lg mb-3">Customer Reviews</h3>
//         <div className="space-y-4">
//           {groomer.data.reviews?.length > 0 ? (
//             groomer.data.reviews.map((review, idx) => (
//               <div key={idx} className="border-b pb-3">
//                 <p className="text-sm font-medium">⭐ {review.rating}/5</p>
//                 <p className="text-sm text-slate-700 mt-1">
//                   “{review.comment}”
//                 </p>
//                 <p className="text-xs text-slate-500 mt-1">
//                   — {review.userName}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-slate-500">No reviews yet</p>
//           )}
//         </div>
//       </section>

//       <footer className="border-t border-slate-200 py-6 mt-10">
//         <div className="mx-auto max-w-6xl px-4 md:px-6 text-sm text-slate-500">
//           © {new Date().getFullYear()} Petlinc. Happy pets, trusted groomers.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default GroomerProfile;

// function GroomingCenterProfile() {
//   return (
//     <div className="min-h-screen w-full bg-white text-slate-800">
//       {/* Groomer Hero Section */}
//       <section className="border-b border-teal-100 pb-5 px-4 md:px-6">
//         <div className="flex flex-col sm:flex-row sm:items-start gap-4">
//           <img
//             src="/pet-placeholder.png"
//             alt="Kross Paws"
//             className="h-20 w-20 rounded-xl object-cover"
//           />
//           <div className="flex-1">
//             <h1 className="font-bold text-2xl leading-tight">Kross Paws</h1>
//             <p className="mt-1 text-sm text-slate-600">
//               123 Pet Street, Varanasi, Uttar Pradesh
//             </p>
//             <div className="mt-2 flex flex-wrap items-center gap-2">
//               <a
//                 href="#"
//                 className="text-[#20B3C9] text-sm font-medium hover:underline"
//               >
//                 Get directions
//               </a>
//               <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
//                 ✅ Verified Partner
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section className="py-5 border-b border-teal-100 px-4 md:px-6">
//         <h2 className="font-semibold text-lg mb-2">About</h2>
//         <p className="text-sm text-slate-700 max-w-3xl">
//           Welcome to Kross Paws! We provide safe, hygienic, and loving grooming
//           services for your pets. From stylish haircuts to relaxing spa sessions,
//           we ensure your furry friend leaves happy and refreshed.
//         </p>
//       </section>

//       {/* Services & Packages */}
//       <section className="py-5 border-b border-teal-100 px-4 md:px-6">
//         <h3 className="font-semibold text-lg mb-3">Services & Packages</h3>
//         <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           <li className="rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition">
//             <h4 className="font-semibold">Royal Paw Spa</h4>
//             <p className="text-xs text-slate-500 mt-1">
//               Full Bath • Haircut • Nail Trim • Ear Cleaning
//             </p>
//             <div className="mt-2 flex items-center gap-2">
//               <span className="text-sm font-semibold">₹1500</span>
//               <span className="text-xs text-slate-500">• 90 mins</span>
//             </div>
//             <button className="mt-3 w-full sm:w-auto rounded-lg bg-amber-400 px-4 py-2 text-slate-900 font-semibold hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200">
//               Book Now
//             </button>
//           </li>

//           <li className="rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition">
//             <h4 className="font-semibold">Basic Groom</h4>
//             <p className="text-xs text-slate-500 mt-1">Bath • Haircut</p>
//             <div className="mt-2 flex items-center gap-2">
//               <span className="text-sm font-semibold">₹800</span>
//               <span className="text-xs text-slate-500">• 45 mins</span>
//             </div>
//             <button className="mt-3 w-full sm:w-auto rounded-lg bg-amber-400 px-4 py-2 text-slate-900 font-semibold hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200">
//               Book Now
//             </button>
//           </li>
//         </ul>
//       </section>

//       {/* Gallery */}
//       <section className="py-6 border-b border-teal-100 px-4 md:px-6">
//         <h3 className="font-semibold text-lg mb-3">Gallery</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//           <img
//             src="/dog-spa.jpg"
//             alt="Pet grooming"
//             className="rounded-lg object-cover h-36 w-full"
//           />
//           <img
//             src="/dog-haircut.jpg"
//             alt="Pet grooming"
//             className="rounded-lg object-cover h-36 w-full"
//           />
//           <img
//             src="/dog-style.jpg"
//             alt="Pet grooming"
//             className="rounded-lg object-cover h-36 w-full"
//           />
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="py-6 border-b border-teal-100 px-4 md:px-6">
//         <h3 className="font-semibold text-lg mb-3">Customer Reviews</h3>
//         <div className="space-y-4">
//           <div className="border-b pb-3">
//             <p className="text-sm font-medium">⭐ 5.0</p>
//             <p className="text-sm text-slate-700 mt-1">
//               “Best grooming in town! My dog loved the Royal Paw Spa.”
//             </p>
//             <p className="text-xs text-slate-500 mt-1">— Ritika S.</p>
//           </div>
//           <div className="border-b pb-3">
//             <p className="text-sm font-medium">⭐ 4.8</p>
//             <p className="text-sm text-slate-700 mt-1">
//               “Very professional and caring staff.”
//             </p>
//             <p className="text-xs text-slate-500 mt-1">— Amit K.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-200 py-6 mt-10 px-4 md:px-6">
//         <div className="mx-auto max-w-6xl text-sm text-slate-500 text-center">
//           © {new Date().getFullYear()} Petlinc. Happy pets, trusted groomers.
//         </div>
//       </footer>
//     </div>
//   );
// }

// function GroomingCenterProfile() {
//   return (
//     <div className="min-h-screen w-full bg-white text-slate-800 ">
//       {/* Hero Section */}
//       <section className="border-b border-slate-200 bg-slate-50 py-8">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-start gap-6">
//           <img
//             src="https://krosspaaws.com/upload/logo/logo.png"
//             alt="Kross Paws"
//             className="h-24 w-40 rounded-xl object-cover shadow-md"
//           />
//           <div className="flex-1">
//             <h1 className="font-bold text-2xl sm:text-3xl">Kross Paws</h1>
//             <p className="mt-1 text-sm sm:text-base text-slate-600">
//               123 Pet Street, Varanasi, Uttar Pradesh
//             </p>
//             <div className="mt-3 flex flex-wrap items-center gap-2">
//               <a
//                 href="#"
//                 className="text-[#20B3C9] text-sm font-medium hover:underline"
//               >
//                 Get directions
//               </a>
//               <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
//                 ✅ Verified Partner
//               </span>
//               <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
//                 ⭐ 4.8 (120 reviews)
//               </span>
//             </div>
//           </div>
          
//         </div>
//       </section>

//       {/* About */}
//       <section className="border-b border-slate-200">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
//           <h2 className="font-semibold text-lg mb-2">About</h2>
//           <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
//             Welcome to Kross Paws! We provide safe, hygienic, and loving
//             grooming services for your pets. From stylish haircuts to relaxing
//             spa sessions, we ensure your furry friend leaves happy and
//             refreshed.
//           </p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="border-b border-slate-200">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
//           <h3 className="font-semibold text-lg mb-4">Services & Packages</h3>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {/* Card 1 */}
//             <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
//               <h4 className="font-semibold text-base">Royal Paw Spa</h4>
//               <p className="text-xs sm:text-sm text-slate-500 mt-1">
//                 Full Bath • Haircut • Nail Trim • Ear Cleaning
//               </p>
//               <div className="mt-3 flex items-center gap-2">
//                 <span className="text-sm font-semibold">₹1500</span>
//                 <span className="text-xs text-slate-500">• 90 mins</span>
//               </div>
//               <button className="mt-4 w-full rounded-lg bg-amber-400 py-2 font-medium text-slate-900 hover:bg-amber-300">
//                 Book Now
//               </button>
//             </div>

//             {/* Card 2 */}
//             <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
//               <h4 className="font-semibold text-base">Basic Groom</h4>
//               <p className="text-xs sm:text-sm text-slate-500 mt-1">
//                 Bath • Haircut
//               </p>
//               <div className="mt-3 flex items-center gap-2">
//                 <span className="text-sm font-semibold">₹800</span>
//                 <span className="text-xs text-slate-500">• 45 mins</span>
//               </div>
//               <button className="mt-4 w-full rounded-lg bg-amber-400 py-2 font-medium text-slate-900 hover:bg-amber-300">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="border-b border-slate-200">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
//           <h3 className="font-semibold text-lg mb-4">Gallery</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             <img
//               src="/dog-spa.jpg"
//               alt="Dog spa"
//               className="rounded-lg object-cover h-40 w-full"
//             />
//             <img
//               src="/dog-haircut.jpg"
//               alt="Dog haircut"
//               className="rounded-lg object-cover h-40 w-full"
//             />
//             <img
//               src="/dog-style.jpg"
//               alt="Dog styling"
//               className="rounded-lg object-cover h-40 w-full"
//             />
//             <img
//               src="/dog-puppy.jpg"
//               alt="Puppy care"
//               className="rounded-lg object-cover h-40 w-full"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Reviews */}
//       <section className="border-b border-slate-200">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
//           <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
//           <div className="space-y-5">
//             <div className="border rounded-lg p-4 shadow-sm">
//               <p className="text-sm font-medium">⭐ 5.0</p>
//               <p className="text-sm text-slate-700 mt-1">
//                 “Best grooming in town! My dog loved the Royal Paw Spa.”
//               </p>
//               <p className="text-xs text-slate-500 mt-1">— Ritika S.</p>
//             </div>
//             <div className="border rounded-lg p-4 shadow-sm">
//               <p className="text-sm font-medium">⭐ 4.8</p>
//               <p className="text-sm text-slate-700 mt-1">
//                 “Very professional and caring staff.”
//               </p>
//               <p className="text-xs text-slate-500 mt-1">— Amit K.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-50 border-t border-slate-200 mt-10">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500">
//           © {new Date().getFullYear()} Petlinc. Happy pets, trusted groomers.
//         </div>
//       </footer>
//     </div>
//   );
// }





// export default GroomingCenterProfile;


import { useQuery } from "@tanstack/react-query";
import { MapPin, Star, ShieldCheck } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import queryClient from "@/store/queryClient";
import LoadingScreen from "@/components/LoadingScreen";
import PetDetailsModal from "@/components/PetDetailsModal";
import { useState } from "react";

export default function GroomingCenterProfile() {
  const {id} = useParams();
   const [showPetDetailsModal, setShowPetDetailsModal] = useState(false);
    const handleClose = () => setShowPetDetailsModal(false);
  const {data:groomer, isPending} = useQuery({
    queryKey:['groomer', id],
    queryFn: async ()=>{
      
      const res = await axios({
        method:'get',
        url:`https://2wwpqd0t-4000.inc1.devtunnels.ms/api/v1/groomers/${id}`,
        headers:{
          'Content-Type':"application/json"
        }

      })
      
      return res.data
    }
  })
  
 if(isPending){
  return <LoadingScreen/>
 }
 console.log(`/public/${groomer?.data.logo}`)
 console.log(`${window.location.href}${groomer.data.logo}`)
  return (

    <>
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50/40 via-white to-white text-slate-800">
      {/* Hero Section */}
      <section className="border-b border-orange-100 bg-white/60 backdrop-blur-sm py-10 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-start gap-6">
          <img
            src={`/public/${groomer?.data.logo}`}
            alt={groomer.data.name}
            className="h-28 w-28 object-contain rounded-2xl  shadow-md border border-orange-100 bg-orange-50 p-2"
          />
          <div className="flex-1">
            <h1 className="font-extrabold text-3xl text-gray-900 tracking-tight">
              {groomer.data.name}
            </h1>
            <p className="mt-2 text-slate-600 flex items-center gap-1 text-sm sm:text-base">
              <MapPin size={16} className="text-orange-500" /> {groomer.data.address}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="text-orange-600 text-sm font-semibold hover:underline"
              >
                Get Directions →
              </a>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 flex items-center gap-1">
                <ShieldCheck size={14} /> Verified Partner
              </span>
              <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700 flex items-center gap-1">
                <Star size={14} className="text-yellow-500" /> 4.8 (120 reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-2xl mb-3 text-gray-900">About</h2>
          <p className="text-base text-slate-700 leading-relaxed bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 shadow-sm">
           {groomer.data.about}
          </p>
        </div>
      </section>

      {/* Services & Packages */}
      <section className="border-b border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-2xl mb-5 text-gray-900">
            Services & Packages
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Royal Paw Spa",
                desc: "Full Bath • Haircut • Nail Trim • Ear Cleaning",
                price: "₹1500",
                time: "90 mins",
              },
              {
                name: "Basic Groom",
                desc: "Bath • Haircut",
                price: "₹800",
                time: "45 mins",
              },
              {
                name: "Luxury Spa & Style",
                desc: "Hydro bath • Aromatherapy • Full Styling",
                price: "₹2500",
                time: "120 mins",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-orange-100 bg-white/80 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1"
              >
                <h4 className="font-semibold text-lg text-gray-900">
                  {s.name}
                </h4>
                <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg font-bold text-orange-600">
                    {s.price}
                  </span>
                  <span className="text-xs text-slate-500">• {s.time}</span>
                </div>
                <button onClick={()=>setShowPetDetailsModal(true)} className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-600 to-orange-500 py-2.5 font-semibold text-white hover:from-orange-700 hover:to-orange-600 shadow-md transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-slate-100 py-10 bg-gradient-to-br from-orange-50/60 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-2xl mb-5 text-gray-900">Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/dog-spa.jpg",
              "/dog-haircut.jpg",
              "/dog-style.jpg",
              "/dog-puppy.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx}`}
                className="rounded-2xl object-cover h-44 w-full shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-2xl mb-5 text-gray-900">
            Customer Reviews
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                rating: "⭐ 5.0",
                text: "Best grooming in town! My dog loved the Royal Paw Spa.",
                name: "Ritika S.",
              },
              {
                rating: "⭐ 4.8",
                text: "Very professional and caring staff.",
                name: "Amit K.",
              },
            ].map((r, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm hover:shadow-md transition p-5"
              >
                <p className="text-sm font-semibold text-yellow-700">
                  {r.rating}
                </p>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  “{r.text}”
                </p>
                <p className="text-xs text-slate-500 mt-2 italic">
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 border-t border-slate-100 mt-10 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} <span className="text-orange-600 font-semibold">Petlinc</span>. Happy pets, trusted groomers. 🐾
        </div>
      </footer>
    </div>
    <PetDetailsModal show = {showPetDetailsModal} onClose={handleClose}/>
    </>
  );
}


