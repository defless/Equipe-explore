import { useContext } from 'react';

import { StoryContext } from '../Contexts';

const Header = () => {
  const { restart, dispatch, currentPage } = useContext(StoryContext);

  const onRestart = (): void => restart();
  const bookmark = (): void => {}
  const openGithub = (): void => {}

  return (
    <div className="z-40 absolute p-[10px] flex flex-row justify-between w-full">
      <a href="https://www.lequipe.fr/explore/">
        <img className="h-[21px]" src="./img/logo-explore.png" alt="logo" />
      </a>
      <div>
        <a className="mr-3 bg-white p-1 rounded" href="#" onClick={() => dispatch({ currentPage: currentPage + 1 })}>+1</a>
        <a className="mr-3 bg-white p-1 rounded" href="#" onClick={() => dispatch({ currentPage: currentPage - 1 })}>-1</a>
        <a className="mr-3 bg-white p-1 rounded" href="#" onClick={onRestart}>Restart</a>
        <a className="mr-3 bg-white p-1 rounded" href="#" onClick={bookmark}>Bookmark</a>
        <a className="mr-3 bg-white p-1 rounded" href="#" onClick={openGithub}>@defless</a>
      </div>
    </div>
  )
};

export default Header;
