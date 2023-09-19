export default function Presentation() {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
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
        </div>
      </div>
      <div className="w-1/2 bg-black my-16">
        {/* Text content */}
        <h1 className="text-6xl font-bold text-white mb-8">Le réel au cœur de notre ADN</h1>
        <p className="text-3xl text-gray-300 mr-16">
          StudioFact media group se différencie avant tout par la nature de ses contenus :

          Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.

          StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.

          Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.

          Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.

          Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.
        </p>
      </div>
    </div>
  )
}
