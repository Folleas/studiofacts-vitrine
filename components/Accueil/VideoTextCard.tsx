import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon from a library
import TextTabs from "./TextTabs";
import Link from "next/link";

export function ProjectModal({
  isOpen,
  onClose,
  title,
  content,
  type,
  moreDetails,
  aPropos,
  tags,
  coverFilename,
  resourcesFilenames,
  videoSrc,
}: any) {

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-[#ededed] p-6 overflow-y-scroll xl:overflow-y-hidden flex-col xl:flex-row rounded-lg shadow-md w-full xl:w-5/6 h-[100%] xl:h-[95%] relative flex ">
          {/* Left side content */}
          <div className="w-full xl:w-7/12 p-10 h-full">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              {/* You can use an 'x' icon from a library like FontAwesome */}
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl xl:text-6xl overflow-y-scroll min-h-[50px] max-h-[200px] text-[#1e2428] font-bold">{title}</h2>

            {/* Display tags under the title */}
            <div className="my-6 overflow-x-scroll">
              {type && (
                <span
                  className={`${type === 'Stories' ? 'bg-[#FF3133]' :
                    type === 'Presse' ? 'bg-[#8063EE]' :
                      type === 'Audio' ? 'bg-[#FFC300]' :
                        type === 'Doc' ? 'bg-[#00D779]' :
                          type === 'Editions' ? 'bg-[#0099FF]' :
                            type === 'Lab' ? 'bg-[#05E2DC]' : 'bg-gray-300'} text-[#1e2428] px-2 xl:py-1 text-lg rounded mr-2`}
                >
                  <strong>{type}</strong>
                </span>
              )}
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-300 text-[#1e2428] px-2 xl:py-1 text-lg rounded mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <TextTabs tabs={[
              {
                title: 'Description',
                content: content,
              },
              {
                title: 'Plus de détails',
                content: moreDetails,
              },
              {
                title: 'A propos',
                content: aPropos,
              },
            ]} />
            {resourcesFilenames.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-[#1e2428] mt-4">Galerie</h2>
                <div className="flex py-6 overflow-x-scroll w-[825px] space-x-4 ">
                  {resourcesFilenames.map((resource: string, index: number) => (
                    <div
                      key={index}
                      className={`relative min-w-[200px] min-h-[200px] rounded-xl overflow-hidden`}
                    >
                      <Image 
                        src={'/' + resource}
                        alt={`Resource Image ${index}`}
                        layout="fill"
                        className="rounded-md object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* <p className="text-[#1e2428] text-3xl overflow-y-scroll h-[43vh] max-h-[45vh]">{content}</p>
            {moreDetails && (
              <div>
              <h2 className="text-2xl text-[#1e2428] font-bold mb-2">Plus de détails</h2>
              <p className="text-[#1e2428] text-lg overflow-y-scroll h-[32vh] max-h-[35vh]">{moreDetails}</p>
              </div>
            )} */}
          </div>
          <div className="w-full xl:w-5/12 p-10 h-full">
            {coverFilename && coverFilename !== '' && !(coverFilename.includes('.mp4')) &&
              <div className="mb-4">
                <h2 className="text-xl xl:text-4xl font-bold text-[#1e2428] mt-2 mb-6">Couverture</h2>
                {/* Display cover image */}
                {
                  coverFilename &&
                  <Image 
                    src={'https://studiofact.group/image/' + coverFilename}
                    alt={`Cover Image for ${title}`}
                    width={567}
                    height={400}

                    className="rounded-lg object-contain"
                  />
                }
                {/* Title for the cover */}
              </div>
            }


            {/* Video */}
            {videoSrc && (
              <div className="mt-4 w-full h-full">
                <h3 className="text-xl xl:text-4xl font-bold text-[#1e2428]">Video</h3>
                <div className="w-[300px] h-[200px] xl:w-[600px] xl:h-[500px]">
                  <video
                    width="100%"
                    height="100%"
                    controls // Add controls for playback
                  >
                    <source
                      src={'https://studiofact.group/image/' + videoSrc}
                      type="video/mp4" // Update with the appropriate video format/type
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
}

function renderContentWithLineBreaks(content: any) {
  const lines = content.split("<br/>");
  return (
    <div>
      {lines.map((line: string, index: number) => (
        <p className="text-gray-300 text-xl xl:text-3xl" key={index}>
          {line}
          {index !== lines.length - 1 && <br />}
        </p>
      ))}
    </div>
  );
}

export default function VideoTextCard({
  title,
  content,
  type,
  videoSrc,
  imageAlt,
  aPropos = "",
  files = [],
  buttonCTA = "",
  swapContent = false,
  moreDetails,
  tags,
  coverFilename,
  resourcesFilenames,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const refVideo: any = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      if (refVideo && refVideo.current && typeof refVideo.current.play === 'function') {
        refVideo.current.play();
      }
    } else {
      if (refVideo && refVideo.current && typeof refVideo.current.pause === 'function') {
        refVideo.current.pause();
      }
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
      <Link href={buttonCTA} key={buttonCTA} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        En savoir plus
      </Link>
    )

  if (moreDetails)
    buttons.push(
      <button key='Plus de détail' onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        Plus de détail
      </button>
    )
  files.map((file: any, index: number) => buttons.push(
    <Link href={'https://studiofact.group/image/' + file.file} key={index} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mb-4 px-4 rounded self-start">
      {file.label}
    </Link>
  ));
  return (
    <motion.div ref={ref} initial='hidden' variants={imageVariants} animate={controls} className="p-4 w-full">
      <div
        className={`w-full h-[700px] rounded-lg shadow-xl flex ${swapContent ? "flex-col-reverse" : "flex-col"
          } md:flex-row`}
      >
        <div
          className={`relative bg-black w-full h-full xl:w-[1600px] rounded-xl overflow-hidden ${swapContent ? "md:order-2" : ""
            }`}
        >
          {coverFilename ? (
            coverFilename.endsWith('.mp4') ? (
              <video
                ref={refVideo}
                loop
                muted
                className="w-full h-full absolute inset-0 object-contain"
              >
                <source src={'https://studiofact.group/image/' + videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="">
                {
                  coverFilename &&
                  <Image 
                    src={'https://studiofact.group/image/' + coverFilename}
                    layout="fill"
                    alt={imageAlt}
                    className="object-contain"
                  />
                }
              </div>
            )
          ) : null}
        </div>
        <div className="p-4 md:p-32 w-full flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col max-h-[100px] xl:max-h-[180px]">
              <h2 className="text-2xl xl:text-5xl overflow-y-scroll min-h-[70px] max-h-[1200px] xl:max-h-[180px] font-bold text-white">
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
            <div className="max-h-[250px] overflow-y-scroll pr-10 my-6">
              {renderContentWithLineBreaks(content)}
            </div>
          </div>
          <div className="flex flex-col">
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
