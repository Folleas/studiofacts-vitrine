import Link from 'next/link';
import React, { useEffect } from 'react';

export default function FullScreenVideoTextOverlay() {
  useEffect(() => {
    // Check if window is defined (ensuring code runs in the browser)
    if (typeof window !== 'undefined') {
      const video: any = document.getElementById('background-video');
      if (video) {
        video.play();
      }
    }
  }, []);
  return (
    <div id={"splash"} className="h-[30vh] md:h-screen relative w-screen">
      <div className="h-[30vh] md:h-screen relative w-full">
        <video
          id="background-video"
          loop
          playsInline
          autoPlay
          muted
          controls={false}
          className="absolute w-full h-full object-cover z-0"
        >
          <source src={'/pres.mp4'} type="video/mp4" />
          Your browser does not support the video tag or the file format of this video.
        </video>
        {/* Conditionally render the gradients based on screen size */}
        <div className="absolute inset-y-0 left-0 w-full lg:bg-gradient-to-b from-transparent from-50% via-[rgba(30,36,40,0.5)] via-85% to-[rgba(30,36,40,1)] to-100%"></div>
        {/* <div className="absolute inset-y-0 right-0 w-1/4 lg:bg-gradient-to-l from-[#1e2428] via-black to-transparent"></div> */}
        <div className="absolute invisible md:visible bottom-[5%] text-white text-center w-full pb-4">
          <button onClick={() => {
            const splashDiv = document.getElementById('splash');
            if (splashDiv) {
              window.scrollTo({
                top: splashDiv.offsetHeight - 100,
                behavior: 'smooth',
              });
            }
          }}>
            Nous découvrir
          </button>
        </div>
      </div>
      <div className="h-[3vh] bg-gradient-to-b from-[#1e2428] to-transparent"></div>
    </div>
  );
}
