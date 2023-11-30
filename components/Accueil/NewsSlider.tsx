import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import Link from 'next/link';
import { useEffect, useRef } from "react";

export default function NewsSlider({ item, currentSlide }: any) {
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
    if (!item)
        return (
            <>
            </>
        )
    return (
        <div className={`absolute transition-opacity ease-in-out w-full duration-300 ${currentSlide ? 'opacity-[1]' : 'opacity-0'}`}>
            <div className="relative w-full h-[300px] xl:h-[600px]">
                <Image
                    src={'http://localhost:3000/image/' + item.cover}
                    alt={item.title}
                    layout="fill"
                    className="object-cover"
                />
                <div className="absolute inset-0 opacity-50" />
                <motion.div initial="hidden" animate={controls} ref={ref} variants={variants} className="absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-transparent from-0% via-[rgba(30,36,40,0.5)] via-50% to-transparent to-100% items-center text-white">
                    <h2 className="text-3xl xl:text-6xl font-bold">{item.title}</h2>
                    <p className="text-2xl">{item.subtitle}</p>
                    <Link href={item.link} className="mt-4 px-4 py-2 bg-[#ededed] hover:bg-[#ffffff] text-[#1e2428] rounded">
                        En savoir plus
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}