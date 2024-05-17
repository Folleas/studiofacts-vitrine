import React, { useEffect, useState } from 'react';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import RightsProject from 'components/Accueil/RightsProject';

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return width;
};

export default function Web({ data }: any) {
  const [loadedCount, setLoadedCount] = useState(8); // Initially load 4 items
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 4; // Number of items to load per additional request
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadedCount > 8)
      ref.current?.scrollTo(0, ref.current?.scrollHeight);
  }, [loadedCount]);

  const loadMoreItems = () => {
    setLoadedCount((prevCount) => prevCount + itemsPerPage);
  };

  const filteredData = data.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='relative flex flex-col p-10 h-full justify-center items-center bg-[#1e2428]'>
      <div className='flex justify-between w-full mt-[8vh] mb-[2vh]'>
        <h1 className="text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">Réalisations</h1>
        <input
          type="text"
          placeholder="Chercher une réalisation..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="self-center text-black px-4 py-2 rounded"
        />
      </div>
      <div ref={ref} className='flex scroll-smooth flex-wrap h-[70vh] overflow-y-scroll justify-start w-full items-center'>
        {filteredData.slice(0, loadedCount).map((item: any, index: number) => (
          <RightsProject
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
          // swapContent={width > 712 ? index % 2 !== 0 : false}
          />
        ))}
      </div>
      {loadedCount < filteredData.length && (
        <div className='absolute bottom-[3%] mx-auto w-full flex justify-center bg-gradient-to-b from-[rgba(254,254,254,0)] z-20 from-0% via-[rgba(254,254,254,0.05)] via-50% to-[rgba(254,254,254,0.1)] to-100%'>
          <button onClick={loadMoreItems} className="bg-blue-500 text-white px-4 py-2 rounded">
            Voir Plus
          </button>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`https://studiofact.group/project`);
    const responseData: any = await response.json();

    // Filter the responseData based on the desired types
    const filteredData = responseData?.projectData?.filter(
      (project: any) => project.type === 'Presse' || project.type === 'Doc'
    ).filter((project: any) => project.rights === 'Non' || !project.rights);
    if (filteredData) {
      filteredData.sort((a: any, b: any) => {
        const dateA = new Date(a.releaseDate).getTime();
        const dateB = new Date(b.releaseDate).getTime();
        return dateB - dateA;
      });
    }

    return {
      props: {
        data: filteredData,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
}
