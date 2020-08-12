import React from 'react';

interface btnProps {
  style?: React.CSSProperties;
  className?: string;
  isActive?: Boolean;
  onClick?: () => void;
}

const blueTextBtn: React.FC<btnProps> = (props) => {
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

export default blueTextBtn;