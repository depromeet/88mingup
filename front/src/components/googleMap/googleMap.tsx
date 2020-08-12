import React, { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper, GoogleAPI } from 'google-maps-react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  google?: GoogleAPI;
}

const GoogleMap: React.FC<Props> = (props) => {
  const { className, style, google } = props;

  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(currentPosition);
    }
  }, []);

  const currentPosition = (position: any) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
    setLoading(false);
  };

  return (
    <div className={className}>
      {loading && 'loading...'}
      {!loading && (
        <Map
          style={{ ...style }}
          google={google}
          center={{ lat, lng }}
          initialCenter={{ lat, lng }}
        >
          <Marker />
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API_KEY as string,
})(GoogleMap);
