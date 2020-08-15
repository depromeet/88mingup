import React from 'react';
import styled from '@emotion/styled';

interface CardProps {
  style?: React.CSSProperties;
  url?: string | URL;
  className?: string;
}

const CardDiv = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 168px;
  background: #f2f2f2;
  background-size: cover;
`;

const Card: React.FC<CardProps> = (props) => {
  const { children, style, url, className } = props;
  return (
    <CardDiv
      className={className}
      style={{ ...style, backgroundImage: `url(${url})` }}
    >
      {children}
    </CardDiv>
  );
};

export default Card;
