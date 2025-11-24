// import React from "react";
// import { Link } from "react-router-dom";
// import { Star, MapPin, Search, ShieldCheck, Award } from "lucide-react";
// import Navbar from "../components/Navbar";

// function VetHome() {
//   return (
//     // <div className="bg-white min-h-screen font-sans">
      
//     //   {/* NAVBAR */}
//     //   <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
//     //     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
//     //       {/* Logo */}
//     //       <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-orange-600">
//     //         🐾 <span>Srijeevni Vets</span>
//     //       </Link>

//     //       {/* Center Search */}
//     //       <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
//     //         <Search className="text-gray-500 mr-2" size={18} />
//     //         <input
//     //           type="text"
//     //           placeholder="Search for a test or lab..."
//     //           className="bg-transparent flex-1 outline-none text-sm"
//     //         />
//     //         <select className="ml-3 px-2 py-1 text-sm rounded-md border border-gray-300">
//     //           <option>Dog</option>
//     //           <option>Cat</option>
//     //         </select>
//     //       </div>

//     //       {/* Right Menu */}
//     //       <div className="hidden md:flex items-center gap-6 font-medium text-gray-700">
//     //         <Link to="/LabList" className="hover:text-orange-600">Labs</Link>
//     //         <Link to="/becomeourlabpartner" className="hover:text-orange-600">For Labs</Link>
//     //         <Link to="/about" className="hover:text-orange-600">About</Link>
//     //         <Link to="/careers" className="hover:text-orange-600">Careers</Link>
//     //         <Link
//     //           to="/signin"
//     //           className="px-4 py-2 rounded-md border border-orange-600 text-orange-600 hover:bg-orange-50 transition"
//     //         >
//     //           Sign In
//     //         </Link>
//     //         <Link
//     //           to="/signup"
//     //           className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition"
//     //         >
//     //           Sign Up
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   </nav>
//      <>
//       <Navbar/>

//       HERO SECTION
//       <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left */}
//         <div>
//           <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
//             Compare & Book <span className="text-orange-600">Vet Diagnostics</span> 🐶🐱
//           </h1>
//           <p className="mt-6 text-lg text-gray-600 max-w-lg">
//             Find the right lab for your pets. Transparent pricing, verified labs, and instant bookings for Dogs & Cats.
//           </p>

//           {/* Quick Chips */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             {["CBC", "Rabies Antibody", "Kidney Test", "Liver Test"].map((t, idx) => (
//               <Link
//                 key={idx}
//                 to="/LabList"
//                 className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200"
//               >
//                 {t}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="hidden md:block">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
//             alt="Vet and Pets"
//             className="w-3/4 mx-auto"
//           />
//         </div>
//       </section>

