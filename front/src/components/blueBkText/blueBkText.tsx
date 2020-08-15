import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

const backgroundStyle: React.CSSProperties = {
  padding: '3px 8px',
  backgroundColor: '#373cff',
  fontSize: '13px',
  color: '#a5ffae',
  borderRadius: '35px',
};

const BlueBkText: React.FC<Props> = (props) => {
  const { style, className, children } = props;
  return (
    <div className={className} style={{ ...backgroundStyle, ...style }}>
      {children}
    </div>
  );
};

export default BlueBkText;
