import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfile, userLogin } from 'apis/user';
import { UserActionTypes } from './action';
import { UserStateProps } from './reducer';
import { ArticleAPI } from 'apis';

export function* currentUserProfile() {
  try {
    const profile: UserStateProps = yield call(getProfile);
    const writtenArticles = yield call(ArticleAPI.getArticles, profile.id);

    yield put({
      type: UserActionTypes.SET_PROFILE,
      payload: {
        ...profile,
        writtenArticles,
        authenticated: true,
      },
    });
  } catch (err) {
    yield put({
      type: UserActionTypes.SET_PROFILE,
      payload: {
        name: '',
        profile_url: '',
        authenticated: false,
      },
    });
  }
}

export function* loginAction(action: any) {
  yield call(userLogin, action.payload);
  yield put({ type: UserActionTypes.REFRESH_PROFILE });
}

export function* userSaga() {
  yield takeEvery(UserActionTypes.REFRESH_PROFILE, currentUserProfile);
  yield takeEvery(UserActionTypes.LOGIN, loginAction);
}
