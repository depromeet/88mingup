import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  width?: number;
}

const Input: React.FC<Props> = (props) => {
  const { title, width } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: width }}>
      <b style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</b>
      <input
        {...props}
        style={{
          borderRadius: 8,
          marginTop: 8,
          border: 'solid 1px #373cff',
          padding: '10px 8px',
          ...props.style,
        }}
      />
    </div>
  );
};

export default Input;
