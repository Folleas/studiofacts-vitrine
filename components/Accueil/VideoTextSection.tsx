import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from "framer-motion"
import { useEffect, useRef } from 'react';

const MovingCircle = ({ top, left, color, x, y, size, isInView }: any) => {
  const controls = useAnimationControls();

  const initialPosition = {
      top: top || 0,
      left: left || 0,
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

  const transition = {
      type: "spring",
      damping: 10,
      stiffness: 10,
      duration: 10,
      x: { duration: 25 },
      y: { duration: 25 }
  }

  useEffect(() => {
      controls.start(driftVariants.animate);
  })
  return (
      <motion.span
          className={`relative flex ${size}`}
          initial="initial"
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



export default function VideoTextSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative h-[85vh] w-full">
      <div ref={ref} className="blur-xl absolute w-full overflow-x-hidden pointer-events-none">
        <MovingCircle isInView={isInView} top="0px" left="900px" size={'w-[500px] h-[500px]'} color="bg-[#eb5959]" x={-100} y={200} />
        <MovingCircle isInView={isInView} top="-200px" left="1200px" size={'w-[500px] h-[500px]'} color="bg-[#26ff7d]" x={100} y={-200}/>
      </div>
      <div className="flex w-full h-full p-10">
        <div className="w-1/2">
          <h2 className="text-8xl font-bold">Raconter le reel</h2>
          <p className="text-6xl mt-10">STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.</p>
        </div>
        <div className="w-1/2 justify-between flex flex-col content-end">
          <button className="bg-[#26ff7d] text-[#1e2428] text-5xl hover:bg-[#84f588] font-semibold py-2 px-4 rounded self-end">
            En Savoir Plus
          </button>
          <div className="self-end">
            <h2 className="text-8xl font-bold text-[#26ff7d]">Qui sommes-nous ?</h2>
            <p className="text-6xl mt-10">« Nos contenus racontent le monde.Tendez loreille, ouvrez les yeux. La réalité dépasse toutes les fictions »</p>
          </div>
        </div>
      </div>
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
    //     <h1 className="text-base xl:text-6xl font-bold mb-2 xl:mb-8">Le réel au cœur de notre ADN</h1>
    //     <div className="overflow-y-scroll xl:overflow-y-hidden max-h-[10em] xl:max-h-full">
    //       <p className="text-xs xl:text-3xl text-gray-300 mr-16">
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
