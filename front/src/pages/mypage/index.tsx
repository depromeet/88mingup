import './mypage.scss';

import React, { useEffect } from 'react';
import { MainHeader } from 'components/header';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/configureStore';
import { UserStateProps } from 'store/user/reducer';
import { UserActionTypes } from 'store/user/action';
import Auth from 'pages/auth';

const MyPage: React.FC = () => {
  // 텍스트도 되고 svg 파일도 되도록 구현

  const user: UserStateProps = useSelector<RootState, UserStateProps>(
    (state) => state.user,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UserActionTypes.REFRESH_PROFILE });
  }, [dispatch]);

  return (
    <>
      {user.authenticated ? (
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
            {user.name}
            {/* <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
            <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" /> */}
          </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default MyPage;
