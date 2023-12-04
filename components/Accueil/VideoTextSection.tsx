import { motion, useAnimation } from 'framer-motion';
import { useInView } from "framer-motion"
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export const MovingCircle = ({ top, left, color, x, y, size }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const initialPosition = {
    top: top,
    left: left,
  };

  const driftVariants = {
    initial: initialPosition,
    animate: {
      top: top,
      left: left,
      x: x,
      y: y,
    },
  };
  useEffect(() => {
    if (isInView) {
      controls.start(driftVariants.animate);
    }
  }, [controls, driftVariants.animate, isInView]);


  const transition = {
    type: "spring",
    damping: 10,
    stiffness: 10,
    duration: 10,
    x: { duration: 25 },
    y: { duration: 25 }
  }

  return (
    <motion.span
      ref={ref}
      className={`relative flex ${size}`}
      initial="hidden"
      animate={controls}
      transition={transition}
      variants={driftVariants}
    >
      {color && (
        <>
          <motion.span
            className={`animate-[ping_5s_ease-out_infinite] absolute inline-flex h-full w-full rounded-full ${color} opacity-10`}
          ></motion.span>
          <motion.span
            className={`relative inline-flex rounded-full ${size} ${color} opacity-20`}
          ></motion.span>
        </>
      )}
    </motion.span>
  );
};



export default function VideoTextSection({ displayButton, title1, title2, paragraph1, paragraph2, top1, top2, left1, left2, x1, x2, y1, y2 }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const variantsLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  const isTextTooLong = paragraph2.length > 400;

  // Define CSS classes based on the condition
  const textClass = isTextTooLong ? "xl:text-2xl 2xl:text-3xl" : "xl:text-4xl 2xl:text-5xl";

  return (
    <section id="VideoTextSection" className="xl:pt-[8vh] relative h-[95vh] w-full">
      <div className="blur-xl absolute w-full overflow-x-hidden pointer-events-none">
        <MovingCircle top={top1} left={left1} size={'w-[500px] h-[500px]'} color="bg-[#46fd9e]" x={x1} y={y1} />
        <MovingCircle top={top2} left={left2} size={'w-[500px] h-[500px]'} color="bg-[#ff3333]" x={x2} y={y2} />
      </div>
      <motion.div initial="hidden" animate={controls} ref={ref} className="flex w-full h-full p-10">
        <div className="w-1/2 pr-10 md:pr-0">
          <motion.h2 variants={variantsLeft} className="text-3xl xl:text-6xl 2xl:text-7xl font-bold">{title1}</motion.h2>
          <motion.p variants={variantsLeft} className={`text-base ${textClass} mt-10`}>{paragraph1}</motion.p>
        </div>
        <div className="w-1/2 justify-between flex flex-col content-end">
          {
            displayButton ?
              <Link href="/apropos" className="bg-[#46fd9e] h-fit p-1 xl:h-[75px] text-[#1e2428] text-base xl:text-4xl 2xl:text-5xl hover:bg-[#84f588] font-semibold md:py-2 md:px-4 rounded self-end">
                En Savoir Plus
              </Link> : <div></div>
          }
          <div className="self-end">
            <motion.h2 variants={variantsRight} className="text-3xl xl:text-6xl 2xl:text-7xl font-bold text-[#46fd9e]">{title2}</motion.h2>
            <motion.p variants={variantsRight} className={`text-base ${textClass} overflow-y-scroll mt-10 min-h-[160px] max-h-[350px]`}>{paragraph2}</motion.p>
          </div>
        </div>
      </motion.div>
    </section>
    // <div className="flex w-full bg-gradient-to-r from-black via-black to-[#1e2428]">
    //   <div className="w-1/2 flex justify-center h-[1000px]">
    //     <div className="relative w-full h-full">
    //       <video id="background-video" loop autoPlay muted className="w-full h-full absolute inset-0 object-cover">
    //         <source src={'/pres.mp4'} type="video/mp4" />
    //       </video>
    //       <div className="bg-gradient-to-r from-transparent via-transparent to-black absolute inset-0"></div>
    //     </div>
    //   </div>
    //   <div className="w-1/2 mx-8 xl:my-16 relative flex justify-center flex-col">
    //     {/* Text content */}
    //     <h1 className="text-base xl:text-5xl 2xl:text-6xl font-bold mb-2 xl:mb-8">Le réel au cœur de notre ADN</h1>
    //     <div className="overflow-y-scroll xl:overflow-y-hidden max-h-[10em] xl:max-h-full">
    //       <p className="text-xs xl:text-2xl 2xl:text-3xl text-gray-300 mr-16">
    //         StudioFact media group se différencie avant tout par la nature de ses contenus :

    //         Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.

    //         StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.

    //         Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.

    //         Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.

    //         Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  )
}
