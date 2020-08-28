import { useSelector, useDispatch } from 'react-redux';
import { UserStateProps } from 'store/user/reducer';
import { RootState } from 'store/configureStore';
import React, { useEffect, useState } from 'react';
import { GoogleMap, Header, BlueTextBtn, MintBKText } from 'components';
import LoginPage from 'pages/login';
import { HeaderItem } from 'components/header/item';
import { history } from 'store/rootReducer';
import { PositionProps } from 'store/position/reducer';
import { LocationProps } from 'store/location/reducer';
import Geocode from 'react-geocode';
import { PositionActionCreators } from 'store/position/action';
import { LocBtn } from 'assets';
import { LocationActionCreators } from 'store/location/action';

const MapPage: React.FC = () => {
  const dispatch = useDispatch();

  const user: UserStateProps = useSelector<RootState, UserStateProps>(
    (state) => state.user,
  );
  const position: PositionProps = useSelector<RootState, PositionProps>(
    (state) => state.position,
  );
  const location: LocationProps = useSelector<RootState, LocationProps>(
    (state) => state.location,
  );

  useEffect(() => {
    // 핀 알림창 타이머
    const timer = setTimeout(() => setAlert(false), 5000);
    setLocation();
    return () => clearTimeout(timer);
  }, []);

  const [alert, setAlert] = useState(true);

  // 현재 위도/경도로 주소 찾기
  const setLocation = () => {
    if (position.latitude !== 0 && position.longitude !== 0) {
      Geocode.setApiKey('AIzaSyC4ltv6KIHw_jiBgUYoittDjS4_IBfSmJU');
      Geocode.setLanguage('kr');
      Geocode.setRegion('kr');
      Geocode.enableDebug();
      Geocode.fromLatLng(
        position.latitude.toString(),
        position.longitude.toString(),
      ).then(
        (response) => {
          const address =
            response.results[0].address_components[1].short_name +
            ' ' +
            response.results[0].address_components[0].short_name;
          dispatch(
            LocationActionCreators.setLocation({
              location: address,
            }),
          );
        },
        (error) => {
          console.error(error);
        },
      );
    }
  };

  // 지도 이동 시 위도/경도 변경
  const onLocChange = (e: any) => {
    dispatch(
      PositionActionCreators.setPosition({
        latitude: e.center.lat,
        longitude: e.center.lng,
      }),
    );
    console.log('location-movemap', position);
    setLocation();
  };

  // 현재 위도/경도 가져오기
  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition);
      console.log('location-current');
      setLocation();
    }
  };
  const currentPosition = () => {
    dispatch(
      PositionActionCreators.setPosition({
        latitude: 37.5760222,
        longitude: 126.9769000,
      }),
    );
  };

  return user.authenticated ? (
    <div>
      <Header>
        <HeaderItem align="start" onClick={() => history.push('/')}>
          <BlueTextBtn isActive={false}>취소</BlueTextBtn>
        </HeaderItem>
        <HeaderItem align="middle">{location.location}</HeaderItem>
        <HeaderItem
          onClick={() => {
            history.push('/upload');
          }}
          align="end"
        >
          <BlueTextBtn isActive={true}>다음</BlueTextBtn>
        </HeaderItem>
      </Header>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {alert && (
          <MintBKText
            width={'194px'}
            rgba={'rgba(165, 255, 174, 0.55)'}
            style={{
              marginTop: '232px',
              position: 'absolute',
              zIndex: 1,
            }}
          >
            지도를 움직여서 <b>위치를 조정</b>해보세요!
          </MintBKText>
        )}
        <GoogleMap onChange={onLocChange} zoom={15} />
        <LocBtn
          onClick={getCurrentPosition}
          style={{
            position: 'absolute',
            zIndex: 3,
            right: 0,
            bottom: 0,
            margin: '10px',
          }}
        />
      </div>
    </div>
  ) : (
    <LoginPage />
  );
};

export default MapPage;
