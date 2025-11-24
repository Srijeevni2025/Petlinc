// import { MapPin, Star } from "lucide-react";




// function GroomingCenterBooking(){
//     return (
//         <div className = "max-w-7xl mx-auto py-16 px-6">
//             <div className = "flex items-start border-solid border-2">
                
//                 <p className = "bg-orange-200 text-orange-600 p-2 px-10 font-bold">Walkin</p>
//                 <p className = "p-2 px-10 font-bold">Home</p>
//             </div>
//             <div className = "py-10 border-2 px-4 rounded-xl my-4">
//                 <div className = "flex justify-between ">
//                     <div className = "flex flex-col gap-2">
//                         <h3 className = "font-bold ">PetCare Grooming center <span className = "px-2 py-1 bg-orange-100 text-orange-700 font-bold border rounded-3xl">Verified</span></h3>
//                         <p><MapPin className = "mr-1 size-4 text-orange-600 inline"/> Kolkata </p>
//                         <p className = "text-orange-400 "><Star className = "text-orange-400 size-5 mr-2 inline"/> 4.5</p>
//                     </div>
//                     <div className = "flex justify-center items-center gap-10 mr-8">
//                         <div>
//                             <h3>Price</h3>
//                             <p className="font-bold">1500</p>
//                         </div>
//                         <div>
//                             <h3>Package-category</h3>
//                             <p className="font-bold">Basic-bath</p>
//                         </div>
//                         <div>
//                             <h3>Home-Pickup</h3>
//                             <p className="font-bold">Yes</p>
//                         </div>
//                         <div>
//                             <button className = "bg-orange-600 text-white p-2 border rounded-xl">Book Now</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GroomingCenterBooking;

// import { MapPin, Star } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import { Link } from "react-router-dom";
// function GroomingCenterBooking() {
//   return (
//     <>
//     <Navbar/>
//     <div className="max-w-5xl mx-auto py-16 px-6">
//       {/* Tabs */}
//       <div className="flex w-fit mx-auto border rounded-full overflow-hidden shadow-sm">
//         <button className="px-8 py-2 font-medium bg-orange-600 text-white">
//           Walk-in
//         </button>
//         <button className="px-8 py-2 font-medium text-gray-700 hover:bg-gray-100 transition">
//           Home
//         </button>
//       </div>

//       {/* Center Card */}
//       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//        <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <Link to = "/CheckoutPage"><button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button></Link>
//           </div>
//         </div>
//       </div>
//        <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//        <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//        <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//        <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//        <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
//         <div className="flex flex-col md:flex-row justify-between gap-6">
//           {/* Left: Info */}
//           <div className="flex flex-col gap-2">
//             <h3 className="font-bold text-lg">
//               PetCare Grooming Center{" "}
//               <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                 Verified
//               </span>
//             </h3>
//             <p className="text-sm text-gray-600 flex items-center gap-1">
//               <MapPin className="size-4 text-orange-600" /> Kolkata
//             </p>
//             <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
//               <Star className="size-4" /> 4.5
//             </p>
//           </div>

//           {/* Right: Package details */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
//             <div>
//               <h4 className="text-sm text-gray-500">Price</h4>
//               <p className="font-bold text-gray-800">₹1500</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Package</h4>
//               <p className="font-bold text-gray-800">Basic Bath</p>
//             </div>
//             <div>
//               <h4 className="text-sm text-gray-500">Home Pickup</h4>
//               <p className="font-bold text-gray-800">Yes</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex items-center">
//             <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default GroomingCenterBooking;

// import { MapPin, Star } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import queryClient from "@/store/queryClient";
// import { useContext, useState } from "react";
// import { GlobalContext } from "@/store/context";
// import PetDetailsModal from "@/components/PetDetailsModal";

// export default function GroomingCenterBooking() {

//   const [showPetDetailsModal, setShowPetDetailsModal] = useState(false);
  
