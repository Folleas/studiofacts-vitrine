import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import TextTabs from "./TextTabs";
import Link from "next/link";

export function VimeoModal({
  isOpen,
  onClose,
  vimeoId = '',
  vimeoPassword = '',
}: any) {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  console.log(isOpen)
  console.log(vimeoId);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center w-screen h-screen bg-[rgba(0,0,0,0.9)] justify-center z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close the modsal when clicking outside
        >
          <button
            onClick={onClose}
            className="absolute bg-white rounded-3xl p-1 top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={25} />
          </button>
          {vimeoId !== '' && (
            <>
              <motion.div
                className="w-3/4 h-3/4 relative"
                onClick={stopPropagation}
              >
                <iframe src={`https://player.vimeo.com/video/909118958?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} allow="autoplay; fullscreen; picture-in-picture" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="20240109-1850-50.5775584"></iframe>
              </motion.div>
            </>
          )}
          <motion.div
            className=""
            onClick={stopPropagation}
          >
            <div>
              Mot de passe : {vimeoPassword}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


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
  vimeo = '',
}: any) {
  const [isVimeoModalOpen, setVimeoModalOpen] = useState(false);

  const openVimeoModal = () => {
    console.log('openVimeoModal')
    setVimeoModalOpen(true);
  };

  const closeVimeoModal = () => {
    setVimeoModalOpen(false);
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            onClick={onClose} // Close the modal when clicking outside
          >
            <div className="fixed inset-0 flex items-center justify-center z-50" >
              <div onClick={stopPropagation} className="bg-[#ededed] p-6 overflow-y-auto xl:overflow-y-hidden flex-col xl:flex-row rounded-lg shadow-md w-full xl:w-5/6 h-[100%] xl:h-[95%] relative flex ">
                {/* Left side content */}
                <div className="w-full xl:w-7/12 p-10 h-full">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    {/* You can use an 'x' icon from a library like FontAwesome */}
                    <FaTimes size={20} />
                  </button>
                  <h2 className="text-xl md:text-5xl xl:text-5xl 2xl:text-6xl min-h-[50px] max-h-[200px] text-[#1e2428] font-bold">{title}</h2>

                  {/* Display tags under the title */}
                  <div className="my-6">
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
                  <div className="flex flex-col overflow-y-auto h-full p-2">
                    <p className={`text-black text-base md:text-xl text-justify xl:text-xl 2xl:text-2xl`} style={{ whiteSpace: 'pre-line' }}>
                      {content}
                    </p>
                    {moreDetails &&
                      <p className={`text-black text-base md:text-xl text-justify xl:text-xl 2xl:text-xl font-thin`} style={{ whiteSpace: 'pre-line' }}>
                        {moreDetails}
                      </p>
                    }
                    {aPropos &&
                      <p className={`text-black text-base md:text-xl text-justify xl:text-xl 2xl:text-xl font-thin`} style={{ whiteSpace: 'pre-line' }}>
                        {aPropos}
                      </p>
                    }
                  </div>
                  {resourcesFilenames.length > 0 && (
                    <div className="flex flex-col h-[25%] p-2">
                      <div className="flex py-6 overflow-x-auto w-[825px] space-x-4">
                        {resourcesFilenames.map((resource: string, index: number) => (
                          <div
                            key={index}
                            className={`relative min-w-[200px] h-[100%] rounded-xl overflow-hidden`}
                          >
                            <Image
                              src={'https://studiofact.group/image/' + resource}
                              alt={`Resource Image ${index}`}
                              fill
                              sizes={"(max-width: 640px) 100vw, (max-width: 768px) 90vw, 40vw"}
                              className="rounded-md object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* <p className="text-[#1e2428] text-3xl overflow-y-auto h-[43vh] max-h-[45vh]">{content}</p>
            {moreDetails && (
              <div>
              <h2 className="text-2xl text-[#1e2428] font-bold mb-2">Plus de détails</h2>
              <p className="text-[#1e2428] text-lg overflow-y-auto h-[32vh] max-h-[35vh]">{moreDetails}</p>
              </div>
            )} */}
                </div>
                <div className="w-full xl:w-5/12 p-10 h-full">
                  {coverFilename && coverFilename !== '' && !(coverFilename.includes('.mp4')) &&
                    <div className="mb-4">
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
        )}
      </AnimatePresence>
    </>
  );
}

function renderContentWithLineBreaks(content: any) {
  const lines = content.split("<br/>");
  return (
    <div>
      {lines.map((line: string, index: number) => (
        <p className="text-gray-300 text-xl md:text-lg xl:text-lg 2xl:text-xl" key={index}>
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
  vimeo = '',
  coverFilename,
  resourcesFilenames,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State to track if card is expanded
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // State to track video loading
  const refVideo: any = useRef(null);
  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const truncate = (input: string, characterCount: number) => width < 760 && input?.length > characterCount ? `${input.substring(0, characterCount - 1)}...` : input;
  const truncateFlat = (input: string, characterCount: number) => input?.length > characterCount ? `${input.substring(0, characterCount - 1)}...` : input;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      if (refVideo && refVideo.current && typeof refVideo.current.play === 'function' && isVideoLoaded) {
        refVideo.current.play();
      }
    } else {
      if (refVideo && refVideo.current && typeof refVideo.current.pause === 'function') {
        refVideo.current.pause();
      }
    }
  }, [controls, isInView, isVideoLoaded]);
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };
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
  const toggleExpand = () => setIsExpanded(!isExpanded); // Toggle card expansion

  const buttons = [];
  if (buttonCTA !== '')
    buttons.push(
      <a href={buttonCTA} key={buttonCTA} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
        En savoir plus
      </a>
    )

  if (moreDetails || aPropos !== '')
    buttons.push(
      <Link key='Plus de détail' className="bg-blue-500 hover:bg-blue-600 text-white text-xs xl:text-base font-semibold py-2 px-4 rounded self-start" href={"/" + title}>
        Plus de détail
      </Link>
    )
  files.map((file: any, index: number) => buttons.push(
    <a target="_blank" rel="noopener noreferrer" href={'https://studiofact.group/image/' + file.file} key={index} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mb-4 px-4 rounded self-start">
      {file.label}
    </a>
  ));

  return (
    <motion.div ref={ref} initial='hidden' variants={imageVariants} animate={controls} className="p-4 w-full">
      <div
        className={`w-[450px] xl:w-full relative h-fit ${isExpanded ? 'xl:h-fit' : 'xl:h-[425px]'} rounded-lg shadow-xl flex ${swapContent ? "flex-col-reverse" : "flex-col"
          } xl:flex-row`}
      >
        <div
          className={`relative xl:w-fit mr-2 ${swapContent ? "md:order-2" : ""}`}
        >
          {coverFilename ? (
            coverFilename.endsWith('.mp4') ? (
              <video
                ref={refVideo}
                loop
                muted
                className="w-full h-full absolute inset-0 object-contain self-start"
                onCanPlayThrough={handleVideoLoad} // Event listener for video load
              >
                <source src={'https://studiofact.group/image/' + videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-[427px] xl:w-[704px] rounded-xl overflow-hidden h-[240px] xl:h-[396px] mt-4">
                {
                  coverFilename &&
                  <Image
                    src={'https://studiofact.group/image/' + coverFilename}
                    fill
                    sizes="(max-width: 640px) 640px, 360px"
                    alt={imageAlt}
                    className="object-cover"
                  />
                }
              </div>
            )
          ) : null}
        </div>
        <div className={`${swapContent ? "mr-10" : ""} relative px-2 pt-2 xl:p-4 xl:pl-12 md:pr-4 w-full h-full flex flex-col justify-between`}>
          <div className="flex flex-col h-full">
            <div className="flex flex-col max-h-[100px] xl:max-h-[180px]">
              <h2 className={`${swapContent ? "text-end" : ""} text-xl md:text-2xl xl:text-3xl 2xl:text-3xl overflow-y-hidden min-h-[30px] xl:min-h-[50px] max-h-[1200px] xl:max-h-[180px] font-bold text-white`}>
                {truncate(title, 60)}
              </h2>
              {
                tags &&
                <div className={`${swapContent ? "self-end" : ""} flex space-x-2`}>
                  {tags && tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-300 text-[#1e2428] self-start px-2 py-1 my-2 text-base rounded"
                    >
                      {tag}
                    </span>
                  ))
                  }
                </div>
              }
            </div>
            {
              width > 1280 ?
                <div className={`${swapContent ? "text-end" : ""} min-h-[180px] ${content.length < 1000 ? 'max-h-[200px]' : ''} ${isExpanded && 'pb-20'} overflow-y-hidden ${swapContent ? "" : "pr-10"} mb-3 xl:my-3`}>
                  {isExpanded ? (
                    <p className="text-gray-300 text-xl md:text-lg xl:text-lg 2xl:text-xl">
                      {truncateFlat(content, 2000)}
                    </p>
                  ) : (
                    <p className="text-gray-300 text-xl md:text-lg xl:text-lg 2xl:text-xl">
                      {truncateFlat(content, 1000)}
                    </p>
                  )}{
                    content.length > 1000 && (
                      <button
                        onClick={toggleExpand}
                        className={`text-gray-300 absolute bottom-0 w-full ${isExpanded ? '' : 'bg-gradient-to-b backdrop-blur from-transparent'} flex justify-center hover:text-gray-500`}
                      >
                        {isExpanded ?
                          <FaChevronUp size={60} />
                          :
                          <FaChevronDown size={60} />
                        }
                      </button>
                    )
                  }
                </div>
                :
                <div className="pb-2">
                  {content}
                </div>
            }
          </div>
          <div className={`${swapContent ? "self-end" : ""}  flex flex-col ${buttons.length > 2 ? "flex-wrap overflow-x-auto max-h-[200px]" : ""}`}>
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
        vimeo={vimeo}
      />
    </motion.div>
  );
}
