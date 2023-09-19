export default function MiseEnAvant() {
  return (
    <div className="p-4 my-16 w-full flex flex-col items-center">
      <div className='w-3/4'>
        <h1 className="text-6xl font-bold text-white mb-8 ">MISE EN AVANT</h1>
      </div>
      <div className="w-3/4 mx-auto bg-white rounded-lg shadow-md flex">
        {/* Left side of the card */}
        <div className="relative w-2/4">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent"></div>
          <video
            id="background-video"
            loop
            autoPlay
            muted
            className="w-full h-full absolute top-0 left-0 object-cover"
            style={{ width: '100%', height: '100%' }}
          >
            <source src={'/pres.mp4'} type="video/mp4" />
          </video>
        </div>
        {/* Right side of the card */}
        <div className="flex-1 p-32 flex flex-col justify-between">
          <div>
            <h2 className="text-6xl font-bold mb-6">Prix des jeunes talents 2023</h2>
            <p className="text-gray-700 text-4xl">
              Le Parisien, un des premiers médias d’actualité en France et leader de la presse quotidienne sur la vidéo, et StudioFact, groupe de production audiovisuelle spécialiste du récit d’histoires vraies, prolongent leur alliance avec la création d’un prix qui récompensera des projets de fictions et de documentaires proposés par de jeunes scénaristes et auteur(e)s.
            </p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
            PARTICIPER
          </button>
        </div>
      </div>
    </div>
  )
}
