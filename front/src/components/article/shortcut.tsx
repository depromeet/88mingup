/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ArticleEntityStateProps } from 'store/article/reducer';
import styled from '@emotion/styled';

interface Props extends ArticleEntityStateProps {}

export const ArticleShortcut = (props: Props) => {
  return (
    <div>
      <img
        css={css`
          width: 100%;
          border-radius: 16px;
        `}
        src={props.files[0].url}
      />
      <div
        css={css`
          padding-left: 8px;
          padding-right: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            margin-top: 16px;
            justify-content: space-between;
          `}
        >
          <Title>{props.title}</Title>
          <div>
            <SubTitle>1023</SubTitle>
            <SubTitle>1023</SubTitle>
          </div>
        </div>
        <TimeAgo>3시간 전</TimeAgo>
        <Description>{props.description}</Description>
      </div>
    </div>
  );
};

const Title = styled.span`
  font-size: 18px;
  color: black;
`;

const SubTitle = styled.span`
  font-size: 11px;
  color: black;
`;

const TimeAgo = styled.span`
  font-size: 9px;
  color: #a1a1a1;
`;

const Description = styled.p`
  font-size: 13px;
  color: black;
`;
