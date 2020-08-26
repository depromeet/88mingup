import { AxiosInstance } from 'apis';
import { UserStateProps } from 'store/user/reducer';
import { ArticleEntityStateProps } from 'store/article/reducer';

interface ArticleDto {
  id?: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  writer: UserStateProps;
  address: string;
  media_contents: ArticleFileDto[];
  created_at: string;
  like_count: number;
  comment_count: number;
}

interface ArticleFileDto {
  id: number;
  file: string;
}

export const getArticles = () =>
  AxiosInstance.get<ArticleDto[]>('/api/v1/articles').then(
    (res): ArticleEntityStateProps[] => {
      return res.data.map((dto) => {
        return {
          id: dto.id!,
          title: dto.title,
          description: dto.description,
          lat: dto.lat,
          lng: dto.lng,
          writer: dto.writer,
          files: dto.media_contents.map((content) => {
            return { id: content.id, url: content.file };
          }),
        };
      });
    },
  );

export interface CommentDto {
  id?: number;
  article: number;
  commenter?: string;
  content: string;
  commenter_profile?: string;
}

export interface ArticleDetailDto extends ArticleDto {
  comments: CommentDto[];
}

const getArticleDetail = (id: number) => {
  return AxiosInstance.get<ArticleDetailDto>(`/api/v1/articles/${id}`);
};

const postArticleComment = (comment: CommentDto) => {
  return AxiosInstance.post(`/api/v1/comment`, { ...comment });
};

export default {
  getArticles,
  getArticleDetail,
  postArticleComment,
};
