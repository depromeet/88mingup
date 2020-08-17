import { createAction } from '@reduxjs/toolkit';

const prefix = 'POSITION';

export const PositionActionTypes = {
  SET_POSITION: `${prefix}/SET_POSITION`,
};

export const PositionActionCreators = {
  setPosition: createAction<{
    latitude: number;
    longitude: number;
  }>(PositionActionTypes.SET_POSITION),
};
