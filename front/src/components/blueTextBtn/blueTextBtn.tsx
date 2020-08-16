/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  isActive?: Boolean;
  onClick?: () => void;
}

const BlueTextBtn: React.FC<Props> = (props) => {
  return <BlueButton {...props}>{props.children}</BlueButton>;
};

const BlueButton = styled.button`
  height: 40px;
  border-radius: 35px;
  border-color: #373cff;
  background-color: #373cff;
  font-size: 13px;
  color: white;
  padding: 9px 24px;
`;

export default BlueTextBtn;
