import { createReducer } from '@reduxjs/toolkit';
import { UserStateProps } from 'store/user/reducer';
import { ArticleActionCreators } from './action';

export interface ArticleEntityStateProps {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  writer: UserStateProps;
  files: ArticleFileStateProps[];
}

export interface ArticleFileStateProps {
  id: number;
  url: string;
}

export interface ArticleStateProps {
  all: ArticleEntityStateProps[];
}

const initialState: ArticleStateProps = {
  all: [],
};

export const articleReducer = createReducer(initialState, (builder) => {
  builder.addCase(ArticleActionCreators.refresh, (state, action) => {
    state.all = action.payload.all;
  });
});
