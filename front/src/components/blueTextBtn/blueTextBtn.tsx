/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  isActive?: Boolean;
}

const BlueTextBtn: React.FC<Props> = (props) => {
  const { style, className, isActive, children } = props;
  const color = isActive ? 'blue' : 'gray';
  return (
    <div
      className={className}
      style={{ ...style, color: color }}
    >
      {children}
    </div>
  );
};

export default BlueTextBtn;
