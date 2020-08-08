import React from 'react';
import KakaoLogin from 'react-kakao-login';

interface Props {
  onLoginSuccess: (result: any) => void;
}

export default function Auth({ onLoginSuccess }: Props) {
  return (
    <KakaoLogin
      jsKey={process.env.REACT_APP_KAKAO_AUTH_API_KEY as string}
      onSuccess={onLoginSuccess}
      onFailure={(result) => console.log(result)}
      getProfile={true}
    ></KakaoLogin>
  );
}
