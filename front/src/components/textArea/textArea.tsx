import React, { useState } from 'react';

interface Props
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  title: string;
  limit?: number;
  value?: string;
  width?: number;
  height?: string;
}

const TextArea: React.FC<Props> = (props) => {
  const { value = '', limit = 500, title, width, height } = props;

  const [content, setContent] = useState<string>(value);
  const [focused, setFocused] = useState<boolean>(false);

  const setFormattedContent = (text: string) => {
    text.length > limit ? setContent(text.slice(0, limit)) : setContent(text);
  };

  React.useEffect(() => {
    setFormattedContent(content);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: width }}>
      <div style={{ display: 'flex' }}>
        <b style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</b>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{ color: '#373cff' }}>{content.length}</span>
          <span style={{ color: '#868686' }}>/{limit}</span>
        </div>
      </div>
      <div
        style={{
          borderRadius: 8,
          border: focused ? 'solid 1px #373cff' : 'solid 1px #c7c7c7',
          display: 'inline-flex',
          padding: '10px 8px',
          ...props.style,
        }}
      >
        <textarea
          {...props}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            height: height,
            resize: 'none',
          }}
          onChange={(event) => setFormattedContent(event.target.value)}
          value={content}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
};

export default TextArea;
