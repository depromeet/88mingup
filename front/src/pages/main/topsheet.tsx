/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

export const TopSheet = () => {
  return (
    <div
      css={css`
        margin-top: 40px;
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
`;

const SubTitle = styled.p`
  font-size: 13px;
  color: #a1a1a1;
  text-transform: uppercase;
  margin-top: 0px;
`;
