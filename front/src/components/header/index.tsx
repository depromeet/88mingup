import React from 'react';
import Header from './header';
import { Logo, User } from 'assets';
import { history } from 'store/rootReducer';

export const MainHeader = () => {
  return (
    <Header>
      <Header.Item
        icon={Logo}
        onClick={() => {
          history.push('/');
        }}
        align="start"
      />

      <Header.Item
        onClick={() => {
          window.alert('가운데 테스트!');
        }}
        align="middle"
      >
        테스트랍니다
      </Header.Item>

      <Header.Item
        icon={User}
        onClick={() => {
          history.push('/mypage');
        }}
        align="end"
      />
    </Header>
  );
};

export { default } from './header';
