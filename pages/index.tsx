import FullScreenVideoTextOverlay from 'components/Accueil/FullScreenVideoTextOverlay';
import ImageRows from 'components/Accueil/ImageRows';
import Section from 'components/Accueil/Section';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import VideoTextSection from 'components/Accueil/VideoTextSection';
import { useEffect, useState } from 'react';

export default function Web() {
  const [derniereRealisations, setDerniereRealisations] = useState<any>(null);
  const [dernierPosts, setDernierPosts] = useState<any>(null);
  // Scroll to top when path changes

  useEffect(() => {
    // Make the API request to localhost:3000/project/ with Realisation as a parameter
    // Replace with your actual API endpoint and parameters


    // fetch('https://studiofact.group/post/latest-release-dates/2')
    //   .then((response) => response.json() as any) // Type assertion here
    //   .then((responseData) => { responseData?.posts && setDernierPosts(responseData.posts) })
    //   .catch((error) => console.error('Error fetching data:', error));
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
    fetch('https://studiofact.group/project/latest-release-dates/2')
      .then((response) => response.json() as any) // Type assertion here
      .then((responseData) => { responseData?.projects && setDerniereRealisations(responseData.projects) })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);
  return (
    <div className='flex scroll-smooth flex-col h-full overflow-hidden justify-center items-center'>
      <FullScreenVideoTextOverlay />
      <VideoTextSection displayButton={true} top1={0} left1={900} x1={-100} y1={300} top2={-200} left2={1200} x2={200} y2={-200} title1="Raconter le reel" paragraph1="STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu dhistoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant." title2="Qui sommes-nous ?" paragraph2="« Nos contenus racontent le monde.Tendez loreille, ouvrez les yeux. La réalité dépasse toutes les fictions »" />
      <div className="w-full">{/*bg-gradient-to-b from-[#1e2428] via-gray-600 to-[#1e2428]*/}
        <ImageRows />
        <h1 className="text-4xl p-6 xl:p-10 md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">A la une</h1>
        {
          dernierPosts && dernierPosts.map((dernierPost: any, index: number) =>
            <VideoTextCard key={index} files={dernierPost.files} coverFilename={dernierPost.coverFilename} imageSrc={dernierPost.cover} imageAlt={dernierPost.title} title={dernierPost.title} content={dernierPost.content} />
          )
        }
        <h1 className="text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white p-6 xl:p-10">Nos dernières réalisations</h1>
        {derniereRealisations && derniereRealisations.length > 0 &&
          <VideoTextCard
            imageSrc={"/" + derniereRealisations[0].coverFilename}
            videoSrc={derniereRealisations[0].videoTrailer}
            imageAlt={derniereRealisations[0].coverFilename}
            title={derniereRealisations[0].title}
            content={derniereRealisations[0].description}
            moreDetails={derniereRealisations[0].enSavoirPlus}
            type={derniereRealisations[0].type}
            tags={derniereRealisations[0].tags}
            resourcesFilenames={derniereRealisations[0].resourcesFilenames}
            coverFilename={derniereRealisations[0].coverFilename}
          />
        }
        {derniereRealisations && derniereRealisations.length > 1 &&
          <VideoTextCard
            imageSrc={"/" + derniereRealisations[1].coverFilename}
            videoSrc={derniereRealisations[1].videoTrailer}
            imageAlt={derniereRealisations[1].coverFilename}
            title={derniereRealisations[1].title}
            content={derniereRealisations[1].description}
            moreDetails={derniereRealisations[1].enSavoirPlus}
            type={derniereRealisations[1].type}
            tags={derniereRealisations[1].tags}
            resourcesFilenames={derniereRealisations[1].resourcesFilenames}
            coverFilename={derniereRealisations[1].coverFilename}
          />
        }
        <Section></Section>
        <div className="w-full p-6 shadow-md rounded-lg min-h-[45vh]">
          <div className="mb-4">
            <h1 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-8">Suivez-nous sur Instagram</h1>
          </div>
          <div className='flex justify-center my-10'>
            <iframe title="oui" className="w-[1000px] h-[400px] md:h-[900px]" id="instagram-embed-1" src="https://www.instagram.com/studiofact.officiel/embed/"  allowFullScreen={true} frameBorder="0" height="560" data-instgrm-payload-id="instagram-media-payload-1"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
