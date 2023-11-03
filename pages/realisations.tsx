import { useEffect, useState } from 'react';
import VideoTextCard from 'components/Accueil/VideoTextCard';

export default function Web() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Make the API request to localhost:3000/project/ with Realisation as a parameter
    // Replace with your actual API endpoint and parameters
    fetch('http://localhost:3000/project/type/Realisation')
      .then((response) => response.json() as any) // Type assertion here
      .then((responseData) => { setData(responseData.realisationProjects) })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <div className='flex w-full p-10 mt-[5vh]'>
        <h1 className="text-4xl font-semibold mt-10">Réalisations</h1>
      </div>
      <div className='flex flex-col h-full justify-center w-full items-center'>
        {data.length !== 0 && data.map((item, index) => {
          console.log(item);
          return (
            <VideoTextCard
              key={index}
              imageSrc={"/" + item.coverFilename}
              videoSrc={item.videoTrailer}
              imageAlt={item.coverFilename}
              title={item.title}
              content={item.description}
              moreDetails={item.enSavoirPlus}
              type={item.type}
              tags={item.tags}
              resourcesFilenames={item.resourcesFilenames}
              coverFilename={item.coverFilename}
              swapContent={index % 2 !== 0 ? false : false}
            />
          )
        })}
      </div>
    </div>
  );
}
