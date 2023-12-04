import React, { useEffect, useState } from 'react';
import VideoTextCard from 'components/Accueil/VideoTextCard';


const useWidth = () => {
  const [width, setWidth] = useState(0)
  const handleResize = () => setWidth(window.innerWidth)
  useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return width
}

export default function Web() {
  const [data, setData] = useState<any[]>([]);
  const [loadedCount, setLoadedCount] = useState(4); // Initially load 4 items
  const itemsPerPage = 4; // Number of items to load per additional request
  const width = useWidth();

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://studiofact.group/project`);
        const responseData: any = await response.json();

        // Filter the responseData based on the desired types
        const filteredData = responseData?.projectData?.filter(
          (project: any) => project.type === 'Presse' || project.type === 'Doc'
        );
        if (filteredData) {
          filteredData.sort((a: any, b: any) => {
            const dateA = new Date(a.releaseDate).getTime();
            const dateB = new Date(b.releaseDate).getTime();
            return dateB - dateA;
          });
        }
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const loadMoreItems = () => {
    setLoadedCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <div className='flex flex-col p-10 h-full justify-center items-center bg-[#1e2428]'>
      <div className='flex w-full mt-[5vh]'>
        <h1 className="text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mt-10">Réalisations</h1>
      </div>
      <div className='flex flex-col h-full justify-center  w-full items-center'>
        {data.slice(0, loadedCount).map((item, index) => (
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
            swapContent={width > 712 ? index % 2 !== 0 : false}
          />
        ))}
        {loadedCount < data.length && (
          <button onClick={loadMoreItems} className="mt-4 bg-blue-500 text-white px-4 py-2 mb-16 rounded">
            Voir Plus
          </button>
        )}
      </div>
    </div>
  );
}
