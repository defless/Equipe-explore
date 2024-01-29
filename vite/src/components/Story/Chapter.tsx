import Element from './Element';

interface ChapterProps {
  children: React.ReactNode;
  chapter: string;
}

const Chapter = ({ children, chapter }: ChapterProps) => {
  return (
    <>
      <div className="Group ml-[300px]">
        <Element className="!w-max">
          <img className="!h-screen" src={`/img/chapters/CHAP${chapter}.png`} />
        </Element>
        <Element><img src={`/img/chapters/TEXT${chapter}.png`} /></Element>
      </div>
      {children}
    </>
  )
};

export default Chapter;
