import { createReducer } from '@reduxjs/toolkit';

import { LocationActionCreators } from './action';

export interface LocationProps {
  location: string;
}

export const initialState: LocationProps = {
  location: '',
};

export const locationReducer = createReducer(initialState, (builder) => {
  builder.addCase(LocationActionCreators.setLocation, (state, action) => {
    const { location } = action.payload;
    state.location = location;
  });
});
