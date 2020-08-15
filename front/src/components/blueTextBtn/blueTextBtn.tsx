import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  isActive?: Boolean;
  onClick?: () => void;
}

const BlueTextBtn: React.FC<Props> = (props) => {
  const { style, className, isActive, children, onClick } = props;
  return (
    <div
      className={className}
      style={{ color: isActive ? '#373cff' : '#a1a1a1', ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BlueTextBtn;