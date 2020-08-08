import React from 'react';
import Header from './header';
import { Logo, User } from 'assets';

export function MainHeader() {
  return (
    <Header>
      <Header.Item
        icon={Logo}
        onClick={() => {
          window.alert('왼쪽 로고!');
        }}
        align="start"
      />
      <Header.Item
        icon={User}
        onClick={() => {
          window.alert('오른쪽 유저!');
        }}
        align="end"
      />
      <Header.Item
        onClick={() => {
          window.alert('가운데 테스트!');
        }}
        align="middle"
      >
        테스트랍니다
      </Header.Item>
    </Header>
  );
}

export { default } from './header';
