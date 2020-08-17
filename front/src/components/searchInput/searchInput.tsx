import React from 'react';
import './searchInput.scss';
import { SearchIcon } from 'assets';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  required?: boolean;
  value: string;
  type?: string;
  onChange: React.EventHandler<any>;
  onClick: React.EventHandler<any>;
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

const input: React.CSSProperties = {
  border: '0px',
  backgroundColor: '#373cff',
  width: '100%',
  color: 'white',
};

const UnderlineInput: React.FC<Props> = (props) => {
  const {
    className,
    style,
    placeholder,
    required,
    value,
    onChange,
    onClick,
    type,
  } = props;
  return (
    <div style={{ ...container, ...style }}>
      <input
        style={{ ...input, ...style }}
        className={className}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
      />
      <SearchIcon onClick={onClick} />
    </div>
  );
};

export default UnderlineInput;
