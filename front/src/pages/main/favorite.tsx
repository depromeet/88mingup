/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import React, { useEffect } from 'react';
import { MainTitle } from './title';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleStateProps } from 'store/article/reducer';
import { RootState } from 'store/configureStore';
import { ArticleActionCreators } from 'store/article/action';
import { ArticleShortcut } from 'components/article/shortcut';
import styled from '@emotion/styled';
import { history } from 'store/rootReducer';

interface Props {}

export const Favorite = (props: Props) => {
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
      <MainTitle>Favorite</MainTitle>
      <Scroll>
        {articleState.all.map((article) => (
          <Card
            key={article.id}
            onClick={() => history.push(`/articles/${article.id}`)}
          >
            <Image src={article.files[0].url} />
          </Card>
        ))}
      </Scroll>
    </div>
  );
};

const Card = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 168px;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(${window.screen.width}px * 0.8);
  min-width: calc(${window.screen.width}px * 0.8);
  min-height: calc(${window.screen.width}px * 0.8);
`;

const Scroll = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-column-gap: 16px;
`;

const Image = styled.img`
  width: 100%;
`;
