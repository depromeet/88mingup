import './mypage.scss';

import { BackIcon, RecordIcon } from 'assets';
import { Card, Header, Avatar } from 'components';
import React from 'react';
import { HeaderItem } from 'components/header/item';

const MyPage: React.FC = () => {

  // 텍스트도 되고 svg 파일도 되도록 구현

  return (
    <>
      <div
        style={{
          display: 'flex',
          background: '#373cff',
          height: 300,
          flexDirection: 'column',
        }}
      >
        <Header>
          <HeaderItem icon={BackIcon} align="start" />
          <HeaderItem icon={RecordIcon} align="end" />
        </Header>

        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <Avatar />
          <div
            style={{
              color: '#a5ffae',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 16,
            }}
          >
            금나와라뚝딱
          </div>
          <div style={{ fontSize: 14, color: '#e0e0e0', marginTop: 8 }}>
            서울시 00구 00동{' '}
          </div>
        </div>
      </div>

      <div
        style={{
          margin: '-36px 16px 0px',
          height: 72,
          borderRadius: 16,
          boxShadow: '5px 5px 10px 0 rgba(0, 0, 0, 0.08)',
          backgroundColor: '#ffffff',
          padding: '0px 36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>
            201
          </div>
          <div style={{ fontWeight: 'bold', fontSize: 11, color: '#a1a1a1' }}>
            내가 쓴 글
          </div>
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>
            201
          </div>
          <div style={{ fontWeight: 'bold', fontSize: 11, color: '#a1a1a1' }}>
            내가 쓴 댓글
          </div>
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}>
            201
          </div>
          <div style={{ fontWeight: 'bold', fontSize: 11, color: '#a1a1a1' }}>
            받은 하트
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gridGap: 8,
          padding: '60px 16px 0px',
        }}
      >
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
        <Card url="https://opgg-com-image.akamaized.net/attach/images/20190813211845.709731.jpg" />
      </div>
    </>
  );
};

export default MyPage;
