import { all, takeEvery } from 'redux-saga/effects';
import { UserActionTypes } from './user/action';
import { currentUserProfile, loginAction } from './user/saga';
import { ArticleActionTypes } from './article/action';
import { fetchArticles } from './article/saga';

export default function* rootSaga() {
  yield all([]);
  yield takeEvery(UserActionTypes.REFRESH_PROFILE, currentUserProfile);
  yield takeEvery(UserActionTypes.LOGIN, loginAction);
  yield takeEvery(ArticleActionTypes.FETCH_ALL, fetchArticles);
}

//https://redux-saga.js.org/docs/advanced/RootSaga.html
