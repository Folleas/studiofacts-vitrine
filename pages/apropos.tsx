// pages/AboutUs.js
import { motion } from 'framer-motion';
import { Fondateurs } from 'components/Accueil/Fondateurs';
import VideoTextSection from 'components/Accueil/VideoTextSection';
import { Talents } from 'components/Accueil/Talents';


export default function AboutUs() {
    
    return (
        <motion.div id='top' className="flex flex-col mt-[8vh] xl:mt-[0px] justify-center items-center h-full space-y-10">
            <VideoTextSection displayButton={false} top1={200} left1={200} x1={-100} y1={200} top2={-200} left2={500} x2={100} y2={-200} title1="A propos" paragraph1="StudioFact Media Group se différencie avant tout par la nature de ses contenus : Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel." title2="La Genèse" paragraph2="Il dirigeait l’agence TV Presse et elle Fremantle France. Entre Jacques Aragones dans le journalisme et Roxane Rouas-Rafowicz dans le divertissement, une alliance s’est formée. La réflexion qui porte ce duo est simple mais puissante : du documentaire à l’enquête, du fait divers au fait de société, les histoires vraies nourrissent et irriguent les succès des plateformes comme des diffuseurs traditionnels, et ce, même en fiction. C’est de ce constat qu’est né StudioFact." />
            {/* <VideoTextCard
                videoSrc={'/pres.mp4'}
                coverFilename={'/pres.mp4'}
                imageSrc={"/samu.png"}
                imageAlt={"Samu"}
                title={"Le réel au coeur de notre ADN"}
                content={"StudioFact media group se différencie avant tout par la nature de ses contenus :<br/>Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.<br/>StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.<br/>Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.<br/>Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.<br/>Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies."}
            /> */}
            <Fondateurs></Fondateurs>
            <Talents></Talents>
        </motion.div>
    );
}
