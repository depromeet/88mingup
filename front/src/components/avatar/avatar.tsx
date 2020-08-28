import React from 'react';

import { ReactComponent as DefaultProfileIcon } from 'assets/ic_mypage.svg';

interface Props {
  src?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

const Avatar: React.FC<Props> = (props) => {
  return props.src ? (
    <img
      {...props}
      style={{
        ...props.style,
        borderRadius: '50%',
        backgroundColor: '#e9e9e9',
        width: props.size || 64,
        height: props.size || 64,
        objectFit: 'cover',
      }}
      src={props.src}
    />
  ) : (
    <DefaultProfileIcon
      style={{
        borderRadius: '50%',
        backgroundColor: '#e9e9e9',
        width: props.size || 64,
        height: props.size || 64,
      }}
    />
  );
};

export default Avatar;
