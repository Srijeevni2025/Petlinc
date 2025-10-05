// import React, { useState } from "react";
// import { Star, MapPin, Phone, CheckCircle } from "lucide-react";

// function LabProfile() {
//   const [tests] = useState([
//     { name: "CBC (Complete Blood Count)", desc: "Checks overall health of your pet’s blood.", price: "₹1200" },
//     { name: "Rabies Antibody Test", desc: "Measures antibodies for Rabies vaccination effectiveness.", price: "₹1500" },
//     { name: "Kidney Function Test", desc: "Assesses kidney health via blood markers.", price: "₹1000" },
//     { name: "Liver Function Test", desc: "Monitors liver enzymes & overall function.", price: "₹1300" },
//   ]);

//   const [reviews] = useState([
//     { user: "Ravi Sharma", pet: "Dog (Labrador)", rating: 5, comment: "Quick service and very pet-friendly staff." },
//     { user: "Ananya Verma", pet: "Cat (Persian)", rating: 4, comment: "Good experience, report delivery was on time." },
//     { user: "Mohit Singh", pet: "Dog (Beagle)", rating: 5, comment: "Highly professional lab, accurate results." },
//   ]);

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       {/* Header */}
//       <div className="bg-white border-b py-8">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
//           {/* Left - Lab Info */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
//               PetCare Diagnostics 
//               <CheckCircle className="text-green-600" size={22} />
//             </h1>
//             <p className="flex items-center gap-2 text-gray-600 mt-2">
//               <MapPin size={18} className="text-orange-600" /> Delhi, India
//             </p>
//             <div className="flex items-center gap-1 mt-2 text-yellow-500">
//               <Star size={18} /> <span className="font-medium">4.8 (230 reviews)</span>
//             </div>
//           </div>

//           {/* Right - Contact */}
//           <div className="bg-orange-50 px-6 py-4 rounded-lg shadow-sm">
//             <p className="text-sm text-gray-600">Need Help?</p>
//             <p className="flex items-center gap-2 font-semibold text-gray-800 mt-1">
//               <Phone size={16} className="text-orange-600" /> +91-9876543210
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
//         {/* Left - Tests */}
//         <div className="lg:col-span-2">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Tests</h2>
//           <div className="grid gap-6">
//             {tests.map((test, idx) => (
//               <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
//                 <h3 className="text-lg font-semibold text-gray-900">{test.name}</h3>
//                 <p className="text-sm text-gray-600 mt-2">{test.desc}</p>
//                 <div className="flex justify-between items-center mt-4">
//                   <p className="font-semibold text-gray-800">{test.price}</p>
//                   <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm">
//                     Book Test
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Reviews */}
//           <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Reviews</h2>
//           <div className="grid gap-6">
//             {reviews.map((review, idx) => (
//               <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-semibold text-gray-800">{review.user}</h3>
//                   <div className="flex items-center text-yellow-500 text-sm">
//                     <Star size={16} /> <span className="ml-1">{review.rating}</span>
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-500">{review.pet}</p>
//                 <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right - Lab Info Sidebar */}
//         <aside className="bg-white border rounded-xl p-6 shadow-sm h-fit">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Lab Information</h3>
//           <p className="text-sm text-gray-600">
//             PetCare Diagnostics is a trusted veterinary lab with over 10 years of experience in pet diagnostics. 
//             Specializing in tests for Dogs 🐶 and Cats 🐱.
//           </p>

//           <div className="mt-6">
//             <h4 className="font-medium text-gray-800">Working Hours</h4>
//             <p className="text-sm text-gray-600 mt-1">Mon - Sat: 9 AM - 7 PM</p>
//             <p className="text-sm text-gray-600">Sunday: Closed</p>
//           </div>

//           <div className="mt-6">
//             <h4 className="font-medium text-gray-800">Address</h4>
//             <p className="text-sm text-gray-600 mt-1">123, Green Park, New Delhi - 110016</p>
//           </div>

//           <div className="mt-6">
//             <h4 className="font-medium text-gray-800">Contact</h4>
//             <p className="text-sm text-gray-600 mt-1">+91-9876543210</p>
//             <p className="text-sm text-gray-600">support@petcarelabs.com</p>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default LabProfile;




import React, { useState } from "react";
import { Star, MapPin, Phone, CheckCircle, X } from "lucide-react";

function LabProfile() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [isBookingOpen, setBookingOpen] = useState(false);

  const tests = [
    { name: "CBC (Complete Blood Count)", desc: "Checks overall health of your pet’s blood.", price: "₹1200" },
    { name: "Rabies Antibody Test", desc: "Measures antibodies for Rabies vaccination effectiveness.", price: "₹1500" },
    { name: "Kidney Function Test", desc: "Assesses kidney health via blood markers.", price: "₹1000" },
    { name: "Liver Function Test", desc: "Monitors liver enzymes & overall function.", price: "₹1300" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              PetCare Diagnostics 
              <CheckCircle className="text-green-600" size={22} />
            </h1>
            <p className="flex items-center gap-2 text-gray-600 mt-2">
              <MapPin size={18} className="text-orange-600" /> Delhi, India
            </p>
            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              <Star size={18} /> <span className="font-medium">4.8 (230 reviews)</span>
            </div>
          </div>
          <div className="bg-orange-50 px-6 py-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600">Need Help?</p>
            <p className="flex items-center gap-2 font-semibold text-gray-800 mt-1">
              <Phone size={16} className="text-orange-600" /> +91-9876543210
            </p>
          </div>
        </div>
      </div>

      {/* Tests Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Tests</h2>
        <div className="grid gap-6">
          {tests.map((test, idx) => (
            <div key={idx} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{test.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{test.desc}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="font-semibold text-gray-800">{test.price}</p>
                <button
                  onClick={() => {
                    setSelectedTest(test);
                    setBookingOpen(true);
                  }}
                  className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition text-sm"
                >
                  Book Test
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setBookingOpen(false)}
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Book Test – {selectedTest?.name}
            </h2>

            <form className="space-y-4">
              {/* Pet Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Pet Name</label>
                <input
                  type="text"
                  placeholder="Enter pet name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Species</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1 text-sm">
                  <option>Dog</option>
                  <option>Cat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  placeholder="Pet age in years"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>

              {/* Owner Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Owner Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Prescription (optional)</label>
                <input
                  type="file"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition mt-4"
              >
                Confirm Booking – {selectedTest?.price}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LabProfile;
