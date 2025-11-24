

import { useEffect, useState } from "react";
import { PawPrint, Calendar, Clock, Type, Dog, Cat } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function PetDetailsModal({ show, onClose, onSubmit, selectedPackage }) {

    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(show){
            document.body.style.overflow = 'hidden';
        } 
        return ()=>{
            document.body.style.overflow  = 'auto'
        }
    }, [show])

  const [form, setForm] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    age: "",
    gender: "",
    date: "",
    time: "",
    notes: "",
  });


  if (!show) return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit({ ...form, package: selectedPackage });
    navigate('/checkoutPage')
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl w-[95%] max-w-lg overflow-hidden relative border border-orange-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-4 text-center relative">
          <div className="flex justify-center mb-1">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold tracking-wide">Book Grooming Appointment</h2>
          <p className="text-xs opacity-90">
            for {selectedPackage?.name} — {selectedPackage?.package}
          </p>
          <button
            onClick={onClose}
            className="absolute right-4 top-2 text-white/80 hover:text-white text-xl"
          >
            ×
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Pet Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Type className="w-4 h-4 text-orange-400 absolute left-3 top-3.5" />
              <input
                type="text"
                name="petName"
                placeholder="Pet Name"
                value={form.petName}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="relative">
              {form.petType === "Dog" ? (
                <Dog className="w-4 h-4 text-orange-400 absolute left-3 top-3.5" />
              ) : (
                <Cat className="w-4 h-4 text-orange-400 absolute left-3 top-3.5" />
              )}
              <select
                name="petType"
                value={form.petType}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              >
                <option>Dog</option>
                <option>Cat</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="breed"
              placeholder="Breed (e.g. Labrador)"
              value={form.breed}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              type="text"
              name="age"
              placeholder="Age (e.g. 2 years)"
              value={form.age}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Calendar className="w-4 h-4 text-orange-400 absolute left-3 top-3.5" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="relative">
              <Clock className="w-4 h-4 text-orange-400 absolute left-3 top-3.5" />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          </div>

          <textarea
            name="notes"
            placeholder="Special instructions or preferences..."
            value={form.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none resize-none"
          />

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
           
              type="submit"
              className="w-full py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 shadow-md transition-all transform hover:scale-[1.02]"
            >
              Continue to Checkout
            </button>
          </div>
        </form>

        {/* Footer Bar */}
        <div className="bg-orange-50 text-center py-3 text-xs text-gray-600 border-t border-orange-100">
          Trusted by 1000+ Pet Parents ❤️
        </div>
      </div>
    </div>
  );
}
