import React, { useEffect, useState } from 'react';
import './upload.scss';
import styled from '@emotion/styled';
import { Header, BlueTextBtn, Input } from 'components';
import { HeaderItem } from 'components/header/item';
import { history } from 'store/rootReducer';
import { LocationProps } from 'store/location/reducer';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { CameraIcon } from 'assets';
import TextArea from 'components/textArea';

const BlankImg = styled.div`
  height: 375px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #a1a1a1;
`;

const TextComponent = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const UploadPage: React.FC = () => {
  const location: LocationProps = useSelector<RootState, LocationProps>(
    (state) => state.location,
  );

  const [isUploadActice, setIsUploadActice] = useState(false);

  const upload = () => {
    if (isUploadActice) console.log('업로드 고고');
  };

  return (
    <div>
      <Header>
        <HeaderItem align="start" onClick={() => history.push('/map')}>
          <BlueTextBtn isActive={false}>취소</BlueTextBtn>
        </HeaderItem>
        <HeaderItem align="middle">{location.location}</HeaderItem>
        <HeaderItem
          onClick={() => {
            upload();
          }}
          align="end"
        >
          <BlueTextBtn isActive={isUploadActice}>업로드</BlueTextBtn>
        </HeaderItem>
      </Header>
      <BlankImg>
        <CameraIcon />
        <div style={{ marginTop: '5px' }}>사진을 선택해주세요</div>
      </BlankImg>
      <TextComponent>
        <Input title="타이틀" placeholder="타이틀을 입력해주세요" />
        <div style={{ marginTop: '24px' }}>
          <TextArea
            height="100px"
            title="내용"
            placeholder="내용을 입력해주세요"
          />
        </div>
      </TextComponent>
    </div>
  );
};

export default UploadPage;
