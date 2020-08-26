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

      <Header.Item onClick={() => {}} align="middle"></Header.Item>

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
