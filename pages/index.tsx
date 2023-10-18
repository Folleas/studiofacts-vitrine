import FullScreenVideoTextOverlay from 'components/Accueil/FullScreenVideoTextOverlay';
import ImageRows from 'components/Accueil/ImageRows';
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
    <div className='flex flex-col h-full justify-center space-y-[100px] items-center'>
      <FullScreenVideoTextOverlay />
      <VideoTextSection />
      <ImageRows />
      <div className="w-3/4">
        <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">MISE EN AVANT</h1>
      </div>
      <VideoTextCard coverFilename={"prixjeunetalents.jpeg"} buttonCTA={"PARTICIPER"} imageSrc={"/prixjeunetalents.jpeg"} imageAlt={"Covid-19, la quête des origines"} title={"Prix des jeunes talents 2023"} content={"Le Parisien, un des premiers médias d’actualité en France et leader de la presse quotidienne sur la vidéo, et StudioFact, groupe de production audiovisuelle spécialiste du récit d’histoires vraies, prolongent leur alliance avec la création d’un prix qui récompensera des projets de fictions et de documentaires proposés par de jeunes scénaristes et auteur(e)s."} />
      <div className="w-3/4">
        <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">NOS DERNIĒRES RÉALISATIONS</h1>
      </div>
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
  )
}