//       {/* POPULAR TESTS */}
//       <section className="max-w-7xl mx-auto px-6 mt-16">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tests</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
//           {[
//             { name: "CBC", desc: "Complete blood count", emoji: "🧪" },
//             { name: "Rabies Antibody", desc: "Vaccination check", emoji: "🦠" },
//             { name: "Canine Distemper", desc: "Dog virus detection", emoji: "🐕" },
//             { name: "Feline Leukemia", desc: "Cat virus detection", emoji: "🐱" },
//             { name: "Kidney Function", desc: "Kidney health check", emoji: "🩺" },
//             { name: "Liver Function", desc: "Liver enzyme monitoring", emoji: "🩸" },
//           ].map((test, idx) => (
//             <div key={idx} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer">
//               <p className="text-3xl">{test.emoji}</p>
//               <p className="mt-2 font-semibold text-gray-800">{test.name}</p>
//               <p className="text-sm text-gray-500">{test.desc}</p>
//               <Link
//                 to="/LabList"
//                 className="mt-3 inline-block text-orange-600 text-sm font-medium hover:underline"
//               >
//                 Book Now →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURED LABS */}
//       <section className="max-w-7xl mx-auto px-6 mt-20">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Labs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { name: "PetCare Diagnostics", location: "Delhi", rating: 4.8, price: "₹1200 onwards", badge: "Verified" },
//             { name: "Happy Paws Lab", location: "Mumbai", rating: 4.6, price: "₹900 onwards", badge: "Popular" },
//             { name: "VetTrust Lab", location: "Bangalore", rating: 4.9, price: "₹1500 onwards", badge: "Best Rated" },
//           ].map((lab, idx) => (
//             <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
//               {/* Badge */}
//               <span className="absolute top-3 right-3 bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
//                 {lab.badge}
//               </span>
//               <h3 className="text-lg font-bold text-gray-900">{lab.name}</h3>
//               <p className="flex items-center gap-2 text-sm text-gray-600 mt-2">
//                 <MapPin size={16} className="text-orange-600" /> {lab.location}
//               </p>
//               <div className="flex items-center gap-1 mt-3 text-yellow-500">
//                 <Star size={16} /> <span className="font-medium">{lab.rating}</span>
//               </div>
//               <p className="mt-3 text-sm text-gray-700">Starting at <span className="font-semibold">{lab.price}</span></p>
//               <div className="flex gap-3 mt-4">
//                 <Link
//                   to="/LabProfile"
//                   className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
//                 >
//                   View Details
//                 </Link>
//                 <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50">
//                   Compare
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="bg-gray-50 mt-20 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-2xl font-bold text-gray-900 text-center">
//             Why Choose Srijeevni Vets?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             {[
//               { title: "Compare Labs", desc: "Choose the best lab for your pet with transparent pricing", icon: <Award className="w-8 h-8 text-orange-600 mx-auto" /> },
//               { title: "Trusted Diagnostics", desc: "All labs are verified for reliability", icon: <ShieldCheck className="w-8 h-8 text-orange-600 mx-auto" /> },
//               { title: "Pet-Friendly Care", desc: "Safe handling during sample collection", icon: <span className="text-3xl">🐾</span> },
//               { title: "Digital Reports", desc: "Instant online access anytime", icon: <span className="text-3xl">💻</span> },
//             ].map((item, idx) => (
//               <div key={idx} className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
//                 {item.icon}
//                 <h3 className="mt-4 font-bold text-lg text-gray-800">{item.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="text-center mt-20 py-20 bg-orange-600 text-white">
//         <h2 className="text-3xl font-bold">Are you a Veterinary Lab?</h2>
//         <p className="mt-3 max-w-xl mx-auto text-orange-100">
//           Partner with us to reach thousands of pet parents looking for trusted diagnostics.
//         </p>
//         <Link
//           to="/becomeourlabpartner"
//           className="mt-6 inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//         >
//           Become a Lab Partner
//         </Link>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-white font-bold mb-4">Srijeevni Vets</h3>
//             <p className="text-sm">Aggregator for veterinary diagnostics — Dogs & Cats only.</p>
//           </div>
//           <div>
//             <h3 className="text-white font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//               <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
//               <li><Link to="/customerpolicy" className="hover:text-white">Customer Policy</Link></li>
//               <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
//               <li><Link to="/support" className="hover:text-white">Support</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-white font-bold mb-4">Contact</h3>
//             <p className="text-sm">support@srijeevni.com</p>
//             <p className="text-sm">+91-9876543210</p>
//             <div className="flex gap-4 mt-3">
//               <span className="hover:text-white cursor-pointer">🐦</span>
//               <span className="hover:text-white cursor-pointer">📘</span>
//               <span className="hover:text-white cursor-pointer">📸</span>
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-sm text-gray-500 mt-8">
//           © 2025 Srijeevni Vets. All rights reserved.
//         </div>
//       </footer>
    
//     </>
//   );
// }

// export default VetHome;





// function VetHome() {
//   return (
//     <>
//       <Navbar />

      
//       <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left */}
//         <div>
//           <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
//             All-in-One Care for Your Pets 🐶🐱
//           </h1>
//           {/* Slogan */}
//           <p className="mt-3 text-2xl font-semibold text-orange-600">
//             Because they’re family too.
//           </p>
//           <p className="mt-6 text-lg text-gray-600 max-w-lg">
//             Compare & book trusted veterinary{" "}
//             <span className="text-orange-600 font-semibold">Lab Tests</span> and
//             <span className="text-orange-600 font-semibold">
//               {" "}
//               Grooming Services
//             </span>{" "}
//             — Transparent pricing, verified partners, and instant booking.
//           </p>

//           {/* Quick CTA Buttons */}
//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/LabList"
//               className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
//             >
//               Book Lab Test
//             </Link>
//             <Link
//               to="/grooming"
//               className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
//             >
//               Book Grooming
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="hidden md:block">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
//             alt="Vet and Pets"
//             className="w-3/4 mx-auto"
//           />
//         </div>
//       </section>

