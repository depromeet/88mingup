import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  isActive: boolean;
}

const backgroundStyle: React.CSSProperties = {
  padding: '9px 24px',
  fontSize: '13px',
  color: '#ffffff',
  borderRadius: '35px',
  fontWeight: 'bold',
};

const BlueBkBtn: React.FC<Props> = (props) => {
  const { style, className, children, isActive } = props;
  return (
    <div
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
