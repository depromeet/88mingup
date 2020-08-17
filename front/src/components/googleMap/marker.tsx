import React from 'react';

interface MarkerProps {
  className?: string;
  lat: number;
  lng: number;
  style?: React.CSSProperties;
  icon:
    | string
    | React.ReactNode
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
}

const Marker: React.FC<MarkerProps> = (props) => {
  const {  style, icon, className } = props;
  return (
    <div className={className} style={{ ...style }}>
      <span style={{ ...style }}>{icon}</span>
    </div>
  );
};

export default Marker;
