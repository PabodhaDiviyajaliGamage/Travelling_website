import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { TravelContext } from "../../Context/TravelContext";

import {
  FaMapMarkerAlt,
  FaStar,
  FaAddressBook,
  FaPhoneAlt,
} from "react-icons/fa";
import Villa from "../villas/Villa";
import Recomend from "./recomend";

const Trending = () => {
  const { navigate, addtrend } = useContext(TravelContext);
  const { name } = useParams();
  const item = addtrend.find((trending) => trending.name === name);

  if (!item) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white">
      <p className="w-full h-16"></p>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        `}
      </style>

      {/* Top Spacing */}
      <div className="h-24 w-full"></div>

      {/* ---------- Title Section ---------- */}
      <div className="flex flex-row items-center gap-4 sm:gap-6 ml-4 sm:ml-8 mb-8 animate-fade-in">
        <IoArrowBackOutline
          className="text-white size-8 cursor-pointer hover:text-amber-300 hover:scale-110 transition-all duration-300"
          onClick={() => navigate("/")}
        />
        <h1 className="prata-regular text-3xl sm:text-4xl text-amber-300 font-bold tracking-wide">
          {item.name}
        </h1>
        <h2 className="prata-regular text-2xl sm:text-3xl text-green-300 italic">
          ({item.subname})
        </h2>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 px-4 sm:px-8">
        {/* ---------- LEFT SIDE: Description ---------- */}

        <div className="w-full lg:w-1/2 animate-fade-in ml-8">
          <div className="flex flex-col gap-4 mb-6 ml-4 text-white animate-fade-in">
            {/* Location */}
            <div className="flex flex-row items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-lg" />
              <span className="font-semibold text-gray-300">Location:</span>
              <span className="text-blue-200">{item.location}</span>
            </div>

            {/* Highlights */}
            <div className="flex flex-row items-center gap-3">
              <FaStar className="text-yellow-400 text-lg" />
              <span className="font-semibold text-gray-300">Highlights:</span>
              <span className="text-blue-200">
                {item.highlights}
              </span>
            </div>

            {/* Address */}
            <div className="flex flex-row items-center gap-3">
              <FaAddressBook className="text-emerald-400 text-lg" />
              <span className="font-semibold text-gray-300">Address:</span>
              <span className="text-blue-200">{item.address}</span>
            </div>

            {/* Contact */}
            <div className="flex flex-row items-center gap-3">
              <FaPhoneAlt className="text-red-400 text-lg" />
              <span className="font-semibold text-gray-300">Contact:</span>
              <span className="text-blue-200">{item.contact}</span>
            </div>
          </div>


{/*----------------------------description */}

       <div className="mb-10 ml-4">
          <h1 className=" text-xl sm:text-2xl  mt-10 text-green-500">About This Resort</h1>
          <p className="text-gray-200 text-base sm:text-m leading-relaxed mt-4">
              {item.description}
          </p>
        </div>
         
       <div className="mt-6 ml-4 text-white">
          <h1 className="text-xl sm:text-2xl mt-6 mb-4 text-amber-100 font-semibold">
            Here are the things available:
          </h1>

          {/* This is the key change: Using .map() for dynamic rendering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.availableThings.map((thing, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p>{thing}</p>
              </div>
            ))}
          </div>
          {/* End of map() usage */}
        </div>

        </div>

        {/* ---------- RIGHT SIDE: Image Gallery ---------- */}
        <div className="w-full lg:w-1/2 space-y-10">

     
          {/* Main Image */}
          <div className="relative group">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-2xl transition-all duration-500"></div>
          </div>

          {/* ---------- Collage Section ---------- */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 animate-fade-in">
            {/* Large Image */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
              <img
                src={item.image1}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Small Images */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={item.image2}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={item.image3}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* View Photos Overlay */}
            <div className="col-span-2 relative group overflow-hidden rounded-2xl">
              <img
                src={item.image4}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
               
              </div>
            </div>

            {/* Final Small Images */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={item.image5}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={item.image6}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
       
      <div className="h-24"></div>
      <Recomend/>
    </div>
  );
};

export default Trending;