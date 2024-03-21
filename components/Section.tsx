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

const useWidth = () => {
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return width
}

export default function Section() {
  const [scrollPercentage, setScrollPercentage]: any = useState(0);
  const container: any = useRef(null);
  const stickyMask: any = useRef(null);
  const horizontalScroll: any = useRef(null); // Add a ref for the horizontal scroll div
  const width = useWidth();

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


  const cardData: any = [
    {
      description: (
        <div className="bg-[rgba(30,36,40,0.2)] p-16 h-full rounded-lg shadow-md gap-y-4 flex flex-col w-[80vw]">
          <h2 className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-[#46fd9e] font-bold">
            StudioFact media group se différencie avant tout par la nature de ses contenus :
          </h2>
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.
          </p>
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.
          </p>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[rgba(30,36,40,0.2)] p-16 h-full rounded-lg shadow-md gap-y-4 flex flex-col w-[80vw]">
          <h2 className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-[#46fd9e] font-bold">
            Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.
          </h2>
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.
          </p>
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.
          </p>
        </div>
      ),
    },
  ];

  const cardDataMobile: any = [
    {
      description: (
        <div className="bg-[rgba(30,36,40,0.2)] p-16 h-full rounded-lg shadow-md gap-y-4 flex flex-col w-[80vw]">
          <h2 className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-[#46fd9e] font-bold">
            StudioFact media group se différencie avant tout par la nature de ses contenus :
          </h2>
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.
          </p>
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.
          </p>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[rgba(30,36,40,0.2)] p-16 h-full rounded-lg justify-center shadow-md gap-y-4 flex flex-col w-[80vw]">
          <h2 className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-[#46fd9e] font-bold">
            Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.
          </h2>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[rgba(30,36,40,0.2)] p-16 h-full rounded-lg shadow-md justify-center gap-y-4 flex flex-col w-[80vw]">
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.
          </p>
        </div>
      ),
    },
    {
      description: (
        <div className="bg-[rgba(30,36,40,0.2)] p-16 h-full rounded-lg shadow-md justify-center gap-y-4 flex flex-col w-[80vw]">
          <p className="text-sm lg:text-lg xl:text-lg 2xl:text-2xl text-white">
            Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.
          </p>
        </div>),
    },
  ];
  const card = width > 800 ? cardData : cardDataMobile;
  return (
    <div className="h-full w-full">
      <div ref={container} className="relative h-[300vh] w-full bg-gradient-to-b from-[#1e2428] z-20 from-20% via-[rgba(92,94,110,0.5)] via-80% to-[rgba(134,124,145,0.5)] to-100%">
        <div
          ref={stickyMask}
          className="flex items-center justify-center overflow-hidden sticky top-0 h-[100vh]"
        >
          <div className='h-[100vh] relative w-screen'>
            <div className='absolute z-20 w-full h-full flex flex-col justify-center'>
              <div className='relative flex w-full px-16 self-center flex-col justify-center h-1/2'>
                <FramerAppear>
                  <h3 className="text-xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-[red] font-bold mb-3">Nos spécificités</h3>
                  <h2 className="text-2xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold max-w-[1000px]">Le réel au coeur de notre ADN</h2>
                </FramerAppear>
              </div>
              <div ref={horizontalScroll} className="overflow-x-auto left-0 h-[75vh] relative" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div className="w-[1450px] lg:w-[2250px] xl:w-[3500px] flex flex-row gap-x-6 h-[500px] px-16">
                  {card.map((card: any, index: number) => { return card.description })}
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