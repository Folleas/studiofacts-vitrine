import React from 'react';

export default function FullScreenVideoTextOverlay() {
  return (
      <div className="h-[90vh] relative w-full">
      <div className="h-[87vh] relative w-full">
        <video
          id="background-video"
          loop
          autoPlay
          muted
          className="absolute w-full h-full object-contain z-0"
        >
          <source src={'/pres.mp4'} type="video/mp4" />
        </video>
        {/* Conditionally render the gradients based on screen size */}
        <div className="absolute inset-y-0 left-0 w-1/4 lg:bg-gradient-to-r from-[#1e2428] via-black to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 lg:bg-gradient-to-l from-[#1e2428] via-black to-transparent"></div>

        {/* New centered instruction */}
        <div className="absolute bottom-0 text-white text-center w-full pb-4">
          <p className="text-xs xl:text-2xl">
            STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu d’histoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.
          </p>
          {/* <button><p>V</p></button> */}
        </div>
      </div>
      <div className="h-[3vh] bg-gradient-to-b from-[#1e2428] to-transparent"></div>
    </div>
  );
}
