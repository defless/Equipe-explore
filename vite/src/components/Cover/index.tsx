import './index.sass';

const Cover = ({ currentPage }: { currentPage: number}) => {
  return (
    <div className="Cover z-30" style={currentPage === 0 ? { left: '0px' } : { left: '-100vw' }}/>
  )
};

export default Cover;