// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { MapPin, Search, ChevronDown } from "lucide-react";

// import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { getLoggedInUser } from "@/features/authentication/queryFunction";
// import { logoutUser } from "@/features/authentication/mutateFunction";
// import toast from "react-hot-toast";
// import queryClient from "@/store/queryClient";
// import { GlobalContext } from "@/store/context";


// export default function Navbar() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [pincode, setPincode] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const {isLoggedIn} = useContext(GlobalContext);
 
//   const {isPending, data:userData, isError} = useQuery({
//     queryKey:['userData'],
//     queryFn: getLoggedInUser
//   })

// // logout 
//   const {  mutate} = useMutation({
//     mutationFn:logoutUser,
//     onSuccess:(data)=>{
//        queryClient.removeQueries({queryKey:['userData']});
//        isLoggedIn.current = false;
//       toast.success("Logged out");
     
//     },
//     onError:(err)=>{
//       toast.error("Something went wrong");
//     }
//   })

//    async function handleLogout(){
//      mutate();
//   }


 

//   // Example logged-in user (replace with real user data)
//   const user = {
//     name: userData?.user?.name,
//     avatar: "https://ui-avatars.com/api/?name=Rajan&background=FF6B00&color=fff",
//   };
  
//   return (
//     <>
//       <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
//           {/* Logo + Tagline */}
//           <Link to="/" className="flex flex-col leading-tight">
//             <span className="flex items-center gap-2 text-2xl font-extrabold text-orange-600 font-brand">
//               🐾 Petlinc
//             </span>
//             <span className="text-xs text-gray-500 italic">
//               Because They’re Family Too.
//             </span>
//           </Link>

//           {/* Center Search */}
//           <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2 border border-gray-200 focus-within:ring-2 focus-within:ring-orange-500">
//             <Search className="text-gray-500 mr-2" size={18} />
//             <input
//               type="text"
//               placeholder="Search grooming packages..."
//               className="bg-transparent flex-1 outline-none text-sm text-gray-700"
//             />
//             <select className="ml-3 px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-orange-500">
//               <option>Dog</option>
//               <option>Cat</option>
//             </select>
//           </div>

//           {/* Right Section */}
//           <div className="hidden md:flex items-center gap-6">
//             {/* Location Button */}
//             <button
//               onClick={() => setModalOpen(true)}
//               className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600"
//             >
//               <MapPin size={16} className="text-orange-600" />
//               {pincode ? pincode : "Enter Pincode"}
//             </button>

//             {/* User Menu */}
//             {userData?<div className="relative">
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600"
//               >
//                 <img
//                   src={user.avatar}
//                   alt={user.name}
//                   className="w-8 h-8 rounded-full border"
//                 />
//                 <span>{user.name}</span>
//                 <ChevronDown size={16} />
//               </button>

//               {menuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
//                   <Link
//                     to="/MyProfile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     My Profile
//                   </Link>
//                   <Link
//                     to="/bookings"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     My Bookings
//                   </Link>
//                   <Link
//                     to="/settings"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Settings
//                   </Link>
//                   <button
//                   disabled={isPending}
//                     onClick={() => handleLogout()}
//                     className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div> :
//              <div className="flex rounded-full border border-orange-500 overflow-hidden text-sm font-medium">
//                           <Link
//                             to="/signin"
//                             className="px-4 py-2 text-orange-600 hover:bg-orange-50 transition"
//                           >
//                             Sign In
//                           </Link>
//                           <Link
//                             to="/signup"
//                             className="px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 transition"
//                           >
//                             Sign Up
//                           </Link>
//                         </div>}
//           </div>
//         </div>
//       </nav>

//       {/* Modal for Pincode */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">
//               Enter Your Pincode
//             </h2>
//             <input
//               type="text"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               placeholder="e.g. 221002"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
//             />
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// import { useContext, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MapPin, Search, ChevronDown } from "lucide-react";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { getLoggedInUser } from "@/features/authentication/queryFunction";
// import { logoutUser } from "@/features/authentication/mutateFunction";
// import toast from "react-hot-toast";
// import queryClient from "@/store/queryClient";
// import { GlobalContext } from "@/store/context";

// export default function Navbar() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [pincode, setPincode] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { isLoggedIn } = useContext(GlobalContext);
//   const navigate = useNavigate();

//   const { isPending, data: userData } = useQuery({
//     queryKey: ["userData"],
//     queryFn: getLoggedInUser,
//   });

//   const { mutate } = useMutation({
//     mutationFn: logoutUser,
//     onSuccess: () => {
//       queryClient.removeQueries({ queryKey: ["userData"] });
//       isLoggedIn.current = false;
//       toast.success("Logged out successfully");
//       navigate("/");
//     },
//     onError: () => toast.error("Something went wrong"),
//   });

//   const handleLogout = () => mutate();

