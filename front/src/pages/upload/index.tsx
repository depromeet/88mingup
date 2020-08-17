import './upload.scss';

import { UserActionTypes, UserActionCreators } from 'store/user/action';
import { useDispatch, useSelector } from 'react-redux';
import { UserStateProps } from 'store/user/reducer';
import { RootState } from 'store/configureStore';
import React, { useEffect, useState } from 'react';
import { GoogleMap, Header, BlueTextBtn, MintBKText } from 'components';
import LoginPage from 'pages/login';
import { HeaderItem } from 'components/header/item';
import { history } from 'store/rootReducer';
import { PositionActionCreators } from 'store/position/action';

const UploadPage: React.FC = () => {
  const user: UserStateProps = useSelector<RootState, UserStateProps>(
    (state) => state.user,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActionCreators.refreshProfile());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition);
    }
    const timer = setTimeout(() => setAlert(false), 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const [alert, setAlert] = useState(true);

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

  return user.authenticated ? (
    <>
      <Header>
        <HeaderItem
          align="start"
          onClick={() =>
            history.length > 0 ? history.goBack() : history.push('/')
          }
        >
          <BlueTextBtn isActive={false}>취소</BlueTextBtn>
        </HeaderItem>
        <HeaderItem
          align="middle"
          onClick={() => history.push('/search-location')}
        >
          aaa
        </HeaderItem>
        <HeaderItem align="end">
          <BlueTextBtn isActive={true}>다음</BlueTextBtn>
        </HeaderItem>
      </Header>
        <GoogleMap
          zoom={15}
          height={'200px'}
          alert={alert}
        />
    </>
  ) : (
    <LoginPage />
  );
};

export default UploadPage;
