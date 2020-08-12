import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const backgroundStyle: React.CSSProperties = {
  padding: '5px 9px',
  backgroundColor: '#a5ffae',
  fontSize: '13px',
  color: '#373cff',
  borderRadius: '8px',
  fontStyle: 'bold',
};

const MintBkText: React.FC<Props> = (props) => {
  const { style, className, children } = props;
  return (
    <div className={className} style={{ ...backgroundStyle, ...style }}>
      {children}
    </div>
  );
};

export default MintBkText;
