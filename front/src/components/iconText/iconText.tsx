import React from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  icon:
    | string
    | React.ReactNode
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
}

const containerStyle: React.CSSProperties = {
  height: '24px',
};

const text: React.CSSProperties = {
  fontSize: '11px',
  marginLeft: '2px',
  textAlign: 'center',
};

const IconText: React.FC<Props> = (props) => {
  const { style, icon, className } = props;
  return (
    <div className={className} style={{ ...containerStyle, ...style }}>
      <span style={{ ...style }}>{{ icon }}</span>
      <span style={{ ...text, ...style }}>1024</span>
    </div>
  );
};

export default IconText;
