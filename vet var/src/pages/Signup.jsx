// import { Link, redirect, useNavigate } from "react-router-dom";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import axios from "axios"
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";
// import queryClient from "@/store/queryClient";

// export default function Signup() {

//   const navigate = useNavigate();
//   const {register, handleSubmit} = useForm();


//   const {isPending, mutate} = useMutation({
//     mutationFn: async function({name, email, password, passwordConfirm}){
//       const data = await axios({
//         method:"POST",
//         url:"http://localhost:4000/api/v1/users/signup",
//         headers:{
//           'Content-Type':"application/json",
          
//         },
//         data:{  
//           name, 
//           email,
//           password,
//           passwordConfirm

//         }, 
//         withCredentials:true
//       })
      
//       return data
      
//     },
//     onSuccess:(data)=>{
//        queryClient.invalidateQueries(["userData"]);
//       navigate('/')
//       toast.success("User created");
//     },
//     onError:(err)=>{  
//       toast.error(err.response.data.message) 
//     }
//   })


//     function onSubmit(data){
   
//       mutate(data);
    
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-md w-full bg-white shadow-md rounded-xl p-8">
//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-extrabold text-orange-600">🐾 Petlinc</h1>
//           <p className="text-sm text-gray-500">Because They’re Family Too.</p>
//         </div>

//         {/* Heading */}
//         <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
//           Create a Petlinc Account
//         </h2>

//         {/* Form */}
//         <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               required
              
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//               placeholder="John Doe"
//               {...register("name")}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               required
              
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//           </div>
         
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               required
             
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//               placeholder="********"
//               {...register("password")}
//             />
//           </div>
//            <div>
//             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               required
             
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//               placeholder="********"
//               {...register("passwordConfirm")}
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled = {register.email === ""}
//             className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
           
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Extra Links */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/signin" className="text-orange-600 font-medium hover:underline">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Link, useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import queryClient from "@/store/queryClient";
// import { Loader2 } from "lucide-react";

// export default function Signup() {
//   const navigate = useNavigate();
//   const { register, handleSubmit, reset } = useForm();

//   const { isPending, mutate } = useMutation({
//     mutationFn: async function ({ name, email, password, passwordConfirm }) {
//       const res = await axios({
//         method: "POST",
//         url: "http://localhost:4000/api/v1/users/signup",
//         headers: { "Content-Type": "application/json" },
//         data: { name, email, password, passwordConfirm },
//         withCredentials: true,
//       });
//       return res.data;
//     },
//     onSuccess: (data) => {
//       queryClient.invalidateQueries(["userData"]);
//       toast.success("Account created successfully 🎉");
//       reset();
//       navigate("/");
//     },
//     onError: (err) => {
//       toast.error(err.response?.data?.message || "Signup failed");
//     },
//   });

//   function onSubmit(data) {
//     mutate(data);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-50 px-4">
//       <div className="max-w-md w-full bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-orange-100 relative overflow-hidden">
//         {/* Top glowing blob */}
//         <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/20 blur-3xl rounded-full -z-10"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100/30 blur-3xl rounded-full -z-10"></div>

//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-extrabold text-orange-600 tracking-tight">
//             🐾 Petlinc
//           </h1>
//           <p className="text-sm text-gray-500 italic">
//             Because They’re Family Too.
//           </p>
//         </div>

//         {/* Heading */}
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//           Create Your Petlinc Account
//         </h2>

//         {/* Form */}
//         <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
//               placeholder="John Doe"
//               {...register("name")}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
//                 placeholder="********"
//                 {...register("password")}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition"
//                 placeholder="********"
//                 {...register("passwordConfirm")}
//               />
//             </div>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isPending}
//             className={`w-full py-2.5 font-semibold rounded-lg text-white transition-all flex justify-center items-center gap-2 ${
//               isPending
//                 ? "bg-orange-400 cursor-not-allowed"
//                 : "bg-orange-600 hover:bg-orange-700 shadow-sm hover:shadow-md"
//             }`}
//           >
//             {isPending ? (
//               <>
//                 <Loader2 className="w-5 h-5 animate-spin" /> Creating Account...
//               </>
//             ) : (
//               "Sign Up"
//             )}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 border-t border-gray-200"></div>

//         {/* Extra Links */}
//         <div className="text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link
//             to="/signin"
//             className="text-orange-600 font-medium hover:underline"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import queryClient from "@/store/queryClient";
import { PawPrint, Loader2 } from "lucide-react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const { isPending, mutate } = useMutation({
    mutationFn: async ({ name, email, password, passwordConfirm }) => {
      const res = await axios({
        method: "POST",
        url: `${BASE_URL}/api/v1/users/signup`,
        headers: { "Content-Type": "application/json" },
        data: { name, email, password, passwordConfirm },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userData"]);
      toast.success("Account created successfully 🎉");
      reset();
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response?.data?.message || "Signup failed");
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-gradient-to-br from-orange-100 via-white to-orange-50 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-orange-300 rounded-full blur-3xl opacity-20"></div>

      {/* Floating Paw Prints */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <PawPrint className="absolute top-10 left-10 w-10 h-10 text-orange-400 animate-float-slow" />
        <PawPrint className="absolute bottom-20 right-16 w-12 h-12 text-orange-300 animate-float-slow delay-500" />
        <PawPrint className="absolute top-1/3 right-32 w-9 h-9 text-orange-200 animate-float-slow delay-700" />
      </div>

      {/* Illustration */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 animate-fadeIn">
        <img
          src="/hero-section-pic.png"
          alt="Cute pets"
          className="w-[380px] drop-shadow-2xl animate-float"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-orange-700">
          Join the Petlinc Family 🐶🐱
        </h2>
        <p className="text-gray-600 mt-2 text-center max-w-md leading-relaxed">
          Discover the easiest way to book trusted pet grooming and wellness
          services near you.
        </p>
      </div>

      {/* Sign Up Card */}
      <div className="w-full md:w-[420px] bg-white/90 backdrop-blur-xl border border-orange-100 rounded-3xl shadow-xl p-8 relative z-10 transform transition-all hover:shadow-orange-100/60 hover:-translate-y-[2px] animate-fadeUp">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full shadow-md">
            <PawPrint className="text-orange-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-orange-600 mt-4">
            Petlinc
          </h1>
          <p className="text-sm text-gray-500">
            Because They’re Family Too ❤️
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              {...register("name")}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              {...register("email")}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                {...register("password")}
                placeholder="********"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                required
                {...register("passwordConfirm")}
                placeholder="********"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-2.5 rounded-xl font-semibold text-white shadow-md transition-all flex justify-center items-center gap-2 ${
              isPending
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:scale-[1.02]"
            }`}
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Signup */}
          <button
            type="button"
            className="w-full py-2 border border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-gray-700 font-medium"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </form>

        {/* Sign In Redirect */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-orange-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
