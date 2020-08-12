import './mypage.scss';

import { User, Logo } from 'assets';
import { Card, Header } from 'components';
import React from 'react';
import { HeaderItem } from 'components/header/item';
import { MainHeader } from 'components/header';

const MyPage: React.FC = () => {
  const images = [];

  // 텍스트도 되고 svg 파일도 되도록 구현

  return (
    <>
      <MainHeader />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gridGap: 8,
          padding: 16,
          paddingTop: 60,
        }}
      >
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
      </div>
    </>
  );
};

export default MyPage;
