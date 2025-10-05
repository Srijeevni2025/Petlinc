import { Link, redirect, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import queryClient from "@/store/queryClient";

export default function Signup() {

  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();


  const {isPending, mutate} = useMutation({
    mutationFn: async function({name, email, password, passwordConfirm}){
      const data = await axios({
        method:"POST",
        url:"http://localhost:4000/api/v1/users/signup",
        headers:{
          'Content-Type':"application/json",
          
        },
        data:{  
          name, 
          email,
          password,
          passwordConfirm

        }, 
        withCredentials:true
      })
      
      return data
      
    },
    onSuccess:(data)=>{
       queryClient.invalidateQueries(["userData"]);
      navigate('/')
      toast.success("User created");
    },
    onError:(err)=>{  
      toast.error(err.response.data.message) 
    }
  })


    function onSubmit(data){
   
      mutate(data);
    
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
          Create a Petlinc Account
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="John Doe"
              {...register("name")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="you@example.com"
              {...register("email")}
            />
          </div>
         
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
             
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="********"
              {...register("password")}
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              required
             
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="********"
              {...register("passwordConfirm")}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled = {register.email === ""}
            className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
           
          >
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-orange-600 font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
