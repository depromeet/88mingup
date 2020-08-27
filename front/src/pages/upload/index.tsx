import React, { useEffect, useState, SetStateAction } from 'react';
import './upload.scss';
import styled from '@emotion/styled';
import { Header, BlueTextBtn, Input } from 'components';
import { HeaderItem } from 'components/header/item';
import { history } from 'store/rootReducer';
import { LocationProps } from 'store/location/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/configureStore';
import { CameraIcon } from 'assets';
import TextArea from 'components/textArea';
import Axios from 'axios';
import { PositionProps } from 'store/position/reducer';
import { ArticleActionCreators } from 'store/article/action';
import { UserStateProps } from 'store/user/reducer';
import createLoadingSelector from 'store/loading/selector';

const BlankImg = styled.div`
  height: 375px;
  background-color: #e0e0e0;
  justify-content: center;
  align-items: center;
  color: #a1a1a1;
`;

const TextComponent = styled.div`
  padding: 16px;
  margin-top: 16px;
`;

const BlankBox = styled.div`
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #e0e0e0;
  position: absolute;
`;

const UploadPage: React.FC = () => {
  const dispatch = useDispatch();

  const location: LocationProps = useSelector<RootState, LocationProps>(
    (state) => state.location,
  );
  const position: PositionProps = useSelector<RootState, PositionProps>(
    (state) => state.position,
  );

  const [file, setFile] = useState<File | undefined>(undefined);
  const [previewURL, setPreviewURL] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fileUploadLoading = useSelector(
    createLoadingSelector([ArticleActionCreators.postFile.actionName]),
  );

  // 이미지프로세스 등록.

  // 1. 업로드 버튼은 글이랑 설명이랑 이미지가 등록이 완료되었을때 활성화가 되야겠죠.

  const uploadImage = (file: File) => {
    if (!file) {
      return;
    }

    dispatch(ArticleActionCreators.postFile.request(file));
  };

  const uploadArticle = () => {
    dispatch(
      ArticleActionCreators.postArticle.request({
        title,
        description: content,
        lat: position.latitude,
        lng: position.longitude,
        address: location.location,
      }),
    );
  };

  const selectImg = (e: any) => {
    const reader = new FileReader();
    const targetFile = e.target.files[0];
    setFile(targetFile);
    uploadImage(targetFile);

    reader.onloadend = () => {
      setPreviewURL(reader.result as string);
    };

    reader.readAsDataURL(targetFile);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const isActiveUpload =
    title.length > 0 && content.length > 0 && !!file && !fileUploadLoading;

  return (
    <div>
      <Header>
        <HeaderItem align="start" onClick={() => history.push('/map')}>
          <BlueTextBtn isActive={false}>취소</BlueTextBtn>
        </HeaderItem>
        <HeaderItem align="middle">{location.location}</HeaderItem>
        <HeaderItem onClick={uploadArticle} align="end">
          <BlueTextBtn isActive={isActiveUpload}>업로드</BlueTextBtn>
        </HeaderItem>
      </Header>
      <div>
        {file === undefined ? (
          <>
            <BlankBox />
            <BlankImg
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CameraIcon />
              <div>사진을 선택해주세요</div>
              <input
                type="file"
                style={{
                  marginTop: '5px',
                  position: 'absolute',
                  zIndex: 0,
                  height: '375px',
                }}
                onChange={selectImg}
              />
            </BlankImg>
          </>
        ) : (
          <img
            style={{ objectFit: 'cover', display: 'flex', margin: '0 auto' }}
            src={previewURL}
            width={'80%'}
            height={'375px'}
          />
        )}
      </div>
      <TextComponent>
        <Input
          value={title}
          onChange={onChangeTitle}
          title="타이틀"
          placeholder="타이틀을 입력해주세요"
        />
        <div style={{ marginTop: '24px' }}>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
