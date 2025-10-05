import { useState } from "react";
import { Link } from "react-router-dom";

// Example grooming packages
const allPackages = [
  {
    id: 1,
    name: "Basic Care",
    desc: "Bath + Nail Trim",
    price: 699,
    duration: "30 min",
    type: "Dog",
    emoji: "🛁",
  },
  {
    id: 2,
    name: "Full Grooming",
    desc: "Bath + Haircut + Nail Trim + Ear Cleaning",
    price: 1499,
    duration: "60 min",
    type: "Dog",
    emoji: "✂️",
  },
  {
    id: 3,
    name: "Premium Spa",
    desc: "Full Grooming + Massage + Styling",
    price: 2499,
    duration: "90 min",
    type: "Dog",
    emoji: "💆‍♂️",
  },
  {
    id: 4,
    name: "Cat Essential",
    desc: "Bath + Nail Trim + Ear Cleaning",
    price: 899,
    duration: "40 min",
    type: "Cat",
    emoji: "🐱",
  },
  {
    id: 5,
    name: "Cat Deluxe",
    desc: "Full Grooming + Styling",
    price: 1799,
    duration: "70 min",
    type: "Cat",
    emoji: "🐾",
  },
];

export default function GroomingPackages() {
  const [petType, setPetType] = useState("All");
  const [sort, setSort] = useState("default");

  // Filtering
  let filtered = allPackages.filter(
    (pkg) => petType === "All" || pkg.type === petType
  );

  // Sorting
  if (sort === "lowToHigh") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Grooming Packages 🐶🐱
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex gap-3">
            <button
              onClick={() => setPetType("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                petType === "All"
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setPetType("Dog")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                petType === "Dog"
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Dog
            </button>
            <button
              onClick={() => setPetType("Cat")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                petType === "Cat"
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Cat
            </button>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 text-sm"
          >
            <option value="default">Sort by</option>
            <option value="lowToHigh">Price: Low → High</option>
            <option value="highToLow">Price: High → Low</option>
          </select>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-3xl">{pkg.emoji}</p>
              <h3 className="mt-3 font-bold text-gray-900">{pkg.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{pkg.desc}</p>
              <p className="mt-2 text-sm font-medium text-gray-800">
                ₹{pkg.price} • {pkg.duration}
              </p>
              <p className="mt-1 text-xs text-gray-500 italic">{pkg.type}</p>
              <Link
                to={`/booking/${pkg.id}`}
                className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
