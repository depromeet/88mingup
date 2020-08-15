import { call, put } from 'redux-saga/effects';
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
