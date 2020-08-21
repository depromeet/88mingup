import React from 'react';
import { Header, SearchInput } from 'components';
import { HeaderItem } from 'components/header/item';
import { history } from 'store/rootReducer';
import { CloseIcon } from 'assets';
import { useInput } from 'hooks/useInput';
import DaumPostcode from 'react-daum-postcode';
import UnderlineInput from 'components/searchInput';
import { ThemeContext } from '@emotion/core';
import Geocode from 'react-geocode';
import { useDispatch } from 'react-redux';
import { PositionActionCreators } from 'store/position/action';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const container: React.CSSProperties = {
  backgroundColor: '#373cff',
  height: '100vh',
};

const subContainer: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '15px',
  color: 'white',
  border: '0px solid #7578ff',
  borderBottomWidth: '1px',
};

const SearchLocationPage: React.FC<Props> = (props) => {
  const { className, style } = props;
  const dispatch = useDispatch();

  const searchLoc = (location: string) => {
    Geocode.setApiKey('AIzaSyBj90odFn56Ethoo4NK3r3VJh11O6jcjmk');
    Geocode.setLanguage('kr');
    Geocode.setRegion('kr');
    Geocode.enableDebug();
    Geocode.fromAddress(location)
      .then(
        (response: any) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log('으악악',lat, lng);
          dispatch(
            PositionActionCreators.setPosition({
              latitude: lat,
              longitude: lng,
            }),
          );
        },
        (error: Error) => {
          console.error(error);
        },
      )
      .then(() => history.push('/upload'));
  };

  const Postcode = () => {
    const handleComplete = (data: any) => {
      let fullAddress = data.address;
      // let extraAddress = '';

      // if (data.addressType === 'R') {
      //   if (data.bname !== '') {
      //     extraAddress += data.bname;
      //   }
      //   if (data.buildingName !== '') {
      //     extraAddress +=
      //       extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      //   }
      //   fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      // }

      searchLoc(fullAddress);
    };

    const themeObj = {
      //bgColor: "", //바탕 배경색
      searchBgColor: '#373CFF', //검색창 배경색
      //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
      //pageBgColor: "", //페이지 배경색
      //textColor: "", //기본 글자색
      queryTextColor: '#FFFFFF', //검색창 글자색
      //postcodeTextColor: "", //우편번호 글자색
      //emphTextColor: "", //강조 글자색
      //outlineColor: "", //테두리
    };

    return (
      <DaumPostcode
        hideMapBtn={true}
        hideEngBtn={true}
        theme={themeObj}
        onComplete={handleComplete}
        {...props}
      />
    );
  };

  return (
    <div className={className} style={{ ...style, ...container }}>
      <Header>
        <HeaderItem
          align="start"
          onClick={() =>
            history.length > 0 ? history.goBack() : history.push('/')
          }
        >
          <CloseIcon />
        </HeaderItem>
        <HeaderItem align="middle">
          <span style={{ fontSize: '15px', color: 'white' }}>위치 검색</span>
        </HeaderItem>
        <HeaderItem align="end" />
      </Header>
      <div>
        <UnderlineInput>
          <Postcode />
        </UnderlineInput>
      </div>
      <div style={{ ...subContainer }}>현재 위치로 주소찾기</div>
    </div>
  );
};

export default SearchLocationPage;
