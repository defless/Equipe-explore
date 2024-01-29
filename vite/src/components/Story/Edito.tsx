import { texts } from '../../assets/ressources'

interface ElementProps {
  textKey: string;
  className?: string;
  top?: string;
  left?: string;
  width?: string;
}

const Edito = ({ textKey, top, left, width, className }: ElementProps) => {
  return (
    <div className="Edito h-screen flex">
      <p
        className={`relative my-auto ${className && className}`}
        style={{
          top: top || '0',
          left: left || '0',
          width: width || '100%',
        }}
      >
        { texts[textKey] }
      </p>
    </div>
  );
};

export default Edito;