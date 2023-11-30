// pages/editions.tsx
import ALaUne from 'components/Accueil/ALaUne';
import Team from 'components/Accueil/Team';
import TitleParagraph from 'components/Accueil/TitleParagraph';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import { Button } from 'components/Button/Button';
import { motion } from 'framer-motion';
import Image from "next/legacy/image";
import { useEffect, useState } from 'react';

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
            <div className="flex justify-between gap-x-10 w-full h-full">
                {images.slice(activeIndex, activeIndex + 4).map((image: any, index: number) => (
                    <motion.div
                        key={`image-${index}-${activeIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 + index / 2 }}
                        className='h-[200px]'
                    >
                        <Image loading="lazy"
                            width={450}
                            height={450}
                            src={image.src}
                            alt={image.alt}
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                {images.slice(0, images.length / 4 + (images.length % 4 > 0 ? 1 : 0)).map((_: any, index: number) => (
                    <button
                        key={index}
                        className={`h-6 w-6 mx-1 rounded-full bg-gray-500 ${index === activeIndex / 4 ? 'bg-gray-800' : ''}`}
                        onClick={() => setActiveIndex(index * 4)}
                    />
                ))}
            </div>
        </div>
    );
};

const images = [
    { src: '/audio.png', alt: 'Image 1' },
    { src: '/audio.png', alt: 'Image 2' },
    { src: '/audio.png', alt: 'Image 3' },
    { src: '/editions.png', alt: 'Image 1' },
    { src: '/audio.png', alt: 'Image 2' },
    { src: '/audio.png', alt: 'Image 3' },
    { src: '/audio.png', alt: 'Image 1' },
    { src: '/audio.png', alt: 'Image 2' },
    { src: '/audio.png', alt: 'Image 3' },
    { src: '/audio.png', alt: 'Image 1' },
    { src: '/audio.png', alt: 'Image 2' },
    { src: '/audio.png', alt: 'Image 3' },
    { src: '/editions.png', alt: 'Image 1' },
    // Add more images as needed
];
export default function PressePage() {
    const [data, setData] = useState<any[]>([]);
    const [aLaUne, setALaUne]: any = useState(null);
    const [selectedProjects, setSelectedProjects] = useState<{ accueil: [], presse: [], _id: string }>({
        accueil: [],
        presse: [],
        _id: "",
    });

    useEffect(() => {
        // Make the API request to localhost:3000/project/ with Realisation as a parameter
        // Replace with your actual API endpoint and parameters
        fetch('localhost:3002/project/type/Presse')
            .then((response) => response.json() as any) // Type assertion here
            .then((responseData) => { setData(responseData.realisationProjects) })
            .catch((error) => console.error('Error fetching data:', error));
        fetch("localhost:3002/alaune")
            .then((response) => response.json())
            .then((responseData: any) => {
                setSelectedProjects(responseData.aLaUneData[0]); // Assuming the API returns an array of project objects
            })
            .catch((error) => console.error("Error fetching data:", error));

    }, []);
    useEffect(() => {
        if (selectedProjects.presse != null)
            setALaUne(data.filter((elem) => elem._id === selectedProjects.presse)[0]);
    }, [data, selectedProjects])

    return (
        <div className="flex flex-col justify-center items-center h-full p-10 mt-[8vh]">
            <TitleParagraph color1={'bg-[#00D779]'} color2={'bg-[#CF6FED]'} top1={100} top2={75} left1={450} left2={750} x1={-100} x2={350} y1={-100} y2={-300} title="Presse : le studio de podcasts d'histoires vraies du groupe StudioFact" paragraph="Chez StudioFact Audio, nous écoutons le réel pour mieux comprendre le monde et fabriquer des histoires audio qui nous rapprochent" ></TitleParagraph>

            {aLaUne &&
                <ALaUne data={data} selectedProjects={selectedProjects.presse}></ALaUne>
            }

            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">Nos Créations Originales</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Des projets d’auteurices qui sortent des studios pour raconter le monde autour de nous.<br />
                    Des récits singuliers qui mêlent histoires intimes et grande Histoire.<br />
                    Des histoires qui racontent les bouleversements du monde et nos bouleversements intérieurs.<br /><br />
                    Les Créations Originales de StudioFact Audio sont disponibles gratuitement sur toutes les plateformes de podcasts
                </p>
                <div className="flex flex-wrap justify-center gap-16 my-10">
                    {data.map((item, index) => (
                        <VideoTextCard
                            key={index}
                            imageSrc={"/" + item.coverFilename}
                            videoSrc={item.videoTrailer}
                            imageAlt={item.coverFilename}
                            title={item.title}
                            content={item.description}
                            moreDetails={item.enSavoirPlus}
                            aPropos={item.aPropos}
                            type={item.type}
                            tags={item.tags}
                            resourcesFilenames={item.resourcesFilenames}
                            coverFilename={item.coverFilename}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <Team></Team>
                <div className='flex justify-center'>
                    <Button href="">Contactez-nous</Button>
                </div>
            </div>
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">Suivez-nous sur Instagram</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Chez StudioFact Audio, nous produisons aussi des podcasts pour les marques et les institutions qui veulent mettre l’audio au cœur de leur stratégie de communication. Nous vous accompagnons sur toute la chaîne de valeur du podcast de la conception à la diffusion, en passant par toutes les étapes de production.
                </p>
                <div className='flex justify-center my-10'>
                    <iframe title="oui" className="w-[1000px] h-[900px]" id="instagram-embed-1" src="https://www.instagram.com/studiofact.audio/embed/"  allowFullScreen={true} frameBorder="0" height="560" data-instgrm-payload-id="instagram-media-payload-1"></iframe>
                </div>
            </div>
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">Ils parlent de nous</h1>
                    <ImageList images={images}></ImageList>
                </div>
            </div>
        </div>
    );
}
