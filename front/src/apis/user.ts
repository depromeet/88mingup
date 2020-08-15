import { AxiosInstance } from 'apis';
import Axios from 'axios';

export const getProfile = () =>
  AxiosInstance.get<{
    name: string;
    profile_url: string;
  }>('/api/v1/auth/profile').then((res) => {
    return { name: res.data.name, profileUrl: res.data.profile_url };
  });

export const userLogin = (data: {}) =>
  AxiosInstance.post('/api/v1/auth/login', data).then((res) => res.data);
