import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MovingCircle } from "./VideoTextSection";

export default function TitleParagraph({ title, paragraph, top1, left1, top2, left2, x1, y1, x2, y2, color1 = 'bg-[#eb5959]', color2 = 'bg-[#26ff7d]', size1 = 'w-[500px] h-[500px]', size2 = 'w-[500px] h-[500px]' }: any) {
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
      visible: () => ({
        opacity: 1,
        transition: {
          duration: 1.5,
        },
        delay: 2,
      }),
    };
    return (
        <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} className="w-full p-6 relative shadow-md rounded-lg min-h-[45vh] flex flex-col justify-center">
            <div className="blur-xl absolute w-full overflow-x-hidden pointer-events-none">
                <MovingCircle top={top1} left={left1} size={size1} color={color1} x={x1} y={y1} />
                <MovingCircle top={top2} left={left2} size={size2} color={color2} x={x2} y={y2} />
            </div>
            <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold text-white mb-8">
                {title}
            </h1>
            <p className="text-gray-200 text-2xl md:text-3xl xl:text-4xl">
                {paragraph}
            </p>
        </motion.div>
    );
}