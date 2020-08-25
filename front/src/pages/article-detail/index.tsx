import React, { useEffect, useState } from 'react';
import { Header, Avatar, IconText, List, Input } from 'components';

import './article-detail.scss';

import { HeaderItem } from 'components/header/item';
import { BackIcon, RecordIcon, HeartIcon, CommentIcon } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleActionCreators } from 'store/article/action';
import { useParams } from 'react-router-dom';
import { RootState } from 'store/configureStore';
import createLoadingSelector from 'store/loading/selector';

const ArticleDetailPage: React.FC = (props) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(ArticleActionCreators.fetch.request(id));
  }, []);

  const selectedArticle = useSelector(
    (state: RootState) => state.article.selected,
  );

  const loading = useSelector(
    createLoadingSelector([ArticleActionCreators.fetch.actionName]),
  );

  const [comment, setComment] = useState<string>('');

  if (loading) {
    return <div>로딩중입니다. </div>;
  }

  if (!loading && !selectedArticle) {
    return <div>컨텐츠를 찾을수 없습니다.</div>;
  }

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
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>
          {selectedArticle?.title}
        </div>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
          }}
        >
          <IconText icon={<HeartIcon />}>1024</IconText>
          <IconText style={{ marginLeft: 8 }} icon={<CommentIcon />}>
            {selectedArticle?.comments.length}
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
        {selectedArticle?.description}
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
          <div
            className="icon-after"
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: '#373cff',
            }}
          >
            {selectedArticle?.comments.length} comments
          </div>
        }
        style={{ marginTop: 32, marginBottom: 86 }}
      >
        {selectedArticle?.comments.map((comment, index) => (
          <List.Item
            key={`comments-${index}`}
            meta={{ title: comment.commenter, description: comment.content }}
          />
        ))}
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
        <Input
          placeholder="댓글 달기"
          style={{ marginLeft: 16 }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              dispatch(
                ArticleActionCreators.postComment.request({
                  article: 4,
                  commenter: 4,
                  content: comment,
                }),
              );
              setComment('');
            }
          }}
          suffix={
            <div
              style={{ marginLeft: 16, color: '#373cff', cursor: 'pointer' }}
              onClick={() => {
                dispatch(
                  ArticleActionCreators.postComment.request({
                    article: 4,
                    commenter: 4,
                    content: comment,
                  }),
                );
                setComment('');
              }}
            >
              게시
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
