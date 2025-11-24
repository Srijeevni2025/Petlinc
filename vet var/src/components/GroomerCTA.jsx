// import { Link } from "react-router-dom";
// import { PawPrint, Scissors } from "lucide-react";

// export default function GroomerCTA() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white text-center py-24 mt-20">
//       {/* Background glow effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-1/3 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full"></div>
//       </div>

//       {/* Floating decorative icons */}
//       <PawPrint className="absolute top-10 left-10 text-white/20 w-10 h-10 animate-float-slow" />
//       <Scissors className="absolute bottom-10 right-12 text-white/30 w-10 h-10 animate-float-slow delay-500" />

//       <div className="relative z-10 max-w-3xl mx-auto px-6">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//           Are You a Pet Groomer? ✂️
//         </h2>

//         {/* Subtext */}
//         <p className="mt-4 text-orange-100 text-lg leading-relaxed">
//           Partner with <span className="font-semibold text-white">Petlinc</span> and reach
//           thousands of pet parents who trust us for safe, professional, and
//           high-quality grooming services.
//         </p>

//         {/* CTA Button */}
//         <Link
//           to="/becomepartner"
//           className="mt-8 inline-block bg-white text-orange-600 px-10 py-3 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:bg-orange-50 hover:scale-[1.03] transition-transform"
//         >
//           Become a Partner
//         </Link>

//         {/* Subtle underline element */}
//         <div className="mx-auto mt-10 w-24 h-1 bg-gradient-to-r from-orange-200 to-white rounded-full"></div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

export default function GroomerCTA() {
  return (
    <section className="relative mt-20 py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-3xl rounded-full opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Are You a Pet Groomer?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-orange-100 text-lg leading-relaxed max-w-2xl mx-auto">
          Join <span className="font-semibold text-white">Petlinc</span> and connect with thousands
          of pet parents looking for professional and trusted grooming services.
        </p>

        {/* CTA Button */}
        <Link
          to="/becomepartner"
          className="mt-8 inline-block bg-white text-orange-600 px-10 py-3 rounded-full font-semibold text-base shadow-md hover:bg-orange-50 hover:scale-[1.02] transition-transform"
        >
          Become a Partner
        </Link>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,83.15c-65.07-20.25-149.3-36.46-244.08-28.5C575.44,67.91,446.25,115.72,307.22,106.13,172.56,96.96,93.85,56.15,0,34.25V120H1200V95.8C1134.72,98.87,1066.56,95.68,985.66,83.15Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
