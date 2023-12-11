import { motion, useAnimation } from "framer-motion";
import Image from "next/legacy/image";
import { useEffect } from "react";

export default function NewsSlider({ item, currentSlide }: any) {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls, currentSlide, item]);

    const variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    if (!item || !currentSlide) {
        return null;
    }

    return (
        <div className={`w-full absolute transition-opacity ease-in-out duration-300 ${currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-[300px] xl:h-[600px]">
                <Image
                    src={'https://studiofact.group/image/' + item.coverFilename}
                    alt={item.title}
                    width={1920}
                    height={600}
                    layout="fill"
                    className="object-cover"
                />
                <div className="absolute inset-0 opacity-50" />
                <motion.div
                    initial='hidden'
                    animate={controls}
                    variants={variants}
                    className="absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-transparent from-0% via-[rgba(30,36,40,0.5)] via-50% to-transparent to-100% items-center text-white"
                >
                    <h2 className="text-lg md:text-3xl xl:text-4xl 2xl:text-5xl w-3/4 text-center font-bold">{item.title}</h2>
                    <p className="text-lg">{item.subtitle}</p>
                    {item.link !== '' && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-[#ededed] text-xs hover:bg-[#ffffff] text-[#1e2428] rounded">
                            En savoir plus
                        </a>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
