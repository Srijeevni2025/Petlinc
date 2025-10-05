

import { useState } from "react";
import { CheckCircle2, PawPrint, Users, Star, MapPin, Phone } from "lucide-react";

export default function BecomePartner() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", center: "", address: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Thank you for your interest! Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-slate-900 font-inter">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,140,0,0.1),_transparent_60%)]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Join <span className="text-orange-600">Petlinc</span> Partner Network 🐾
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get discovered by thousands of pet parents looking for grooming services.  
            We’ll help you grow your business while you focus on what you love — caring for pets.
          </p>
          <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg font-semibold shadow-md transition">
            Become a Partner
          </button>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900">
          Why Partner with Petlinc?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Users className="w-10 h-10 text-orange-600" />,
              title: "Reach More Pet Parents",
              desc: "Showcase your services to verified pet owners actively searching for trusted grooming centers nearby.",
            },
            {
              icon: <Star className="w-10 h-10 text-orange-600" />,
              title: "Grow Reputation",
              desc: "Collect verified reviews, build credibility, and earn repeat customers through our loyalty system.",
            },
            {
              icon: <CheckCircle2 className="w-10 h-10 text-orange-600" />,
              title: "Simple Bookings & Payments",
              desc: "We manage the tech and payments — you focus on delivering a great grooming experience.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-orange-100 shadow-lg hover:shadow-orange-200 transition hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-r from-orange-50 to-white py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-14">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            { step: 1, title: "Apply Online", desc: "Fill out a quick form to share your details." },
            { step: 2, title: "Verification", desc: "Our team verifies your grooming business credentials." },
            { step: 3, title: "List Your Packages", desc: "Add your grooming categories, pricing, and offers." },
            { step: 4, title: "Start Receiving Bookings", desc: "Get featured on Petlinc and grow your business." },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg shadow-md">
                {step.step}
              </div>
              <h4 className="font-semibold text-gray-900">{step.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Become a Petlinc Partner</h2>
          <p className="text-gray-600">Fill out your details and our team will get in touch within 24 hours.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-3xl border border-orange-100 shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
            />
            <input
              name="email"
              placeholder="Email (optional)"
              onChange={handleChange}
              className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
            />
            <input
              name="center"
              placeholder="Grooming Center Name"
              onChange={handleChange}
              required
              className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
            />
          </div>

          <textarea
            name="address"
            placeholder="Business Address"
            onChange={handleChange}
            rows={3}
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition shadow-md"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-orange-600 py-12 text-center text-white">
        <h2 className="text-2xl font-semibold">Have Questions?</h2>
        <p className="mt-2 text-orange-100 flex justify-center items-center gap-1">
          <Phone className="inline w-4 h-4" /> +91-9876543210 |
          <span className="underline">partners@petlinc.in</span>
        </p>
      </section>
    </div>
  );
}
