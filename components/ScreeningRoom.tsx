import ALaUne from 'components/Accueil/ALaUne';
import RightsProject from 'components/Accueil/RightsProject';
import Team from 'components/Accueil/Team';
import TitleParagraph from 'components/Accueil/TitleParagraph';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
const partnerImages = [
    "publicsenat_1.webp",
    "M6_1.webp",
    "francetv_1.webp",
    "lcpAN_1.webp",
    "canalplus_1.webp",
    "arte_2.webp",
    "tf1_1.webp",
    "rmc_1.webp"
];

const ImageList = ({ images }: any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAuto, setIsAuto] = useState(true);


    useEffect(() => {

        const nextSlide = () => {
            setIsAuto(false);
            setActiveIndex((prevIndex) =>
                prevIndex >= images.length - 4 ? 0 : prevIndex + 4
            );
        };
        const autoScroll = setInterval(() => {
            if (isAuto)
                nextSlide();
            else
                setIsAuto(true);
        }, 5000); // Adjust the timing for automatic scrolling

        return () => {
            clearInterval(autoScroll);
        };
    }, [activeIndex, images.length, isAuto]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-around gap-x-10 w-full h-full">
                {images.slice(activeIndex, activeIndex + 4).map((image: any, index: number) => (
                    <motion.div
                        key={`image-${index}-${activeIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 + index / 2, delay: 0.35 * index }}
                        className=''
                    >
                        <Image
                            width={200}
                            height={200}
                            src={'/' + image}
                            alt={'logo-' + index}
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                {images.slice(0, images.length / 4 + (images.length % 4 > 0 ? 1 : 0)).map((_: any, index: number) => (
                    <button
                        key={index}
                        className={`h-3 w-3 mx-1 rounded-full bg-gray-500 ${index === activeIndex / 4 ? 'bg-gray-800' : ''}`}
                        onClick={() => setActiveIndex(index * 4)}
                    />
                ))}
            </div>
        </div>
    );
};
export default function ScreeningRoom() {
    const [data, setData] = useState<any[]>([]);
    const [selectedProjects, setSelectedProjects] = useState<{ accueil: [], live: [], _id: string }>({
        accueil: [],
        live: [],
        _id: "",
    });
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    const [selectedTags, setSelectedTags] = useState<{ [key: string]: string[] }>({});
    const rightsValues = Array.from(new Set(data.map((elem) => elem.rights !== 'Non' && elem.rights !== undefined && elem.rights)));

    // Extract unique tags for each right
    const tagsForRights: { [key: string]: string[] } = {};
    rightsValues.forEach((right) => {
        const projectsForRight = data.filter((elem: any) => elem.rights === right);
        let tags: string[] = [];
        projectsForRight.forEach((project) => {
            tags = tags.concat(project.tags.filter((tag: any) => !tags.includes(tag)));
        });
        tagsForRights[right] = tags;
    });
    const desiredOrder = ['En Production', 'Factual', 'Fiction', 'Podcast', 'Productions externes'];

    // Sort the rightsValues array based on the desiredOrder
    const sortedRightsValues = rightsValues.sort((a, b) => {
        const indexA = desiredOrder.indexOf(a);
        const indexB = desiredOrder.indexOf(b);

        // If both values are in the desiredOrder array, sort based on their indices
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }

        // If only one value is in the desiredOrder array, prioritize it
        if (indexA !== -1) {
            return -1;
        } else if (indexB !== -1) {
            return 1;
        }

        // If neither value is in the desiredOrder array, retain their original order
        return 0;
    });

    // Filter projects based on selected tags for a specific right

    const filteredProjects = (right: string) => {
        if (!selectedTags[right] || selectedTags[right].length === 0) {
            // If no tags are selected, return all projects for this right
            console.log("data")
            console.log(data)
            return data.filter((elem) => elem.rights === right && elem.vimeo && elem.vimeo && elem.vimeoPassword && elem.vimeoPassword !== "");
        } else {
            // If tags are selected, filter projects based on selected tags
            return data.filter((elem) => {
                console.log("elem")
                console.log(elem)
                return elem.rights === right && elem.vimeo !== '' && elem.vimeo && selectedTags[right].some(tag => elem.tags.includes(tag));
            });
        }
    };

    // Handle tag selection for a specific right
    const handleTagSelect = (right: string, tag: string) => {
        const currentSelectedTags = selectedTags[right] ? [...selectedTags[right]] : [];
        if (currentSelectedTags.includes(tag)) {
            setSelectedTags({
                ...selectedTags,
                [right]: currentSelectedTags.filter((selectedTag) => selectedTag !== tag),
            });
        } else {
            setSelectedTags({
                ...selectedTags,
                [right]: [...currentSelectedTags, tag],
            });
        }
    };

    // Render tags for a specific right
    const renderTagsForRight = (right: string) => {
        return tagsForRights[right].map((tag, index) => (
            <button
                key={index}
                className={`mx-2 mb-2 px-2 md:px-3 py-1 text-xs md:text-base rounded-md text-black ${selectedTags[right]?.includes(tag) ? 'bg-gray-300 shadow-xl' : 'bg-[#ffffff]'
                    }`}
                onClick={() => handleTagSelect(right, tag)}
            >
                {tag}
            </button>
        ));
    };

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    useEffect(() => {
        fetch('https://studiofact.group/project/rights')
            .then((response) => response.json() as any)
            .then((responseData) => { setData(responseData.rightsProjects.sort((a: any, b: any) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())) })
            .catch((error) => console.error('Error fetching data:', error));
        fetch("https://studiofact.group/alaune")
            .then((response) => response.json())
            .then((responseData: any) => {
                setSelectedProjects(responseData.aLaUneData[0]);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="flex flex-col justify-center items-center h-fit w-full md:p-10 mt-[8vh]">
            <TitleParagraph color1={'bg-[#59AA6F]'} color2={'bg-[#FF3133]'} top1={150} top2={50} left1={600} left2={400} x1={500} x2={400} y1={100} y2={-200} title="Screening Room" paragraph="" ></TitleParagraph>

            <div className='w-full h-full pl-6'>
                {/* Display titles and corresponding projects */}
                {
                    sortedRightsValues.map((right, index) => {
                        if (right !== '') {
                            const filteredProjectsTemp = filteredProjects(right);
                            //check if contains an object with vimeo !== ''
                            console.log("filteredProjectsTemp")
                            console.log(filteredProjectsTemp)
                            if (!filteredProjectsTemp.find((elem) => elem.vimeo && elem.vimeo !== "" && elem.vimeoPassword && elem.vimeoPassword !== "")) {
                                return null;
                            }
                            return (
                                <div key={index} className="w-full" >
                                    <div className='flex flex-col mt-10 mb-6'>
                                        <h2 className="text-2xl xl:text-4xl 2xl:text-5xl text-left mb-4 font-bold">{right}</h2>
                                        <div className="flex flex-wrap w-fit h-fit justify-start mb-4">{renderTagsForRight(right)}</div>
                                    </div>

                                    <ul className='flex flex-wrap'>
                                        {filteredProjectsTemp
                                            .map((project, projIndex) => {
                                                return (
                                                    <RightsProject
                                                        key={projIndex}
                                                        imageSrc={"/" + project.coverFilename}
                                                        videoSrc={project.videoTrailer}
                                                        imageAlt={project.coverFilename}
                                                        title={project.title}
                                                        content={project.description}
                                                        vimeoId={project.vimeo}
                                                        vimeoPassword={project.vimeoPassword ? project.vimeoPassword : null}
                                                        moreDetails={project.enSavoirPlus}
                                                        type={project.type}
                                                        tags={project.tags}
                                                        resourcesFilenames={project.resourcesFilenames}
                                                        coverFilename={project.coverFilename}
                                                    />
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        else {
                            return null;
                        }
                    })}
            </div>
        </div >
    );
}