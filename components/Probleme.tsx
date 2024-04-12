"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { FramerAppear } from "./FramerAppear";
import ImageRows from "./Accueil/ImageRows";
import { motion, useAnimation, useInView } from 'framer-motion';

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
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        duration: custom * 0.6,
      },
      delay: custom * 0.3,
    }),
  };
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
  const imageArray = [
    '/STUDIOFACT_STORIES_ROUGEVERMEIL.png',
    '/STUDIOFACT_PRESSE_BLEULAVANDE.png',
    '/STUDIOFACT_DOC_VERT.png',
    '/STUDIOFACT_AUDIO_JAUNE.png',
    '/01_STUDIOFACT_RIGHT.png',
    '/STUDIOFACT_EDITION_BLEU.png',
    '/STUDIOFACT_LAB_BLEUTURQUOISE.png',
    '/01_STUDIOFACT_LIVE.png',
  ];

  const renderImages = (imageList: any[]) => {
    return imageList.map((src, index: number) => (
      <motion.div
        key={index}
        className="w-[300px] h-[300px] md:w-[550px] md:h-[300px] p-4 sm:p-8 relative"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        custom={index}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={`${index + 1}`}
            className="object-contain rounded-lg"
            sizes={"(max-width: 540px) 100vw, (max-width: 668px) 90vw, 40vw"}
            fill
          />
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="h-full w-full">
      <div className="relative h-fit w-full bg-gradient-to-t from-[#1e2428] z-20 from-20% via-[rgba(92,94,110,0.5)] via-80% to-[rgba(134,124,145,0.5)] to-100%">
        <div
          className="flex items-center justify-center overflow-hidden sticky z-20 top-0 h-fit"
        >
          <div className='h-fit w-screen'>
            <div className='z-20 w-full h-full flex flex-col justify-center'>
              <div className=' flex w-2/3 self-center flex-col justify-center h-1/2'>
                <FramerAppear>
                  <h1 className='text-2xl md:text-5xl p-4'>
                  La Galaxie Studiofact
                  </h1>
                </FramerAppear>
              </div>
              <div ref={ref} className="w-full justify-center h-full flex flex-row flex-wrap gap-x-6">
                {renderImages(imageArray)}
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