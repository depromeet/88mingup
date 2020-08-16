import { call, put, takeEvery } from 'redux-saga/effects';
import { ArticleActionTypes } from './action';
import { getArticles } from 'apis/article';

export function* fetchArticles() {
  const data = yield call(getArticles);
  yield put({
    type: ArticleActionTypes.REFRESH,
    payload: {
      all: data,
    },
  });
}

export function* articleSaga() {
  yield takeEvery(ArticleActionTypes.FETCH_ALL, fetchArticles);
}
