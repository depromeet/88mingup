import React from 'react';
import KakaoLogin from 'react-kakao-login';

interface Props {
  onLoginSuccess: (result: any) => void;
}

export default function Auth({ onLoginSuccess }: Props) {
  return (
    <KakaoLogin
      jsKey={'91098a76bbe479fc20ebb633ff870b3f'}
      onSuccess={onLoginSuccess}
      onFailure={(result) => console.log(result)}
      getProfile={true}
    ></KakaoLogin>
  );
}
