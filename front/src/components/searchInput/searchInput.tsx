import React from 'react';
import './searchInput.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
}

const container: React.CSSProperties = {
  fontSize: '19px',
  padding: '14px 0px',
  border: '0px solid white',
  borderBottomWidth: '2px',
  fontWeight: 'bold',
  margin: '62px 16px',
  marginBottom: '0',
  display: 'flex',
  justifyContent: 'center',
};

const UnderlineInput: React.FC<Props> = (props) => {
  const { children, style } = props;
  return <div style={{ ...container, ...style }}>{children}</div>;
};

export default UnderlineInput;
