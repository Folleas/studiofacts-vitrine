import { motion, useAnimation, useInView } from 'framer-motion';
import Image from "next/legacy/image";
import { useEffect, useRef } from 'react';

export default function ImageRows() {
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

  return (
    <div className="p-10 my-8 sm:my-16 md:w-3/4 lg:w-2/3 xl:w-full h-[80vh] mx-auto">
      <h1 className="text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white">LA GALAXIE STUDIOFACT</h1>
      <div className='flex flex-col h-full'>
        <motion.div ref={ref} className="flex mb-8 sm:mb-16 grow overflow-x-scroll xl:overflow-x-hidden space-x-10">
          {/* First row of pictures */}
          {['/STUDIOFACT_STORIES_ROUGEVERMEIL.png', '/STUDIOFACT_PRESSE_BLEULAVANDE.png', '/STUDIOFACT_DOC_VERT.png', '/STUDIOFACT_AUDIO_JAUNE.png'].map((src, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative"
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <div className="w-[300px] h-[150px] xl:w-[200px] xl:h-[200px]">
                <Image loading="lazy" 
                  src={src}
                  alt={`${index + 1}`}
                  className='object-contain rounded-lg overflow-hidden'
                  layout='fill'
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex overflow-x-scroll grow xl:overflow-x-hidden justify-center space-x-10">
          {/* Second row of pictures */}
          {['/01_STUDIOFACT_RIGHT.png', '/STUDIOFACT_EDITION_BLEU.png', '/STUDIOFACT_LAB_BLEUTURQUOISE.png', '/01_STUDIOFACT_LIVE.png'].map((src, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative"
              variants={imageVariants}
              initial="hidden"
              custom={index}
              animate={controls}
            >
              <div className=" w-[300px] h-[150px] xl:w-[200px] xl:h-[200px]">
                <Image loading="lazy" 
                  src={src}
                  alt={`${index + 5}`}
                  className='object-contain rounded-lg overflow-hidden  p-10'
                  layout='fill'
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}