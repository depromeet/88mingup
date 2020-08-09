import axios from 'axios';

export {};

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  withCredentials: true,
});
