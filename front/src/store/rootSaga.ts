import { all, takeEvery } from 'redux-saga/effects';
import { UserActionTypes } from './user/action';
import { currentUserProfile, loginAction } from './user/saga';

export default function* rootSaga() {
  yield all([]);
  yield takeEvery(UserActionTypes.REFRESH_PROFILE, currentUserProfile);
  yield takeEvery(UserActionTypes.LOGIN, loginAction);
}

//https://redux-saga.js.org/docs/advanced/RootSaga.html
