function WhyChooseUs(){
    return (
        <section className="bg-gray-50 mt-20 py-16">
                <div className="max-w-7xl mx-auto px-6">
                  <h2 className="text-2xl font-bold text-gray-900 text-center">Why Choose Petlinc?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {[
                      { title: "Trusted Groomers", desc: "Verified professionals for safe grooming", icon: "✂️" },
                      { title: "Pet-Friendly Care", desc: "Gentle handling & stress-free experience", icon: "🐾" },
                      { title: "Hygienic Products", desc: "Safe shampoos & tools for every pet", icon: "🧼" },
                      { title: "Easy Booking", desc: "Quick online scheduling at your convenience", icon: "📅" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white border rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
                      >
                        <p className="text-3xl">{item.icon}</p>
                        <h3 className="mt-4 font-bold text-lg text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    )
}

export default WhyChooseUs;

