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

function GroomingCenterProfile() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800 ">
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-start gap-6">
          <img
            src="https://krosspaaws.com/upload/logo/logo.png"
            alt="Kross Paws"
            className="h-24 w-40 rounded-xl object-cover shadow-md"
          />
          <div className="flex-1">
            <h1 className="font-bold text-2xl sm:text-3xl">Kross Paws</h1>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              123 Pet Street, Varanasi, Uttar Pradesh
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href="#"
                className="text-[#20B3C9] text-sm font-medium hover:underline"
              >
                Get directions
              </a>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                ✅ Verified Partner
              </span>
              <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                ⭐ 4.8 (120 reviews)
              </span>
            </div>
          </div>
          
        </div>
      </section>

      {/* About */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="font-semibold text-lg mb-2">About</h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Welcome to Kross Paws! We provide safe, hygienic, and loving
            grooming services for your pets. From stylish haircuts to relaxing
            spa sessions, we ensure your furry friend leaves happy and
            refreshed.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <h3 className="font-semibold text-lg mb-4">Services & Packages</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-base">Royal Paw Spa</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Full Bath • Haircut • Nail Trim • Ear Cleaning
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-semibold">₹1500</span>
                <span className="text-xs text-slate-500">• 90 mins</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-amber-400 py-2 font-medium text-slate-900 hover:bg-amber-300">
                Book Now
              </button>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-base">Basic Groom</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Bath • Haircut
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-semibold">₹800</span>
                <span className="text-xs text-slate-500">• 45 mins</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-amber-400 py-2 font-medium text-slate-900 hover:bg-amber-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <h3 className="font-semibold text-lg mb-4">Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
              src="/dog-spa.jpg"
              alt="Dog spa"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="/dog-haircut.jpg"
              alt="Dog haircut"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="/dog-style.jpg"
              alt="Dog styling"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="/dog-puppy.jpg"
              alt="Puppy care"
              className="rounded-lg object-cover h-40 w-full"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
          <div className="space-y-5">
            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm font-medium">⭐ 5.0</p>
              <p className="text-sm text-slate-700 mt-1">
                “Best grooming in town! My dog loved the Royal Paw Spa.”
              </p>
              <p className="text-xs text-slate-500 mt-1">— Ritika S.</p>
            </div>
            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm font-medium">⭐ 4.8</p>
              <p className="text-sm text-slate-700 mt-1">
                “Very professional and caring staff.”
              </p>
              <p className="text-xs text-slate-500 mt-1">— Amit K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Petlinc. Happy pets, trusted groomers.
        </div>
      </footer>
    </div>
  );
}





export default GroomingCenterProfile;
