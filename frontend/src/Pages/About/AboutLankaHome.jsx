import React from "react";

const AboutLankaHome = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 w-full text-gray-800/ outfit-regular">
      <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-10 w-full transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side: Description */}
          <div className="md:w-1/2 text-gray-700 text-sm sm:text-base">
            <p>
              Nade Villas and Tours is a unique tour operator in Sri Lanka offering unforgettable travel memories. Lanka Exploration Travel and Tours is a well-established tour company run by a National Tourist Guide Lecturer, registered under the Tourism Development Authority in Sri Lanka. With over 8 years of experience in organizing and planning great Sri Lanka tours, we provide tailor-made and themed itineraries at competitive rates to ensure travelers’ expectations are exceeded.
            </p>
          </div>

          {/* Vertical line */}
          <div className="hidden md:block w-[1px] bg-gray-300"></div>

          {/* Right side: Vision & Mission */}
          <div className="md:w-1/2 text-gray-700 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base">
              To satisfy travelers by providing excellent service customized to their needs.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-4 mb-2">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base">
              To give priority to customer needs through ethical practices and flexible adjustments to pre-arranged packages, targeting ultimate customer satisfaction while appreciating our social responsibilities as a trusted corporate citizen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLankaHome;
