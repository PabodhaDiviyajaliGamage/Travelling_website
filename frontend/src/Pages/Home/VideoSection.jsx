import React, { useRef, useEffect } from "react";

const VideoSection = ({ heroVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Use Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // play when visible
          } else {
            video.pause(); // pause when not visible
          }
        });
      },
      { threshold: 0.5 } // play only when at least 50% visible
    );

    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="relative w-[200vh] h-[50vh] sm:h-[80vh] overflow-hidden bg-slate-900 items-center justify-center ml-4">
      {/* Background Video with Controls */}
      <video
        ref={videoRef}
        src={heroVideo}
        controls
        loop
        muted={false}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  );
};

export default VideoSection;