//       {/* POPULAR TESTS */}
//       <section className="max-w-7xl mx-auto px-6 mt-16">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">
//           Popular Lab Tests
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
//           {[
//             { name: "CBC", desc: "Complete blood count", emoji: "🧪" },
//             { name: "Rabies Antibody", desc: "Vaccination check", emoji: "🦠" },
//             {
//               name: "Canine Distemper",
//               desc: "Dog virus detection",
//               emoji: "🐕",
//             },
//             {
//               name: "Feline Leukemia",
//               desc: "Cat virus detection",
//               emoji: "🐱",
//             },
//             {
//               name: "Kidney Function",
//               desc: "Kidney health check",
//               emoji: "🩺",
//             },
//             {
//               name: "Liver Function",
//               desc: "Liver enzyme monitoring",
//               emoji: "🩸",
//             },
//           ].map((test, idx) => (
//             <div
//               key={idx}
//               className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition cursor-pointer"
//             >
//               <p className="text-3xl">{test.emoji}</p>
//               <p className="mt-2 font-semibold text-gray-800">{test.name}</p>
//               <p className="text-sm text-gray-500">{test.desc}</p>
//               <Link
//                 to="/LabList"
//                 className="mt-3 inline-block text-orange-600 text-sm font-medium hover:underline"
//               >
//                 Book Now →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* POPULAR GROOMING */}
//       <section className="max-w-7xl mx-auto px-6 mt-20">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">
//           Popular Grooming Services
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               name: "Full Grooming Package",
//               desc: "Bath, haircut, nail trim",
//               price: "₹1200",
//               emoji: "✂️",
//             },
//             {
//               name: "Bath & Blow Dry",
//               desc: "Gentle shampoo & dry",
//               price: "₹600",
//               emoji: "🛁",
//             },
//             {
//               name: "Nail Trim",
//               desc: "Quick & safe nail clipping",
//               price: "₹300",
//               emoji: "🐾",
//             },
//           ].map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
//             >
//               <p className="text-3xl">{service.emoji}</p>
//               <h3 className="mt-3 font-bold text-gray-900">{service.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
//               <p className="mt-2 text-sm font-medium text-gray-800">
//                 Starting at {service.price}
//               </p>
//               <Link
//                 to="/grooming"
//                 className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
//               >
//                 Book Now
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="bg-gray-50 mt-20 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-2xl font-bold text-gray-900 text-center">
//             Why Choose Srijeevni Vets?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             {[
//               {
//                 title: "Compare Labs",
//                 desc: "Choose the best lab for your pet with transparent pricing",
//                 icon: <Award className="w-8 h-8 text-orange-600 mx-auto" />,
//               },
//               {
//                 title: "Trusted Groomers",
//                 desc: "Verified professionals for safe grooming",
//                 icon: <span className="text-3xl">✂️</span>,
//               },
//               {
//                 title: "Pet-Friendly Care",
//                 desc: "Safe handling during sample collection & grooming",
//                 icon: <span className="text-3xl">🐾</span>,
//               },
//               {
//                 title: "Digital Reports",
//                 desc: "Instant access to test reports online",
//                 icon: <span className="text-3xl">💻</span>,
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
//               >
//                 {item.icon}
//                 <h3 className="mt-4 font-bold text-lg text-gray-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="text-center mt-20 py-20 bg-orange-600 text-white">
//         <h2 className="text-3xl font-bold">
//           Are you a Veterinary Lab or Groomer?
//         </h2>
//         <p className="mt-3 max-w-xl mx-auto text-orange-100">
//           Partner with us to reach thousands of pet parents looking for trusted
//           diagnostics and grooming.
//         </p>
//         <Link
//           to="/becomeourlabpartner"
//           className="mt-6 inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//         >
//           Become a Partner
//         </Link>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-white font-bold mb-4">Srijeevni Vets</h3>
//             <p className="text-sm">
//               Diagnostics & Grooming for Dogs & Cats — all in one platform.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-white font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link to="/about" className="hover:text-white">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/careers" className="hover:text-white">
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/customerpolicy" className="hover:text-white">
//                   Customer Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faq" className="hover:text-white">
//                   FAQs
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/support" className="hover:text-white">
//                   Support
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-white font-bold mb-4">Contact</h3>
//             <p className="text-sm">support@srijeevni.com</p>
//             <p className="text-sm">+91-9876543210</p>
//             <div className="flex gap-4 mt-3">
//               <span className="hover:text-white cursor-pointer">🐦</span>
//               <span className="hover:text-white cursor-pointer">📘</span>
//               <span className="hover:text-white cursor-pointer">📸</span>
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-sm text-gray-500 mt-8">
//           © 2025 Srijeevni Vets. All rights reserved.
//         </div>
//       </footer>
//     </>
//   );
// }

