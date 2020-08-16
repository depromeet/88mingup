import React, { useState } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  width?: number;
}

const Input: React.FC<Props> = (props) => {
  const { title, width } = props;
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
      <input
        {...props}
        style={{
          borderRadius: 8,
          border: focused ? 'solid 1px #373cff' : 'solid 1px #c7c7c7',
          padding: '10px 8px',
          ...props.style,
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default Input;
