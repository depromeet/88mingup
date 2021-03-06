import React, { useEffect, useState } from 'react';
import { Header, Avatar, IconText, List, Input } from 'components';

import 'dayjs/locale/ko';

import './article-detail.scss';

import { HeaderItem } from 'components/header/item';
import {
  BackIconBlack,
  HeartIcon,
  CommentIcon,
  MoreIcon,
} from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleActionCreators } from 'store/article/action';
import { useParams } from 'react-router-dom';
import { RootState } from 'store/configureStore';
import createLoadingSelector from 'store/loading/selector';

import dayjs from 'dayjs';
import { push } from 'connected-react-router';

const ArticleDetailPage: React.FC = (props) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(ArticleActionCreators.fetch.request(id));
  }, []);

  const selectedArticle = useSelector(
    (state: RootState) => state.article.selected,
  );

  const user = useSelector((state: RootState) => state.user);

  const loading = useSelector(
    createLoadingSelector([ArticleActionCreators.fetch.actionName]),
  );

  const likeLoading = useSelector(
    createLoadingSelector([ArticleActionCreators.likeArticle.actionName]),
  );

  const [comment, setComment] = useState<string>('');

  if (!loading && !selectedArticle) {
    return <div>컨텐츠를 찾을수 없습니다.</div>;
  }

  console.log(
    ' selectedArticle?.like_users?.find((id) => id === user.id)',
    selectedArticle?.like_users?.find((id) => id === user.id),
  );

  return (
    <div>
      <Header>
        <HeaderItem
          onClick={() => dispatch(push('/'))}
          icon={BackIconBlack}
          align="start"
        />
        <HeaderItem align="middle">
          <Avatar src={user.profile_url} size={24} />
        </HeaderItem>
        <HeaderItem icon={MoreIcon} align="end" />
      </Header>
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
        <div
          style={{
            backgroundColor: '#f2f2f2',
            position: 'relative',
            paddingTop: '100%',
            borderRadius: '16px',
            backgroundImage:
              selectedArticle?.media_contents &&
              selectedArticle?.media_contents.length > 0
                ? `url(${selectedArticle?.media_contents[0].file})`
                : undefined,
            backgroundSize: 'contain',
          }}
        >
          <div style={{ position: 'absolute', top: 16, left: 16 }}>{}</div>
        </div>

        <div style={{ alignItems: 'center', display: 'flex', marginTop: 24 }}>
          <div style={{ fontSize: 18, fontWeight: 'bold' }}>
            {selectedArticle?.title}
          </div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
            }}
          >
            <IconText
              icon={
                <HeartIcon
                  width={'24px'}
                  height={'24px'}
                  fill={
                    selectedArticle?.like_users?.find((id) => id === user.id)
                      ? '#000000'
                      : '#ffffff'
                  }
                />
              }
              onClick={() => {
                dispatch(
                  ArticleActionCreators.likeArticle.request({
                    article: Number(id),
                    liker: user.id,
                  }),
                );
              }}
            >
              <b>{selectedArticle?.like_users?.length}</b>
            </IconText>
            <IconText
              style={{ marginLeft: 8 }}
              icon={<CommentIcon width={'24px'} height={'24px'} />}
            >
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
          {selectedArticle?.address}
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
          {dayjs(selectedArticle?.created_at)
            .locale('ko')
            .format('YYYY년 MM월 DD일')}
        </div>

        <List
          header={
            <div
              className="icon-after"
              style={{
                fontWeight: 600,
                fontSize: 15,
                color: '#373cff',
                fontFamily: 'Montserrat',
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
              meta={{
                avatar: comment.commenter_profile,
                title: comment.commenter,
                description: comment.content,
              }}
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
          <Avatar src={user.profile_url} style={{ width: '20%' }} size={40} />
          <Input
            style={{ marginLeft: 16, flex: 1 }}
            placeholder="댓글 달기"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                dispatch(
                  ArticleActionCreators.postComment.request({
                    article: id,
                    content: comment,
                  }),
                );
                setComment('');
              }
            }}
            suffix={
              <div
                style={{
                  color: '#373cff',
                  cursor: 'pointer',
                  minWidth: 30,
                }}
                onClick={() => {
                  dispatch(
                    ArticleActionCreators.postComment.request({
                      article: id,
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
    </div>
  );
};

export default ArticleDetailPage;
