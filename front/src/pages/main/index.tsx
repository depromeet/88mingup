import './main.scss';

import { MainHeader } from 'components/header';
import React, { useEffect } from 'react';
import { Discover } from './discover';
import styled from '@emotion/styled';
import { TopSheet } from './topsheet';
import UploadIcon from 'components/uploadIcon';
import { useDispatch } from 'react-redux';
import { UserActionCreators } from 'store/user/action';
import { PositionActionCreators } from 'store/position/action';
import { Favorite } from './favorite';
import { MainBubble } from 'assets';

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
        <Favorite />
        <Discover />
      </RootLayout>

      <UploadIcon />
    </div>
  );
};

const RootLayout = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const BubbleImg = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  margin-top: 28px;
  margin-right: 15px;
`;

export default MainPage;
