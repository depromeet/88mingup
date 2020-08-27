import { createAction } from '@reduxjs/toolkit';
import { ArticleEntityStateProps, ArticleStateProps } from './reducer';
import createAsyncAction from 'utils/createAsyncAction';
import { AxiosResponse } from 'axios';
import {
  ArticleDetailDto,
  CommentDto,
  ArticleFileDto,
  ArticleDto,
  PostArticleDto,
  LikeArticle,
} from 'apis/article';
import { create } from 'lodash';

const prefix = 'ARTICLE';

export const ArticleActionTypes = {
  REFRESH: `${prefix}/REFRESH`,
  FETCH_ALL: `${prefix}/FETCH_ALL`,
  FETCH: `${prefix}/FETCH`,
  POST_COMMENT: `${prefix}/POST_COMMENT`,
  POST_FILE: `${prefix}/POST_FILE`,
  POST_ARTICLE: `${prefix}/POST_ARTICLE`,
  LIKE_ARTICLE: `${prefix}/LIKE_ARTICLE`,
} as const;

interface FileUploadResponse {
  id: number;
  file: string;
}

export const ArticleActionCreators = {
  refresh: createAction<ArticleStateProps>(ArticleActionTypes.REFRESH),
  fetch_all: createAction(ArticleActionTypes.FETCH_ALL),
  fetch: createAsyncAction<number, AxiosResponse<ArticleDetailDto>>(
    ArticleActionTypes.FETCH,
  ),
  postComment: createAsyncAction<CommentDto, undefined>(
    ArticleActionTypes.POST_COMMENT,
  ),
  postFile: createAsyncAction<File, AxiosResponse<FileUploadResponse>>(
    ArticleActionTypes.POST_FILE,
  ),
  postArticle: createAsyncAction<PostArticleDto, undefined>(
    ArticleActionTypes.POST_ARTICLE,
  ),
  likeArticle: createAsyncAction<LikeArticle, undefined>(
    ArticleActionTypes.LIKE_ARTICLE,
  ),
};
