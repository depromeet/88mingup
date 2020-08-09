import './main.scss';

import { Card, Header } from 'components';
import { MainHeader } from 'components/header';
import TextArea from 'components/textArea';
import { useScrollPosition } from 'hooks';
import React from 'react';

const MainPage: React.FC = (props) => {
  const scrollPostion = useScrollPosition();

  return (
    <div>
      <MainHeader />
      <div className="no-scrollbar list" style={{ paddingTop: '60px' }}>
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
      <TextArea title="zz" />
    </div>
  );
};

export default MainPage;
