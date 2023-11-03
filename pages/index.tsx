import FullScreenVideoTextOverlay from 'components/Accueil/FullScreenVideoTextOverlay';
import ImageRows from 'components/Accueil/ImageRows';
import Section from 'components/Accueil/Section';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import VideoTextSection from 'components/Accueil/VideoTextSection';
import { useEffect, useState } from 'react';

export default function Web() {
  const [derniereRealisation1, setDerniereRealisation1] = useState<any>(null);
  const [derniereRealisation2, setDerniereRealisation2] = useState<any>(null);

  useEffect(() => {
    // Make the API request to localhost:3000/project/ with Realisation as a parameter
    // Replace with your actual API endpoint and parameters

    fetch('http://localhost:3000/project/65218501707394458a7342e8')
      .then((response) => response.json() as any) // Type assertion here
      .then((responseData) => { setDerniereRealisation1(responseData.existingProject) })
      .catch((error) => console.error('Error fetching data:', error));
    fetch('http://localhost:3000/project/6521864e707394458a7342ee')
      .then((response) => response.json() as any) // Type assertion here
      .then((responseData) => { setDerniereRealisation2(responseData.existingProject) })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);
  return (
    <div className='flex flex-col h-full justify-center items-center px-10'>
      <FullScreenVideoTextOverlay />
      <VideoTextSection />
      <ImageRows />
      <div className="w-full space-y-10">
        <h1 className="text-2xl p-10 xl:text-6xl font-bold text-white">A la une</h1>
        <VideoTextCard coverFilename={"prixjeunetalents.jpeg"} buttonCTA={"PARTICIPER"} imageSrc={"/prixjeunetalents.jpeg"} imageAlt={"Covid-19, la quête des origines"} title={"Prix des jeunes talents 2023"} content={"Le Parisien, un des premiers médias d’actualité en France et leader de la presse quotidienne sur la vidéo, et StudioFact, groupe de production audiovisuelle spécialiste du récit d’histoires vraies, prolongent leur alliance avec la création d’un prix qui récompensera des projets de fictions et de documentaires proposés par de jeunes scénaristes et auteur(e)s."} />
        <VideoTextCard coverFilename={"covid.jpg"} buttonCTA={"PARTICIPER"} imageSrc={"/covid.jpg"} imageAlt={"Covid-19, la quête des origines"} title={"StudioFact Stories signe « La Mythomane du Bataclan », toute première série #MaxOriginal en France pour Warner Bros Discovery."} content={"Le Parisien, un des premiers médias d’actualité en France et leader de la presse quotidienne sur la vidéo, et StudioFact, groupe de production audiovisuelle spécialiste du récit d’histoires vraies, prolongent leur alliance avec la création d’un prix qui récompensera des projets de fictions et de documentaires proposés par de jeunes scénaristes et auteur(e)s."} />
      </div>
      <div className="w-full space-y-10">
        <h1 className="text-2xl xl:text-6xl font-bold text-white p-10">Nos dernières réalisations</h1>
        {derniereRealisation1 &&
          <VideoTextCard
            imageSrc={"/" + derniereRealisation1.coverFilename}
            videoSrc={derniereRealisation1.videoTrailer}
            imageAlt={derniereRealisation1.coverFilename}
            title={derniereRealisation1.title}
            content={derniereRealisation1.description}
            moreDetails={derniereRealisation1.enSavoirPlus}
            type={derniereRealisation1.type}
            tags={derniereRealisation1.tags}
            resourcesFilenames={derniereRealisation1.resourcesFilenames}
            coverFilename={derniereRealisation1.coverFilename}
          />
        }
        {derniereRealisation2 &&
          <VideoTextCard
            imageSrc={"/" + derniereRealisation2.coverFilename}
            videoSrc={derniereRealisation2.videoTrailer}
            imageAlt={derniereRealisation2.coverFilename}
            title={derniereRealisation2.title}
            content={derniereRealisation2.description}
            moreDetails={derniereRealisation2.enSavoirPlus}
            type={derniereRealisation2.type}
            tags={derniereRealisation2.tags}
            resourcesFilenames={derniereRealisation2.resourcesFilenames}
            coverFilename={derniereRealisation2.coverFilename}
          />
        }
      </div>
      <Section></Section>
    </div>
  )
}
