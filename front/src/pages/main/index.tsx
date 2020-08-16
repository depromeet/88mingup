import './main.scss';

import { Card, Input, GoogleMap } from 'components';
import { MainHeader } from 'components/header';
import TextArea from 'components/textArea';
import React from 'react';
import { Discover } from './discover';
import styled from '@emotion/styled';

const MainPage: React.FC = (props) => {
  return (
    <div>
      <MainHeader />

      <RootLayout>
        <Discover />
      </RootLayout>

      {/* <div className="no-scrollbar list" style={{ paddingTop: '60px' }}>
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
      <Input title="bb" />
      <GoogleMap /> */}
    </div>
  );
};

const RootLayout = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export default MainPage;
