import React from 'react';

import DefaultProfileIcon from 'assets/ic_default_profile.svg';

interface Props {
  src?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

const Avatar: React.FC<Props> = (props) => {
  return (
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
      src={props.src || DefaultProfileIcon}
    />
  );
};

export default Avatar;
