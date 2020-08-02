import React from 'react';

interface CardProps {
  style?: React.CSSProperties;
  url?: URL;
}

const defaultCardStyle: React.CSSProperties = {
  borderRadius: 16,
  width: 168,
  height: 168,
  background: '#f2f2f2',
  backgroundSize: 'cover',
};

const Card: React.FC<CardProps> = (props) => {
  const { children, style, url } = props;
  return (
    <div
      style={{ ...defaultCardStyle, ...style, backgroundImage: `url(${url})` }}
    >
      {children}
    </div>
  );
};

export default Card;
