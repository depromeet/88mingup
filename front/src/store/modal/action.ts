import { createAction } from '@reduxjs/toolkit';

const prefix = 'MODAL';

export const ModalActionTypes = {
  CONFIRM: `${prefix}/CONFIRM}`,
  ALERT: `${prefix}/{ALERT}`,
  HIDE: `${prefix}/{HIDE}`,
  CONFIRM_OK: `${prefix}/{CONFIRM_OK}`,
  CONFIRM_CANCEL: `${prefix}/{CONFIRM_CANCEL}`,
};

export const ModalActionCreators = {
  confirm: createAction<{
    content: string;
  }>(ModalActionTypes.CONFIRM),
  alert: createAction<{
    content: string;
  }>(ModalActionTypes.ALERT),
  hide: createAction(ModalActionTypes.HIDE),
  confirmOK: createAction(ModalActionTypes.CONFIRM_OK),
  confirmCancel: createAction(ModalActionTypes.CONFIRM_CANCEL),
};