//   function handleClose(){
//   setShowPetDetailsModal(false);
//  }
//   const packages = [
//     {
//       id: 1,
//       name: "Vetic",
//       location: "Kolkata",
//       rating: 4.8,
//       price: 1500,
//       package: "Full Grooming",
//       pickup: "Yes",
//       verified: true,
//       desc: "Luxurious head-to-tail spa with styling, massage & detangling.",
//       image: "/vetic.webp",
//     },
//     {
//       id: 2,
//       name: "Kross Paws",
//       location: "Rashbihari, Kolkata",
//       rating: 4.6,
//       price: 1200,
//       package: "Basic Bath",
//       pickup: "No",
//       verified: true,
//       desc: "Gentle bath, blow-dry, and basic trim for a neat, fresh look.",
//       image: "/kross paws.png",
//     },
//     {
//       id: 3,
//       name: "Magic Paws",
//       location: "Kolkata",
//       rating: 4.9,
//       price: 1800,
//       package: "Premium Spa",
//       pickup: "Yes",
//       verified: true,
//       desc: "Premium aromatherapy bath, nail clipping, and full styling.",
//       image: "/Magic Paws.png",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
//         {/* Tabs */}
//         <div className="max-w-6xl mx-auto py-10 flex justify-center">
//           <div className="flex border border-orange-300 bg-white rounded-full shadow-md overflow-hidden">
//             <button className="px-10 py-2 font-medium bg-orange-600 text-white rounded-full">
//               Walk-in
//             </button>
//             <button className="px-10 py-2 font-medium text-gray-700 hover:bg-orange-50 transition">
//               Home
//             </button>
//           </div>
//         </div>

//         {/* Packages Section */}
//         <div className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
//           {packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="group bg-white border border-orange-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//             >
//               <div className="flex flex-col md:flex-row">
//                 {/* Image */}
//                 {/* <div className="md:w-1/3 h-56 md:h-auto">
//                   <img
//                     src={pkg.image}
//                     alt={pkg.name}
//                     className="h-50 w-50  object-contain"
//                   />
//                 </div> */}
//                 <div className="md:w-1/3 bg-white-50 flex flex-col items-center justify-center p-6 ">
//                   <div className="w-36 h-36 bg-white rounded-2xl shadow-sm border border-orange-100 flex items-center justify-center overflow-hidden">
//                     <img
//                       src={pkg.image}
//                       alt={pkg.name}
//                       className=" m-4 p-4 max-h-24 max-w-full object-contain hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
                  
//                 </div>


//                 {/* Content */}
//                 <div className="flex-1 p-6 flex flex-col justify-between">
//                   <div>
//                     <div className="flex flex-wrap items-center justify-between gap-3">
//                       <div className="flex items-center gap-2">
//                         <h3 className="text-2xl font-bold text-gray-800">
//                           {pkg.name}
//                         </h3>
//                         {pkg.verified && (
//                           <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
//                             Verified
//                           </span>
//                         )}
//                       </div>

//                       <div className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
//                         <Star size={16} /> {pkg.rating}
//                       </div>
//                     </div>

//                     <div className="mt-1 flex items-center text-sm text-gray-600">
//                       <MapPin className="size-4 text-orange-500 mr-1" />{" "}
//                       {pkg.location}
//                     </div>

//                     <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-2xl">
//                       {pkg.desc}
//                     </p>
//                   </div>

//                   {/* Package Info */}
//                   <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
//                     <div className="bg-orange-50 rounded-xl py-3">
//                       <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wide">
//                         Price
//                       </h4>
//                       <p className="text-lg font-bold text-gray-800">
//                         ₹{pkg.price}
//                       </p>
//                     </div>
//                     <div className="bg-orange-50 rounded-xl py-3">
//                       <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wide">
//                         Package
//                       </h4>
//                       <p className="text-lg font-bold text-gray-800">
//                         {pkg.package}
//                       </p>
//                     </div>
//                     <div className="bg-orange-50 rounded-xl py-3">
//                       <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wide">
//                         Home Pickup
//                       </h4>
//                       <p className="text-lg font-bold text-gray-800">
//                         {pkg.pickup}
//                       </p>
//                     </div>
//                   </div>

