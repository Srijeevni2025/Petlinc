import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, CreditCard, Smartphone, Wallet } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  // Example booking data (replace with props/state later)
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
      <Navbar/>
    
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Booking Summary */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h1>
          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">{booking.package}</h2>
            <p className="text-gray-600">{booking.desc}</p>
            <p className="mt-2 font-medium text-orange-600">
              ₹{booking.price} • {booking.duration}
            </p>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Center:</strong> {booking.center}</li>
            <li><strong>Pet:</strong> {booking.petName} ({booking.petType})</li>
            <li><strong>Date & Time:</strong> {booking.date}, {booking.time}</li>
          </ul>

          {/* Price Breakdown */}
          <div className="mt-6 border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{booking.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>₹99</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span>
              <span>₹{booking.price + 99}</span>
            </div>
          </div>
        </div>

        {/* Right: Payment Options */}
        <div className="bg-white rounded-xl shadow-md p-8 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Options</h2>
          <div className="space-y-4">
            {[
              { id: "upi", label: "UPI (Google Pay, PhonePe, Paytm)", icon: <Smartphone className="size-5" /> },
              { id: "card", label: "Credit / Debit Card", icon: <CreditCard className="size-5" /> },
              { id: "cod", label: "Cash on Delivery", icon: <Wallet className="size-5" /> },
            ].map((option) => (
              <label
                key={option.id}
                className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer ${
                  paymentMethod === option.id ? "border-orange-600 bg-orange-50" : "border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  {option.icon}
                  {option.label}
                </div>
                <input
                  type="radio"
                  name="payment"
                  value={option.id}
                  checked={paymentMethod === option.id}
                  onChange={() => setPaymentMethod(option.id)}
                  className="hidden"
                />
                {paymentMethod === option.id && (
                  <CheckCircle className="text-orange-600 size-5" />
                )}
              </label>
            ))}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleCheckout}
            className="mt-8 w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
          >
            Confirm & Pay ₹{booking.price + 99}
          </button>

          {/* Back */}
          <div className="mt-6 text-center">
            <Link to="/booking/1" className="text-orange-600 hover:underline text-sm">
              ← Back to Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
