import React, { useContext, useEffect } from "react";
import { TravelContext } from "../../Context/TravelContext";
import axios from "axios";
import { BACKEND_URL } from "../../App";
import { AiFillStar } from "react-icons/ai";


const Villa = () => {
  const { navigate, addtrend, setaddtrend } = useContext(TravelContext);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/trending/trenddata`)
      .then((res) => setaddtrend(res.data))
      .catch((err) => console.error(err));
  }, [setaddtrend]);

  return (
    <div className="relative">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-card {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          .animate-card:nth-child(1) { animation-delay: 0.1s; }
          .animate-card:nth-child(2) { animation-delay: 0.2s; }
          .animate-card:nth-child(3) { animation-delay: 0.3s; }
          .animate-card:nth-child(4) { animation-delay: 0.4s; }
        `}
      </style>

      <p className="h-48 w-full"></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mr-4 ml-4">
        {addtrend.map((item, index) => (
          <div
            key={index}
            className="px-4 w-full max-w-sm mx-auto animate-card"
          >
            <div
              onClick={() => navigate(`/trending/${item.name}`)}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-amber-200 shadow-lg 
                hover:shadow-2xl transition-all duration-500 
                hover:scale-105 hover:brightness-105"
            >
              {/* Image with overlay effect */}
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* Location Tag with pulse effect */}
              <div className="absolute top-4 left-4 bg-white/80 text-gray-800 text-sm font-medium px-2 py-1 rounded-full flex items-center 
                hover:scale-110 transition-transform duration-300">
                <span className="mr-1 w-4 h-4 rounded-full bg-green-500 animate-pulse"></span>
                {item.name || "unawatuna"}
              </div>

              {/* Card Content */}
              <div className="flex items-center justify-between gap-4 mr-2 ml-4 mb-4 mt-2">
                <div className="flex-col items-center text-yellow-500 text-sm">
                
                 
               
<span className="ml-2 flex items-center gap-1 text-yellow-400">
  <AiFillStar />
  <AiFillStar />
  <AiFillStar />
  <AiFillStar />
  <AiFillStar />
</span>
                </div>

                <div className="flex">
                  <button
                    className="mt-2 w-full bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium 
                      hover:bg-emerald-800 hover:scale-105 transition-all duration-300 active:scale-95"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villa;