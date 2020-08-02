import React from 'react';

interface CardProps {
  style?: React.CSSProperties;
  url?: string | URL;
  className?: string;
}

const defaultCardStyle: React.CSSProperties = {
  borderRadius: 16,
  width: 168,
  height: 168,
  background: '#f2f2f2',
  backgroundSize: 'cover',
};

const Card: React.FC<CardProps> = (props) => {
  const { children, style, url, className } = props;
  return (
    <div
      className={className}
      style={{ ...defaultCardStyle, ...style, backgroundImage: `url(${url})` }}
    >
      {children}
    </div>
  );
};

export default Card;
