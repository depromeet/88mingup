import { call, put } from 'redux-saga/effects';
import { getProfile, userLogin } from 'apis/user';
import { UserActionTypes } from './action';
import { UserStateProps } from './reducer';

export function* currentUserProfile() {
  try {
    const profile: UserStateProps = yield call(getProfile);
    console.log(profile);
    yield put({
      type: UserActionTypes.SET_PROFILE,
      payload: {
        ...profile,
        authenticated: true,
      },
    });
  } catch (err) {
    console.log(err);
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

export function* loginAction(data: any) {
  yield call(userLogin, data.pay);
  yield put({ type: UserActionTypes.REFRESH_PROFILE });
}
