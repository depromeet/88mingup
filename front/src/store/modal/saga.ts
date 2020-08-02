import { put, race, take } from 'redux-saga/effects';

import { ModalActionCreators, ModalActionTypes } from './action';

export function* confirm({ content = '' }) {
  yield put(ModalActionCreators.confirm({ content }));

  const { yes } = yield race({
    yes: take(ModalActionTypes.CONFIRM_OK),
    no: take(ModalActionTypes.CONFIRM_CANCEL),
  });

  yield put(ModalActionCreators.hide());
  return !!yes;
}

export function alert({ content = '' }) {
  // TODO 해야됨.
}
