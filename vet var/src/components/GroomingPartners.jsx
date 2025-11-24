// export default function GroomingPartners() {
//   const partners = [
//     { name: "Kross Paws", logo: "kross paws.png" },
//     { name: "Pink Paws", logo: "https://www.pinkpaws.co.in/rest/uploads/site/b51a1e8c-88bb-46c5-bdc1-f4a2bd86a9bf-.png" },
//     { name: "vetic", logo: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/Footer/LogoandLocation.webp" },
//     { name: "The Paw story", logo: "https://thepawstory.in/wp-content/uploads/2025/01/THE-PAW-STORY-LOGO.pdf.png" },
//     { name: "Magic Paws", logo: "Magic Paws.png" },
//   ];

//   return (
//     <section className="bg-white pt-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-2xl font-bold text-gray-900">
//           Trusted Grooming Partners ✂️
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Petlinc collaborates with the best grooming centers to care for your pets
//         </p>

//         {/* Marquee Animation */}
//         <div className="overflow-hidden relative mt-12">
//           <div className="flex gap-12 animate-scroll">
//             {partners.concat(partners).map((p, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center min-w-[150px] hover:scale-105 transition"
//               >
//                 <img
//                   src={p.logo}
//                   alt={p.name}
//                   className={`  object-contain mb-2 h-24 w-24`}
//                 />
//                 {/* <p className="text-sm font-medium text-gray-700">{p.name}</p> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// export default function GroomingPartners() {
//   const partners = [
//     { name: "Kross Paws", logo: "/kross paws.png" },
//     {
//       name: "Pink Paws",
//       logo: "https://www.pinkpaws.co.in/rest/uploads/site/b51a1e8c-88bb-46c5-bdc1-f4a2bd86a9bf-.png",
//     },
//     {
//       name: "Vetic",
//       logo: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/Footer/LogoandLocation.webp",
//     },
//     {
//       name: "The Paw Story",
//       logo: "https://thepawstory.in/wp-content/uploads/2025/01/THE-PAW-STORY-LOGO.pdf.png",
//     },
//     { name: "Magic Paws", logo: "/Magic Paws.png" },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-orange-50 via-white to-orange-50 py-20 relative overflow-hidden">
//       {/* Soft glowing paw background */}
//       <div className="absolute -top-16 left-10 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//           Trusted Grooming Partners ✂️
//         </h2>
//         <p className="mt-3 text-gray-600 text-base md:text-lg">
//           Petlinc collaborates with the most trusted and verified pet grooming brands
//           across India to ensure your furry friends always look their best 🐶✨
//         </p>

//         {/* Marquee Animation */}
//         <div className="mt-12 overflow-hidden">
//           <div className="flex gap-16 animate-scroll">
//             {partners.concat(partners).map((p, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center justify-center min-w-[140px] group"
//               >
//                 <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-5 w-36 h-36 flex items-center justify-center transition-transform transform group-hover:scale-110 border border-orange-100">
//                   <img
//                     src={p.logo}
//                     alt={p.name}
//                     className="h-20 w-20 object-contain"
//                   />
//                 </div>
//                 <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition">
//                   {p.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Decorative line */}
//         <div className="mt-10 mx-auto w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
//       </div>
//     </section>
//   );
// }

export default function GroomingPartners() {
  const partners = [
    { name: "Kross Paws", logo: "/kross paws.png" },
    
    {
      name: "Vetic",
      logo:
        "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/Footer/LogoandLocation.webp",
    },
    
    { name: "Magic Paws", logo: "/Magic Paws.png" },
     { name: "Kross Paws", logo: "/kross paws.png" },
     {
      name: "The Paw Story",
      logo:
        "https://thepawstory.in/wp-content/uploads/2025/01/THE-PAW-STORY-LOGO.pdf.png",
    },
   
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-50 pt-20 relative overflow-hidden">
      {/* Soft glowing background orbs */}
      <div className="absolute -top-20 -left-10 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Trusted Grooming Partners ✂️
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Petlinc collaborates with the most trusted and verified pet grooming
          brands across India to ensure your furry friends always look their best 🐶✨
        </p>

        {/* Marquee Container */}
        <div className="relative mt-14">
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-50 to-transparent z-20 pointer-events-none"></div>

          {/* Scrolling track */}
          <div className="overflow-hidden">
            <div className="flex gap-16 animate-scroll">
              {partners.concat(partners).map((p, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center min-w-[140px] group"
                >
                  <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-5 w-36 h-36 flex items-center justify-center transition-transform transform group-hover:scale-110 border border-orange-100">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right fade mask */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-orange-50 to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
      </div>
    </section>
  );
}
