import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import { useEffect, useRef } from "react";

export const PersonCard = ({ name, occupation, bio, imageSrc }: any) => {
    return (
        <div className="w-full xl:w-2/5 p-4 flex justify-center">
            <div className="text-black rounded-lg w-[700px] shadow-lg overflow-hidden">
                <div className="flex justify-center">
                    <div className="relative xl:w-[350px] xl:h-[350px] w-[150px] h-[150px] rounded-lg self-center overflow-hidden">
                        <Image  
                            src={`/${imageSrc}`}
                            alt={name}
                            layout="fill"
                            className="rounded-lg object-contain"
                        />
                    </div>
                </div>
                <div className="p-4 h-[550px] text-center">
                    <h2 className="text-3xl font-semibold text-black">{name}</h2>
                    <p className="text-[#1e2428] text-xl">{occupation}</p>
                    <p className="text-[#1e2428] text-2xl mt-2 h-[500px] overflow-y-scroll">{bio}</p>
                </div>
            </div>
        </div>
    );
};
export const Fondateurs = () => {
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
        visible: (custom: any) => ({
            opacity: 1,
            transition: {
                duration: custom * 0.75,
            },
            delay: 2,
        }),
    };
    return (
        <div className="w-full p-10 shadow-xl bg-[#ffffff] rounded-lg">
            <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} custom={1} className="mb-4">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-black mb-8">Les Fondateurs</h1>
                <div className='flex flex-col xl:flex-row xl:justify-around'>
                    <PersonCard
                        name="Roxane Rouas-Rafowicz"
                        occupation="Avocate et entrepreneuse"
                        bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                        imageSrc="roxane2.png"
                    />
                    <PersonCard
                        name="Jacques Aragones"
                        occupation="Journaliste"
                        bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                        imageSrc="jacqquues-1.png"
                    />
                </div>
            </motion.div>
        </div>
    );
};