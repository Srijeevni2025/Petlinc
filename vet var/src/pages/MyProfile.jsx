import { Link } from "react-router-dom";
import { User, Phone, Mail, MapPin, PawPrint } from "lucide-react";

export default function MyProfile() {
  // Example user data
  const user = {
    name: "Rajan",
    email: "rajan@example.com",
    phone: "+91 9876543210",
    pincode: "221002",
    pets: [
      { name: "Bruno", type: "Dog", breed: "Labrador", age: "2 years" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Profile Header */}
        <div className="flex items-center gap-6 border-b pb-6 mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=FF6B00&color=fff`}
            alt={user.name}
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <Mail size={14} /> {user.email}
            </p>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <Phone size={14} /> {user.phone}
            </p>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <MapPin size={14} /> {user.pincode}
            </p>
          </div>
        </div>

        {/* Pets Section */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">My Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {user.pets.map((pet, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 hover:shadow-md transition bg-gray-50"
            >
              <p className="flex items-center gap-2 text-orange-600 font-semibold">
                <PawPrint size={16} /> {pet.name}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Type:</strong> {pet.type}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Breed:</strong> {pet.breed}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Age:</strong> {pet.age}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-10 flex gap-4">
          <Link
            to="/bookings"
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            My Bookings
          </Link>
          <Link
            to="/settings"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Settings
          </Link>
          <button className="ml-auto px-6 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
