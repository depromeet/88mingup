/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { BlueBKBtn } from 'components';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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

  const [isDistance, setIsDistance] = useState(true);

  const articleState: ArticleStateProps = useSelector<
    RootState,
    ArticleStateProps
  >((state) => state.article);

  useEffect(() => {
    dispatch(ArticleActionCreators.fetch_all());
  }, []);

  const onClickBtn = (type: string) => {
    type === 'distance' ? setIsDistance(true) : setIsDistance(false);
  };

  return (
    <div>
      <MainTitle>Discover</MainTitle>
      <div className="icon2-after">
        <div
          css={css`
            display: grid;
            grid-gap: 8px;
            grid-auto-flow: column;
            grid-auto-columns: minmax(min-content, max-content);
          `}
        >
          <BlueBKBtn
            onClick={() => onClickBtn('distance')}
            isActive={isDistance}
          >
            거리순
          </BlueBKBtn>
          <BlueBKBtn onClick={() => onClickBtn('new')} isActive={!isDistance}>
            최신순
          </BlueBKBtn>
        </div>
        <div style={{ marginTop: '16px' }}>
          {articleState.all.map((article) => (
            <ArticleShortcut key={article.id} {...article}></ArticleShortcut>
          ))}
        </div>
      </div>
    </div>
  );
};
