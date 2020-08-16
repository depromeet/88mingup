/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ArticleEntityStateProps } from 'store/article/reducer';

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
          <span>{props.title}</span>
          <div>좋아요 및 코멘트</div>
        </div>
        <span>N시간 전</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
