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

import { MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
function GroomingCenterBooking() {
  return (
    <>
    <Navbar/>
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Tabs */}
      <div className="flex w-fit mx-auto border rounded-full overflow-hidden shadow-sm">
        <button className="px-8 py-2 font-medium bg-orange-600 text-white">
          Walk-in
        </button>
        <button className="px-8 py-2 font-medium text-gray-700 hover:bg-gray-100 transition">
          Home
        </button>
      </div>

      {/* Center Card */}
      <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <Link to = "/CheckoutPage"><button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button></Link>
          </div>
        </div>
      </div>
       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>

       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
       <div className="mt-10 bg-white border rounded-xl shadow hover:shadow-md transition p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">
              PetCare Grooming Center{" "}
              <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold border rounded-full">
                Verified
              </span>
            </h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="size-4 text-orange-600" /> Kolkata
            </p>
            <p className="text-sm flex items-center gap-1 text-yellow-500 font-medium">
              <Star className="size-4" /> 4.5
            </p>
          </div>

          {/* Right: Package details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-sm text-gray-500">Price</h4>
              <p className="font-bold text-gray-800">₹1500</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Package</h4>
              <p className="font-bold text-gray-800">Basic Bath</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">Home Pickup</h4>
              <p className="font-bold text-gray-800">Yes</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default GroomingCenterBooking;
