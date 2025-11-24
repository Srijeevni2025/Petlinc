
// import { Link } from "react-router-dom"
// export default function GroomingCategory(){
//     return (
//         <section id = "grooming-packages" className="max-w-7xl mx-auto px-6 mt-16">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Grooming Packages</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               name: "Basic Hygiene - Bath and Groom",
//               desc: ['Bathing', 'conditioning', 'blow dry', 'combing/brushing', 'nail clipping', 'ear cleaning', 'eyes cleaning', 'paw massage'],
//               price: "₹699",
//               emoji: "🛁",
//             },
//             {
//               name: "Standard - Bath, Hair and Body",
//               desc: ['Bathing', 'Conditioning', 'Blow Dry', 'Combing/Brushing', 'Nail Clipping', 'Ear Cleaning', 'Eyes Cleaning', 'Paw massage', 'Teeth Cleaning', 'Full body trimming', 'Sanitary Cleaning', 'Body massage'],
//               price: "₹1499",
//               emoji: "✂️",
//             },
//             {
//               name: "Premium - Full service and treatment",
//               desc: ['Bathing', 'Conditioning', 'Blow dry', 'Combing/Brushing', 'Nail clipping', 'Ear cleaning', 'Eyes cleaning', 'Paw massage', 'Teeth cleaning', 'Full body trimming', 'Hair styling', 'De-matting', 'Tick removal', 'Anti-tick treatment', 'Sanitary cleaning', 'Body massage'],
//               price: "₹2499",
//               emoji: "💆‍♂️",
//             },
//           ].map((pkg, idx) => (
//             <div
//               key={idx}
//               className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
//             > <div>
//               <p className="text-3xl">{pkg.emoji}</p>
//               <h3 className="mt-3 font-bold text-gray-900">{pkg.name}</h3>
//               {pkg.desc.map(val=><p key = {val} className="text-sm text-gray-600 mt-1">• {val}</p>)}
              
//               </div>
//               <div>
//               <p className="mt-2 text-sm font-medium text-gray-800">
//                 Starting at {pkg.price}
//               </p>
//               <Link
//                 to="/GroomingCenterBooking"
//                 className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm "
//               >
//                 Book Now
//               </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     )
// }

import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

export default function GroomingCategory() {
  const packages = [
    {
      name: "Basic Hygiene - Bath and Groom",
      desc: [
        "Bathing",
        "Conditioning",
        "Blow Dry",
        "Combing/Brushing",
        "Nail Clipping",
        "Ear Cleaning",
        "Eyes Cleaning",
        "Paw Massage",
      ],
      price: "₹699",
      emoji: "🛁",
    },
    {
      name: "Standard - Bath, Hair and Body",
      desc: [
        "Bathing",
        "Conditioning",
        "Blow Dry",
        "Combing/Brushing",
        "Nail Clipping",
        "Ear Cleaning",
        "Eyes Cleaning",
        "Paw Massage",
        "Teeth Cleaning",
        "Full Body Trimming",
        "Sanitary Cleaning",
        "Body Massage",
      ],
      price: "₹1499",
      emoji: "✂️",
    },
    {
      name: "Premium - Full Service and Treatment",
      desc: [
        "Bathing",
        "Conditioning",
        "Blow Dry",
        "Combing/Brushing",
        "Nail Clipping",
        "Ear Cleaning",
        "Eyes Cleaning",
        "Paw Massage",
        "Teeth Cleaning",
        "Full Body Trimming",
        "Hair Styling",
        "De-Matting",
        "Tick Removal",
        "Anti-Tick Treatment",
        "Sanitary Cleaning",
        "Body Massage",
      ],
      price: "₹2499",
      emoji: "💆‍♂️",
    },
  ];

  return (
    <section
      id="grooming-packages"
      className="relative bg-gradient-to-b from-orange-50 via-white to-orange-50 py-20 overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/30 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full shadow-sm mb-4">
            <PawPrint className="text-orange-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Petlinc Exclusive Packages 🧴
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose from our curated grooming plans designed to pamper your pet —
            because every tail deserves to shine ✨
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="relative group bg-white/90 border border-orange-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 backdrop-blur-md flex flex-col"
            >
              {/* Floating Emoji Badge */}
              <div className="absolute -top-6 left-6 bg-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg group-hover:rotate-6 transition-transform">
                {pkg.emoji}
              </div>

              {/* Content */}
              <div className="mt-8 text-left flex-grow">
                <h3 className="font-extrabold text-lg text-gray-800 mb-3">
                  {pkg.name}
                </h3>
                <ul className="space-y-1">
                  {pkg.desc.map((val) => (
                    <li
                      key={val}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <span className="text-orange-500 mr-2">•</span> {val}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA - Stays aligned */}
              <div className="mt-auto pt-6 border-t border-orange-100 flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  <span className="text-sm font-medium text-gray-500">
                    Starting at
                  </span>{" "}
                  {pkg.price}
                </p>
                <Link
                  to="/GroomingCenterBooking"
                  className="bg-orange-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-orange-700 hover:shadow-md transition-transform hover:scale-[1.03]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="mt-16 mx-auto w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
      </div>
    </section>
  );
}