// export default VetHome;


// import { Link } from "react-router-dom";
// import { MapPin, Search } from "lucide-react";
// import { useState } from "react";

// // ---------------- NAVBAR ----------------
// function Navbar() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [pincode, setPincode] = useState("");

//   return (
//     <>
//       <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
//           {/* Logo + Tagline */}
//           <Link to="/" className="flex flex-col leading-tight">
//             <span className="flex items-center gap-2 text-2xl font-extrabold text-orange-600 font-brand">
//               🐾 PetCare
//             </span>
//             <span className="text-xs text-gray-500 italic">
//               Because They’re Family Too.
//             </span>
//           </Link>

//           {/* Center Search */}
//           <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2 border border-gray-200 focus-within:ring-2 focus-within:ring-orange-500">
//             <Search className="text-gray-500 mr-2" size={18} />
//             <input
//               type="text"
//               placeholder="Search grooming services..."
//               className="bg-transparent flex-1 outline-none text-sm text-gray-700"
//             />
//             <select className="ml-3 px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-orange-500">
//               <option>Dog</option>
//               <option>Cat</option>
//             </select>
//           </div>

//           {/* Right Section */}
//           <div className="hidden md:flex items-center gap-6">
//             {/* Location Button */}
//             <button
//               onClick={() => setModalOpen(true)}
//               className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600"
//             >
//               <MapPin size={16} className="text-orange-600" />
//               {pincode ? pincode : "Enter Pincode"}
//             </button>

//             {/* Auth Capsule */}
//             <div className="flex rounded-full border border-orange-500 overflow-hidden text-sm font-medium">
//               <Link
//                 to="/signin"
//                 className="px-4 py-2 text-orange-600 hover:bg-orange-50 transition"
//               >
//                 Sign In
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 transition"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Modal for Pincode */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">
//               Enter Your Pincode
//             </h2>
//             <input
//               type="text"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               placeholder="e.g. 221002"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
//             />
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// // ---------------- HOME PAGE ----------------
// export default function GroomingHome() {
//   return (
//     <div className="bg-white min-h-screen font-sans">
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
//             Professional Grooming for Happy, Healthy Pets 🐶🐱
//           </h1>
//           <p className="mt-3 text-2xl font-semibold text-orange-600">
//             Because They’re Family Too.
//           </p>
//           <p className="mt-6 text-lg text-gray-600 max-w-lg">
//             From baths and blow-drys to haircuts, nail trims, and spa treatments — 
//             book trusted groomers for your pets at home or at partner salons.
//           </p>
//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/grooming"
//               className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
//             >
//               Book Grooming
//             </Link>
//             <Link
//               to="/grooming"
//               className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
//             >
//               View Packages
//             </Link>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/616/6164089.png"
//             alt="Pet Grooming"
//             className="w-3/4 mx-auto"
//           />
//         </div>
//       </section>

