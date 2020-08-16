import { call, put, takeEvery } from 'redux-saga/effects';
import { getProfile, userLogin } from 'apis/user';
import { UserActionTypes } from './action';
import { UserStateProps } from './reducer';

export function* currentUserProfile() {
  try {
    const profile: UserStateProps = yield call(getProfile);
    yield put({
      type: UserActionTypes.SET_PROFILE,
      payload: {
        ...profile,
        authenticated: true,
      },
    });
  } catch (err) {
    yield put({
      type: UserActionTypes.SET_PROFILE,
      payload: {
        name: '',
        profileUrl: '',
        authenticated: false,
      },
    });
  }
}

export function* loginAction(action: any) {
  console.log();
  yield call(userLogin, action.payload);
  yield put({ type: UserActionTypes.REFRESH_PROFILE });
}

export function* userSaga() {
  yield takeEvery(UserActionTypes.REFRESH_PROFILE, currentUserProfile);
  yield takeEvery(UserActionTypes.LOGIN, loginAction);
}
