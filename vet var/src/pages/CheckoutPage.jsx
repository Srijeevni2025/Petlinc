// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { CheckCircle, CreditCard, Smartphone, Wallet } from "lucide-react";
// import Navbar from "@/components/Navbar";

// export default function CheckoutPage() {
//   const [paymentMethod, setPaymentMethod] = useState("upi");

//   // Example booking data (replace with props/state later)
//   const booking = {
//     package: "Full Grooming",
//     desc: "Bath + Haircut + Nail Trim + Ear Cleaning",
//     price: 1499,
//     duration: "60 min",
//     center: "Petlinc Grooming Center, Kolkata",
//     petName: "Bruno",
//     petType: "Dog",
//     date: "2025-09-20",
//     time: "3:00 PM",
//   };

//   const handleCheckout = () => {
//     alert(`Booking confirmed via ${paymentMethod.toUpperCase()}! 🎉`);
//   };

//   return (
//     <>
//       <Navbar/>
    
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Left: Booking Summary */}
//         <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
//           <h1 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h1>
//           <div className="border-b pb-4 mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">{booking.package}</h2>
//             <p className="text-gray-600">{booking.desc}</p>
//             <p className="mt-2 font-medium text-orange-600">
//               ₹{booking.price} • {booking.duration}
//             </p>
//           </div>
//           <ul className="space-y-2 text-sm text-gray-700">
//             <li><strong>Center:</strong> {booking.center}</li>
//             <li><strong>Pet:</strong> {booking.petName} ({booking.petType})</li>
//             <li><strong>Date & Time:</strong> {booking.date}, {booking.time}</li>
//           </ul>

//           {/* Price Breakdown */}
//           <div className="mt-6 border-t pt-4 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{booking.price}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Service Fee</span>
//               <span>₹99</span>
//             </div>
//             <div className="flex justify-between font-bold text-lg text-gray-900">
//               <span>Total</span>
//               <span>₹{booking.price + 99}</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Payment Options */}
//         <div className="bg-white rounded-xl shadow-md p-8 h-fit">
//           <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Options</h2>
//           <div className="space-y-4">
//             {[
//               { id: "upi", label: "UPI (Google Pay, PhonePe, Paytm)", icon: <Smartphone className="size-5" /> },
//               { id: "card", label: "Credit / Debit Card", icon: <CreditCard className="size-5" /> },
//               { id: "cod", label: "Cash on Delivery", icon: <Wallet className="size-5" /> },
//             ].map((option) => (
//               <label
//                 key={option.id}
//                 className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer ${
//                   paymentMethod === option.id ? "border-orange-600 bg-orange-50" : "border-gray-300"
//                 }`}
//               >
//                 <div className="flex items-center gap-3 text-gray-700 font-medium">
//                   {option.icon}
//                   {option.label}
//                 </div>
//                 <input
//                   type="radio"
//                   name="payment"
//                   value={option.id}
//                   checked={paymentMethod === option.id}
//                   onChange={() => setPaymentMethod(option.id)}
//                   className="hidden"
//                 />
//                 {paymentMethod === option.id && (
//                   <CheckCircle className="text-orange-600 size-5" />
//                 )}
//               </label>
//             ))}
//           </div>

//           {/* Confirm Button */}
//           <button
//             onClick={handleCheckout}
//             className="mt-8 w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
//           >
//             Confirm & Pay ₹{booking.price + 99}
//           </button>

//           {/* Back */}
//           <div className="mt-6 text-center">
//             <Link to="/booking/1" className="text-orange-600 hover:underline text-sm">
//               ← Back to Booking
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  CreditCard,
  Smartphone,
  Wallet,
  Lock,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // Example booking data
  const booking = {
    package: "Full Grooming",
    desc: "Bath + Haircut + Nail Trim + Ear Cleaning",
    price: 1499,
    duration: "60 min",
    center: "Petlinc Grooming Center, Kolkata",
    petName: "Bruno",
    petType: "Dog",
    date: "2025-09-20",
    time: "3:00 PM",
  };

  const handleCheckout = () => {
    alert(`Booking confirmed via ${paymentMethod.toUpperCase()}! 🎉`);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100/50 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Booking Summary */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-xl border border-orange-100 rounded-2xl shadow-sm p-8 transition hover:shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-extrabold text-gray-900">
                Booking Summary
              </h1>
              <span className="text-xs text-orange-600 bg-orange-100 px-3 py-1 rounded-full font-medium">
                Confirm Details
              </span>
            </div>

            {/* Package Info */}
            <div className="border-b border-gray-100 pb-4 mb-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {booking.package}
              </h2>
              <p className="text-gray-600 text-sm">{booking.desc}</p>
              <p className="mt-2 font-semibold text-orange-600">
                ₹{booking.price} • {booking.duration}
              </p>
            </div>

            {/* Details */}
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Center:</strong> {booking.center}
              </li>
              <li>
                <strong>Pet:</strong> {booking.petName} ({booking.petType})
              </li>
              <li>
                <strong>Date & Time:</strong> {booking.date}, {booking.time}
              </li>
            </ul>

            {/* Price Breakdown */}
            <div className="mt-6 border-t pt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{booking.price}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Service Fee</span>
                <span>₹99</span>
              </div>
              <div className="flex justify-between font-semibold text-lg text-gray-900">
                <span>Total</span>
                <span>₹{booking.price + 99}</span>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-8 flex items-center justify-between text-xs text-gray-500 border-t pt-3">
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-green-500" />
                100% Verified Grooming Partners
              </div>
              <div className="flex items-center gap-1">
                <Lock size={14} className="text-orange-500" />
                Secure Checkout
              </div>
            </div>
          </div>

          {/* RIGHT: Payment Options */}
          <div className="bg-white/90 backdrop-blur-xl border border-orange-100 rounded-2xl shadow-sm p-8 h-fit transition hover:shadow-md">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">
              Choose Payment Method
            </h2>

            <div className="space-y-4">
              {[
                {
                  id: "upi",
                  label: "UPI (Google Pay, PhonePe, Paytm)",
                  icon: <Smartphone className="size-5 text-orange-600" />,
                },
                {
                  id: "card",
                  label: "Credit / Debit Card",
                  icon: <CreditCard className="size-5 text-orange-600" />,
                },
                {
                  id: "cod",
                  label: "Cash on Delivery",
                  icon: <Wallet className="size-5 text-orange-600" />,
                },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition-all ${
                    paymentMethod === option.id
                      ? "border-orange-500 bg-orange-50 shadow-sm"
                      : "border-gray-200 hover:border-orange-200"
                  }`}
                  onClick={() => setPaymentMethod(option.id)}
                >
                  <div className="flex items-center gap-3 text-gray-700 font-medium">
                    {option.icon}
                    {option.label}
                  </div>
                  {paymentMethod === option.id && (
                    <CheckCircle className="text-orange-600 size-5" />
                  )}
                </label>
              ))}
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleCheckout}
              className="mt-8 w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-orange-600 shadow-md hover:shadow-lg transition-transform hover:-translate-y-[1px]"
            >
              Confirm & Pay ₹{booking.price + 99}
            </button>

            {/* Back Link */}
            <div className="mt-6 text-center">
              <Link
                to="/booking/1"
                className="text-orange-600 hover:text-orange-700 hover:underline text-sm"
              >
                ← Back to Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
