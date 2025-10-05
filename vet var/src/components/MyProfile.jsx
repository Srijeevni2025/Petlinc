// export default function MyProfile() {
//   const profile = {
//     name: "Rajan",
//     phone: "9876543210",
//     email: "",
//     address: "",
//     gender: "",
//     dob: "",
//     profileComplete: 40,
//   };

//   const pets = [
//     { id: 1, name: "Bruno", species: "Dog", breed: "Labrador", age: "2 yrs" },
//     { id: 2, name: "Kitty", species: "Cat", breed: "Persian", age: "1 yr" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-slate-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-sm border-r border-slate-200 hidden md:flex flex-col">
//         <div className="h-16 flex items-center px-6 border-b border-slate-200">
//           <span className="text-xl font-bold text-orange-600">🐾 VetCare</span>
//         </div>
//         <nav className="flex-1 p-4 space-y-2 text-sm">
//           <a className="block px-3 py-2 rounded-md bg-orange-50 text-orange-700 font-medium">
//             Profile
//           </a>
//           <a className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
//             Pets
//           </a>
//           <a className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
//             Bookings
//           </a>
//           <a className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
//             Reports
//           </a>
//           <a className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
//             Settings
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 md:p-10 space-y-8">
//         {/* Header */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold text-slate-800">{profile.name}</h2>
//             <p className="text-slate-500">{profile.phone}</p>
//             <div className="mt-3 w-64">
//               <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-2 bg-orange-500"
//                   style={{ width: `${profile.profileComplete}%` }}
//                 />
//               </div>
//               <p className="text-xs text-slate-500 mt-1">
//                 Profile {profile.profileComplete}% complete
//               </p>
//             </div>
//           </div>
//           <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm font-medium">
//             Edit Profile
//           </button>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Personal Info */}
//           <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//             <h3 className="text-lg font-semibold text-slate-800 mb-4">
//               Personal Information
//             </h3>
//             <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">
//               <div>
//                 <p className="text-slate-500 mb-1">Email</p>
//                 <p className="text-slate-800">
//                   {profile.email || <span className="italic text-slate-400">Not provided</span>}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-slate-500 mb-1">Address</p>
//                 <p className="text-slate-800">
//                   {profile.address || <span className="italic text-slate-400">Not provided</span>}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-slate-500 mb-1">Gender</p>
//                 <p className="text-slate-800">
//                   {profile.gender || <span className="italic text-slate-400">Not provided</span>}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-slate-500 mb-1">Date of Birth</p>
//                 <p className="text-slate-800">
//                   {profile.dob || <span className="italic text-slate-400">Not provided</span>}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div className="space-y-6">
//             <button className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-800 font-medium hover:bg-slate-50 transition">
//               My Bookings
//             </button>
//             <button className="w-full h-24 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-800 font-medium hover:bg-slate-50 transition">
//               My Reports
//             </button>
//           </div>
//         </div>

//         {/* Pets Section */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-slate-800">Pet Profiles</h3>
//             <button className="px-4 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-md text-sm font-medium">
//               + Add Pet
//             </button>
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             {pets.map((pet) => (
//               <div
//                 key={pet.id}
//                 className="p-4 border border-slate-200 rounded-lg bg-slate-50"
//               >
//                 <h4 className="font-medium text-slate-800">{pet.name}</h4>
//                 <p className="text-sm text-slate-600">
//                   {pet.species} • {pet.breed} • {pet.age}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         {profile.profileComplete < 100 && (
//           <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
//             <p className="text-slate-700 font-medium mb-4">
//               Complete your profile to continue booking veterinary tests
//             </p>
//             <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium">
//               Complete Now
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "@/features/authentication/queryFunction";

export default function MyProfile() {


  const {data:userData} = useQuery({
    queryKey:["userData"],
    queryFn:getLoggedInUser
  })
  console.log(userData.user);
  const profile = {
    name: "Rajan",
    phone: "9876543210",
    email: "",
    address: "",
    gender: "",
    dob: "",
    profileComplete: 60,
  };

  const pets = [
    { id: 1, name: "Bruno", species: "Dog", breed: "Labrador", age: "2 yrs" },
    { id: 2, name: "Kitty", species: "Cat", breed: "Persian", age: "1 yr" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r border-slate-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <span className="text-xl font-bold text-orange-600">🐾 Petlinc</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 text-sm">
          <Link className="block px-3 py-2 rounded-md bg-orange-50 text-orange-700 font-medium">
            Profile
          </Link>
          <Link className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
            Pets
          </Link>
          <Link className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
            Bookings
          </Link>
          <Link className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-scroll">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              {userData?.user?.name}
            </h2>
            <p className="text-slate-500">{profile.phone}</p>
            <div className="mt-3 w-64">
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-orange-500"
                  style={{ width: `${profile.profileComplete}%` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Profile {profile.profileComplete}% complete
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm font-medium">
            Edit Profile
          </button>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Personal Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 text-sm">
            <div>
              <p className="text-slate-500 mb-1">Email</p>
              <p className="text-slate-800">
                {userData.user.email || (
                  <span className="italic text-slate-400">Not provided</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Address</p>
              <p className="text-slate-800">
                {profile.address || (
                  <span className="italic text-slate-400">Not provided</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Gender</p>
              <p className="text-slate-800">
                {profile.gender || (
                  <span className="italic text-slate-400">Not provided</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Date of Birth</p>
              <p className="text-slate-800">
                {profile.dob || (
                  <span className="italic text-slate-400">Not provided</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Pets Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">
              Pet Profiles
            </h3>
            <button className="px-4 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-md text-sm font-medium">
              + Add Pet
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="p-4 border border-slate-200 rounded-lg bg-slate-50"
              >
                <h4 className="font-medium text-slate-800">{pet.name}</h4>
                <p className="text-sm text-slate-600">
                  {pet.species} • {pet.breed} • {pet.age}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {profile.profileComplete < 100 && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center">
            <p className="text-slate-700 font-medium mb-4">
              Complete your profile to continue booking grooming services
            </p>
            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium">
              Complete Now
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
