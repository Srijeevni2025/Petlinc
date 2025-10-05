import { Link } from "react-router-dom"

function HomePageHeroSection(){
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                    Premium Grooming Packages for Dogs & Cats 🐶🐱
                  </h1>
                  <p className="mt-3 text-2xl font-semibold text-orange-600">
                    Because They’re Family Too.
                  </p>
                  <p className="mt-6 text-lg text-gray-600 max-w-lg">
                    Choose from curated grooming packages designed for your pet’s comfort and hygiene. 
                    Gentle care, trusted groomers, and stress-free booking.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <Link
                      to="/grooming"
                      className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
                    >
                      Book Now
                    </Link>
                    <Link
                      to="grooming-packages"
                      className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                    
        
                    alt="Pet Grooming"
                    className="w-3/4 mx-auto"
                  />
                </div>
              </section>
    )
}


export default HomePageHeroSection