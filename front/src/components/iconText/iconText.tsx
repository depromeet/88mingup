import React from 'react';

interface iconTextProps {
  style?: React.CSSProperties;
  url?: string | URL;
  className?: string;
}

const containerStyle: React.CSSProperties = {
  width: 168,
  height: 168,
};

const icon: React.CSSProperties = {
  width: 80,
  height: 80,
};

const text: React.CSSProperties = {
  fontSize: 10,
  marginLeft: 8,
  color: 'white',
};

const Card: React.FC<iconTextProps> = (props) => {
  const { style, url, className } = props;
  return (
    <div className={className} style={{ ...containerStyle, ...style }}>
      <img style={{ ...icon, ...style }} />
      <span style={{ ...text, ...style }}>1024</span>
    </div>
  );
};

export default Card;
