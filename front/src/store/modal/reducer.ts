import { createReducer } from '@reduxjs/toolkit';

import { ModalActionCreators, ModalActionTypes } from './action';

export interface ModalProps {
  visible: boolean;
  content: string;
  mode?: 'confirm' | 'alert';
}

export const initialState: ModalProps = {
  visible: false,
  content: '',
};

const modalReducer = createReducer(initialState, (builder) => {
  builder.addCase(ModalActionCreators.confirm, (state, action) => {
    const { content } = action.payload;
    state.content = content;
    state.visible = true;
    state.mode = 'confirm';
  });

  builder.addCase(ModalActionCreators.hide, (state, action) => {
    state.content = '';
    state.visible = false;
  });
});

export default modalReducer;
