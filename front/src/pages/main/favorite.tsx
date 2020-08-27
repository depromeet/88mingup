/** @jsx jsx */

import React, { useEffect } from 'react';
import { jsx } from '@emotion/core';
import { MainTitle } from './title';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleStateProps } from 'store/article/reducer';
import { RootState } from 'store/configureStore';
import { ArticleActionCreators } from 'store/article/action';
import styled from '@emotion/styled';
import { history } from 'store/rootReducer';
import { MintBKText } from 'components';

import './main.scss';

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
      <MainTitle>
        Most
        <br />
        Favorable
      </MainTitle>
      <Scroll>
        {articleState.all.map((article, idx) => (
          <div>
            {idx === 0 && (
              <MintBKText
                rgba={'#a5ffae'}
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  margin: '8px',
                }}
              >
                <b>near!</b>
              </MintBKText>
            )}
            <Card
              key={article.id}
              onClick={() => history.push(`/articles/${article.id}`)}
            >
              <Image src={article.files[0].file} />
            </Card>
            <Title>{article.title}</Title>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

const Title = styled.div`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-left: 6px;
  margin-top: 16px;
`;

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
  box-shadow: 8px 8px 20px 0 rgba(0, 0, 0, 0.1);
`;

const Scroll = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-column-gap: 16px;
  margin: 0 -16px;
  padding: 0 16px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;
