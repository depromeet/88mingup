import './mypage.scss';

import { User } from 'assets';
import { Card, Header } from 'components';
import React from 'react';

const MyPage: React.FC = () => {
  const images = [];

  // 텍스트도 되고 svg 파일도 되도록 구현

  return (
    <>
      <Header
        items={[
          {
            icon: <User />,
            onClick: () => console.log('zzz'),
            align: 'start',
          },
          {
            icon: 'ㅇㅇz',
            onClick: () => console.log('zzz'),
            align: 'end',
          },
          {
            icon: 'ㅇㅇss',
            onClick: () => console.log('zzz'),
            align: 'middle',
          },
        ]}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gridGap: 8,
          padding: 16,
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
