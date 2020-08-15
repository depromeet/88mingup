import React from 'react';
import KakaoLogin from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { UserActionTypes } from 'store/user/action';

export default function Auth() {
  const dispatch = useDispatch();
  return (
    <KakaoLogin
      jsKey={process.env.REACT_APP_KAKAO_AUTH_API_KEY as string}
      onSuccess={(resp) => {
        dispatch({ type: UserActionTypes.LOGIN, pay: resp });
      }}
      onFailure={(result) => console.log(result)}
      getProfile={true}
    ></KakaoLogin>
  );
}
