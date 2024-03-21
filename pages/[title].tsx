import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Router, useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { FramerAppear } from "components/FramerAppear";

const Home = ({ data }: any) => {
    const router = useRouter();
    const title = router.query.title;

    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollPosition = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (!data)
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    const content = data.description;
    const type = data.type;
    const tags = data.tags;
    const coverFilename = data.coverFilename;
    const resourcesFilenames = data.resourcesFilenames;
    console.log('data.resourcesFilenames')
    console.log(data.resourcesFilenames)
    const videoSrc = data.videoTrailer;
    const moreDetails = data.moreDetails;
    const aPropos = data.aPropos;
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    }
    return (
        <div>
            <div className='h-[30vh] md:h-screen flex w-screen relative overflow-hidden'>
                <div ref={parallaxRef} className='absolute w-full h-full top-0'>
                    <div id={"splash"} className="h-[30vh] md:h-screen relative w-screen">
                        <div className="h-[30vh] md:h-screen relative w-full">
                            {coverFilename && coverFilename !== '' && coverFilename.includes('.mp4') ?
                                <video
                                    id="background-video"
                                    loop
                                    playsInline
                                    autoPlay
                                    muted
                                    controls={false}
                                    className="absolute w-full h-full object-cover mt-[8vh] z-0"
                                >
                                    <source src={'https://studiofact.group/image/' + videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag or the file format of this video.
                                </video>
                                : <div className="mb-4">
                                    {
                                        coverFilename &&
                                        <Image
                                            src={'https://studiofact.group/image/' + coverFilename}
                                            alt={`Cover Image for ${title}`}
                                            layout="fill"
                                            className="rounded-lg object-cover"
                                        />
                                    }
                                </div>
                            }
                            {/* Conditionally render the gradients based on screen size */}
                            <div className="absolute inset-y-0 left-0 w-full lg:bg-gradient-to-b from-transparent from-50% via-[rgba(30,36,40,0.5)] via-85% to-[rgba(30,36,40,1)] to-100%"></div>
                            {/* <div className="absolute inset-y-0 right-0 w-1/4 lg:bg-gradient-to-l from-[#1e2428] via-black to-transparent"></div> */}
                            <FramerAppear>
                                <div className="absolute invisible md:visible bottom-[5%] text-white text-left p-16 w-full pb-4">
                                    <h2 className="text-xl md:text-5xl xl:text-5xl 2xl:text-6xl min-h-[50px] max-h-[200px] font-bold">{title}</h2>
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
                                    <button
                                        className="self-center bg-[#46fd9e] py-2 px-4 text-[#1e2428] text-sm hover:bg-[#84f588] font-semibold rounded"
                                        onClick={() => {
                                            const splashDiv = document.getElementById('splash');
                                            if (splashDiv) {
                                                window.scrollTo({
                                                    top: splashDiv.offsetHeight - 100,
                                                    behavior: 'smooth',
                                                });
                                            }
                                        }}>
                                        Découvrir
                                    </button>
                                </div>
                            </FramerAppear>
                        </div>
                        <div className="h-[3vh] bg-gradient-to-b from-[#1e2428] to-transparent"></div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse xl:flex-row items-start justify-center py-8 xl:py-16">
                <div className="w-full xl:w-5/12 pl-10 h-full">


                    {/* Video */}
                    {videoSrc && (
                        <div className="mt-4 w-full h-fit">
                            <div className="w-[300px] h-[200px] xl:w-[600px] xl:h-[350px]">
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
                <div onClick={stopPropagation} className="pr-6 overflow-y-auto xl:overflow-y-hidden flex-col xl:flex-row rounded-lg shadow-md w-full xl:w-5/6 h-[100%] xl:h-[95%] flex ">
                    {/* Left side content */}
                    <div className="w-full px-10 h-full">
                        <h2 className="text-xl md:text-5xl xl:text-5xl 2xl:text-6xl min-h-[50px] max-h-[200px] font-bold">{title}</h2>
                        <div className="my-3 xl:my-6 flex pb-1 overflow-x-auto">
                            <div>
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
                            </div>
                            {tags.map((tag: string, index: number) => (
                                <div
                                    key={index}
                                    className="min-w-[70px] xl:min-w-[40px]"
                                >
                                    <span
                                        className="bg-gray-300 text-[#1e2428] px-2 xl:py-1 text-lg rounded mr-2"
                                    >
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Display tags under the title */}
                        <div className="flex flex-col overflow-y-auto gap-y-4 mb-2 h-full">
                            <p className={`text-base md:text-xl text-justify xl:text-2xl 2xl:text-3xl`} style={{ whiteSpace: 'pre-line' }}>
                                {content}
                            </p>
                            {moreDetails &&
                                <p className={`text-base md:text-xl text-justify xl:text-2xl 2xl:text-2xl font-thin`} style={{ whiteSpace: 'pre-line' }}>
                                    {moreDetails}
                                </p>
                            }
                            {aPropos &&
                                <p className={`text-base md:text-xl text-justify xl:text-2xl 2xl:text-2xl font-thin`} style={{ whiteSpace: 'pre-line' }}>
                                    {aPropos}
                                </p>
                            }
                        </div>
                        {/* <p className="text-[#1e2428] text-3xl overflow-y-auto h-[43vh] max-h-[45vh]">{content}</p>
            {moreDetails && (
              <div>
              <h2 className="text-2xl text-[#1e2428] font-bold mb-2">Plus de détails</h2>
              <p className="text-[#1e2428] text-lg overflow-y-auto h-[32vh] max-h-[35vh]">{moreDetails}</p>
              </div>
            )} */}
                    </div>
                </div>
            </div>
            {resourcesFilenames.length > 0 && (
                <>
                    <h2 className="pl-10 text-lg md:text-xl xl:text-3xl 2xl:text-3xl min-h-[50px] max-h-[200px] font-bold">Galerie</h2>
                    <div className="flex flex-col h-fit w-full overflow-x-scroll p-16">
                        <div className="flex py-6 w-fit space-x-4">
                            {resourcesFilenames.map((resource: string, index: number) => (
                                <div
                                    key={index}
                                    className={`relative w-[400px] h-[400px] rounded-xl overflow-hidden`}
                                >
                                    <Image
                                        src={'https://studiofact.group/image/' + resource}
                                        alt={`Resource Image ${index}`}
                                        fill
                                        sizes={"(max-width: 640px) 400px, 400px, (max-width: 768px) 400px, 400px"}
                                        className="rounded-md object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div >
    )
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const title = context.params.title;
    const encodedTitle = encodeURIComponent(title ? title : '');
    const derniereRealisations = await fetch('https://studiofact.group/project/title/' + encodedTitle)
        .then((response) => response.json() as any)
        .catch((error) => {
            console.error('Error fetching project:', error);
            return null;
        });
    console.log(derniereRealisations)
    return {
        props: {
            data: derniereRealisations?.existingProject ? derniereRealisations.existingProject : null,
        }
    };
};


export default Home;

// {coverFilename && coverFilename !== '' && !(coverFilename.includes('.mp4')) &&
// <div className="w-[300px] h-[200px] xl:w-[600px] xl:h-[400px] relative">
//     {/* Display cover image */}
//     {
//         coverFilename &&
//         <Image
//             src={'https://studiofact.group/image/' + coverFilename}
//             alt={`Cover Image for ${title}`}
//             fill
//             className="rounded-lg object-contain"
//         />
//     }
//     {/* Title for the cover */}
// </div>
// }
