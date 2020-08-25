import { createAction } from '@reduxjs/toolkit';

const prefix = 'LOCATION';

export const LocationActionTypes = {
  SET_LOCATION: `${prefix}/SET_LOCATION`,
};

export const LocationActionCreators = {
  setLocation: createAction<{
    location: string;
  }>(LocationActionTypes.SET_LOCATION),
};
