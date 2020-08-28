import { createReducer } from '@reduxjs/toolkit';
import { UserStateProps } from 'store/user/reducer';
import { ArticleActionCreators } from './action';
import { ArticleDetailDto, ArticleDto } from 'apis/article';

export interface ArticleEntityStateProps {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  like_count?: number;
  comment_count?: number;
  writer: UserStateProps;
  files: ArticleFileStateProps[];
  distance?: number;
  created_at?: string;
}

export interface ArticleFileStateProps {
  id: number;
  file: string;
}

export interface ArticleStateProps {
  all: ArticleEntityStateProps[];
  selected?: ArticleDetailDto;
  postedFile?: ArticleFileStateProps;
}

const initialState: ArticleStateProps = {
  all: [],
};

export const articleReducer = createReducer(initialState, (builder) => {
  builder.addCase(ArticleActionCreators.refresh, (state, action) => {
    state.all = action.payload.all;
  });
  builder.addCase(ArticleActionCreators.fetch.success, (state, action) => {
    state.selected = action.payload.data;
  });
  builder.addCase(ArticleActionCreators.postFile.success, (state, action) => {
    state.postedFile = action.payload.data;
  });
});
