import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';

const RootPage: React.FC = (props) => {
  // 전체 모달, 로딩 처리를 위해 남겨놓음.

  return <>{props.children}</>;
};

export default RootPage;
