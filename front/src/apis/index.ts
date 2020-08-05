import axios from 'axios';

export {};

export const AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});
