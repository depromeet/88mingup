import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserActionCreators } from 'store/user/action';

const RootPage: React.FC = (props) => {
  // 전체 모달, 로딩 처리를 위해 남겨놓음.

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActionCreators.refreshProfile());
  }, []);

  return <>{props.children}</>;
};

export default RootPage;
