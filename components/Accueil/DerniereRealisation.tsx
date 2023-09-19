export default function DerniereRealisation() {
  return (

    <div className="p-4 my-16 w-full flex flex-col items-center">
      <div className='w-3/4'>
        <h1 className="text-6xl font-bold text-white mb-8">NOS DERNIĒRES RÉALISATIONS</h1>
      </div>
      <div className="w-3/4 mx-auto bg-white rounded-lg shadow-md flex mb-16">
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
            <h2 className="text-6xl font-bold mb-6">Quand les urgences ne répondent plus !</h2>
            <p className="text-gray-700 text-4xl">
              Reportage<br />
              Ce sont des drames évitables qui détruisent des familles et alimentent régulièrement la polémique : des patients morts aux urgences faute d’avoir été pris en charge à temps, d’autres parce que le SAMU n’a pas pu ou n’a pas jugé utile d’envoyer une ambulance.
              Alors que le président de la République s’est engagé à désengorger tous les services d’urgence d’ici fin 2024, que le ministre de la Santé encourage désormais tous les Français à composer le 15 avant de se déplacer à l’hôpital, nous avons enquêté sur ces morts qui posent question.
            </p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
            PARTICIPER
          </button>
        </div>
      </div>
      <div className="w-3/4 mx-auto bg-white rounded-lg shadow-md flex">
        {/* Right side of the card */}
        <div className="flex-1 p-32 flex flex-col justify-between">
          <div>
            <h2 className="text-6xl font-bold mb-6">Covid-19, la quête des origines</h2>
            <p className="text-gray-700 text-4xl">
              Documentaire<br />
              En 2020, un virus respiratoire inconnu commençait à se propager dans le monde entier… Suivant des scientifiques mobilisés pour tenter d’identifier l’origine du Sars-Cov-2, un état des lieux de l’avancée de leurs recherches.
            </p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded self-start">
            PARTICIPER
          </button>
        </div>
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
      </div>
    </div>
  )
}
