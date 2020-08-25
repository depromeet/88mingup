import { createAction } from '@reduxjs/toolkit';
import { ArticleEntityStateProps, ArticleStateProps } from './reducer';
import createAsyncAction from 'utils/createAsyncAction';
import { AxiosResponse } from 'axios';
import { ArticleDetailDto, CommentDto } from 'apis/article';

const prefix = 'ARTICLE';

export const ArticleActionTypes = {
  REFRESH: `${prefix}/REFRESH`,
  FETCH_ALL: `${prefix}/FETCH_ALL`,
  FETCH: `${prefix}/FETCH`,
  POST_COMMENT: `${prefix}/POST_COMMENT`,
} as const;

export const ArticleActionCreators = {
  refresh: createAction<ArticleStateProps>(ArticleActionTypes.REFRESH),
  fetch_all: createAction(ArticleActionTypes.FETCH_ALL),
  fetch: createAsyncAction<number, AxiosResponse<ArticleDetailDto>>(
    ArticleActionTypes.FETCH,
  ),
  postComment: createAsyncAction<CommentDto, undefined>(
    ArticleActionTypes.POST_COMMENT,
  ),
};
