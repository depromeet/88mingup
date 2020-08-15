import { createAction } from '@reduxjs/toolkit';
import { UserStateProps } from './reducer';

const prefix = 'USER';

export const UserActionTypes = {
  LOGIN: `${prefix}/LOGIN`,
  REFRESH_PROFILE: `${prefix}/PROFILE`,
  SET_PROFILE: `${prefix}/SET_PROFILE`,
} as const;

export const UserActionCreators = {
  login: createAction<UserStateProps>(UserActionTypes.LOGIN),
  profile: createAction<UserStateProps>(UserActionTypes.REFRESH_PROFILE),
  setProfile: createAction<UserStateProps>(UserActionTypes.SET_PROFILE),
};
