/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useEffect } from 'react';

export const TopSheet = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Title>
        <div
          css={css`
            text-align: 'center';
          `}
          className="icon1-after"
        >
          <div style={{ position: 'absolute' }}>SEOUL</div>
        </div>
      </Title>
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
  margin-top: -110px;
  font-weight: bold;
  font-family: 'Montserrat';
`;
