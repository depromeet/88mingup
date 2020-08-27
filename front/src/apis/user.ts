import { AxiosInstance } from 'apis';
import { UserStateProps } from 'store/user/reducer';

interface UserDto {
  name: string;
  profile_url: string;
}

export const getProfile = () =>
  AxiosInstance.get<Omit<UserStateProps, 'authenticated'>>(
    '/api/v1/auth/profile',
  ).then(
    (res): Omit<UserStateProps, 'authenticated'> => {
      return res.data;
    },
  );

export const userLogin = (data: {}) =>
  AxiosInstance.post('/api/v1/auth/login', data).then((res) => res.data);
