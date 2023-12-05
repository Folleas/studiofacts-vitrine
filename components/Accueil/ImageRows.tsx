import { Key, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function ImageRows() {
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
    visible: (custom: number) => ({
      opacity: 1,
      transition: {
        duration: custom * 0.75,
      },
      delay: custom * 0.5,
    }),
  };

  const imageArray = [
    '/STUDIOFACT_STORIES_ROUGEVERMEIL.png',
    '/STUDIOFACT_PRESSE_BLEULAVANDE.png',
    '/STUDIOFACT_DOC_VERT.png',
    '/STUDIOFACT_AUDIO_JAUNE.png',
  ];

  const renderImages = (imageList: any[]) => {
    return imageList.map((src, index: number) => (
      <motion.div
        key={index}
        className="min-w-[90vw] md:min-w-[45vw] lg:min-w-[25vw] xl:min-w-[25vw] h-[150px] md:h-[300px] lg:h-[300px] xl:h-[300px] p-4 sm:p-8 relative"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        custom={index}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={`${index + 1}`}
            className="object-contain rounded-lg"
            sizes={"(max-width: 640px) 100vw, (max-width: 768px) 90vw, 40vw"}
            fill
          />
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="p-6 md:p-10 my-8 sm:my-16 md:w-3/4 lg:w-2/3 xl:w-full h-fit mx-auto">
      <h1 className="text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-white">
        LA GALAXIE STUDIOFACT
      </h1>
      <div className="flex flex-col xl:items-center h-fit">
        <motion.div
          ref={ref}
          className="flex mb-6 sm:mb-10 grow overflow-x-auto h-[150px] md:h-[300px] lg:h-[300px] xl:h-[300px] md:justify-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10"
        >
          <div className="flex whitespace-nowrap">
            {renderImages(imageArray)}
          </div>
        </motion.div>
        <div className="flex overflow-x-auto grow xl:overflow-x-hidden h-[150px] md:h-[300px] lg:h-[300px] xl:h-[300px] md:justify-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
          <div className="flex whitespace-nowrap">
            {renderImages([
              '/01_STUDIOFACT_RIGHT.png',
              '/STUDIOFACT_EDITION_BLEU.png',
              '/STUDIOFACT_LAB_BLEUTURQUOISE.png',
              '/01_STUDIOFACT_LIVE.png',
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}
