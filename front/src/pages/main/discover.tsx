/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { BlueTextBtn } from 'components';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  ArticleActionTypes,
  ArticleActionCreators,
} from 'store/article/action';
import { ArticleStateProps } from 'store/article/reducer';
import { RootState } from 'store/configureStore';

export const Discover = () => {
  const dispatch = useDispatch();

  const articleState: ArticleStateProps = useSelector<
    RootState,
    ArticleStateProps
  >((state) => state.article);

  useEffect(() => {
    dispatch(ArticleActionCreators.fetch_all());
  }, []);

  return (
    <div>
      <Title>Discover</Title>
      <div
        css={css`
          display: grid;
          grid-gap: 8px;
          grid-auto-flow: column;
          grid-auto-columns: minmax(min-content, max-content);
        `}
      >
        <BlueTextBtn>거리순</BlueTextBtn>
        <BlueTextBtn>최신순</BlueTextBtn>
      </div>
      {articleState.all.map((article) => (
        <div>{article.title}</div>
      ))}
    </div>
  );
};

const Title = styled.p`
  font-size: 22px;
  color: #373cff;
  margin-bottom: 24px;
`;
