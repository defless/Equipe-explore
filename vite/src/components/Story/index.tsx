import Element from './Element';
import Edito from './Edito';

import './index.sass';

const Story = () => {
  return (
    <div className="Story h-screen overflow-x-scroll overflow-y-hidden flex flex-row">
      <Element width="600px"><img src="/img/SPRAY-PLAYER.png" /></Element>
      <Edito textKey="2" />
      <div className="h-screen">
        <img src="/img/SPRAY0.png" />
      </div>
      <div className="h-screen">
        <img src="/img/SPRAY0.png" />
      </div>
    </div>
  )
};

export default Story;