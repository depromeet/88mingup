/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useLocation } from 'hooks/useLocation';
import { useEffect } from 'react';

export const TopSheet = () => {
  const [location, error] = useLocation();

  useEffect(() => {
    console.log(location);
    console.log(error);
  }, [location]);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Title>SEOUL</Title>
      <SubTitle>KOREA</SubTitle>
    </div>
  );
};

const Title = styled.p`
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 0px;
  font-weight: 200;
  font-family: 'Montserrat';
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: #a1a1a1;
  text-transform: uppercase;
  margin-top: 0px;
  font-weight: bold;
  font-family: 'Montserrat';
`;
