import { createAction } from '@reduxjs/toolkit';

function createAsyncAction<R, S>(actionName: string) {
  return {
    request: createAction<R>(`${actionName}/REQUEST`),
    success: createAction<S>(`${actionName}/SUCCESS`),
    failure: createAction<Error>(`${actionName}/ERROR`),
    actionName,
  };
}

export default createAsyncAction;
