import { AxiosInstance } from 'apis';
import { UserStateProps } from 'store/user/reducer';

interface UserDto {
  name: string;
  profile_url: string;
}

export const getProfile = () =>
  AxiosInstance.get<UserDto>('/api/v1/auth/profile').then(
    (res): Omit<UserStateProps, 'authenticated'> => {
      return { name: res.data.name, profileUrl: res.data.profile_url };
    },
  );

export const userLogin = (data: {}) =>
  AxiosInstance.post('/api/v1/auth/login', data).then((res) => res.data);
