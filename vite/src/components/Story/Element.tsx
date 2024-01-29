interface ElementProps {
  children: React.ReactNode;
  className?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string,
}

const Element = ({ children, top, left, width, height, className }: ElementProps) => {
  return (
    <div className="h-screen flex">
      <div
        className={`relative my-auto ${className && className}`}
        style={{
          top: top || '0',
          left: left || '0',
          width: width || '100%',
          height: height || '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Element;