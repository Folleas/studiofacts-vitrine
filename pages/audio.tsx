// pages/editions.tsx
import TitleParagraph from 'components/Accueil/TitleParagraph';
import { Button } from 'components/Button/Button';
import Image from "next/legacy/image";
import { useEffect, useState } from 'react';

// const ImageList = ({ images }: any) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [isAuto, setIsAuto] = useState(true);

//     const previousSlide = () => {
//         setIsAuto(false);
//         setActiveIndex((prevIndex) =>
//             prevIndex === 0 ? images.length - 4 : prevIndex - 4
//         );
//     };

//     const nextSlide = () => {
//         setIsAuto(false);
//         setActiveIndex((prevIndex) =>
//             prevIndex >= images.length - 4 ? 0 : prevIndex + 4
//         );
//     };

//     useEffect(() => {
//         const autoScroll = setInterval(() => {
//             if (isAuto)
//                 nextSlide();
//             else
//                 setIsAuto(true);
//         }, 5000); // Adjust the timing for automatic scrolling

//         return () => {
//             clearInterval(autoScroll);
//         };
//     }, [activeIndex, isAuto]);

//     return (
//         <div className="flex flex-col">
//             <div className="flex justify-between gap-x-10 w-full h-full">
//                 {images.slice(activeIndex, activeIndex + 4).map((image: any, index: number) => (
//                     <motion.div
//                         key={`image-${index}-${activeIndex}`}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 1.5 + index / 2 }}
//                         className='h-[200px]'
//                     >
//                         <Image 
//                             width={450}
//                             height={450}
//                             src={image.src}
//                             alt={image.alt}
//                         />
//                     </motion.div>
//                 ))}
//             </div>
//             <div className="flex justify-center mt-6">
//                 {images.slice(0, images.length / 4 + (images.length % 4 > 0 ? 1 : 0)).map((_: any, index: number) => (
//                     <button
//                         key={index}
//                         className={`h-6 w-6 mx-1 rounded-full bg-gray-500 ${index === activeIndex / 4 ? 'bg-gray-800' : ''}`}
//                         onClick={() => setActiveIndex(index * 4)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// const images = [
//     { src: '/audio.png', alt: 'Image 1' },
//     { src: '/audio.png', alt: 'Image 2' },
//     { src: '/audio.png', alt: 'Image 3' },
//     { src: '/editions.png', alt: 'Image 1' },
//     { src: '/audio.png', alt: 'Image 2' },
//     { src: '/audio.png', alt: 'Image 3' },
//     { src: '/audio.png', alt: 'Image 1' },
//     { src: '/audio.png', alt: 'Image 2' },
//     { src: '/audio.png', alt: 'Image 3' },
//     { src: '/audio.png', alt: 'Image 1' },
//     { src: '/audio.png', alt: 'Image 2' },
//     { src: '/audio.png', alt: 'Image 3' },
//     { src: '/editions.png', alt: 'Image 1' },
//     // Add more images as needed
// ];

