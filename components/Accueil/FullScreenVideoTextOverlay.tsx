import Link from 'next/link';
import React from 'react';

export default function FullScreenVideoTextOverlay() {
  return (
    <div className="h-[30vh] xl:h-screen relative w-screen">
      <div className="h-[30vh] xl:h-screen relative w-full">
        <video
          id="background-video"
          loop
          autoPlay
          muted
          playsInline
          className="absolute w-full h-full object-contain z-0"
        >
          <source src={'/pres.mp4'} type="video/mp4" />
          Your browser does not support the video tag or the file format of this video.
        </video>
        {/* Conditionally render the gradients based on screen size */}
        <div className="absolute inset-y-0 left-0 w-full lg:bg-gradient-to-b from-transparent from-60% to-[#1e2428] to-90%"></div>
        {/* <div className="absolute inset-y-0 right-0 w-1/4 lg:bg-gradient-to-l from-[#1e2428] via-black to-transparent"></div> */}

        {/* New centered instruction */}
        <div className="absolute bottom-0 text-white text-center w-full pb-4">
          <Link href='#VideoTextSection' className="text-xs md:text-xl xl:text-xl 2xl:text-2xl">
            V
          </Link>
          {/* <button><p>V</p></button> */}
        </div>
      </div>
      <div className="h-[3vh] bg-gradient-to-b from-[#1e2428] to-transparent"></div>
    </div>
  );
}
