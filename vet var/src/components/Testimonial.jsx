// import { Star } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export default function Testimonials() {

//   const {isPending, reviews:review1} = useQuery({
//    queryKey:['reviews'],
//    queryFn:async function(){
//        const data = await axios({
//         method:"GET",
//         url:"http://localhost:4000/api/v1/reviews/get-all-reviews",
//         headers:{
//           'Content-Type':'application/json'
//         },
//         withCredentials:true
//        })
//        console.log(data)
//        return data;
//    },
//    onSuccess:(data)=>{
//     console.log(data);
//    },
//    onError:(err)=>{
//     console.log(err)
//    }
//   })
  
//   const reviews = [
//     {
//       name: "Anjali Sharma",
//       pet: "Dog (Bruno)",
//       review:
//          "Petlinc made it so easy to book a grooming session. The groomers were professional and Bruno looked amazing after his spa day!",
       
//       rating: 5,
//       review1
      
//     },
//     {
//       name: "Rahul Verma",
//       pet: "Cat (Mittens)",
//       review:
//         "I was worried about grooming my cat, but Petlinc’s partner center handled Mittens so gently. Definitely booking again!",
//       rating: 4,
//     },
//     {
//       name: "Priya Singh",
//       pet: "Dog (Simba)",
//       review:
//         "The booking process was smooth, and the grooming center was top-notch. Simba came back super clean and happy!",
//       rating: 5,
//     },
//   ];

 
   
//   return (
//     <section className="bg-gray-50 py-20 mt-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-2xl font-bold text-gray-900">
//           What Pet Parents Say ❤️
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Real stories from happy pets and their families
//         </p>

//         {/* Testimonials Grid */}
//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {reviews.map((r, idx) => (
//             <div
//               key={idx}
//               className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-6 text-left"
//             >
//               {/* Stars */}
//               <div className="flex text-yellow-500 mb-3">
//                 {Array(r.rating)
//                   .fill(0)
//                   .map((_, i) => (
//                     <Star key={i} className="size-5 fill-yellow-500" />
//                   ))}
//               </div>
//               {/* Review */}
//               <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                 “{r.review}”
//               </p>
//               {/* User Info */}
//               <div>
//                 <p className="font-semibold text-gray-900">{r.name}</p>
//                 <p className="text-sm text-gray-500">{r.pet}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Star, PawPrint } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Testimonials() {
  // Fetch reviews
  const { data, isPending, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: "http://localhost:4000/api/v1/reviews/get-all-reviews",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return res.data?.reviews || [];
    },
  });

  // Fallback demo reviews (until backend connects)
  const fallbackReviews = [
    {
      name: "Anjali Sharma",
      pet: "Dog (Bruno)",
      review:
        "Petlinc made it so easy to book a grooming session. The groomers were professional and Bruno looked amazing after his spa day!",
      rating: 5,
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

  const reviews = data?.length ? data : fallbackReviews;

  return (
    <section className="relative bg-gradient-to-b from-orange-50 via-white to-orange-50  overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute -top-20 -left-10 w-80 h-80 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-100/40 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center bg-orange-100 w-16 h-16 rounded-full shadow-sm mb-4">
            <PawPrint className="text-orange-600 w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Pet Parents Say ❤️
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Real stories from happy pets and their loving families 🐶🐱
          </p>
        </div>

        {/* Loading State */}
        {isPending && (
          <div className="text-gray-500 text-sm mt-6">Fetching reviews...</div>
        )}

        {/* Error State */}
        {error && (
          <p className="text-red-500 mt-6 text-sm">
            Failed to load testimonials. Please try again later.
          </p>
        )}

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-orange-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-left flex flex-col justify-between"
            >
              {/* Decorative quote mark */}
              <span className="absolute text-orange-100 text-8xl font-serif -top-6 right-6 select-none">
                ”
              </span>

              {/* Star rating */}
              <div className="flex text-yellow-500 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                “{r.review}”
              </p>

              {/* User info */}
              <div className="mt-auto pt-4 border-t border-orange-100">
                <p className="font-semibold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-500">{r.pet}</p>
              </div>

              {/* Floating paw icon */}
              <div className="absolute -bottom-5 -left-5 bg-orange-600 text-white rounded-full p-3 shadow-md">
                <PawPrint className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-16 mx-auto w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
      </div>
    </section>
  );
}