//                   {/* CTA */}
//                   <div className="mt-6 flex justify-end">
                   
//                       <button onClick = {()=>setShowPetDetailsModal(!showPetDetailsModal)}className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all transform hover:scale-[1.03]">
//                         Book Now
//                       </button>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <PetDetailsModal show = {showPetDetailsModal} onClose={handleClose}/>
//     </>
//   );
// }

import { MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import PetDetailsModal from "@/components/PetDetailsModal";

export default function GroomingCenterBooking() {
  const [showPetDetailsModal, setShowPetDetailsModal] = useState(false);
  const handleClose = () => setShowPetDetailsModal(false);

  const packages = [
    {
      id: 1,
      name: "Vetic",
      location: "Kolkata",
      rating: 4.8,
      price: 1500,
      package: "Full Grooming",
      pickup: "Yes",
      verified: true,
      desc: "Luxurious head-to-tail spa with styling, massage & detangling.",
      image: "/vetic.webp",
    },
    {
      id: 2,
      name: "Kross Paws",
      location: "Rashbihari, Kolkata",
      rating: 4.6,
      price: 1200,
      package: "Basic Bath",
      pickup: "No",
      verified: true,
      desc: "Gentle bath, blow-dry, and basic trim for a neat, fresh look.",
      image: "/kross paws.png",
    },
    {
      id: 3,
      name: "Magic Paws",
      location: "Kolkata",
      rating: 4.9,
      price: 1800,
      package: "Premium Spa",
      pickup: "Yes",
      verified: true,
      desc: "Premium aromatherapy bath, nail clipping, and full styling.",
      image: "/Magic Paws.png",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white py-10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/paws-bg.png')] opacity-10 bg-cover bg-center" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
            Find Your Pet’s Perfect Groomer 🐾
          </h1>
          <p className="text-orange-50 text-sm md:text-base">
            Explore trusted grooming centers near you and treat your furry friend to a relaxing day.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="bg-gradient-to-b from-orange-50 via-white to-orange-50 py-12">
        <div className="max-w-6xl mx-auto px-5">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="flex border border-orange-200 bg-white rounded-full shadow-sm overflow-hidden text-sm">
              <button className="px-8 py-1.5 font-medium bg-orange-600 text-white rounded-full">
                Walk-in
              </button>
              <button className="px-8 py-1.5 font-medium text-gray-700 hover:bg-orange-50 transition">
                Home
              </button>
            </div>
          </div>

          {/* Packages */}
          <div className="space-y-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-[2px] overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center md:items-stretch p-5 md:p-6 gap-4">
                  {/* Image */}
                  <div className="md:w-1/4 flex items-center justify-center">
                    <div className="w-28 h-28 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform duration-200 p-2"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-gray-800">{pkg.name}</h3>
                          {pkg.verified && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[11px] font-semibold border rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500 font-medium text-sm">
                          <Star size={14} /> {pkg.rating}
                        </div>
                      </div>

                      <div className="mt-1 flex items-center text-sm text-gray-600">
                        <MapPin className="size-4 text-orange-500 mr-1" /> {pkg.location}
                      </div>

                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {pkg.desc}
                      </p>
                    </div>

                    {/* Info */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                      <PackageInfo label="Price" value={`₹${pkg.price}`} />
                      <PackageInfo label="Package" value={pkg.package} />
                      <PackageInfo label="Pickup" value={pkg.pickup} />
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:w-1/5 flex justify-center md:justify-end items-center">
                    <button
                      onClick={() => setShowPetDetailsModal(true)}
                      className="px-5 py-1.5 bg-orange-600 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PetDetailsModal show={showPetDetailsModal} onClose={handleClose} />
    </>
  );
}

function PackageInfo({ label, value }) {
  return (
    <div className="bg-orange-50 rounded-lg py-2 hover:bg-orange-100 transition">
      <h4 className="text-[10px] uppercase text-gray-500 font-semibold tracking-wide">
        {label}
      </h4>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  );
}


