import { all, takeEvery } from 'redux-saga/effects';
import { UserActionTypes } from './user/action';
import { currentUserProfile, loginAction, userSaga } from './user/saga';
import { ArticleActionTypes } from './article/action';
import { fetchArticles } from './article/saga';
import { articleSaga } from './article/saga';

export default function* rootSaga() {
  yield all([userSaga(), articleSaga()]);
}

//https://redux-saga.js.org/docs/advanced/RootSaga.html
