import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from "framer-motion"
import Image from 'next/image';
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


export default function Section() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="relative h-full w-full">
            <div ref={ref} className="blur-xl absolute w-full overflow-x-hidden pointer-events-none">
                <MovingCircle isInView={isInView} top="-200px" size={'w-[500px] h-[500px]'} left="500px" color="bg-[#eb5959]" x={-100} y={200} />
                <MovingCircle isInView={isInView} top="20px" size={'w-[600px] h-[600px]'} left="700px" color="bg-[#26ff7d]" x={100} y={-200} />
            </div>
            <div className="flex flex-col w-full h-full p-10">
                <h3 className="text-5xl text-[red] font-bold mb-3">Nos spécificités</h3>
                <h2 className="text-6xl font-bold w-[500px]">Le réel au coeur de notre ADN</h2>
                <div className='flex'>
                    <p className="text-5xl w-2/3 max-h-[650px] overflow-y-scroll mt-10">STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.</p>
                    <div className='w-2/5 max-h-[650px] flex flex-col pt-10 pl-10 space-y-20'>
                        <div
                            className={`relative w-[650px] h-[300px]`}
                        >
                            <Image
                                src={'/covid.jpg'}
                                alt={`Resource Image 1`}
                                layout="fill"
                                className="rounded-md object-cover"
                            />
                        </div>
                        <div
                            className={`relative w-[650px] h-[300px]`}
                        >
                            <Image
                                src={'/lab.png'}
                                alt={`Resource Image 2`}
                                layout="fill"
                                className="rounded-md object-cover"
                            />
                        </div>
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
