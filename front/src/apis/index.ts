import axios from 'axios';

export { default as ArticleAPI } from './article';

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  withCredentials: true,
});
