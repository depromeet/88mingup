import { createReducer } from '@reduxjs/toolkit';
import { UserActionCreators } from './action';
import { ArticleEntityStateProps } from 'store/article/reducer';

export interface UserStateProps {
  id: number;
  name: string;
  profile_url: string;
  authenticated: boolean;
  created_at: string;
  updated_at: string;
  comment_count: number;
  article_count: number;
  like_count: number;
  writtenArticles: ArticleEntityStateProps[];
}

const initialState: UserStateProps = {
  id: -1,
  name: '',
  profile_url: '',
  authenticated: false,
  created_at: '',
  updated_at: '',
  comment_count: 0,
  article_count: 0,
  like_count: 0,
  writtenArticles: [],
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(UserActionCreators.setProfile, (state, action) => {
    state.authenticated = action.payload.authenticated;
    state.id = action.payload.id;
    state.name = action.payload.name;
    state.profile_url = action.payload.profile_url;
    state.created_at = action.payload.created_at;
    state.updated_at = action.payload.updated_at;
    state.comment_count = action.payload.comment_count;
    state.article_count = action.payload.article_count;
    state.like_count = action.payload.like_count;
    state.writtenArticles = action.payload.writtenArticles;
  });
});
