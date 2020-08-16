import { AxiosInstance } from 'apis';
import { UserStateProps } from 'store/user/reducer';
import { ArticleEntityStateProps } from 'store/article/reducer';

interface ArticleDto {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  writer: UserStateProps;
  media_contents: ArticleFileDto[];
}

interface ArticleFileDto {
  id: number;
  url: string;
}

export const getArticles = () =>
  AxiosInstance.get<ArticleDto[]>('/api/v1/articles').then(
    (res): ArticleEntityStateProps[] => {
      return res.data.map((dao) => {
        return {
          id: dao.id,
          title: dao.title,
          description: dao.description,
          lat: dao.lat,
          lng: dao.lng,
          writer: dao.writer,
          files: dao.media_contents,
        };
      });
    },
  );
