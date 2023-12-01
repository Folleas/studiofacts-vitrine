import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import { useEffect, useRef } from "react";


const imageSources = [
    {
      name: "Ivan Sadik",
      occupation: "Directeur Général Fiction",
      bio: "Ivan Sadik is a seasoned professional with vast experience in leading and overseeing the fiction department. His visionary approach has led to numerous successful projects...",
      imageSrc: "ivan.webp"
    },
    {
      name: "Basile Lemaire",
      occupation: "Directeur du développement stratégique",
      bio: "Basile Lemaire is a strategic thinker with expertise in developing and executing strategic plans...",
      imageSrc: "Basile-Lemaire.webp"
    },
    {
      name: "Naoual Daikhi",
      occupation: "Directrice Générale adjointe en charge des productions",
      bio: "Naoual Daikhi is a proficient leader overseeing production operations with a keen focus on excellence...",
      imageSrc: "naoual.webp"
    },
    {
      name: "Géraldine Bévière",
      occupation: "Rédactrice en chef",
      bio: "Géraldine Bévière is an experienced editor-in-chief known for her innovative approach...",
      imageSrc: "geraldine.webp"
    },
    {
      name: "Véronique Blanc",
      occupation: "Rédactrice en chef",
      bio: "Véronique Blanc brings extensive editorial expertise and a flair for storytelling...",
      imageSrc: "equipe-conflicted.webp"
    },
    {
      name: "Gwen Le Gouil",
      occupation: "Rédacteur en chef",
      bio: "Gwen Le Gouil is a skilled chief editor renowned for managing editorial teams...",
      imageSrc: "gwen.webp"
    },
    {
      name: "Delphine Lopez",
      occupation: "Rédactrice en chef",
      bio: "Delphine Lopez has a profound understanding of editorial processes and a track record of successful publications...",
      imageSrc: "Delphine.webp"
    },
    {
      name: "Camille Dumont",
      occupation: "Directeur de production",
      bio: "Camille Dumont leads production operations with a strategic vision and excellent management skills...",
      imageSrc: "Camille.webp"
    },
    {
      name: "Samuel Elfassy",
      occupation: "Adjoint à la création artistique",
      bio: "Samuel Elfassy brings artistic creativity and innovative ideas to every project...",
      imageSrc: "Samuel.webp"
    },
    {
      name: "Clarisse Cohen",
      occupation: "Directrice Générale Éditions",
      bio: "Clarisse Cohen is an astute leader driving the success of editorial ventures...",
      imageSrc: "clarisse.webp"
    },
    {
      name: "Jeanne Pois-Fournier",
      occupation: "Éditrice",
      bio: "Jeanne Pois-Fournier is an accomplished editor known for her dedication to quality content...",
      imageSrc: "jeanne-pf.webp"
    },
    {
      name: "Christophe Barbier",
      occupation: "Directeur Live",
      bio: "Christophe Barbier has a wealth of experience in live event management...",
      imageSrc: "Christophe-B.webp"
    },
    {
      name: "Gaëlle Job",
      occupation: "Attachée de Presse",
      bio: "Gaëlle Job excels in public relations with a keen understanding of media outreach strategies...",
      imageSrc: "Gaelle_job.webp"
    },
    {
      name: "Chloé Tavitian",
      occupation: "Co-Directrice Audio",
      bio: "Chloé Tavitian is a leader in audio production known for her innovative approach...",
      imageSrc: "Chloe-Tavitian_site.webp"
    },
    {
      name: "Camille Juzeau",
      occupation: "Co-Directrice Audio",
      bio: "Camille Juzeau is a highly skilled professional in audio production with a knack for creative solutions...",
      imageSrc: "camille-juzeau_site.webp"
    },
    {
      name: "Alexandre Ifi",
      occupation: "Directeur Général Doc",
      bio: "Alexandre Ifi leads documentary productions with a vision for impactful storytelling...",
      imageSrc: "alexandre_iftl.webp"
    },
    {
      name: "Julie Tolza",
      occupation: "Directrice Générale Rights",
      bio: "Julie Tolza specializes in rights management with a focus on maximizing content value...",
      imageSrc: "julie-Tolza_site.webp"
    },
    {
      name: "Daniel Meneses",
      occupation: "Responsable Ventes et Marketing",
      bio: "Daniel Meneses excels in strategic sales and marketing initiatives with a goal-oriented approach...",
      imageSrc: "daniel-meneses_site.webp"
    }
  ];

export const TalentCard = ({ name, occupation, imageSrc }: any) => {
    return (
        <div className="w-full xl:w-1/3 p-4">
            <div className="h-[400px] w-full text-black flex justify-center">
                {/* Image */}
                <div className="flex flex-col h-full rounded-lg shadow-xl overflow-hidden min-w-[350px]">
                    <div className="relative w-[250px] h-[250px]  rounded-full self-center overflow-hidden">
                        <Image  
                            src={`/${imageSrc}`}
                            alt={name}
                            layout="fill"
                            className="rounded-full object-cover"
                        />
                    </div>
                    {/* Name and Occupation */}
                    <div className="flex flex-col items-center justify-center text-center h-[150px]">
                        <h2 className="text-2xl font-semibold text-[#ffffff]">{name}</h2>
                        <p className="text-[#ffffff] text-xl">{occupation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const Talents = () => {
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

        <div className="w-full p-10 shadow-md rounded-lg">
            <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} custom={2} className="mb-4 flex flex-col">
                <h1 className="text-4xl xl:text-6xl font-bold text-white mb-8">Nos Talents</h1>
                <div className='flex flex-wrap'>
                    {imageSources.map((imageSrc, index) => (
                        <TalentCard
                            key={index}
                            name={imageSrc.name}
                            occupation={imageSrc.occupation}
                            bio={imageSrc.bio}
                            imageSrc={imageSrc.imageSrc}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};