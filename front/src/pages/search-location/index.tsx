import React from 'react';
import { Header, SearchInput } from 'components';
import { HeaderItem } from 'components/header/item';
import { history } from 'store/rootReducer';
import { CloseIcon } from 'assets';
import { useInput } from 'hooks/useInput';
// import Geocode from 'react-geocode';

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
  const search = useInput('');

  const onSearch = () => {
    console.log(search.value);
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
        <SearchInput
          value={search.value}
          onChange={search.onChange}
          placeholder="위치를 입력해주세요"
          onClick={onSearch}
        />
      </div>
      <div style={{ ...subContainer }}>현재 위치로 주소찾기</div>
    </div>
  );
};

export default SearchLocationPage;
