import FullScreenVideoTextOverlay from 'components/Accueil/FullScreenVideoTextOverlay';
import ImageRows from 'components/Accueil/ImageRows';
import Section from 'components/Section';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import VideoTextSection from 'components/Accueil/VideoTextSection';
import Probleme from 'components/Probleme';
import Splash from 'components/Splash';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import RightsProject from 'components/Accueil/RightsProject';

export default function Web({ derniereRealisations, dernierPosts }: any) {
  const [derniereRealisationsState, setDerniereRealisations] = useState<any>(derniereRealisations);
  const [dernierPostsState, setDernierPosts] = useState<any>(dernierPosts);
  const isBrowser = typeof window !== 'undefined';
  const width = isBrowser ? window.innerWidth : 0;

  console.log('dernierpostsstate')
  console.log(dernierPostsState)
  useEffect(() => {
    const fetchPost = async () => {
      let posts: any = [];
      await fetch('https://studiofact.group/post')
        .then((response) => response.json())
        .then((responseData: any) => {
          posts = responseData.postData; // Assuming the API returns an array of post objects
        })
        .catch((error) => console.error('Error fetching data:', error));
      await fetch('https://studiofact.group/alaune')
        .then((response) => response.json() as any) // Type assertion here
        .then((responseData) => {
          if (responseData?.aLaUneData) {
            setDernierPosts(posts.filter((post: any) => responseData.aLaUneData[0].accueil.includes(post._id)))
          }
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
    fetchPost();
  }, []);

  return (
    <div id={'index'} className='flex scroll-smooth flex-col h-full justify-center items-center'>
      <Splash />
      <VideoTextSection
        displayButton={true}
        top1={width > 700 ? 0 : 30}
        left1={width > 700 ? 200 : -20}
        x1={width > 700 ? -70 : 20}
        y1={width > 700 ? 100 : 20}
        top2={width > 700 ? -200 : 50}
        left2={width > 700 ? 600 : 250}
        x2={width > 700 ? 0 : 60}
        y2={width > 700 ? -200 : 30}
        title1="Raconter le reel"
        paragraph1="STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant."
        title2="Qui sommes-nous ?"
        paragraph2="« Nos contenus racontent le monde. Tendez loreille, ouvrez les yeux. La réalité dépasse toutes les fictions »"
      />
      <div className="w-full h-full">
        <div className='w-full h-full p-6 xl:p-16 bg-gradient-to-t from-[rgba(134,124,145,0.5)] z-20 from-0% via-[rgba(92,94,110,0.5)] via-20% to-[#1e2428] to-60%'>
          <h1 className="text-2xl md:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-white ">À la une</h1>
          <div className='h-fit'>
            {
              dernierPostsState && dernierPostsState.map((dernierPost: any, index: number) =>
                <VideoTextCard key={index} files={dernierPost.files} coverFilename={dernierPost.coverFilename} imageSrc={dernierPost.cover} imageAlt={dernierPost.title} title={dernierPost.title} content={dernierPost.content} />
              )
            }
          </div>
        </div>
        <div className='h-fit flex p-6 xl:p-16 flex-col w-full bg-gradient-to-b from-[rgba(134,124,145,0.5)] z-20 from-0% via-[rgba(92,94,110,0.5)] via-20% to-[#1e2428] to-60%'>
          <h1 className="text-2xl md:text-2xl xl:text-3xl 2xl:text-3xl font-bold text-white">Nos dernières réalisations</h1>
          <div className='flex mt-[1vh]'>
            {derniereRealisationsState && derniereRealisationsState.length > 0 &&
              <RightsProject
                key={0}
                imageSrc={"/" + derniereRealisationsState[0].coverFilename}
                videoSrc={derniereRealisationsState[0].videoTrailer}
                imageAlt={derniereRealisationsState[0].coverFilename}
                title={derniereRealisationsState[0].title}
                content={derniereRealisationsState[0].description}
                moreDetails={derniereRealisationsState[0].enSavoirPlus}
                type={derniereRealisationsState[0].type}
                tags={derniereRealisationsState[0].tags}
                resourcesFilenames={derniereRealisationsState[0].resourcesFilenames}
                coverFilename={derniereRealisationsState[0].coverFilename}
              />
            }
            {derniereRealisationsState && derniereRealisationsState.length > 1 &&
              <RightsProject
                key={1}
                imageSrc={"/" + derniereRealisationsState[1].coverFilename}
                videoSrc={derniereRealisationsState[1].videoTrailer}
                imageAlt={derniereRealisationsState[1].coverFilename}
                title={derniereRealisationsState[1].title}
                content={derniereRealisationsState[1].description}
                moreDetails={derniereRealisationsState[1].enSavoirPlus}
                type={derniereRealisationsState[1].type}
                tags={derniereRealisationsState[1].tags}
                resourcesFilenames={derniereRealisationsState[1].resourcesFilenames}
                coverFilename={derniereRealisationsState[1].coverFilename}
              />
            }
          </div>
          <Section></Section>
        </div>
        <Probleme />
        <div className="w-full p-6 xl:p-16 shadow-md rounded-lg min-h-[45vh]">
          <div className="mb-4">
            <h1 className="text-2xl md:text-2xl xl:text-3xl 2xl:text-3xl font-bold mb-8">Suivez-nous sur Instagram</h1>
          </div>
          <div className='flex justify-center my-10'>
            <iframe title="oui" className="w-[1000px] h-[400px] md:h-[900px]" id="instagram-embed-1" src="https://www.instagram.com/studiofact.officiel/embed/" allowFullScreen={true} frameBorder="0" height="560" data-instgrm-payload-id="instagram-media-payload-1"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const derniereRealisations = await fetch('https://studiofact.group/project/latest-release-dates/2')
    .then((response) => response.json() as any)
    .catch((error) => {
      console.error('Error fetching derniereRealisations:', error);
      return null;
    });

  const dernierPosts = await fetch('https://studiofact.group/post/latest-release-dates/2')
    .then((response) => response.json() as any)
    .catch((error) => {
      console.error('Error fetching dernierPosts:', error);
      return null;
    });

  return {
    props: {
      derniereRealisations: derniereRealisations?.projects ? derniereRealisations.projects : [],
      dernierPosts: dernierPosts?.posts ? dernierPosts.posts : []
    }
  };
};
