import { call, put, takeEvery } from 'redux-saga/effects';
import { ArticleActionTypes, ArticleActionCreators } from './action';
import { getArticles } from 'apis/article';
import { ArticleAPI } from 'apis';

export function* fetchAllArticles() {
  const data = yield call(getArticles);
  yield put({
    type: ArticleActionTypes.REFRESH,
    payload: {
      all: data,
    },
  });
}

export function* fetchArticle(
  action: ReturnType<typeof ArticleActionCreators.fetch.request>,
) {
  try {
    const response: ReturnType<
      typeof ArticleActionCreators.fetch.success
    >['payload'] = yield call(ArticleAPI.getArticleDetail, action.payload);

    yield put(ArticleActionCreators.fetch.success(response));
  } catch (error) {
    yield put(ArticleActionCreators.fetch.failure(error));
  }
}

export function* postArticleComment(
  action: ReturnType<typeof ArticleActionCreators.postComment.request>,
) {
  try {
    yield call(ArticleAPI.postArticleComment, action.payload);
    yield put(ArticleActionCreators.postComment.success());
    yield put(ArticleActionCreators.fetch.request(action.payload.article));
  } catch (error) {
    yield put(ArticleActionCreators.postComment.failure(error));
  }
}

export function* postArticleFile(
  action: ReturnType<typeof ArticleActionCreators.postFile.request>,
) {
  console.log('actiozzzzn', action);
  try {
    yield call(ArticleAPI.postFile, action.payload);
    yield put(ArticleActionCreators.postFile.success(action.payload.file));
  } catch (error) {
    yield put(ArticleActionCreators.postFile.failure(error));
  }
}

export const articleSaga = [
  takeEvery(ArticleActionTypes.FETCH_ALL, fetchAllArticles),
  takeEvery(ArticleActionCreators.fetch.request, fetchArticle),
  takeEvery(ArticleActionCreators.postComment.request, postArticleComment),
  takeEvery(ArticleActionCreators.postFile.request, postArticleFile),
];

export default articleSaga;
