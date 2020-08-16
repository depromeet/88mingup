import { createReducer } from '@reduxjs/toolkit';
import { UserActionCreators } from './action';

export interface UserStateProps {
  name: string;
  profileUrl: string;
  authenticated: boolean;
}

const initialState: UserStateProps = {
  name: '',
  profileUrl: '',
  authenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(UserActionCreators.setProfile, (state, action) => {
    state.authenticated = action.payload.authenticated;
    state.name = action.payload.name;
    state.profileUrl = action.payload.profileUrl;
  });
});
