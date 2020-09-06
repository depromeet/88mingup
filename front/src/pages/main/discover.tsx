/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { BlueBKBtn } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ArticleActionCreators } from 'store/article/action';
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

  const orderData = isDistance
    ? [...articleState.all.filter((item) => item.distance)].sort(
        (a, b) => a.distance! - b.distance!,
      )
    : [...articleState.all].sort((a, b) =>
        a.created_at! < b.created_at! ? 1 : -1,
      );

  return (
    <div>
      <MainTitle>Discover</MainTitle>

      <div
        css={css`
          display: grid;
          grid-gap: 8px;
          grid-auto-flow: column;
          grid-auto-columns: minmax(min-content, max-content);
        `}
      >
        <BlueBKBtn onClick={() => onClickBtn('distance')} isActive={isDistance}>
          거리순
        </BlueBKBtn>
        <BlueBKBtn onClick={() => onClickBtn('new')} isActive={!isDistance}>
          최신순
        </BlueBKBtn>
      </div>
      <div style={{ marginTop: '16px' }}>
        {orderData.map((article) => (
          <ArticleShortcut key={article.id} {...article}></ArticleShortcut>
        ))}
      </div>
    </div>
  );
};
