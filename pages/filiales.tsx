import Image from "next/image";

const filialesData = [
  {
    title: "StudioFact Fiction",
    text: "Fort de son expérience en enquête, magazine et documentaire, StudioFact développe une branche fiction issue d’une vision bien précise : l’écriture du réel. Parce que la réalité dépasse toujours la fiction, nous explorons cet univers inépuisable en combinant l’exigence de l’enquête et les possibilités infinies de la narration. Toujours sur des bases solides. Et toujours entourés des meilleurs talents de la création audiovisuelle. Des talents que nous valorisons et qui nous font confiance, qu’ils soient acteurs, scénaristes, journalistes, réalisateurs, enquêteurs, producteurs, artistes ou techniciens.",
    imageSrc: "/doc.png",
  },
  {
    title: "StudioFact Presse (TV Presse)",
    text: "StudioFact Presse (TV Presse), maîtrise parfaitement les techniques audiovisuelles. L’agence rassemble aujourd’hui de nombreux talents, journalistes, réalisateurs et grands reporters, qui ont depuis 15 ans écrit des documentaires, des enquêtes, des sujets pour des magazines d’informations et des reportages diffusés sur toutes les chaînes.",
    imageSrc: "/editions.png",
  },
  {
    title: "StudioFact Presse (TV Presse)",
    text: "StudioFact Presse (TV Presse), maîtrise parfaitement les techniques audiovisuelles. L’agence rassemble aujourd’hui de nombreux talents, journalistes, réalisateurs et grands reporters, qui ont depuis 15 ans écrit des documentaires, des enquêtes, des sujets pour des magazines d’informations et des reportages diffusés sur toutes les chaînes.",
    imageSrc: "/editions.png",
  },
  {
    title: "StudioFact Presse (TV Presse)",
    text: "StudioFact Presse (TV Presse), maîtrise parfaitement les techniques audiovisuelles. L’agence rassemble aujourd’hui de nombreux talents, journalistes, réalisateurs et grands reporters, qui ont depuis 15 ans écrit des documentaires, des enquêtes, des sujets pour des magazines d’informations et des reportages diffusés sur toutes les chaînes.",
    imageSrc: "/editions.png",
  },
  // Add more Filiale data objects for other branches
];


const Filiale = ({ title, text, imageSrc, isEven }) => {
  const flexReverseClass = isEven ? "flex-row-reverse" : "flex-row";
  const justifyClass = isEven ? "justify-start" : "justify-end";
  const itemsClass = isEven ? "items-end" : "items-start";
  const textClass = isEven ? "text-right" : "text-left";

  return (
    <div className={`container mx-auto flex ${flexReverseClass} items-center`}>
      <div className={`md:w-1/2 flex ${justifyClass}`}>
        <div className="relative h-80 w-80 md:min-h-[64] md:w-96">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow"
          />
        </div>
      </div>
      <div className={`md:w-1/2 px-8 flex flex-col ${itemsClass}`}>
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <p className={`text-[##ededed] ${textClass}`}>{text}</p>
      </div>
    </div>
  );
};

export default function Web() {
  return (
    <div className='flex flex-col h-full justify-center space-y-16 items-center'>
      <div className='flex w-3/4'>
        <h1 className="text-4xl font-semibold mt-10">Filiales</h1>
      </div>
      {filialesData.map((filiale, index) => (
        <Filiale
          key={index}
          title={filiale.title}
          text={filiale.text}
          imageSrc={filiale.imageSrc}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
}
