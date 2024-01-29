import Element from './Element';
import Edito from './Edito';
import Chapter from './Chapter';

import './index.sass';

const Story = () => {
  return (
    <div className="Story h-screen overflow-x-scroll overflow-y-hidden flex flex-row gap-[30px]">
      {/* Introduction */}
      <Element width="600px" top="30px"><img src="/img/SPRAY-PLAYER.png" /></Element>
      <Edito width="600px" textKey="2" />
      <Element width="800px"><img src="/img/SPRAY0.png" /></Element>
      <Edito width="600px" textKey="3" />
      <Element width="800px"><img src="/img/SPRAY1.png" /></Element>
      <div className="Group">
        <Element width="800px"><img src="/img/EXERGUE1.png" /></Element>
        <Element width="800px"><img src="/img/PLAYER1.png" /></Element>
      </div>
      {/* Chapitre 1 */}
      <Chapter chapter="1">
        <Element><img src="/img/SPRAY-PLAYER.png" /></Element>
      </Chapter>
    </div>
  )
};

export default Story;