import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Testimonials() {

  const {isPending, reviews:review1} = useQuery({
   queryKey:['reviews'],
   queryFn:async function(){
       const data = await axios({
        method:"GET",
        url:"http://localhost:4000/api/v1/reviews/get-all-reviews",
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
       })
       console.log(data)
       return data;
   },
   onSuccess:(data)=>{
    console.log(data);
   },
   onError:(err)=>{
    console.log(err)
   }
  })
  
  const reviews = [
    {
      name: "Anjali Sharma",
      pet: "Dog (Bruno)",
      review:
         "Petlinc made it so easy to book a grooming session. The groomers were professional and Bruno looked amazing after his spa day!",
       
      rating: 5,
      review1
      
    },
    {
      name: "Rahul Verma",
      pet: "Cat (Mittens)",
      review:
        "I was worried about grooming my cat, but Petlinc’s partner center handled Mittens so gently. Definitely booking again!",
      rating: 4,
    },
    {
      name: "Priya Singh",
      pet: "Dog (Simba)",
      review:
        "The booking process was smooth, and the grooming center was top-notch. Simba came back super clean and happy!",
      rating: 5,
    },
  ];

 
   
  return (
    <section className="bg-gray-50 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          What Pet Parents Say ❤️
        </h2>
        <p className="mt-2 text-gray-600">
          Real stories from happy pets and their families
        </p>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-6 text-left"
            >
              {/* Stars */}
              <div className="flex text-yellow-500 mb-3">
                {Array(r.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-500" />
                  ))}
              </div>
              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                “{r.review}”
              </p>
              {/* User Info */}
              <div>
                <p className="font-semibold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-500">{r.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
