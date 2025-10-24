import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { TravelContext } from "../../Context/TravelContext";
import axios from "axios";
import { BACKEND_URL } from "../../App";

const Recomend = () => {
  const { navigate, addtrend, setaddtrend } = useContext(TravelContext);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/trending/trenddata`)
      .then((res) => setaddtrend(res.data))
      .catch((err) => console.error(err));
  }, [setaddtrend]);

  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    autoplay0: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "60px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <section className="w-full py-16 overflow-hidden ">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] ">
        <Slider {...settings}>
          {addtrend.map((item, index) => (
            <div key={index} className="px-4 w-64">
              <div
                onClick={() => navigate(`/trending/${item.name}`)}
                className="relative rounded-2xl overflow-hidden cursor-pointer bg-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />
                {/* Location Tag */}
                <div className=" absolute top-4 left-4 bg-white/80 text-gray-800 text-sm font-medium px-2 py-1 rounded-full flex items-center">
                  <span className="mr-1 w-4 h-4 rounded-full bg-green-500"></span> {item.name || "unawatuna"}
                </div>
                {/* Card Content */}
                <div className=" flex  items-center justify-between gap-4 mr-2 ml-4 mb-4 ">
                  
                  <div className="flex-col items-center text-yellow-500 text-sm mt-1">
                     <p className="text-gray-600 text-sm mt-1">Starting from</p>
                  <p className="text-lg font-bold text-gray-900">LKR {item.price || "14000"}/night</p>
                   
                    <span className="ml-2 text-gray-600">(4.8) Rate</span>
                  </div>
                 

                 <div className="flex">
                          <button className="mt-2 w-full bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-800 transition">
                    View Details
                  </button>
                 </div>
                
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Recomend;