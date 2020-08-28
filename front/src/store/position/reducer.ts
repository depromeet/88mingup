import { createReducer } from '@reduxjs/toolkit';

import { PositionActionCreators } from './action';

export interface PositionProps {
  latitude: number;
  longitude: number;
}

export const initialState: PositionProps = {
  latitude: 37.5760222,
  longitude: 126.9769,
};

export const positionReducer = createReducer(initialState, (builder) => {
  builder.addCase(PositionActionCreators.setPosition, (state, action) => {
    const { longitude, latitude } = action.payload;
    state.latitude = latitude;
    state.longitude = longitude;
  });
});
