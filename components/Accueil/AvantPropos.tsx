export default function AvantPropos() {
    return (
      <div className='relative w-11/12'>
        <video
          id="background-video"
          loop
          autoPlay
          muted
          className='w-full h-full'
        >
          <source src={'/pres.mp4'} type="video/mp4" />
        </video>
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent"></div>

        {/* New centered instruction */}
        <div className="absolute bottom-0 text-white text-center w-full pb-4">
          <p className='text-2xl'>
            STUDIOFACT est le premier groupe audiovisuel français à produire du contenu original exclusivement issu d’histoires vraies : Documentaire, Fiction, Podcast, Édition, Spectacle vivant.
          </p>
          <button><p>V</p></button>
        </div>
      </div>
    )
  }
  