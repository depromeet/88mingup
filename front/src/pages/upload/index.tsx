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
import { PositionProps } from 'store/position/reducer';
import Geocode from 'react-geocode';
import { add } from 'lodash';

const UploadPage: React.FC = () => {
  const user: UserStateProps = useSelector<RootState, UserStateProps>(
    (state) => state.user,
  );
  const position: PositionProps = useSelector<RootState, PositionProps>(
    (state) => state.position,
  );

  useEffect(() => {
    const timer = setTimeout(() => setAlert(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const [alert, setAlert] = useState(true);
  const [loc, setLoc] = useState('');
  if (position.latitude !== 0 && position.longitude !== 0) {
    Geocode.setApiKey('AIzaSyBj90odFn56Ethoo4NK3r3VJh11O6jcjmk');
    Geocode.setLanguage('kr');
    Geocode.setRegion('kr');
    Geocode.enableDebug();
    Geocode.fromLatLng(
      position.latitude.toString(),
      position.longitude.toString(),
    ).then(
      (response) => {
        console.log('result', response.results[0]);
        const address =
          response.results[0].address_components[1].short_name +
          ' ' +
          response.results[0].address_components[0].short_name;
        console.log('address', address);
        setLoc(address);
      },
      (error) => {
        console.error(error);
      },
    );
  }

  return user.authenticated ? (
    <>
      <Header>
        <HeaderItem align="start" onClick={() => history.push('/')}>
          <BlueTextBtn isActive={false}>취소</BlueTextBtn>
        </HeaderItem>
        <HeaderItem
          align="middle"
          onClick={() => history.push('/search-location')}
        >
          {loc}
        </HeaderItem>
        <HeaderItem align="end">
          <BlueTextBtn isActive={true}>다음</BlueTextBtn>
        </HeaderItem>
      </Header>
      <GoogleMap zoom={15} height={'200px'} alert={alert} />
    </>
  ) : (
    <LoginPage />
  );
};

export default UploadPage;