export const PersonCard = ({ name, occupation, bio, imageSrc }: any) => {
    return (
        <div className="w-full xl:w-2/5 p-4 flex justify-center">
            <div className="text-black rounded-lg w-[700px] shadow-lg overflow-hidden">
                <div className="flex justify-center">
                    <div className="relative xl:w-[350px] xl:h-[350px] w-[150px] h-[150px] rounded-lg self-center overflow-hidden">
                        <Image  
                            src={`/${imageSrc}`}
                            alt={name}
                            layout="fill"
                            className="rounded-lg object-contain"
                        />
                    </div>
                </div>
                <div className="p-4 h-[550px] text-center">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p className="text-white text-xl">{occupation}</p>
                    <p className="text-white text-2xl mt-2 h-[500px] overflow-y-scroll">{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default function AudioPage() {
    const [data, setData] = useState<any[]>([]);
    const [aLaUne, setALaUne]: any = useState(null);
    const [selectedProjects, setSelectedProjects] = useState<any>({
        accueil: null,
        audio: [],
        _id: "652ec1d556dfdb7cfae39dfc",
    });

    useEffect(() => {
        // Make the API request to localhost:3000/project/ with Realisation as a parameter
        // Replace with your actual API endpoint and parameters
        fetch('https://studiofact.group/project/type/Audio')
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
        if (selectedProjects.audio && selectedProjects.audio.length > 0) {
            setALaUne(data.filter((elem) => elem._id === selectedProjects.audio[0])[0]);
        }
    }, [data, selectedProjects])

    return (
        <div className="flex flex-col justify-center items-center h-full p-10 mt-[8vh]">
            <TitleParagraph color1={'bg-[#ff3333]'} color2={'bg-[#FFC300]'} top1={100} top2={75} left1={450} left2={750} x1={-100} x2={350} y1={-100} y2={-300} title="Audio : le studio de podcasts d'histoires vraies du groupe StudioFact" paragraph="Chez StudioFact Audio, nous écoutons le réel pour mieux comprendre le monde et fabriquer des histoires audio qui nous rapprochent" ></TitleParagraph>

            {aLaUne !== undefined && aLaUne !== null &&
                <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                    <div className="mb-4">
                        <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">À la Une</h1>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <h3 className="text-gray-200 text-4xl font-bold">
                            {aLaUne.title}
                        </h3>
                        <p className="text-gray-200 text-4xl">
                            {aLaUne.description}
                        </p>
                        <iframe title="Audio Player" className="mt-10" src={!(aLaUne.enSavoirPlus.includes('https://')) ? 'https://player.audiomeans.fr/player-v2/' + aLaUne.enSavoirPlus + '/playlist/last?mp=1&leadin=1&download=0&std=0&vert=0&playlist=0&color=fcdc00&theme=light' : aLaUne.enSavoirPlus} width="100%" height="500px" allow="autoplay"></iframe>
                    </div>
                </div>
            }
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Nos Créations Originales</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Des projets d’auteurices qui sortent des studios pour raconter le monde autour de nous.<br />
                    Des récits singuliers qui mêlent histoires intimes et grande Histoire.<br />
                    Des histoires qui racontent les bouleversements du monde et nos bouleversements intérieurs.<br /><br />
                    Les Créations Originales de StudioFact Audio sont disponibles gratuitement sur toutes les plateformes de podcasts
                </p>
                <div className="flex flex-wrap justify-center gap-16 my-10">
                    {data.filter((elem: any) => elem.tags.includes("Nos Créations Originales")).map((item, index) => (
                        <div key={index}>
                            <div className="w-80 h-80 mb-6">
                                <a href={!(item.enSavoirPlus.includes('https://')) ? 'https://podcasts.audiomeans.fr/' + item.enSavoirPlus : item.enSavoirPlus} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src={'https://studiofact.group/image/' + item.coverFilename}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                        className="w-full h-full"
                                    />
                                </a>
                            </div>
                            {index % 3 === 2 && <div className="w-full"></div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Nos Créations pour les Marques</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Chez StudioFact Audio, nous produisons aussi des podcasts pour les marques et les institutions qui veulent mettre l’audio au cœur de leur stratégie de communication. Nous vous accompagnons sur toute la chaîne de valeur du podcast de la conception à la diffusion, en passant par toutes les étapes de production.
                </p>
                <div className="flex flex-wrap justify-center gap-16 my-10">
                    {data.filter((elem: any) => elem.tags.includes("Nos Créations pour les Marques")).map((item, index) => (
                        <div key={index}>
                            <div className="w-80 h-80 mb-6">
                                <a href={!(item.enSavoirPlus.includes('https://')) ? 'https://podcasts.audiomeans.fr/' + item.enSavoirPlus : item.enSavoirPlus} target="_blank" rel="noopener noreferrer">
                                    <Image 
                                        src={'https://studiofact.group/image/' + item.coverFilename}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                        className="w-full h-full"
                                    />
                                </a>
                            </div>
                            {index % 3 === 2 && <div className="w-full"></div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Qui sommes-nous ?</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Les meilleures histoires sont en train d’être vécues tout autour de nous. Chez StudioFact Audio nous mettons le réel en ondes pour raconter le monde. Pour révéler des voix, des territoires, des luttes et faire entendre d’autres vies que les nôtres. Nous mettons les meilleurs ingrédients des fictions au service du documentaire et la force du documentaire au service des fictions pour fabriquer des histoires qui nous font vibrer.
                </p>
                <div className='flex justify-center gap-x-10 my-6 min-h-[60vh]'>
                    <PersonCard
                        name="Camille Juzeau"
                        occupation="Directrice en charge de l'éditorial"
                        bio="Camille Juzeau a écrit et réalisé des documentaires et docu-fictions pour la radio et le podcast. Elle a collaboré avec France Inter (La Tête au carré et Le temps d’un bivouac) et écrit des séries documentaires et unitaires pour France Culture (A voix nue, Toute une vie, Les Pieds sur terre), ARTE Radio (L’avocat des terreurs), Paradiso (Bleue comme Mars), et des institutions comme La Ville de Paris (1/4 d’heure à Paris) ou L’école des Loisirs (L’île sous la mer). Elle est la créatrice du podcast Les Baladeurs (Les Others) dont elle a écrit et réalisé les trois premières saisons et de la série documentaire mensuelle L'insomniaque sur ARTE Radio."
                        imageSrc="camille-juzeau_site.webp"
                    />
                    <PersonCard
                        name="Chloé Tavitian"
                        occupation="Directrice en charge du développement"
                        bio="Après plusieurs années en agence de communication, Chloé a fondé l’activité narration audio du groupe Havas. Elle y a produit de nombreux documentaires, fictions et docu-fictions parmi lesquels Un Autre Cheval (Château Cheval Blanc), Réparer les violences (La Maison des Femmes) - Top Apple 2021, Objectif Canal (Canal+ Group). Chloé est membre de l’association “Les Écouteurs” qui a créé le Paris Podcast Festival. Elle a également coproduit en indépendante avec sa sœur Zazie 30 secondes chrono et Gilles, ma soeur et moi avec ARTE Radio (Mention Spéciale Prix Italia 2022). "
                        imageSrc="Chloe-Tavitian_site.webp"
                    />
                </div>
                <div className='flex justify-center'>
                    <Button href="mailto:c.tavitian@https://studiofact.group">Contactez-nous</Button>
                </div>
            </div>
            <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Suivez-nous sur Instagram</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Chez StudioFact Audio, nous produisons aussi des podcasts pour les marques et les institutions qui veulent mettre l’audio au cœur de leur stratégie de communication. Nous vous accompagnons sur toute la chaîne de valeur du podcast de la conception à la diffusion, en passant par toutes les étapes de production.
                </p>
                <div className='flex justify-center my-10'>
                    <iframe title="oui" className="w-[1000px] h-[900px]" id="instagram-embed-1" src="https://www.instagram.com/studiofact.audio/embed/"  allowFullScreen={true} frameBorder="0" height="560" data-instgrm-payload-id="instagram-media-payload-1"></iframe>
                </div>
            </div>
            {/* <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Ils parlent de nous</h1>
                    <ImageList images={images}></ImageList>
                </div>
            </div> */}
        </div>
    );
}
