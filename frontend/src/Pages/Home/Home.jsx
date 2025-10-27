import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Note: Keeping slick-carousel imports here, but still recommend moving them 
// to the root file (e.g., main.jsx) if issues persist.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "../../Components/Hero";
import Title from "../../Components/Title";
import SubTitle from "../../Components/SubTitle";
import AboutLankaHome from "../About/AboutLankaHome";
import Trending from "../../Components/Trending";
import Packages from "../../Components/Packages";
import Video from "./VideoSection";
import Gallery from "../Gallery/Gallery";

// Using CDN hosted videos
const heroVideo = "https://res.cloudinary.com/dvfdh4ps8/video/upload/v1698466744/samples/elephants.mp4";
const heroVideo1 = "https://res.cloudinary.com/dvfdh4ps8/video/upload/v1698466744/samples/sea-turtle.mp4";

const Home = () => {
  const location = useLocation();

  // Scroll to section if navigation state exists
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="bg-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Title text1={"About"} text2={"Us"} />
      <div id="special-selection">
        <AboutLankaHome />
      </div>

      {/* Trending Hotels Section - Wrapped in a specific container */}
      <SubTitle text1={"Our"} text2={"Hotels"} />
      <div className="w-full relative"> {/* Added wrapper div */}
        <Trending />
      </div>

      {/* Packages Section - Wrapped in a specific container */}
     
      <div id="packages-section" className="w-full relative"> {/* Added wrapper div */}
        <Packages />
      </div>

      {/* Video Section */}
      <Video heroVideo={heroVideo} />

      {/* Gallery Section */}
      <Title text1={"Gallery"} text2={"Section"} />
      <div id="gallery-section">
        <Gallery />
      </div>

      <Video heroVideo={heroVideo1} />
    </div>
  );
};

export default Home;