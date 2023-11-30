import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import { useInView } from "framer-motion"
import Image from "next/legacy/image";
import { useEffect, useRef, useState } from 'react';

const MovingCircle = ({ top, left, color, x, y, size }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        console.log("isInView")
        console.log(isInView)
        if (isInView) {
            controls.start(driftVariants.animate);
        }
    }, [controls, isInView]);

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
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const width = useWidth();

    useEffect(() => {
        console.log("isInView")
        console.log(isInView)
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const imageVariants = {
        hidden: {
            opacity: 0,
        },
        visible: () => ({
            opacity: 1,
            transition: {
                duration: 1.4,
            },
            delay: 7,
        }),
    };
    return (
        <section className="relative h-full w-full">
            <div className="blur-xl absolute w-full overflow-x-hidden pointer-events-none">
                <MovingCircle top={-100} size={'w-[500px] h-[500px]'} left={550} color="bg-[#eb5959]" x={100} y={250} />
                <MovingCircle top={20} size={'w-[600px] h-[600px]'} left={800} color="bg-[#26ff7d]" x={200} y={-250} />
            </div>
            <div className="flex flex-col w-full h-full p-10 xl:mb-[2vh]">
                <h3 className="text-xl xl:text-5xl text-[red] font-bold mb-3">Nos spécificités</h3>
                <h2 className="text-2xl xl:text-6xl font-bold w-[500px]">Le réel au coeur de notre ADN</h2>
                <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} className='flex w-full'>
                    { width < 768 ?
                        <div className='flex flex-col w-full'>
                            <p className="text-2xl xl:text-5xl w-full max-h-[650px] overflow-y-scroll mt-10">
                                StudioFact media group se différencie avant tout par la nature de ses contenus :<br /><br />
                                Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.<br /><br />
                                StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.<br /><br />

                                Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.<br /><br />

                                Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.<br /><br />

                                Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.<br /><br />

                            </p>
                        </div>
                        :
                        <>
                            <p className="text-2xl xl:text-3xl w-full mt-10">
                                StudioFact media group se différencie avant tout par la nature de ses contenus :<br /><br />
                                Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.<br /><br />
                                StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.<br /><br />

                                Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.<br /><br />

                                Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.<br /><br />

                                Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.<br /><br />

                            </p>
                        </>
                    }
                </motion.div>
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
