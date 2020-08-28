import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  width?: string;
  opacity?: number;
  rgba?: string;
}

const backgroundStyle: React.CSSProperties = {
  padding: '5px 9px',
  backgroundColor: '#a5ffae',
  fontSize: '13px',
  color: '#373cff',
  borderRadius: '8px',
  fontStyle: 'bold',
  textAlign: 'center',
  minWidth: '40px',
};

const MintBkText: React.FC<Props> = (props) => {
  const { style, className, children, width, rgba } = props;
  return (
    <div
      className={className}
      style={{
        ...backgroundStyle,
        ...style,
        width: width,
        backgroundColor: rgba,
      }}
    >
      {children}
    </div>
  );
};

export default MintBkText;
