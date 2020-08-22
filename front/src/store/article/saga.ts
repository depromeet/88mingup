import { call, put, takeEvery } from 'redux-saga/effects';
import { ArticleActionTypes, ArticleActionCreators } from './action';
import { getArticles } from 'apis/article';
import { ArticleAPI } from 'apis';
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchAllArticles() {
  const data = yield call(getArticles);
  yield put({
    type: ArticleActionTypes.REFRESH,
    payload: {
      all: data,
    },
  });
}

export function* fetchArticle(
  action: ReturnType<typeof ArticleActionCreators.fetch.request>,
) {
  try {
    const response: ReturnType<
      typeof ArticleActionCreators.fetch.success
    >['payload'] = yield call(ArticleAPI.getArticleDetail, action.payload);

    yield put(ArticleActionCreators.fetch.success(response));
  } catch (error) {
    yield put(ArticleActionCreators.fetch.failure(error));
  }
}

export const articleSaga = [
  takeEvery(ArticleActionTypes.FETCH_ALL, fetchAllArticles),
  takeEvery(ArticleActionCreators.fetch.request, fetchArticle),
];

export default articleSaga;
