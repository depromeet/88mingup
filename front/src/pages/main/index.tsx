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

const MainPage: React.FC = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActionCreators.refreshProfile());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition);
    }
  }, [dispatch]);

  const currentPosition = () => {
    dispatch(
      PositionActionCreators.setPosition({
        latitude: 37.5760222,
        longitude: 126.9769000,
      }),
    );
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

export default MainPage;
