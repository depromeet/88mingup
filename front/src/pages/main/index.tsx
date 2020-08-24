import './main.scss';

import { Card, Input, GoogleMap } from 'components';
import { MainHeader } from 'components/header';
import TextArea from 'components/textArea';
import React, { useEffect } from 'react';
import { Discover } from './discover';
import styled from '@emotion/styled';
import { TopSheet } from './topsheet';
import UploadIcon from 'components/uploadIcon';
import { useDispatch } from 'react-redux';
import { UserActionCreators } from 'store/user/action';
import { PositionActionCreators } from 'store/position/action';

const MainPage: React.FC = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActionCreators.refreshProfile());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition);
    }
  }, [dispatch]);

  const currentPosition = (position: any) => {
    if (position.coords) {
      dispatch(
        PositionActionCreators.setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      );
    }
  };

  return (
    <div>
      <MainHeader />

      <RootLayout>
        <TopSheet />
        <Discover />
      </RootLayout>

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
      <Input title="bb" />
      <UploadIcon />
    </div>
  );
};

const RootLayout = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export default MainPage;
