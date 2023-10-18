import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon from a library

function ProjectModal({
  isOpen,
  onClose,
  title,
  content,
  type,
  moreDetails,
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
        <div className="bg-[#ededed] p-6 rounded-lg shadow-md w-2/3 relative flex max-h-full">
          {/* Left side content */}
          <div className="w-1/2 pr-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              {/* You can use an 'x' icon from a library like FontAwesome */}
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl text-[#1e2428] font-bold">{title}</h2>
            {type && (
              <p className="text-[#1e2428] text-sm xl:text-xl">
                <strong>{type}</strong>
              </p>
            )}

            {/* Display tags under the title */}
            <div className="mb-2">
              {tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-300 text-[#1e2428] px-2 py-1 text-xs rounded mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[#1e2428] text-lg overflow-y-scroll h-[43vh] max-h-[45vh]">{content}</p>
            {moreDetails && (
              <div>
                <h2 className="text-2xl text-[#1e2428] font-bold mb-2">Plus de détails</h2>
                <p className="text-[#1e2428] text-lg overflow-y-scroll h-[32vh] max-h-[35vh]">{moreDetails}</p>
              </div>
            )}
          </div>
          <div className="w-1/2 pl-4 m-6">

            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-[#1e2428] mt-2">Couverture</h2>
              {/* Display cover image */}
              <Image
                src={'/' + coverFilename}
                alt={`Cover Image for ${title}`}
                width={300}
                height={200}
                className="rounded-lg"
              />
              {/* Title for the cover */}
            </div>

            {resourcesFilenames.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-[#1e2428] mt-4">Galerie</h2>
                <div className="flex overflow-x-auto space-x-4">
                  {resourcesFilenames.map((resource: string, index: number) => (
                    <div
                      key={index}
                      className={`relative w-40 h-40`}
                    >
                      <Image
                        src={'/' + resource}
                        alt={`Resource Image ${index}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video */}
            {videoSrc && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#1e2428]">Video</h3>
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="400"
                    src={'/' + videoSrc}
                    title={`Video for ${title}`}
                    allowFullScreen
                  ></iframe>
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
        <p className="text-gray-700 text-sm xl:text-xl" key={index}>
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
  imageSrc,
  videoSrc,
  imageAlt,
  buttonCTA = "",
  swapContent = false,
  moreDetails,
  tags,
  coverFilename,
  resourcesFilenames,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 my-8 w-full xl:w-3/4">
      <div
        className={`w-full mx-auto bg-[#ededed] h-[800px] rounded-lg shadow-md flex ${swapContent ? "flex-col-reverse" : "flex-col"
          } md:flex-row`}
      >
        <div
          className={`relative w-full md:w-1/2 h-64 md:h-auto ${swapContent ? "md:order-2" : ""
            }`}
        >
          {coverFilename ? (
            coverFilename.endsWith('.mp4') ? (
              <video
                loop
                autoPlay
                muted
                className="w-full h-full absolute inset-0 object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={'/' + coverFilename}
                layout="fill"
                objectFit="cover"
                alt={imageAlt}
              />
            )
          ) : null}
        </div>
        <div className="flex-1 p-4 md:p-32 flex flex-col justify-between">
          <div>
            <h2 className="text-lg xl:text-6xl font-bold mb-2 text-[#1e2428]">
              {title}
            </h2>
            {tags && tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-gray-300 text-[#1e2428] px-2 py-1 text-xs rounded mr-2"
              >
                {tag}
              </span>
            ))}
            <div className="h-[350px] overflow-y-scroll pr-10 mt-6">
              {renderContentWithLineBreaks(content)}
            </div>
          </div>
          {buttonCTA !== "" && (
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
              {buttonCTA}
            </button>
          )}
          {moreDetails &&
            <button
              onClick={openModal}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start"
            >
              Know More
            </button>
          }
        </div>
      </div>

      {/* Render the modal component */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        content={content}
        type={type}
        moreDetails={moreDetails}
        tags={tags}
        coverFilename={coverFilename}
        resourcesFilenames={resourcesFilenames}
        videoSrc={videoSrc}
      />
    </div>
  );
}
