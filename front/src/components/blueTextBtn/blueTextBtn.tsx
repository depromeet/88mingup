import React from 'react';

interface btnProps {
  style?: React.CSSProperties;
  className?: string;
  isActive?: Boolean;
  text?: string | undefined;
  onClick?: () => void;
}

const blueTextBtn: React.FC<btnProps> = (props) => {
  const { style, className, isActive, text, onClick } = props;
  return (
    <div
      className={className}
      style={{ color: isActive ? '#373cff' : '#a1a1a1' }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
