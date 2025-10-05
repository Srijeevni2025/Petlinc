import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Search, ChevronDown } from "lucide-react";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getLoggedInUser } from "@/features/authentication/queryFunction";
import { logoutUser } from "@/features/authentication/mutateFunction";
import toast from "react-hot-toast";
import queryClient from "@/store/queryClient";


export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
 

  const {isPending, data:userData, isError} = useQuery({
    queryKey:['userData'],
    queryFn: getLoggedInUser
  })

// logout 
  const {  mutate} = useMutation({
    mutationFn:logoutUser,
    onSuccess:(data)=>{
       queryClient.removeQueries({queryKey:['userData']});
      toast.success("Logged out");
     
    },
    onError:(err)=>{
      toast.error("Something went wrong");
    }
  })

   async function handleLogout(){
     mutate();
  }


 

  // Example logged-in user (replace with real user data)
  const user = {
    name: userData?.user?.name,
    avatar: "https://ui-avatars.com/api/?name=Rajan&background=FF6B00&color=fff",
  };
  
  return (
    <>
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* Logo + Tagline */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="flex items-center gap-2 text-2xl font-extrabold text-orange-600 font-brand">
              🐾 Petlinc
            </span>
            <span className="text-xs text-gray-500 italic">
              Because They’re Family Too.
            </span>
          </Link>

          {/* Center Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2 border border-gray-200 focus-within:ring-2 focus-within:ring-orange-500">
            <Search className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search grooming packages..."
              className="bg-transparent flex-1 outline-none text-sm text-gray-700"
            />
            <select className="ml-3 px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-orange-500">
              <option>Dog</option>
              <option>Cat</option>
            </select>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            {/* Location Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600"
            >
              <MapPin size={16} className="text-orange-600" />
              {pincode ? pincode : "Enter Pincode"}
            </button>

            {/* User Menu */}
            {userData?<div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border"
                />
                <span>{user.name}</span>
                <ChevronDown size={16} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/MyProfile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/bookings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Bookings
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                  disabled={isPending}
                    onClick={() => handleLogout()}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div> :
             <div className="flex rounded-full border border-orange-500 overflow-hidden text-sm font-medium">
                          <Link
                            to="/signin"
                            className="px-4 py-2 text-orange-600 hover:bg-orange-50 transition"
                          >
                            Sign In
                          </Link>
                          <Link
                            to="/signup"
                            className="px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 transition"
                          >
                            Sign Up
                          </Link>
                        </div>}
          </div>
        </div>
      </nav>

      {/* Modal for Pincode */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Enter Your Pincode
            </h2>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="e.g. 221002"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
