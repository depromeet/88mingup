/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { BlueBKBtn } from 'components';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  ArticleActionTypes,
  ArticleActionCreators,
} from 'store/article/action';
import { ArticleStateProps } from 'store/article/reducer';
import { RootState } from 'store/configureStore';
import { ArticleShortcut } from 'components/article/shortcut';
import { MainTitle } from './title';

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
      <MainTitle>Discover</MainTitle>
      <div
        css={css`
          display: grid;
          grid-gap: 8px;
          grid-auto-flow: column;
          grid-auto-columns: minmax(min-content, max-content);
          margin-bottom: 16px;
        `}
      >
        <BlueBKBtn isActive={true}>거리순</BlueBKBtn>
        <BlueBKBtn isActive={false}>최신순</BlueBKBtn>
      </div>
      {articleState.all.map((article) => (
        <ArticleShortcut key={article.id} {...article}></ArticleShortcut>
      ))}
    </div>
  );
};
