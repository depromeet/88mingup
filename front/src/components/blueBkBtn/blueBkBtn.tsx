import React, { EventHandler } from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  isActive: boolean;
  onClick?: EventHandler<any>;
}

const backgroundStyle: React.CSSProperties = {
  padding: '11px 24px',
  fontSize: '13px',
  color: '#ffffff',
  borderRadius: '35px',
  fontWeight: 'bold',
};

const BlueBkBtn: React.FC<Props> = (props) => {
  const { style, className, children, isActive, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...backgroundStyle,
        ...style,
        backgroundColor: isActive ? '#373cff' : '#cfd1ff',
      }}
    >
      {children}
    </div>
  );
};

export default BlueBkBtn;
