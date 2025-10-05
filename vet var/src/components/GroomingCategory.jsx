
import { Link } from "react-router-dom"
export default function GroomingCategory(){
    return (
        <section id = "grooming-packages" className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Grooming Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Basic Hygiene - Bath and Groom",
              desc: ['Bathing', 'conditioning', 'blow dry', 'combing/brushing', 'nail clipping', 'ear cleaning', 'eyes cleaning', 'paw massage'],
              price: "₹699",
              emoji: "🛁",
            },
            {
              name: "Standard - Bath, Hair and Body",
              desc: ['Bathing', 'Conditioning', 'Blow Dry', 'Combing/Brushing', 'Nail Clipping', 'Ear Cleaning', 'Eyes Cleaning', 'Paw massage', 'Teeth Cleaning', 'Full body trimming', 'Sanitary Cleaning', 'Body massage'],
              price: "₹1499",
              emoji: "✂️",
            },
            {
              name: "Premium - Full service and treatment",
              desc: ['Bathing', 'Conditioning', 'Blow dry', 'Combing/Brushing', 'Nail clipping', 'Ear cleaning', 'Eyes cleaning', 'Paw massage', 'Teeth cleaning', 'Full body trimming', 'Hair styling', 'De-matting', 'Tick removal', 'Anti-tick treatment', 'Sanitary cleaning', 'Body massage'],
              price: "₹2499",
              emoji: "💆‍♂️",
            },
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            > <div>
              <p className="text-3xl">{pkg.emoji}</p>
              <h3 className="mt-3 font-bold text-gray-900">{pkg.name}</h3>
              {pkg.desc.map(val=><p key = {val} className="text-sm text-gray-600 mt-1">• {val}</p>)}
              
              </div>
              <div>
              <p className="mt-2 text-sm font-medium text-gray-800">
                Starting at {pkg.price}
              </p>
              <Link
                to="/GroomingCenterBooking"
                className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm "
              >
                Book Now
              </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}