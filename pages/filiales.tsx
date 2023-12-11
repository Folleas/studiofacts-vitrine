import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const filialesData = [
  // Placeholder for Studiofact Editions
  {
    title: "StudioFact Editions",
    text: "La vocation de nos livres est de raconter le réel. Sans goût pour le scandale ou pour l’écume du jour, nous choisissons des histoires fortes, porteuses de sens. Récits autobiographiques, faits divers remarquables, témoignages, enquêtes en immersion, l’ambition de Studiofact Editions est de transporter ses lecteurs au cœur d’univers singuliers, en prise avec l’époque.",
    imageSrc: "/STUDIOFACT_EDITION_BLEU.png",
    href: "/editions"
  },
  {
    title: "StudioFact Stories",
    text: "Fort de son expérience en enquête, magazine et documentaire, StudioFact développe une branche fiction issue d’une vision bien précise : l’écriture du réel. Parce que la réalité dépasse toujours la fiction, nous explorons cet univers inépuisable en combinant l’exigence de l’enquête et les possibilités infinies de la narration. Toujours sur des bases solides. Et toujours entourés des meilleurs talents de la création audiovisuelle. Des talents que nous valorisons et qui nous font confiance, qu’ils soient acteurs, scénaristes, journalistes, réalisateurs, enquêteurs, producteurs, artistes ou techniciens.",
    imageSrc: "/STUDIOFACT_STORIES_ROUGEVERMEIL.png",
    href: "/stories"
  },
  {
    title: "StudioFact Presse (TV Presse)",
    text: "StudioFact Presse (TV Presse), maîtrise parfaitement les techniques audiovisuelles. L’agence rassemble aujourd’hui de nombreux talents, journalistes, réalisateurs et grands reporters, qui ont depuis 15 ans écrit des documentaires, des enquêtes, des sujets pour des magazines d’informations et des reportages diffusés sur toutes les chaînes.",
    imageSrc: "/STUDIOFACT_PRESSE_BLEULAVANDE.png",
    href: "/presse"
  },
  // Placeholder for StudioFact Doc
  {
    title: "StudioFact Doc",
    text: "Le réel fait le scénario d’un documentaire. C’est en observant les phénomènes techniques, sociétaux ou historiques que nous offrons la possibilité de mieux comprendre le monde qui nous entoure. StudioFact Doc assure la production de documentaires patrimoniaux autour des faits divers, des faits de société, de l’histoire et de la culture, de la politique, des opinions et de l’environnement.",
    imageSrc: "/STUDIOFACT_DOC_VERT.png",
    href: "/doc"
  },
  // Placeholder for Studiofact Audio
  {
    title: "StudioFact Audio",
    text: "Raconter le réel avec un micro, à travers l’immersion, l’investigation et la fiction sonore. Partir de l’intime pour raconter l’universel. Redonner une voix à celles et ceux qu’on n’entend pas… Le studio de création podcast de StudioFact c’est tout ça à la fois. L’ambition de vous accompagner en vous glissant à l’oreille le meilleur des histoires vraies glanées par nos journalistes et nos enquêteurs.",
    imageSrc: "/STUDIOFACT_AUDIO_JAUNE.png",
    href: "/audio"
  },
  // Placeholder for StudioFact Lab
  // {
  //   title: "StudioFact Lab",
  //   text: "Rien n’est plus vrai que le spectacle vivant. Rien n’est plus vivant que le spectacle du vrai. De la vie à la scène, il n’y a qu’un pas : StudioFact Live le franchit pour monter sur les planches avec des histoires qui ne sont pas imaginées mais qui sont arrivées. Écrire pour le théâtre avec l’encre du vrai, c’est inventer une narration qui respecte à la fois l’exactitude des faits et l’alchimie émotionnelle de la scène.",
  //   imageSrc: "/STUDIOFACT_LAB_BLEUTURQUOISE.png",
  //   href: "/lab"
  // },
  // Placeholder for StudioFact Live
  {
    title: "StudioFact Live",
    text: "Rien n’est plus vrai que le spectacle vivant. Rien n’est plus vivant que le spectacle du vrai. De la vie à la scène, il n’y a qu’un pas : StudioFact Live le franchit pour monter sur les planches avec des histoires qui ne sont pas imaginées mais qui sont arrivées. Écrire pour le théâtre avec l’encre du vrai, c’est inventer une narration qui respecte à la fois l’exactitude des faits et l’alchimie émotionnelle de la scène.",
    imageSrc: "/01_STUDIOFACT_LIVE.png",
    href: "/live"
  },
  // Placeholder for StudioFact Live
  {
    title: "StudioFact Rights",
    text: "StudioFact Rights est le distributeur en France et à l’international de l'ensemble des productions du groupe ainsi que de productions externes, tous genres confondus.",
    imageSrc: "/01_STUDIOFACT_RIGHT.png",
    href: "/live"
  },
];

const Filiale = ({ title, text, imageSrc, isEven, href }: any) => {
  const flexReverseClass = isEven ? "flex-col xl:flex-row-reverse" : "flex-col xl:flex-row";
  const justifyClass = isEven ? "justify-start" : "xl:justify-end";
  const itemsClass = isEven ? "xl:items-end" : "items-start";
  const textClass = isEven ? "xl:text-right" : "text-left";
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: () => ({
      opacity: 1,
      transition: {
        duration: 1.2,
      },
      delay: 2,
    }),
  };
  return (
    <motion.div ref={ref} initial='hidden' animate={controls} variants={imageVariants} className={` w-full flex ${flexReverseClass} items-center mb-10 shadow-xl xl:mb-0 xl:p-10`}>
      <div className={`w-full flex ${justifyClass}`}>
        <Link href={href} className="relative mx-auto mb-6 xl:mb-0 rounded-xl overflow-hidden h-[150px] w-[300px] xl:h-[300px] xl:w-[600px] md:min-h-[64]">
          <Image  
            src={imageSrc}
            alt={title}
            layout="fill"
            className="object-contain"
          />
        </Link>
      </div>
        <Link href={href} className={`w-full px-8 flex flex-col ${itemsClass}`}>
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white mb-4">{title}</h2>
          <p className={`text-[##ededed] ${textClass} text-xl xl:text-xl 2xl:text-2xl`}>{text}</p>
        </Link>
    </motion.div>
  );
};

export default function Web() {
  return (
    <div className='flex flex-col w-full h-full justify-center space-y-16 mt-[8vh] items-start p-10'>
      <div className='flex'>
        <h1 className="text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mt-10">Filiales</h1>
      </div>
      <div className='flex w-full flex-col space-y-10'>
        {filialesData.map((filiale, index) => (
          <Filiale
            href={filiale.href}
            key={index}
            title={filiale.title}
            text={filiale.text}
            imageSrc={filiale.imageSrc}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
