import React from 'react';
import { WriteIcon } from 'assets';
import { history } from 'store/rootReducer';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const iconStyle: React.CSSProperties = {
  width: '56px',
  height: '56px',
  boxShadow: '4px 4px 10px 0 rgba(55, 60, 255, 0.1)',
  backgroundImage: 'linear-gradient(125deg,  #373cff, #a5ffae)',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  position: 'fixed',
  right: '24px',
  bottom: '24px',
};

const UploadIcon: React.FC<Props> = (props) => {
  const { style, className } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...iconStyle }}
      onClick={() => {
        history.push('/map');
      }}
    >
      <WriteIcon />
    </div>
  );
};

export default UploadIcon;
