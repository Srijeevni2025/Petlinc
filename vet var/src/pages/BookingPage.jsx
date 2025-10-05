import { useParams, Link } from "react-router-dom";
import { useState } from "react";

// Example data (later this will come from API/DB)
const packages = [
  { id: "1", name: "Basic Care", desc: "Bath + Nail Trim", price: 699, duration: "30 min", emoji: "🛁" },
  { id: "2", name: "Full Grooming", desc: "Bath + Haircut + Nail Trim + Ear Cleaning", price: 1499, duration: "60 min", emoji: "✂️" },
  { id: "3", name: "Premium Spa", desc: "Full Grooming + Massage + Styling", price: 2499, duration: "90 min", emoji: "💆‍♂️" },
];

export default function BookingPage() {
  const { id } = useParams();
//   const pkg = packages.find((p) => p.id === id);
const pkg = 1;

  const [form, setForm] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    age: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.petName} (${form.petType}) on ${form.date} at ${form.time}`);
  };

  //if (!pkg) return <div className="p-6 text-center">Package not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Package Summary */}
        <div className="flex items-center gap-6 mb-8">
          <div className="text-5xl">{pkg.emoji}</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{pkg.name}</h2>
            <p className="text-gray-600">{pkg.desc}</p>
            <p className="mt-2 font-semibold text-orange-600">
              ₹{pkg.price} • {pkg.duration}
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Pet Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Name</label>
            <input
              type="text"
              name="petName"
              value={form.petName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Type</label>
            <select
              name="petType"
              value={form.petType}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option>Dog</option>
              <option>Cat</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Breed</label>
            <input
              type="text"
              name="breed"
              value={form.breed}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Date & Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time Slot</label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="">Select</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>3:00 PM</option>
              <option>5:00 PM</option>
            </select>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link to="/grooming" className="text-orange-600 hover:underline">
            ← Back to Packages
          </Link>
        </div>
      </div>
    </div>
  );
}
