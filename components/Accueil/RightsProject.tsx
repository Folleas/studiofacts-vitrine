import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import React, { useEffect, useRef, useState } from "react";
import { ProjectModal } from "./VideoTextCard";

function renderContentWithLineBreaks(content: any) {
  const lines = content.split("<br/>");
  return (
    <div>
      {lines.map((line: string, index: number) => (
        <p className="text-gray-300 text-xl xl:text-2xl" key={index}>
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
  buttonCTA = "",
  swapContent = false,
  moreDetails,
  tags,
  coverFilename,
  resourcesFilenames,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        duration: 1.1,
      },
      delay: 6,
    }),
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const buttons = [];
  if (buttonCTA !== '')
    buttons.push(
      <button key={buttonCTA} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        {buttonCTA}
      </button>
    )

  if (moreDetails)
    buttons.push(
      <button key='Plus de détail' onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        Plus de détail
      </button>
    )
  return (
    <motion.div ref={ref} initial='hidden' variants={imageVariants} animate={controls} className="p-4">
      <div
        className={`w-[250px] h-[600px] xl:w-[400px] xl:h-[800px] rounded-lg shadow-xl flex flex-col`}
      >
        <div
          className={`relative w-[250px] h-[350px] xl:w-[400px] rounded-xl overflow-hidden ${swapContent ? "md:order-2" : ""
            }`}
        >
          {coverFilename ? (
            coverFilename.endsWith('.mp4') ? (
              <video
                loop
                autoPlay
                muted
                className="w-full h-full absolute inset-0 object-contain "
              >
                <source src={'https://studiofact.fr:3002/image/' + videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="">
                <Image
                  src={'https://studiofact.fr:3002/image/' + coverFilename}
                  layout="responsive"
                  alt={imageAlt}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            )
          ) : null}
        </div>
        <div className="p-4 w-full flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col max-h-[100px] xl:max-h-[180px]">
              <h2 className="text-2xl xl:text-3xl overflow-y-scroll h-[70px] mb-1 xl:h-[75px] font-bold text-white">
                {title}
              </h2>
              {
                tags &&
                <div className="flex space-x-2">
                  {tags && tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-300 text-[#1e2428] self-start px-2 py-1 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))
                  }
                </div>
              }
            </div>
            <div className="max-h-[200px] overflow-y-scroll pr-10 my-6">
              {renderContentWithLineBreaks(content)}
            </div>
          </div>
          <div className="">
            {buttons.map(
              (button: any) => button
            )}
          </div>
        </div>
      </div>

      {/* Render the modal component */}
      <ProjectModal
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
    </motion.div>
  );
}
