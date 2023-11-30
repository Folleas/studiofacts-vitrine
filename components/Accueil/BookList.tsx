import { motion, useAnimation, useInView } from 'framer-motion';
import Image from "next/legacy/image";
import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TextTabs from './TextTabs';

function ProjectModal({
    isOpen,
    onClose,
    data
}: any) {
    const [pressKitModalOpen, setPressKitModalOpen] = useState(false);

    const openPressKitModal = () => {
        setPressKitModalOpen(true);
    };
    if (!isOpen) return null;
    const today = new Date(data.releaseDate);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = 0 + dd;
    if (mm < 10) mm = 0 + mm;

    const formattedDate = dd + '/' + mm + '/' + yyyy;

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
        >
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-[#ffffff] p-6 rounded-lg shadow-md overflow-x-auto flex-col xl:flex-row xl:w-5/6 h-[100%] xl:h-[95%] relative flex">
                    <div className="w-full xl:w-3/12 xl:p-10 h-full">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            {/* You can use an 'x' icon from a library like FontAwesome */}
                            <FaTimes size={20} />
                        </button>

                        <div className="flex mb-4 justify-center">
                            {
                                data?.coverFilename &&
                                <Image loading="lazy"
                                    src={'studiofact.fr/image/' + data.coverFilename}
                                    alt={`Cover Image for ${data.title}`}
                                    width={367}
                                    height={500}
                                    className="rounded-lg"
                                />
                            }
                            {/* Title for the cover */}
                        </div>
                        <div className='xl:h-[425px] w-full flex flex-col'>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg text-end font-bold text-[#1e2428] mt-1'>Genre</h3>
                                <p className='w-5/12  text-xs xl:text-lg font-semibold text-[#1e2428] mt-1'>{data.genre}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg font-bold text-end text-[#1e2428] mt-1'>Date de parution</h3>
                                <p className='w-5/12 text-xs xl:text-lg font-semibold text-[#1e2428] mt-1'>{formattedDate}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg  text-end font-bold text-[#1e2428] mt-1'>Editeur</h3>
                                <p className='w-5/12 text-xs xl:text-lg  font-semibold text-[#1e2428] mt-1'>{data.editeur}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg font-bold text-end text-[#1e2428] mt-1'>Format</h3>
                                <p className='w-5/12 text-xs xl:text-lg font-semibold text-[#1e2428] mt-1'>{data.format}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg font-bold text-end text-[#1e2428] mt-1'>Nombre de pages</h3>
                                <p className='w-5/12 text-xs xl:text-lg font-semibold text-[#1e2428] mt-1'>{data.nombreDePage}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg font-bold text-end text-[#1e2428] mt-1'>Diffuseur</h3>
                                <p className='w-5/12 text-xs xl:text-lg font-semibold text-[#1e2428] mt-1'>{data.diffuseur}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg font-bold text-end text-[#1e2428] mt-1'>ISBN</h3>
                                <p className='w-5/12 overflow-x-scroll text-xs xl:text-lg font-semibold text-[#1e2428] mt-1'>{data.isbn}</p>
                            </div>
                            <div className="border border-gray-300 my-1"></div>
                            <div className='flex flex-row justify-center space-x-4'>
                                <h3 className='w-5/12 text-xs xl:text-lg font-bold text-end text-[#1e2428] mt-1'>Télécharger le kit presse</h3>
                                <p
                                    className='w-5/12 text-xs xl:text-lg self-center font-semibold text-[#1e2428] mt-1 cursor-pointer'
                                    onClick={() => openPressKitModal()}>
                                    Cliquez ici
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-9/12 p-10 h-full">

                        {/* Display tags under the title */}
                        <div className="my-6">
                            <h2 className="text-xl xl:text-6xl overflow-y-scroll min-h-[75px] mt-auto xl:mb-4 max-h-[200px] text-[#1e2428] font-bold">{data.title}</h2>
                            {data.type && (
                                <span
                                    className="bg-gray-300 text-[#1e2428] px-2 xl:py-1 text-lg rounded mr-2"
                                >
                                    <strong>{data.type}</strong>
                                </span>
                            )}
                            {data.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-gray-300 text-[#1e2428] px-2 py-1 text-lg rounded mr-2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <TextTabs height="450px" tabs={[
                            {
                                title: 'Résumé',
                                content: data.description,
                            },
                            {
                                title: 'Les auteurs',
                                content: data.lesAuteurs,
                            },
                            {
                                title: 'Dédicaces et rencontres',
                                content: data.dedicacesEtRencontres,
                            },
                        ]} icon={true} />

                        {data.resourcesFilenames.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-semibold text-[#1e2428] mt-4">Galerie</h2>
                                <div className="flex py-6 overflow-x-scroll w-[825px] space-x-4">
                                    {data.resourcesFilenames.map((resource: string, index: number) => (
                                        <div
                                            key={index}
                                            className={`relative min-w-[200px] min-h-[200px] rounded-xl overflow-hidden`}
                                        >
                                            {
                                                resource &&
                                                <Image loading="lazy"
                                                    src={'studiofact.fr/image/' + resource}
                                                    alt={`Resource Image ${index}`}
                                                    layout="fill"
                                                    className="rounded-md object-cover"
                                                />
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Existing code for ProjectModal */}

            {/* Press Kit Modal */}
            {pressKitModalOpen && (
                <motion.div>
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="bg-[#ededed] relative p-6 rounded-lg shadow-md">
                            <button
                                onClick={() => {
                                    setPressKitModalOpen(false);
                                }}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                X
                            </button>
                            {/* Display press kit information */}
                            <h2 className='text-black text-3xl'>Kit presse {data.title}</h2>
                            {data.pressKit.map((elem: any, index: number) => (
                                <div key={index}>
                                    <a href={"studiofact.fr/image/" + elem.file}>
                                        <h2 className='text-black'>- {elem.label}</h2>
                                    </a>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

function BookCard({ item }: any) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-4 w-[360px]">
            <div className="relative w-[325px] h-[450px]">
                {
                    item?.coverFilename &&
                    <Image loading="lazy"
                        src={'studiofact.fr/image/' + item.coverFilename}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                    />
                }
            </div>
            <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
            <p className="text-lg mt-1 max-h-[200px] overflow-y-hidden ">{item.enSavoirPlus}</p>
            <button onClick={openModal} className="mt-4 px-4 py-2 bg-[rgba(237,237,237,1)] hover:bg-[#ffffff] text-[#1e2428] rounded">
                En Savoir Plus
            </button>
            <ProjectModal
                isOpen={isModalOpen}
                onClose={closeModal}
                data={item}
            />
        </div>
    );
}

export default function BookList({ data }: any) {
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
        <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} className="my-10 w-full">
            <h2 className="text-2xl xl:text-6xl font-bold mb-10">Nos livres</h2>
            <div className="flex flex-wrap">
                {data.map((project: any, index: number) => (
                    <BookCard key={index} item={project} />
                ))}
            </div>
        </motion.div>
    );
}