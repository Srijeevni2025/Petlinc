import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {GlobalContext} from "./../store/context"


export default function SignIn() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();

  
 
  const {isPending, mutate} = useMutation({
    mutationFn:async function({email, password}){
        const res = await axios({
          method:"POST",
          url:"http://localhost:4000/api/v1/users/login",
          headers:{
            'Content-Type':'application/json'
          },
          data:{
            email,
            password
          },
          withCredentials:true
        })
        return res.data;
    },
    onSuccess:(data)=>{
      
      toast.success("Logged in");
      navigate('/')
    },
    onError:(err)=>{
      toast.error(err.message)
    }
  })
 async function onSubmit(data){
  
  await mutate({email:data.email, password:data.password})
 }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-xl p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-orange-600">🐾 Petlinc</h1>
          <p className="text-sm text-gray-500">Because They’re Family Too.</p>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Sign In to Your Account
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="you@example.com"
              {...register("email", {value :"test@gmail.com"})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="********"
              {...register("password",{value :"rajan1"})}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