//   const user = {
//     name: userData?.user?.name || "Guest",
//     avatar:
//       userData?.user?.avatar ||
//       "https://ui-avatars.com/api/?name=Petlinc&background=ea580c&color=fff",
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     function handleClickOutside() {
//       setMenuOpen(false);
//     }
//     window.addEventListener("click", handleClickOutside);
//     return () => window.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//           {/* Logo + Tagline */}
//           <Link
//             to="/"
//             className="flex flex-col leading-tight group hover:opacity-90 transition"
//           >
//             <span className="flex items-center gap-2 text-2xl font-extrabold text-orange-600 font-brand">
//               🐾 Petlinc
//             </span>
//             <span className="text-xs text-gray-500 italic group-hover:text-orange-600 transition">
//               Because They’re Family Too.
//             </span>
//           </Link>

//           {/* Center Search */}
//           <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 w-1/2 border border-gray-200 focus-within:ring-2 focus-within:ring-orange-500">
//             <Search className="text-gray-500 mr-2" size={18} />
//             <input
//               type="text"
//               placeholder="Search grooming packages..."
//               className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
//             />
//             <select className="ml-3 px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-orange-500 focus:outline-none">
//               <option>Dog</option>
//               <option>Cat</option>
//             </select>
//           </div>

//           {/* Right Section */}
//           <div className="hidden md:flex items-center gap-6">
//             {/* Location */}
//             <button
//               onClick={() => setModalOpen(true)}
//               className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
//             >
//               <MapPin size={16} className="text-orange-600" />
//               {pincode || "Enter Pincode"}
//             </button>

//             {/* User or Auth */}
//             {userData ? (
//               <div
//                 className="relative"
//                 onClick={(e) => e.stopPropagation()} // prevent outside click close
//               >
//                 <button
//                   onClick={() => setMenuOpen((prev) => !prev)}
//                   className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600"
//                 >
//                   <img
//                     src={user.avatar}
//                     alt={user.name}
//                     className="w-8 h-8 rounded-full border border-orange-200"
//                   />
//                   <span>{user.name}</span>
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform ${
//                       menuOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {menuOpen && (
//                   <div className="absolute right-0 mt-3 w-48 bg-white border border-orange-100 rounded-xl shadow-xl py-2 z-50">
//                     <Link
//                       to="/MyProfile"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
//                     >
//                       My Profile
//                     </Link>
//                     <Link
//                       to="/my-bookings"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
//                     >
//                       My Bookings
//                     </Link>
//                     <Link
//                       to="/settings"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
//                     >
//                       Settings
//                     </Link>
//                     <hr className="my-1 border-orange-100" />
//                     <button
//                       disabled={isPending}
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-orange-50 hover:text-red-700 transition"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex rounded-full border border-orange-500 overflow-hidden text-sm font-medium">
//                 <Link
//                   to="/signin"
//                   className="px-4 py-2 text-orange-600 hover:bg-orange-50 transition"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 transition"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Pincode Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999]">
//           <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 animate-fadeIn">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Enter Your Pincode
//             </h2>
//             <p className="text-sm text-gray-500 mb-4">
//               We’ll show nearby grooming centers and services.
//             </p>
//             <input
//               type="text"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               placeholder="e.g. 221002"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//             />
//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Search, ChevronDown, Menu, X } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "@/features/authentication/queryFunction";
import { logoutUser } from "@/features/authentication/mutateFunction";
import toast from "react-hot-toast";
import queryClient from "@/store/queryClient";
import { GlobalContext } from "@/store/context";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pincode, setPincode] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();

  const { isPending, data: userData } = useQuery({
    queryKey: ["userData"],
    queryFn: getLoggedInUser,
  });

  const { mutate } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["userData"] });
      isLoggedIn.current = false;
      toast.success("Logged out successfully");
      navigate("/");
    },
    onError: () => toast.error("Something went wrong"),
  });

  const handleLogout = () => mutate();

  const user = {
    name: userData?.user?.name || "Guest",
    avatar:
      userData?.user?.avatar ||
      "https://ui-avatars.com/api/?name=Petlinc&background=ea580c&color=fff",
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setMenuOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="flex flex-col leading-tight group hover:opacity-90 transition"
          >
            <span className="flex items-center gap-2 text-2xl font-extrabold text-orange-600 font-brand">
              🐾 Petlinc
            </span>
            <span className="text-xs text-gray-500 italic group-hover:text-orange-600 transition">
              Because They’re Family Too
            </span>
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 w-1/2 border border-gray-200 focus-within:ring-2 focus-within:ring-orange-500">
            <Search className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search grooming packages..."
              className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <select className="ml-3 px-3 py-1 text-sm rounded-full bg-white border border-gray-300 focus:ring-orange-500 focus:outline-none">
              <option>Dog</option>
              <option>Cat</option>
            </select>
          </div>

          {/* RIGHT SECTION (DESKTOP) */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              <MapPin size={16} className="text-orange-600" />
              {pincode || "Enter Pincode"}
            </button>

            {userData ? (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border border-orange-200"
                  />
                  <span>{user.name}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white border border-orange-100 rounded-xl shadow-lg py-2 z-50 animate-fadeIn">
                    <Link
                      to="/MyProfile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/my-bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      My Bookings
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      Settings
                    </Link>
                    <hr className="my-1 border-orange-100" />
                    <button
                      onClick={handleLogout}
                      disabled={isPending}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-orange-50 hover:text-red-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
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
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-orange-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 shadow-md animate-slideDown px-5 py-4 space-y-4">
            {/* Search */}
            <div className="flex items-center bg-gray-50 rounded-full px-3 py-2 border border-gray-200">
              <Search className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent flex-1 outline-none text-sm text-gray-700"
              />
            </div>

            {/* Location */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              <MapPin size={16} className="text-orange-600" />
              {pincode || "Enter Pincode"}
            </button>

            {/* Auth Section */}
            {userData ? (
              <>
                <Link
                  to="/MyProfile"
                  className="block text-sm text-gray-700 hover:text-orange-600"
                >
                  My Profile
                </Link>
                <Link
                  to="/my-bookings"
                  className="block text-sm text-gray-700 hover:text-orange-600"
                >
                  My Bookings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-sm text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/signin"
                  className="flex-1 py-2 text-center border border-orange-500 rounded-full text-orange-600 hover:bg-orange-50 transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 py-2 text-center bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* PINCODE MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999]">
          <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 p-6 animate-fadeIn">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Enter Your Pincode
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              We’ll show nearby grooming centers and services.
            </p>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="e.g. 221002"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
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
