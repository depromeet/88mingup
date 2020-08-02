import './mypage.scss';

import { Card } from 'components';
import React from 'react';

const MyPage: React.FC = () => {
  const images = [];

  return (
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
  );
};

export default MyPage;
