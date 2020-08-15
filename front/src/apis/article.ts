import { AxiosInstance } from 'apis';
import { UserStateProps } from 'store/user/reducer';

interface ArticleDao {
  id: number;
  title: string;
  description: string;
  lat: number;
  lng: number;
  writer: UserStateProps;
  media_contents: ArticleFileDao[];
}

interface ArticleFileDao {
  id: number;
  url: string;
}

export const getArticles = () =>
  AxiosInstance.get<ArticleDao[]>('/api/v1/articles').then((res) => {
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
  });