//       {/* POPULAR GROOMING SERVICES */}
//       <section className="max-w-7xl mx-auto px-6 mt-16">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Grooming Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { name: "Full Grooming Package", desc: "Bath, haircut, nail trim", price: "₹1200", emoji: "✂️" },
//             { name: "Bath & Blow Dry", desc: "Gentle shampoo & dry", price: "₹600", emoji: "🛁" },
//             { name: "Nail Trim", desc: "Quick & safe nail clipping", price: "₹300", emoji: "🐾" },
//             { name: "Ear Cleaning", desc: "Keep ears fresh & healthy", price: "₹250", emoji: "🧼" },
//             { name: "De-Shedding", desc: "Reduce hair fall & matting", price: "₹800", emoji: "🦴" },
//             { name: "Paw Massage", desc: "Relaxing spa for your pet", price: "₹500", emoji: "💆‍♂️" },
//           ].map((service, idx) => (
//             <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
//               <p className="text-3xl">{service.emoji}</p>
//               <h3 className="mt-3 font-bold text-gray-900">{service.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">{service.desc}</p>
//               <p className="mt-2 text-sm font-medium text-gray-800">Starting at {service.price}</p>
//               <Link
//                 to="/grooming"
//                 className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
//               >
//                 Book Now
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="bg-gray-50 mt-20 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-2xl font-bold text-gray-900 text-center">Why Choose PetCare?</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             {[
//               { title: "Trusted Groomers", desc: "Verified professionals for safe grooming", icon: "✂️" },
//               { title: "Pet-Friendly Care", desc: "Gentle handling & stress-free experience", icon: "🐾" },
//               { title: "Hygienic Products", desc: "Safe shampoos & tools for every pet", icon: "🧼" },
//               { title: "Easy Booking", desc: "Quick online scheduling at your convenience", icon: "📅" },
//             ].map((item, idx) => (
//               <div key={idx} className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
//                 <p className="text-3xl">{item.icon}</p>
//                 <h3 className="mt-4 font-bold text-lg text-gray-800">{item.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PARTNER CTA */}
//       <section className="text-center mt-20 py-20 bg-orange-600 text-white">
//         <h2 className="text-3xl font-bold">Are you a Pet Groomer?</h2>
//         <p className="mt-3 max-w-xl mx-auto text-orange-100">
//           Partner with PetCare and reach thousands of pet parents looking for trusted grooming services.
//         </p>
//         <Link
//           to="/becomepartner"
//           className="mt-6 inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//         >
//           Become a Partner
//         </Link>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-white font-bold mb-4">PetCare</h3>
//             <p className="text-sm">Trusted grooming services for dogs & cats.</p>
//           </div>
//           <div>
//             <h3 className="text-white font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//               <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
//               <li><Link to="/customerpolicy" className="hover:text-white">Customer Policy</Link></li>
//               <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
//               <li><Link to="/support" className="hover:text-white">Support</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-white font-bold mb-4">Contact</h3>
//             <p className="text-sm">support@petcare.com</p>
//             <p className="text-sm">+91-9876543210</p>
//             <div className="flex gap-4 mt-3">
//               <span className="hover:text-white cursor-pointer">🐦</span>
//               <span className="hover:text-white cursor-pointer">📘</span>
//               <span className="hover:text-white cursor-pointer">📸</span>
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-sm text-gray-500 mt-8">
//           © 2025 PetCare. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { MapPin, Search } from "lucide-react";
import { useContext, useState } from "react";

import Testimonials from "@/components/Testimonial";
import GrommingPartners from "./../components/GroomingPartners"
import HomePageHeroSection from "@/components/HomePageHeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";
import { GlobalContext } from "@/store/context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Footer from "@/components/Footer";
import NavbarSkeleton from "@/ui/NavbarSkeleton";
import GroomingPackages from "./GroomingPackages";
import GroomingCategory from "@/components/GroomingCategory";
import GroomerCTA from "@/components/GroomerCTA";
import PartnerGroomingCategory from "@/components/PartnerGroomingCategory";

// // ---------------- NAVBAR ----------------


// ---------------- HOME PAGE ----------------
export default function HomePage() {

  // const {isPending, data:userData, isError, isFetching, isRefetching, isStale} = useQuery({
  //   queryKey:['userData'],
  //   queryFn:async function(){
  //      const res = await axios({
  //       method:'get',
  //       url:'http://localhost:4000/api/v1/users/get-me',
  //       headers:{
  //         "Content-Type":'application/json'
  //       },
  //       withCredentials:true,
  //       stale:Infinity
  //      })
      
  //      return res.data;
  //   }
  // })
   
  
  return (
    <>
    <div className="bg-white min-h-screen font-sans">
      
      
      <Navbar/>
      {/* HERO SECTION */}
      <HomePageHeroSection/>

      {/* GROOMING PARTNERS */}
             <GrommingPartners/>
      
     
     {/* GROOMING PACKAGES */}
      <GroomingCategory />
      {/* Partner grooming category */}
      <PartnerGroomingCategory/>
      {/* WHY CHOOSE US */}
        <WhyChooseUs/>
      
      

      
      {/* Testimonials */}
      <Testimonials/>
      {/* PARTNER CTA */}
      {/* <section className="text-center mt-20 py-20 bg-orange-500 text-white">
        <h2 className="text-3xl font-bold">Are you a Pet Groomer?</h2>
        <p className="mt-3 max-w-xl mx-auto text-orange-100">
          Partner with Petlinc and reach thousands of pet parents looking for trusted grooming services.
        </p>
        <Link
          to="/becomepartner"
          className="mt-6 inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Become a Partner
        </Link>
      </section> */}
      <GroomerCTA/>

      {/* FOOTER */}
      <Footer/>
    </div>
     </>
  );
}
