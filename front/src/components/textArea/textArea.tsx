import React from 'react';

interface Props
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  title: string;
  limit?: number;
  value?: string;
  width?: number;
}

const TextArea: React.FC<Props> = (props) => {
  const { value = '', limit = 500, title, width } = props;

  const [content, setContent] = React.useState<string>(value);

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
      <textarea
        {...props}
        style={{
          borderRadius: 8,
          border: 'solid 1px #373cff',
          padding: '10px 8px',
          ...props.style,
        }}
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
    </div>
  );
};

export default TextArea;
