import FullScreenVideoTextOverlay from 'components/Accueil/FullScreenVideoTextOverlay';
import ImageRows from 'components/Accueil/ImageRows';
import Section from 'components/Accueil/Section';
import VideoTextCard from 'components/Accueil/VideoTextCard';
import VideoTextSection from 'components/Accueil/VideoTextSection';
import { useEffect, useState } from 'react';

export default function Web() {
  return (
    <div className='flex scroll-smooth flex-col h-full justify-center items-center'>
      <p className='text-xl mt-[10vh]'>
        Mentions légales
        ARTICLE 1. PARTIES

        Les présentes conditions générales sont applicables entre STUDIO FACT MEDIA GROUP, capital social : 10 000,00 €, siège social : Siège 23, Rue d’Anjou 75008 Paris, France, email : /, ci-après « l’Editeur » et toute personne, physique ou morale, de droit privé ou de droit public, inscrite sur le Site pour acheter un Produit, ci-après « le Client ».
        ARTICLE 2. DEFINITIONS

        « Client » : toute personne, physique ou morale, de droit privé ou de droit public, inscrite sur le Site.

        « Contenus du Site » : éléments de toute nature publiés sur le Site, protégés ou non par un droit de propriété intellectuelle, tel que textes, images, designs, présentations, vidéos, schémas, structures, bases de données ou logiciels.

        « L’Editeur » : STUDIO FACT MEDIA GROUP, SAS, pris en sa qualité d’éditeur du Site.

        « Internaute » : toute personne, physique ou morale, de droit privé ou de droit public, se connectant au Site.

        « Produit » : bien de toute nature vendu sur le Site par l’Editeur aux Clients.

        « Site » : site internet accessible à l’URL www.studiofactmediagroup.com, ainsi que les sous-sites, sites miroirs, portails et variations d’URL y afférents.
        ARTICLE 3. CHAMP D’APPLICATION

        Le Site est d’accès libre et gratuit à tout Internaute. La navigation sur le Site suppose l’acceptation par tout Internaute des présentes conditions générales. La simple connexion au Site, par quelque moyen que ce soit, notamment par l’intermédiaire d’un robot ou d’un navigateur, emportera acceptation pleine et entière des présentes conditions générales. Lors de l’inscription sur le Site, cette acceptation sera confirmée par le fait de cocher la case correspondante.

        L’Internaute reconnaît du même fait en avoir pris pleinement connaissance et les accepter sans restriction.

        Le fait de cocher la case susvisée sera réputé avoir la même valeur qu’une signature manuscrite de la part de l’Internaute. L’Internaute reconnaît la valeur de preuve des systèmes d’enregistrement automatique de L’Editeur et, sauf pour lui d’apporter preuve contraire, il renonce à les contester en cas de litige.

        Les présentes conditions générales sont applicables aux relations entre les parties à l’exclusion de toutes autres conditions, et notamment celles de l’Internaute.

        L’acceptation des présentes conditions générales suppose de la part des Internautes qu’ils jouissent de la capacité juridique nécessaire pour cela, ou à défaut qu’ils en aient l’autorisation d’un tuteur ou d’un curateur s’ils sont incapables, de leur représentant légal s’ils sont mineurs, ou encore qu’ils soient titulaires d’un mandat s’ils agissent pour le compte d’une personne morale.
        ARTICLE 4. OBJET DU SITE

        Le Site a pour objet la vente de Produits aux Clients.
        ARTICLE 5. SERVICE CLIENTELE

        Le service clientèle du Site est accessible du Lundi au Vendredi de 09:00 à 19:00 par courrier électronique à : contact@studiofactmediagroup.com ou par courrier postal à l’adresse indiquée à l’article 1 des présentes conditions générales. Dans ces deux cas, l’Editeur s’engage à apporter une réponse sous 5 jours ouvrés.
        ARTICLE 6. DONNEES PERSONNELLES

        Dans le cadre de sa prestation, l’Editeur va être amené à traiter des données à caractère personnel de ses Clients.
        6.1. Identité du responsable du traitement

        Le responsable de la collecte et des données traitées sur le Site est l’Editeur.
        6.2. Données collectées
        6.2.1. Données collectées auprès des clients

        Dans le cadre de ses relations contractuelles, l’Editeur peut être amené à collecter et traiter des informations de ses Clients, à savoir : Email, Nom et prénom.
        6.2.2. Finalités de la collecte de données personnelles

        Les données collectées lors de la relation contractuelle font l’objet d’un traitement automatisé ayant pour finalité de :

        exécuter les engagements contractuels ;
        contacter les Clients ;
        éviter toute activité illicite ou illégale ;
        faire respecter les conditions générales ;
        engager des procédures judiciaires ;
        vérifier l’identité des Clients ;

        6.2.3. Bases juridiques du traitement

        Les données collectées ont pour base juridique une relation contractuelle.
        6.2.4. Destinataires des données

        Les données collectées sont consultables uniquement par l’Editeur dans les limites strictement nécessaires à l’exécution des engagements contractuels.

        Ces données, que ce soit sous forme individuelle ou agrégée, ne sont jamais rendues librement visualisables par une personne physique tierce.
        6.2.5. Durée de conservation des données personnelles

        Les données personnelles collectées sont conservées pendant le temps de la relation contractuelle, et pendant le temps durant lequel la responsabilité de l’Editeur peut être engagée.

        Passé le délai de conservation, l’Editeur s’engage à supprimer définitivement les données des personnes concernées sans en conserver une copie.
        6.2.6. Sécurité et confidentialité des données personnelles

        Les données personnelles sont conservées dans des conditions sécurisées, selon les moyens actuels de la technique, dans le respect des dispositions du Règlement général sur la protection des données et de la législation nationale en vigueur.

        L’accès aux locaux de l’Editeur est également sécurisé.
        6.2.8. Minimisation des données

        L’Editeur peut également collecter et traiter toute donnée transmise volontairement par ses Clients.

        L’Editeur oriente ses Clients afin qu’il fournisse des données à caractère personnel strictement nécessaires à l’exécution des engagements contractuels.

        L’Editeur s’engage à ne conserver et traiter que les données strictement nécessaires à ses activités professionnelles, et supprimera toute donnée reçue non utile à ses activités dans les plus brefs délais.
        6.3. Respect des droits

        Les Clients de l’Editeur disposent des droits suivants concernant leurs données personnelles, qu’ils peuvent exercer en écrivant à l’adresse postale de l’Editeur  ou en remplissant le formulaire contact en ligne.
        6.3.1. Droit d’information, d’accès et de communication des données

        Les Clients de l’Editeur ont la possibilité d’accéder aux données personnelles qui les concernent.

        En raison de l’obligation de sécurité et de confidentialité dans le traitement des données à caractère personnel qui incombe à l’Editeur, les demandes seront uniquement traitées si les Clients rapportent la preuve de leur identité, notamment par la production d’un scan de leur titre d’identité valide (en cas de demande par le formulaire électronique dédié) ou d’une photocopie signée de leur titre d’identité valide (en cas de demande adressée par écrit), tous deux accompagnés de la mention « j’atteste sur l’honneur que la copie de cette pièce d’identité est conforme à l’original. Fait à … le … », suivie de leur signature.

        Pour les aider dans leur démarche, les Clients trouveront ici un modèle de courrier élaboré par la Cnil.
        6.3.2. Droit de rectification, de suppression et droit à l’oubli des données

        Les Clients de l’Editeur ont la possibilité de demander la rectification, la mise à jour, le verrouillage ou encore l’effacement de leurs données personnelles qui peuvent s’avérer le cas échéant inexactes, erronées, incomplètes ou obsolètes.

        Les Clients de l’Editeur peuvent également définir des directives générales et particulières relatives au sort des données à caractère personnel après leur décès. Le cas échéant, les héritiers d’une personne décédée peuvent exiger de prendre en considération le décès de leur proche et/ou de procéder aux mises à jour nécessaires.

        Pour les aider dans leur démarche, les Clients trouveront  ici un modèle de courrier élaboré par la Cnil.
        6.3.3. Droit d’opposition au traitement de données

        Les Clients de l’Editeur ont la possibilité de s’opposer à un traitement de leurs données personnelles.

        Pour les aider dans leur démarche, les Clients trouveront  ici un modèle de courrier élaboré par la Cnil.
        6.4.4. Droit à la portabilité des données

        Les Clients de l’Editeur ont le droit de recevoir les données personnelles qu’ils ont fournies à l’Editeur dans un format transférable, ouvert et lisible.
        6.4.5. Droit à la limitation du traitement

        Les Clients de l’Editeur ont le droit de demander que le traitement de leurs données personnelles par l’Editeur soit limité. Ainsi, leurs données ne pourront qu’être conservées et non plus utilisées par l’Editeur.
        6.4.6. Délais de réponse

        L’Editeur s’engage à répondre à toute demande d’accès, de rectification ou d’opposition ou toute autre demande complémentaire d’informations dans un délai raisonnable qui ne saurait dépasser 1 mois à compter de la réception de la demande.
        6.4.7. Plainte auprès de l’autorité compétente

        Si les Clients de l’Editeur considèrent que l’Editeur ne respecte pas ses obligations au regard de leurs données à caractère personnel, ils peuvent adresser une plainte ou une demande auprès de l’autorité compétente. En France, l’autorité compétente est la Cnil à laquelle ils peuvent adresser une demande ici.
        6.5. Transfert des données collectées
        6.5.1. Transfert à des partenaires

        L’Editeur a recours à des prestataires habilités pour faciliter la collecte et le traitement des données de ses Clients. Ces prestataires peuvent être situés en dehors de l’Union Européenne.

        L’Editeur s’est préalablement assuré de la mise en œuvre par ses prestataires de garanties adéquates et du respect de conditions strictes en matière de confidentialité, d’usage et de protection des données, par exemple via le Privacy Shield états-unien.
        6.5.2. Transfert sur réquisition ou décision judiciaire

        Les Clients consentent également à ce que l’Editeur communique les données collectées à toute personne, sur réquisition d’une autorité étatique ou sur décision judiciaire.
        6.5.3. Transfert dans le cadre d’une fusion ou d’une acquisition

        Si l’Editeur est impliqué dans une fusion, une vente d’actifs, une opération de financement, une liquidation ou banqueroute ou dans une acquisition de tout ou partie de son activité par une autre société, les Clients consentent à ce que les données collectées soient transmises par l’Editeur à cette société et que cette société opère les traitements de données personnelles visés dans les présentes Conditions générales de service au lieu et place de l’Editeur.
        ARTICLE 8. PROPRIETE INTELLECTUELLE
        8.1. Protection légale des Contenus du Site

        Les Contenus du Site sont susceptibles d’être protégés par le droit d’auteur et le droit des bases de données. Toute représentation, reproduction, traduction, adaptation ou transformation, intégrale ou partielle, réalisée illégalement et sans le consentement de l’Editeur ou de ses ayants droit ou ayants cause constitue une violation des Livres I et III du Code de la propriété intellectuelle et sera susceptible de donner lieu à des poursuites judiciaires pour contrefaçon.
        8.2. Protection contractuelle des Contenus du Site

        L’Internaute s’engage contractuellement à l’égard de l’Editeur à ne pas utiliser, reproduire ou représenter, de quelque manière que ce soit, les Contenus du Site, qu’ils soient ou non protégés par un droit de propriété intellectuelle, à une autre fin que celle de leur lecture par un robot ou un navigateur. Cette interdiction n’est pas applicable aux robots d’indexation ayant pour seul objet de scanner le contenu du Site aux fins d’indexation.
        8.3. Protection des conditions générales

        Les conditions générales du Site, sont protégées par le droit commercial. Toute reproduction, intégrale ou partielle, réalisée sans notre consentement sera susceptible de donner lieu à des poursuites judiciaires pour parasitisme.
        ARTICLE 9. STIPULATIONS FINALES
        9.1. Droit applicable

        Les présentes conditions générales sont soumises à l’application du droit français.
        9.2. Modifications des présentes conditions générales

        Les présentes conditions générales peuvent être modifiées à tout moment par L’Editeur. Les conditions générales applicables au Client sont celles en vigueur au jour de sa commande ou de sa connexion sur le présent Site, toute nouvelle connexion à l’espace personnel emportant acceptation le cas échéant des nouvelles conditions générales.
        9.3. Litiges

        En vertu de l’ordonnance n°2015-1033 du 20 août 2015, tous litiges qui pourraient survenir dans le cadre de l’exécution des présentes conditions générales et dont la solution n’aura pu être trouvée préalablement à l’amiable entre les parties devra être soumis à un médiateur. Le processus est décrit à l’adresse URL suivante : https://www.economie.gouv.fr/dgccrf/Publications/Vie-pratique/Fiches-pratiques/mediation-de-la-consommation

        En outre, le Client est informé de l’existence de la plateforme de règlement en ligne des litiges, accessibles à l’adresse URL suivante : https://ec.europa.eu/consumers/odr/main/?event=main.home2.show

        Tout litige relatif au présent contrat ou en relation avec celui-ci sera tranché par voie d’arbitrage conformément au règlement de l’Institut digital d’arbitrage et de médiation : www.fast-arbitre.com.
        9.4. Entièreté

        La nullité d’une des clauses du présent contrat n’entraînera pas la nullité des autres clauses du contrat ou du contrat dans sa globalité, qui garderont leur plein effet et portée. Dans une telle hypothèse, les parties devront dans la mesure du possible remplacer la stipulation annulée par une stipulation valable correspondant à l’esprit et à l’objet des présentes.
        9.5. Non-renonciation

        L’absence d’exercice par L’Editeur des droits qui lui sont reconnus par les présentes ne pourra en aucun cas être interprétée comme une renonciation à faire valoir lesdits droits.
        9.6. Démarchage téléphonique

        Le Client est informé qu’il a la possibilité de s’inscrire sur la liste d’opposition au démarchage téléphonique à l’adresse http://www.bloctel.gouv.fr/.
        9.7. Langues des présentes conditions générales

        Les présentes conditions générales sont proposées en français.
        9.8. Clauses abusives

        Les stipulations des présentes conditions générales s’appliquent sous réserve du respect des dispositions impératives du Code de la consommation concernant les clauses abusives dans les contrats conclus entre un professionnel et un consommateur.
      </p>
    </div>
  )
}
