import React from 'react';
import { Header, Avatar, IconText, List, Input } from 'components';
import { HeaderItem } from 'components/header/item';
import { BackIcon, RecordIcon, HeartIcon, CommentIcon } from 'assets';

const ArticleDetailPage: React.FC = (props) => {
  // Icon 교체해야됨.
  return (
    <div
      style={{
        padding: '0px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 600,
        margin: '0px auto',
      }}
    >
      <Header>
        <HeaderItem icon={BackIcon} align="start" />
        <HeaderItem align="middle">
          <Avatar size={24} />
        </HeaderItem>
        <HeaderItem icon={RecordIcon} align="end" />
      </Header>

      <div
        style={{
          backgroundColor: '#f2f2f2',
          position: 'relative',
          paddingTop: '100%',
        }}
      >
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          {/*XXXX 여기 뱃지들 리스트 들어가면됨F*/}
        </div>
      </div>

      <div style={{ display: 'flex', marginTop: 24 }}>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>서울대입구역 쉼</div>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
          }}
        >
          <IconText icon={<HeartIcon />}>1024</IconText>
          <IconText style={{ marginLeft: 8 }} icon={<CommentIcon />}>
            1024
          </IconText>
        </div>
      </div>

      <div
        style={{
          fontSize: 14,
          color: '#a5ffae',
          backgroundColor: '#373cff',
          borderRadius: 36,
          padding: '4px 8px',
          marginTop: 8,
          width: 'fit-content',
        }}
      >
        서울특별시 동작구 00동 222-21
      </div>

      <div style={{ fontSize: 13, color: '#000000', marginTop: 18 }}>
        아주 맛이 존맛 와우내;;;미쳣군아주 맛이 존맛 와우내;;;미쳣군아주 맛이
        존맛 와우내;;;미쳣군아주 맛이 존맛 와우내;;;미쳣군아주 맛이 존맛
        와우내;;;미쳣군아주 맛이 존맛 와우내;;;미쳣군
      </div>

      <div
        style={{
          fontSize: 8,
          fontWeight: 'bold',
          color: '#a1a1a1',
          marginTop: 24,
          marginLeft: 'auto',
        }}
      >
        2020년 5월 13일
      </div>

      <List
        header={
          <div style={{ fontWeight: 600, fontSize: 15, color: '#373cff' }}>
            3 comments
          </div>
        }
        style={{ marginTop: 32 }}
      >
        <List.Item>ddd</List.Item>
        <List.Item
          meta={{
            title: '금나와라뚞딲',
            description: '흠냐흠냐리흠냐리흠냐리흠냐리흠냐리흠냐리흠냐리',
          }}
        />
      </List>

      <div
        style={{
          margin: '0px auto',
          boxShadow: '0px -1px 1px -1px #3a3a3a',
          backgroundColor: '#ffffff',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          padding: 16,
          alignItems: 'center',
          maxWidth: 600,
        }}
      >
        <Avatar size={40} />
        <Input placeholder="댓글 달기" style={{ marginLeft: 16 }} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
