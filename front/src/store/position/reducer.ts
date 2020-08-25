import { createReducer } from '@reduxjs/toolkit';

import { PositionActionCreators } from './action';

export interface PositionProps {
  latitude: number;
  longitude: number;
}

export const initialState: PositionProps = {
  latitude: 0,
  longitude: 0,
};

export const positionReducer = createReducer(initialState, (builder) => {
  builder.addCase(PositionActionCreators.setPosition, (state, action) => {
    const { longitude, latitude } = action.payload;
    state.latitude = latitude;
    state.longitude = longitude;
  });
});
