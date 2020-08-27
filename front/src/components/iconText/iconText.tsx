import React from 'react';
import { ReactComponent } from '*.svg';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  icon: string | React.ReactNode | typeof ReactComponent;
  onClick?: () => void;
}

const containerStyle: React.CSSProperties = {
  height: '24px',
};

const text: React.CSSProperties = {
  fontSize: '11px',
  marginLeft: '2px',
  textAlign: 'center',
};

const IconText: React.FC<Props> = (props) => {
  const { style, icon, className, children, onClick } = props;
  return (
    <div
      {...props}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : undefined,
        ...containerStyle,
        ...style,
      }}
    >
      <span>{icon}</span>
      <span style={{ ...text }}>{children}</span>
    </div>
  );
};

export default IconText;
