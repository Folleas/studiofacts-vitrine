"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { FramerAppear } from "./FramerAppear";
import ImageRows from "./Accueil/ImageRows";

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

const CardComponent: React.FC<CardData> = ({ title, description, imageSrc }) => {
  return (
    <FramerAppear>
      <div className="flex bg-[#F3F4F6] min-h-[300px] relative max-w-[900px] rounded-lg shadow-lg p-6">
        <div className="flex flex-col gap-0 w-2/5">
          <Image src={imageSrc} alt='team picture' width={300} height={300} className="absolute object-cover left-0 top-0 h-full" />
        </div>
        <div className="flex justify-between items-start w-3/5">
          <div className="flex flex-col gap-0">
            <h3 className="font-semibold text-4xl ">{title}</h3>
            <p className="text-2xl ">{description}</p>
            <h1 className="text-xl font-medium mt-2">Et nous avons compris lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </h1>
          </div>
        </div>
      </div>
    </FramerAppear>
  );
};

export default function Probleme() {
  const [scrollPercentage, setScrollPercentage]: any = useState(0);
  const container: any = useRef(null);
  const stickyMask: any = useRef(null);
  const horizontalScroll: any = useRef(null); // Add a ref for the horizontal scroll div

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100

      // console.log('scrollYProgress:')
      // console.log(scrollPercent)
      setScrollPercentage(scrollPercent)

    }


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate)
  }, [])

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current?.offsetTop / (container.current?.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }
  const animate = () => {

    // Scroll the horizontal scroll div based on the scroll progress
    const scrollProgress = getScrollProgress();
    const scrollWidth = horizontalScroll.current?.scrollWidth;
    const maxScrollLeft = scrollWidth - horizontalScroll.current?.clientWidth;
    const scrollLeft = scrollProgress * maxScrollLeft;
    if (horizontalScroll.current)
      horizontalScroll.current.scrollLeft = scrollLeft;
    requestAnimationFrame(animate)
  }


  const cardData: CardData[] = [
    {
      title: "Probleme n1",
      description: "Oui le probleme va qui suit",
      imageSrc: "/home-intro-1.6454f7ba.jpeg"
    },
    {
      title: "Probleme n2",
      description: "Oui le probleme va qui suit",
      imageSrc: "/home-intro-1.6454f7ba.jpeg"
    },
    {
      title: "Probleme n3",
      description: "Oui le probleme va qui suit",
      imageSrc: "/home-intro-1.6454f7ba.jpeg"
    },
    {
      title: "Probleme n4",
      description: "Oui le probleme va qui suit",
      imageSrc: "/home-intro-1.6454f7ba.jpeg"
    },
    {
      title: "Probleme n5",
      description: "Oui le probleme va qui suit",
      imageSrc: "/home-intro-1.6454f7ba.jpeg"
    },
    // Add more card data objects here
  ];

  return (
    <div className="h-full w-full">
      <div ref={container} className="relative h-[300vh] w-full bg-gradient-to-b from-[#1e2428] z-20 from-20% via-[rgba(92,94,110,0.5)] via-80% to-[rgba(134,124,145,0.5)] to-100%">
        <div
          ref={stickyMask}
          className="flex items-center justify-center overflow-hidden sticky z-20 top-0 h-[100vh]"
        >
          <div className='h-[100vh] relative w-screen'>
            <div className='absolute z-20 w-full h-full flex flex-col justify-center'>
              <div className='relative flex w-2/3 self-center flex-col justify-center h-1/2'>
                <FramerAppear>
                  <h2 className='text-xl md:text-2xl font-thin mt-[10vh]'>La Galaxie Studiofact</h2>
                  <h1 className='text-2xl md:text-5xl p-4'>
                    Nous avons plusieurs filiales...
                  </h1>
                </FramerAppear>
              </div>
              <div ref={horizontalScroll} className="overflow-x-auto overflow-y-hidden left-0 h-[90vh] relative" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="w-[4500px] md:w-[6000px] flex flex-row gap-x-6 h-full">
                  <ImageRows />
                </div>
              </div>
            </div>
          </div>
          {/* <video className="h-full w-full object-cover " autoPlay muted loop>
            <source src="/pres.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </div>
  );
}