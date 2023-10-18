// pages/AboutUs.js
import VideoTextCard from 'components/Accueil/VideoTextCard';
import Image from 'next/image';

const PersonCard = ({ name, occupation, bio, imageSrc }) => {
    return (
        <div className="w-1/4 p-4">
            <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <div className="relative" style={{ paddingBottom: '100%' }}>
                    <Image
                        src={'/' + imageSrc}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-black">{name}</h2>
                    <p className="text-gray-500">{occupation}</p>
                    <p className="text-gray-600 mt-2">{bio}</p>
                </div>
            </div>
        </div>
    );
};


export const TalentCard = ({ name, occupation, bio, imageSrc }) => {
    return (
        <div className="w-1/4 p-4">
            <div className="bg-[#ededed] text-black rounded-lg shadow-lg overflow-hidden grid grid-cols-2">
                {/* Image */}
                <div className="relative col-span-1 w-[150px] h-[150px]">
                    <div className="rounded-full overflow-hidden w-full h-full">
                        <Image
                            src={`/${imageSrc}`}
                            alt={name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                </div>
                {/* Name and Occupation */}
                <div className="flex flex-col justify-center col-span-1">
                    <h2 className="text-lg font-semibold text-black">{name}</h2>
                    <p className="text-gray-500 text-sm">{occupation}</p>
                </div>

                {/* Bio */}
                <div className="col-span-2 p-4">
                    <p className="text-gray-600 text-sm">{bio}</p>
                </div>
            </div>
        </div>
    );
};

export default function AboutUs() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="w-3/4 p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">A Propos</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    StudioFact Media Group se différencie avant tout par la nature de ses contenus : Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.
                </p>
            </div>
            <div className="w-3/4 p-6 shadow-md rounded-lg min-h-[45vh]">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">La Genèse</h1>
                </div>
                <p className="text-gray-200 text-4xl">
                    Il dirigeait l’agence TV Presse et elle Fremantle France.
                    Entre Jacques Aragones dans le journalisme et Roxane Rouas-Rafowicz dans le divertissement, une alliance s’est formée. La réflexion qui porte ce duo est simple mais puissante : du documentaire à l’enquête, du fait divers au fait de société, les histoires vraies nourrissent et irriguent les succès des plateformes comme des diffuseurs traditionnels, et ce, même en fiction. C’est de ce constat qu’est né StudioFact.
                </p>
            </div>
            <VideoTextCard
                videoSrc={'/pres.mp4'}
                coverFilename={'/pres.mp4'}
                imageSrc={"/samu.png"}
                imageAlt={"Samu"}
                title={"Le réel au coeur de notre ADN"}
                content={"StudioFact media group se différencie avant tout par la nature de ses contenus :<br/>Nous sommes le seul groupe de production spécialisé dans les histoires vraies et l’écriture du réel.<br/>StudioFact est le premier acteur de la production audiovisuelle française à présenter cette particularité : chacune des entités du groupe raconte le réel.<br/>Autour du groupe, nous développons des projets en partenariat avec des acteurs du secteur dont nous partageons l’exigence et la vision du métier.<br/>Les six branches de production de StudioFact (Presse, Documentaires, Fictions, Édition, Podcasts, Lab, et Live) permettent une circulation fluide des sujets et des histoires vraies à travers différents modes narratifs possibles. Le regroupement stratégique de ces métiers et des talents qui y collaborent permet également de créer des synergies économiques.<br/>Notre groupe est également unique en son genre par ses modes de distribution. Nous enquêtons, créons et produisons pour la télévision, les plateformes de streaming, les salles de cinéma, les plateformes de podcast ou encore les librairies."}
            />

            <div className="w-3/4 p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">Fondateurs</h1>
                    <div className='flex justify-around'>
                        <PersonCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <PersonCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                    </div>
                </div>
            </div>
            <div className="w-3/4 p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <h1 className="text-2xl xl:text-6xl font-bold text-white mb-8">Nos Talents</h1>
                    <div className='flex flex-wrap '>
                        <TalentCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <TalentCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                        <TalentCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <TalentCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                        <TalentCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <TalentCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                        <TalentCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <TalentCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                        <TalentCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <TalentCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                        <TalentCard
                            name="Roxane Rouas-Rafowicz"
                            occupation="Avocate et entrepreneuse"
                            bio="Roxane Rouas-Rafowicz est avocate de formation et entrepreneuse. Diplômée de l’école du barreau de Paris, Roxane exerce plusieurs années avant de devenir directrice juridique du groupe AB. En Israël, elle fonde en 2005 et dirige la société de production TooZaz qui produit spectacles et événements notamment pour le public francophone. De retour à Paris, Roxane intègre en 2010 Fremantle France en tant qu’adjointe à la présidence, puis directrice générale. En avril 2021, Roxane cofonde et dirige avec Jacques Aragones Studiofact Mediagroup, premier groupe audiovisuel français à produire du contenu original exclusivement issu d'histoires vraies."
                            imageSrc="roxane2.png"
                        />
                        <TalentCard
                            name="Jacques Aragones"
                            occupation="Journaliste"
                            bio="Titulaire d'une Maîtrise de droit privé et diplômé de l'Institut Français de Presse (Troisième Cycle), Jacques Aragones est journaliste depuis 1997. Il a exercé plusieurs responsabilités au sein du groupe TF1 entre 2001 et 2010, successivement reporter, Rédateur en Chef puis Directeur des magazines d'enquêtes et de reportages (TF1 Productions). Précédemment, il a travaillé sur divers magazines d'information pour la chaîne M6 ainsi que dans différentes agences de presse audiovisuelles."
                            imageSrc="jacqquues-1.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
