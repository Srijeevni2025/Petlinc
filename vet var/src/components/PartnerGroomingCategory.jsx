import { Link } from "react-router-dom";
import { Scissors, Star, Sparkles } from "lucide-react";

export default function PartnerGroomingCategory() {
  const categories = [
    {
      id: "basic",
      title: "Basic Grooming",
      desc: "Essential cleaning & hygiene services offered by our verified grooming partners.",
      icon: <Scissors className="w-8 h-8 text-orange-600" />,
      color: "from-orange-100 to-white",
    },
    {
      id: "standard",
      title: "Standard Grooming",
      desc: "Complete grooming experience with styling and finishing touches.",
      icon: <Star className="w-8 h-8 text-orange-600" />,
      color: "from-orange-50 to-white",
    },
    {
      id: "super-premium",
      title: "Super Premium Care",
      desc: "Luxury spa treatments, detangling, tick care & full-body makeover.",
      icon: <Sparkles className="w-8 h-8 text-orange-600" />,
      color: "from-orange-200/40 to-white",
    },
  ];

  return (
    <section
      id="partner-categories"
      className="relative bg-gradient-to-b from-white via-orange-50/30 to-white py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Partner Grooming Categories 🐕✂️
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore grooming experiences offered by our trusted partners — pick
            a category to compare packages, services, and reviews across centers.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group bg-gradient-to-b ${cat.color} border border-orange-100 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 p-8 flex flex-col items-center justify-between`}
            >
              {/* Icon */}
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-md border border-orange-100 mb-5 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {cat.desc}
              </p>

              {/* CTA */}
              <Link
                to={`/compare?category=${cat.id}`}
                className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-orange-700 hover:shadow-md transition-transform hover:scale-[1.03]"
              >
                View & Compare
              </Link>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-16 mx-auto w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
      </div>
    </section>
  );
}
