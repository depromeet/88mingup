import './main.scss';

import { Card } from 'components';
import React from 'react';

const MainPage: React.FC = (props) => {
  return (
    <div className="list no-scrollbar">
      <Card
        className="list-item"
        url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg"
      />
      <Card
        className="list-item"
        url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg"
      />
      <Card
        className="list-item"
        url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg"
      />
      <Card
        className="list-item"
        url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg"
      />
      <Card
        className="list-item"
        url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg"
      />
      <Card
        className="list-item"
        url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg"
      />
    </div>
  );
};

export default MainPage;
