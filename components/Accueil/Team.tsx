import { motion, useAnimation, useInView } from 'framer-motion';
import Image from "next/legacy/image";
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { TalentCard } from './Talents';
import { PersonCard } from 'pages/audio';

export default function Team({ item, talents = [], isPerson = true }: any) {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();

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
        visible: (custom: any) => ({
            opacity: 1,
            transition: {
                duration: custom * 0.75,
            },
            delay: 2,
        }),
    };
    console.log('item')
    console.log(item)
    return (
        <motion.div variants={imageVariants}
            initial="hidden"
            animate={controls} ref={ref}
            custom={1}
            className="mt-8 w-full">
            <h2 className="text-2xl xl:text-6xl font-bold mb-8">Qui sommes-nous ?</h2>
            <div className="flex flex-col xl:flex-row xl:justify-around">
                {talents.map((talent: any, index: number) => (
                    isPerson ?
                        <PersonCard
                            key={index}
                            name={talent.name}
                            occupation={talent.occupation}
                            bio={talent.bio}
                            imageSrc={talent.imageSrc}
                        /> :
                        <TalentCard
                            key={index}
                            name={talent.name}
                            occupation={talent.occupation}
                            bio={talent.bio}
                            imageSrc={talent.imageSrc}
                        />

                ))}
            </div>
        </motion.div>
    );
}