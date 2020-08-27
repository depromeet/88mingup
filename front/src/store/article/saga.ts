import { call, put, takeEvery, select } from 'redux-saga/effects';
import { ArticleActionTypes, ArticleActionCreators } from './action';
import { getArticles, PostArticleDto } from 'apis/article';
import { ArticleAPI } from 'apis';
import { RootState } from 'store/configureStore';
import { push } from 'connected-react-router';
import { AxiosResponse } from 'axios';

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
  try {
    const response: ReturnType<
      typeof ArticleActionCreators.postFile.success
    >['payload'] = yield call(ArticleAPI.postFile, action.payload);

    // const response: ReturnType<
    //   typeof ArticleActionCreators.fetch.success
    // >['payload'] = yield call(ArticleAPI.getArticleDetail, action.payload);

    yield put(ArticleActionCreators.postFile.success(response));
  } catch (error) {
    yield put(ArticleActionCreators.postFile.failure(error));
  }
}

export function* postArticle(
  action: ReturnType<typeof ArticleActionCreators.postArticle.request>,
) {
  try {
    const file = yield select((store: RootState) => store.article.postedFile);

    const uploadArticleData = action.payload;
    uploadArticleData.file_ids = [file.id];

    // 아티클 등록 API 호출
    const response: AxiosResponse<PostArticleDto> = yield call(
      ArticleAPI.postArticle,
      uploadArticleData,
    );

    // 글 업로드완료되면은 해당글 상세로 나가야되고

    yield put(push(`/articles/${response.data.id}`));

    // const response: ReturnType<
    //   typeof ArticleActionCreators.fetch.success
    // >['payload'] = yield call(ArticleAPI.getArticleDetail, action.payload);

    yield put(ArticleActionCreators.postArticle.success());
  } catch (error) {
    yield put(ArticleActionCreators.postArticle.failure(error));
  }
}

export function* likeArticle(
  action: ReturnType<typeof ArticleActionCreators.likeArticle.request>,
) {
  console.log("끼애F")
  try {
    yield call(ArticleAPI.likeArticle, action.payload);
    yield put(ArticleActionCreators.likeArticle.success());
    yield put(ArticleActionCreators.fetch.request(action.payload.article));
  } catch (error) {
    yield put(ArticleActionCreators.likeArticle.failure(error));
  }
}

export const articleSaga = [
  takeEvery(ArticleActionTypes.FETCH_ALL, fetchAllArticles),
  takeEvery(ArticleActionCreators.fetch.request, fetchArticle),
  takeEvery(ArticleActionCreators.postComment.request, postArticleComment),
  takeEvery(ArticleActionCreators.postFile.request, postArticleFile),
  takeEvery(ArticleActionCreators.postArticle.request, postArticle),
  takeEvery(ArticleActionCreators.likeArticle.request, likeArticle),
];

export default articleSaga;
