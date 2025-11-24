// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { Link, replace, useLocation, useNavigate } from "react-router-dom";
// import {GlobalContext} from "./../store/context"
// import queryClient from "@/store/queryClient";

// export default function SignIn() {
//   const navigate = useNavigate();
//   const {register, handleSubmit} = useForm();
//   const {isLoggedIn} = useContext(GlobalContext);

  
//   const location = useLocation();
//   const from = location.state?.from || "/";  // this we extract to get the l 
  

//   const {isPending, mutate} = useMutation({
//     mutationFn:async function({email, password}){
//         const res = await axios({
//           method:"POST",
//           url:"http://localhost:4000/api/v1/users/login",
//           headers:{
//             'Content-Type':'application/json'
//           },
//           data:{
//             email,
//             password
//           },
//           withCredentials:true
//         })
//         return res.data;
//     },
//     onSuccess:async (userData)=>{

//       /// we are doing it like this because there was a race condition. JWT cookies were not set so in protected route it was getting redirected to navigate again and again till jwt was set
//       queryClient.setQueryData(["userData", userData ])
//       await new Promise((r)=>setTimeout(r, 300)); // giving time for the cookies to be set
//       await queryClient.invalidateQueries({queryKey:["userData"]});
//       toast.success("Logged in");
//       isLoggedIn.current = true;
//      navigate(from, {replace:true})
      
//     },
//     onError:(err)=>{
//       toast.error(err.message)
//     }
//   })
//  async function onSubmit(data){
  
//    mutate({email:data.email, password:data.password})
  
//  }
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
//           Sign In to Your Account
//         </h2>

//         {/* Form */}
//         <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               required
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//               placeholder="you@example.com"
//               {...register("email", {value :"test@gmail.com"})}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               required
//               className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
//               placeholder="********"
//               {...register("password",{value :"rajan1"})}
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* Extra Links */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-orange-600 font-medium hover:underline">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "./../store/context";
import queryClient from "@/store/queryClient";
import { PawPrint, Loader2 } from "lucide-react";

// It only works for the variables defined with VITE as their starting point.
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL)
export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const { register, handleSubmit } = useForm();
  const { isLoggedIn } = useContext(GlobalContext);

  const { isPending, mutate } = useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await axios({
        method: "POST",
        url: `${BASE_URL}/api/v1/users/login  `,
        headers: { "Content-Type": "application/json" },
        data: { email, password },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: async (userData) => {
      queryClient.setQueryData(["userData"], userData);
      await new Promise((r) => setTimeout(r, 300));
      await queryClient.invalidateQueries({ queryKey: ["userData"] });
      toast.success("Welcome back 🐾");
      isLoggedIn.current = true;
      navigate(from, { replace: true });
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong!!!" );
    },
  });

  async function onSubmit(data) {
    mutate({ email: data.email, password: data.password });
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center relative bg-gradient-to-br from-orange-100 via-white to-orange-50 overflow-hidden">
      {/* Background Glow Circles */}
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
          Because They Deserve the Best ❤️
        </h2>
        <p className="text-gray-600 mt-2 text-center max-w-md leading-relaxed">
          Book grooming, vet visits, and more — all in one place. <br />
          Petlinc keeps tails wagging and paws happy!
        </p>
      </div>

      {/* Sign In Card */}
      <div className="w-full md:w-[420px] bg-white/90 backdrop-blur-xl border border-orange-100 rounded-3xl shadow-xl p-8 relative z-10 transform transition-all hover:shadow-orange-100/60 hover:-translate-y-[2px] animate-fadeUp">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full shadow-md">
            <PawPrint className="text-orange-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-orange-600 mt-4">
            Petlinc
          </h1>
          <p className="text-sm text-gray-500">Your Pet’s Happiness, Our Priority 🐶🐱</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              {...register("email", { value: "test@gmail.com" })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              {...register("password", { value: "rajan1" })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
              placeholder="••••••••"
            />
            <div className="flex justify-end mt-1">
              <Link
                to="/forgot-password"
                className="text-xs text-orange-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Button */}
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
                <Loader2 className="w-5 h-5 animate-spin" /> Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full py-2 border border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-gray-700 font-medium"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
