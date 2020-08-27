/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ArticleEntityStateProps } from 'store/article/reducer';
import styled from '@emotion/styled';
import { HeartIcon, CommentIcon } from 'assets';
import { history } from 'store/rootReducer';

interface Props extends ArticleEntityStateProps {}

export const ArticleShortcut = (props: Props) => {
  return (
    <div onClick={() => history.push(`/articles/${props.id}`)}>
      <img
        css={css`
          width: 100%;
          border-radius: 16px;
        `}
        src={props.files[0].file}
      />
      <div
        css={css`
          padding-left: 8px;
          padding-right: 8px;
          margin-bottom: 40px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-top: 16px;
            justify-content: space-between;
          `}
        >
          <Title>{props.title}</Title>
          <div
            css={css`
              display: grid;
              grid-auto-flow: column;
              align-items: center;
              grid-gap: 6px;
            `}
          >
            <SubTittleWrapper>
              <HeartIcon />
              <SubTitle>1023</SubTitle>
            </SubTittleWrapper>
            <SubTittleWrapper>
              <CommentIcon />
              <SubTitle>1023</SubTitle>
            </SubTittleWrapper>
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
  font-weight: bold;
`;

const SubTittleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SubTitle = styled.span`
  font-size: 11px;
  color: black;
  font-weight: bold;
`;

const TimeAgo = styled.span`
  font-size: 9px;
  color: #a1a1a1;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Description = styled.p`
  font-size: 13px;
  color: black;
`;
