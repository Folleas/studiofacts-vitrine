import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import React, { useEffect, useRef, useState } from "react";
import { ProjectModal, VimeoModal } from "./VideoTextCard";
import Link from "next/link";

function renderContentWithLineBreaks(content: any) {
  const lines = content.split("<br/>");
  return (
    <div>
      {lines.map((line: string, index: number) => (
        <p className="text-gray-300 text-xl md:text-xl xl:text-xl 2xl:text-2xl" key={index}>
          {line}
          {index !== lines.length - 1 && <br />}
        </p>
      ))}
    </div>
  );
}

export default function RightsProject({
  title,
  content,
  type,
  videoSrc,
  imageAlt,
  aPropos = "",
  vimeoId = "",
  vimeoPassword = "",
  buttonCTA = "",
  swapContent = false,
  moreDetails,
  tags,
  coverFilename = '',
  resourcesFilenames,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [isVimeoModalOpen, setVimeoModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const openVimeoModal = () => {
    console.log('openVimeoModal')
    if (vimeoId && vimeoPassword && vimeoId !== '' && vimeoPassword !== '')
      setVimeoModalOpen(true);
  };

  const closeVimeoModal = () => {
    setVimeoModalOpen(false);
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  useEffect(() => {
    if (isInView) {
      if (controls)
        controls.start('visible');
    }

    return () => {
      if (controls)
        controls.stop();
    };
  }, [controls, isInView]);
  useEffect(() => {
    if (isInView && isHovered) {
      if (controls2)
        controls2.start({ opacity: 1 });
    }

    return () => {
      if (controls2)
        controls2.stop();
    };
  }, [controls2, isInView, isHovered]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);
  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: () => ({
      opacity: 1,
      transition: {
        duration: 1.2,
      },
      delay: 1,
    }),
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const imageVariants2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const buttons = [];
  if (buttonCTA !== '')
    buttons.push(
      <button key={buttonCTA} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        {buttonCTA}
      </button>
    )
  if (vimeoId !== '')
    buttons.push(
      <button key='Visionner' onClick={openVimeoModal} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        Visionner
      </button>
    )

  buttons.push(
    <Link key='Plus de détail' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start" href={"/" + title}>
      Plus de détail
    </Link>
  )
  console.log('here')
  console.log(videoSrc + '|' + coverFilename)

  const truncate = (input: string, characterCount: number) => input?.length > characterCount ? `${input.substring(0, characterCount - 1)}...` : input;

  return (
    <motion.div ref={ref} initial='hidden' variants={imageVariants} animate={controls} className="p-4">
      <div
        className={`w-[300px] xl:w-[400px] pb-6 rounded-lg shadow-xl flex flex-col`}
      >
        <div
          className={`relative w-[300px] h-[169px] xl:h-[225px] bg-black xl:w-[400px] rounded-xl overflow-hidden ${swapContent ? "md:order-2" : ""
            }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {coverFilename && !(coverFilename.includes('.mp4')) && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={'https://studiofact.group/image/' + coverFilename}
                layout="responsive"
                alt={imageAlt}
                width={400}
                blurDataURL={'https://studiofact.group/image/' + coverFilename}
                height={225}
                className="object-cover"
              />
            </motion.div>
          )}
          {videoSrc && isHovered && coverFilename !== '' && (
            <motion.video
              loop
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full absolute inset-0 object-cover"
              initial={{ opacity: 0 }}
              animate={controls2}
              transition={{ duration: 0.7 }}
            >
              <source src={'https://studiofact.group/image/' + videoSrc} type="video/mp4" />
            </motion.video>
          )}
          {videoSrc && (coverFilename === '' || coverFilename.includes('.mp4')) && (
            <motion.video
              loop
              ref={videoRef}
              muted
              className="w-full h-full absolute inset-0 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <source src={'https://studiofact.group/image/' + videoSrc + '#t=4'} type="video/mp4" />
            </motion.video>
          )}
          {videoSrc && isHovered && coverFilename !== '' && (
            <motion.video
              loop
              ref={videoRef}
              autoPlay
              muted
              className="w-full h-full absolute inset-0 object-cover"
              initial={{ opacity: 0 }}
              animate={controls2}
              transition={{ duration: 0.7 }}
            >
              <source src={'https://studiofact.group/image/' + videoSrc} type="video/mp4" />
            </motion.video>
          )}

        </div>
        <div className="p-1 xl:p-4 w-full flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col max-h-[100px] xl:max-h-[180px]">
              <div className="max-h-[100px]  mb-1 xl:h-[75px] font-bold text-white">
                <h2 className="text-2xl md:text-2xl xl:text-2xl 2xl:text-3xl h-fit overflow-y-hidden mb-1 font-bold text-white">
                  {truncate(title, 35)}
                </h2>
              </div>
              <div className="flex space-x-2 min-h-[30px]">
                {
                  tags &&
                  <>
                    {tags && tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-300 text-[#1e2428] self-start px-2 py-1 text-base rounded"
                      >
                        {tag}
                      </span>
                    ))
                    }
                  </>
                }
              </div>
            </div>
          </div>
          <div className="flex space-x-2 mt-3">
            {buttons.map(
              (button: any) => button
            )}
          </div>
        </div>
      </div >

      {/* Render the modal component */}
      < ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        content={content}
        type={type}
        aPropos={aPropos}
        moreDetails={moreDetails}
        tags={tags}
        coverFilename={coverFilename}
        resourcesFilenames={resourcesFilenames}
        videoSrc={videoSrc}
      />
      <VimeoModal
        isOpen={isVimeoModalOpen}
        onClose={closeVimeoModal}
        vimeoId={vimeoId}
        vimeoPassword={vimeoPassword}
      />
    </motion.div >
  );
}
