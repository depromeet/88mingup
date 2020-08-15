import { createAction } from '@reduxjs/toolkit';
import { ArticleEntityStateProps, ArticleStateProps } from './reducer';

const prefix = 'ARTICLE';

export const ArticleActionTypes = {
  REFRESH: `${prefix}/REFRESH`,
  FETCH_ALL: `${prefix}/FETCH_ALL`,
} as const;

export const ArticleActionCreators = {
  refresh: createAction<ArticleStateProps>(ArticleActionTypes.REFRESH),
  fetch_all: createAction<ArticleStateProps>(ArticleActionTypes.FETCH_ALL),
};
