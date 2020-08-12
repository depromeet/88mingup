import React from 'react';
import { Map, GoogleApiWrapper, GoogleAPI } from 'google-maps-react';

interface googleMapProps {
  style?: React.CSSProperties;
  className?: string;
  google?: GoogleAPI;
}

const googleMap: React.FC<googleMapProps> = (props) => {
  const { className, style, google } = props;
  return (
    <div className={className}>
      <Map style={{ ...style }} google={google} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API_KEY as string,
})(googleMap);
