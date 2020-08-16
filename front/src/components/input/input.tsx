import React, { useState, ReactElement } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  width?: number;
  suffix?: string | ReactElement;
}

const Input: React.FC<Props> = (props) => {
  const { title, width, suffix } = props;
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: width || '100%',
      }}
    >
      {title && <b style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</b>}

      <div
        style={{
          borderRadius: 8,
          border: focused ? 'solid 1px #373cff' : 'solid 1px #c7c7c7',
          display: 'inline-flex',
          padding: '10px 8px',
          ...props.style,
        }}
      >
        <input
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {suffix && <span>{suffix}</span>}
      </div>
    </div>
  );
};

export default Input;
