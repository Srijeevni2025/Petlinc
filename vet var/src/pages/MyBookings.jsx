import { PawPrint, Clock, CheckCircle, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
export default function MyBookings() {
  const bookings = [
    {
      id: "BK202501",
      pet: "Bruno (Dog)",
      package: "Full Grooming",
      date: "Jan 20, 2025",
      time: "10:00 AM",
      status: "Completed",
      price: 1499,
    },
    {
      id: "BK202502",
      pet: "Mittens (Cat)",
      package: "Premium Spa",
      date: "Feb 2, 2025",
      time: "5:30 PM",
      status: "Upcoming",
      price: 2499,
    },
    {
      id: "BK2025022",
      pet: "Mittens (Cat)",
      package: "Premium Spa",
      date: "Feb 2, 2025",
      time: "5:30 PM",
      status: "Upcoming",
      price: 2499,
    },
    {
      id: "BK2025023",
      pet: "Mittens (Cat)",
      package: "Premium Spa",
      date: "Feb 2, 2025",
      time: "5:30 PM",
      status: "Upcoming",
      price: 2499,
    },
    {
      id: "BK2025024",
      pet: "Mittens (Cat)",
      package: "Premium Spa",
      date: "Feb 2, 2025",
      time: "5:30 PM",
      status: "Upcoming",
      price: 2499,
    },
  ];

  const getStatusIcon = (status) => {
    if (status === "Completed")
      return <CheckCircle className="text-green-500 w-5 h-5" />;
    if (status === "Upcoming")
      return <Clock className="text-orange-500 w-5 h-5" />;
    return <XCircle className="text-red-500 w-5 h-5" />;
  };

  return (
    <>

    <Navbar/>
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 py-16 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-200/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-orange-100/40 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full shadow-sm mb-4">
            <PawPrint className="text-orange-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            My Bookings
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Track your past and upcoming pet grooming sessions 🐾
          </p>
        </div>

        {/* Booking List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white/90 backdrop-blur-lg border border-orange-100 rounded-2xl shadow-sm hover:shadow-lg p-6 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {b.package}
                </h3>
                {getStatusIcon(b.status)}
              </div>

              <p className="text-sm text-gray-600">{b.pet}</p>

              <div className="mt-3 space-y-1 text-sm text-gray-500">
                <p>
                  <span className="font-medium text-gray-700">Date:</span>{" "}
                  {b.date}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Time:</span>{" "}
                  {b.time}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Price:</span> ₹
                  {b.price}
                </p>
              </div>

              <div className="mt-4 text-right">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    b.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : b.status === "Upcoming"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <p className="text-center text-gray-500 mt-16 text-sm">
            You haven’t made any bookings yet. Start by exploring our{" "}
            <a
              href="/grooming"
              className="text-orange-600 font-medium hover:underline"
            >
              grooming packages
            </a>
            !
          </p>
        )}
      </div>
    </div>
    </>
  );
}
