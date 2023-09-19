import AvantPropos from 'components/Accueil/AvantPropos';
import DerniereRealisation from 'components/Accueil/DerniereRealisation';
import GalaxieStudioFact from 'components/Accueil/GalaxieStudioFact';
import MiseEnAvant from 'components/Accueil/MiseEnAvant';
import Presentation from 'components/Accueil/Presentation';

export default function Web() {
  return (
    <div className='flex flex-col h-full justify-center items-center'>
      <AvantPropos/>
      <Presentation/>
      <GalaxieStudioFact/>
      <MiseEnAvant/>
      <DerniereRealisation/>
    </div>

  )
}
