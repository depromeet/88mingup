import React from 'react';

interface btnProps {
  style?: React.CSSProperties;
  className?: string;
  isActice?: Boolean;
  text?: string | undefined;
  onClick?: () => void;
}

const blueTextBtn: React.FC<btnProps> = (props) => {
  const { style, className, isActice, text, onClick } = props;
  return (
    <div
      className={className}
      style={{ color: isActice ? '#373cff' : '#a1a1a1' }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
