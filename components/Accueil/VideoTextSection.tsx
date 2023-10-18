export default function VideoTextSection() {
  return (
    <div className="flex w-full bg-gradient-to-r from-black via-black to-[#1e2428]">
      <div className="w-1/2 flex justify-center">
        <div className="relative w-full h-full">
          <video id="background-video" loop autoPlay muted className="w-full h-full absolute inset-0 object-cover">
            <source src={'/pres.mp4'} type="video/mp4" />
          </video>
          <div className="bg-gradient-to-r from-transparent via-transparent to-black absolute inset-0"></div>
        </div>
      </div>
      <div className="w-1/2 mx-8 xl:my-16 relative">
        {/* Text content */}
        <h1 className="text-base xl:text-6xl font-bold mb-2 xl:mb-8">Le réel au cœur de notre ADN</h1>
        <div className="overflow-y-scroll xl:overflow-y-hidden max-h-[10em] xl:max-h-full">
          <p className="text-xs xl:text-3xl text-gray-300 mr-16">
            StudioFact media group se différencie avant tout par la nature de ses contenus :

            Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.

            StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.

            Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.

            Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.

            Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies.
          </p>
        </div>
      </div>
    </div>
  )
}
