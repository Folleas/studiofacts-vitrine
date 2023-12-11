// pages/editions.tsx
import ALaUne from 'components/Accueil/ALaUne';
import TitleParagraph from 'components/Accueil/TitleParagraph';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import { useEffect, useState } from 'react';

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
        fetch('https://studiofact.group/project/type/Presse')
            .then((response) => response.json() as any) // Type assertion here
            .then((responseData) => { setData(responseData.realisationProjects.sort((a: any, b: any) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())) })
            .catch((error) => console.error('Error fetching data:', error));
        fetch("https://studiofact.group/alaune")
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
        <div className="flex flex-col justify-center items-center h-full w-full md:p-10 mt-[8vh] overflow-x-hidden">
            <TitleParagraph color1={'bg-[#00D779]'} color2={'bg-[#CF6FED]'} top1={100} top2={75} left1={450} left2={750} x1={-100} x2={350} y1={-100} y2={-300} title="Presse : Une agence de presse reconnue et expérimentée" paragraph="L’agence rassemble aujourd’hui de nombreux talents, journalistes, réalisateurs et grands reporters, qui ont depuis 15 ans écrit des documentaires, des enquêtes, des sujets pour des magazines d’informations et des reportages diffusés sur toutes les chaînes." ></TitleParagraph>

            {aLaUne &&
                <ALaUne data={data} selectedProjects={selectedProjects.presse}></ALaUne>
            }

            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Nos Créations Originales</h1>
                </div>
                {/* <p className="text-gray-200 text-4xl">
                    Des projets d’auteurices qui sortent des studios pour raconter le monde autour de nous.<br />
                    Des récits singuliers qui mêlent histoires intimes et grande Histoire.<br />
                    Des histoires qui racontent les bouleversements du monde et nos bouleversements intérieurs.<br /><br />
                    Les Créations Originales de StudioFact Audio sont disponibles gratuitement sur toutes les plateformes de podcasts
                </p> */}
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
            {/* <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <Team></Team>
                <div className='flex justify-center'>
                    <Button href="">Contactez-nous</Button>
                </div>
            </div> */}
        </div>
    );
}
