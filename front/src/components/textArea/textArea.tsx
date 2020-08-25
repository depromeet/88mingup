import React, { useState, EventHandler, SetStateAction } from 'react';

interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  limit?: number;
  width?: number;
  height?: string;
  content?: string;
  setcontent?: SetStateAction<any>;
}

const TextArea: React.FC<Props> = (props) => {
  const { limit = 500, title, width, height, setcontent, content } = props;
  const [focused, setFocused] = useState<boolean>(false);

  const setFormattedContent = (text: string) => {
    text.length > limit ? setcontent(text.slice(0, limit)) : setcontent(text);
  };

  React.useEffect(() => {
    setFormattedContent(content as string);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: width }}>
      <div style={{ display: 'flex' }}>
        <b style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</b>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{ color: '#373cff' }}>{content?.toString().length}</span>
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
