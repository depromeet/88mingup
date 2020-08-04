import React from 'react';

interface blukBkTextProps {
  style?: React.CSSProperties;
  className?: string;
  text?: string | undefined;
}

const backgroundStyle: React.CSSProperties = {
  padding: '3px 8px',
  backgroundColor: '#373cff',
  fontSize: '13px',
  color: '#a5ffae',
};

const blueBkText: React.FC<blukBkTextProps> = (props) => {
  const { style, className, text } = props;
  return (
    <div className={className} style={{ ...backgroundStyle, ...style }}>
      {text}
    </div>
  );
};

export default blueBkText;
