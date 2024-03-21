"use client"
import React, { useEffect, useRef } from "react";
import { FramerAppear } from "./FramerAppear";
import FullScreenVideoTextOverlay from "./Accueil/FullScreenVideoTextOverlay";

export default function Splash() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='h-[30vh] md:h-screen flex w-screen relative overflow-hidden'>
      <div ref={parallaxRef} className='absolute w-full h-full top-0'>
        <FullScreenVideoTextOverlay />

        {/* <video autoPlay loop muted className='absolute w-full h-full object-cover'>
          <source src='/splash.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
        {/* <div className='w-full h-full flex flex-col justify-end relative z-20'>
          <div className='flex w-2/5 flex-col justify-end h-1/3'>
            <div className='2xl:text-8xl text-6xl font-bold pl-10'>
              <FramerAppear>

                Tout vos services regroupés ici
              </FramerAppear>
            </div>
          </div>
          <div className='flex w-2/3 flex-col justify-end h-1/2'>
            <div className='text-3xl p-10'>
              <FramerAppear delay={0.3}>
                Information supplémentaire aaaaaaaaaaaaaa
              </FramerAppear>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full justify-end h-full relative z-20'>
        <div className='text-2xl w-1/4 self-end p-6'>
          <FramerAppear delay={0.55}>
            Information supplémentaire aaaaaaaaaaaaaa
            Information supplémentaire aaaaaaaaaaaaaa
            Information supplémentaire aaaaaaaaaaaaaa
            Information supplémentaire aaaaaaaaaaaaaa
          </FramerAppear>
        </div> */}
      </div>
    </div>
  );
}