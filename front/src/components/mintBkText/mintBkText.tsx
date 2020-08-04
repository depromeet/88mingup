import React from 'react';

interface mintBkTextProps {
  style?: React.CSSProperties;
  className?: string;
  text?: string | undefined;
}

const backgroundStyle: React.CSSProperties = {
  padding: '5px 9px',
  backgroundColor: '#a5ffae',
  fontSize: '13px',
  color: '#373cff',
  borderRadius: '8px',
  fontStyle: 'blod',
};

const mintBkText: React.FC<mintBkTextProps> = (props) => {
  const { style, className, text } = props;
  return (
    <div className={className} style={{ ...backgroundStyle, ...style }}>
      {text}
    </div>
  );
};

export default mintBkText;
