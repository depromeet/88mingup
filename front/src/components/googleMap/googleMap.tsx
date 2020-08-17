import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from 'assets';
import { MinkBKText } from 'components';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  zoom: number;
}

const GoogleMap: React.FC<Props> = (props) => {
  const { className, style, zoom } = props;

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
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
    <div className={className} style={{ ...style, alignItems: 'center' }}>
      {loading && 'loading...'}
      {!loading && (
        <>
          <MinkBKText
            width={'194px'}
            rgba={'rgba(165, 255, 174, 0.55)'}
            style={{
              marginTop: '27px',
              marginLeft: '94px',
              position: 'absolute',
              zIndex: 1,
            }}
          >
            지도를 움직여서 <b>위치를 조정</b>해보세요!
          </MinkBKText>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBj90odFn56Ethoo4NK3r3VJh11O6jcjmk',
            }}
            defaultCenter={{ lat, lng }}
            onChange={(e) => {
              console.log('eee', e);
            }}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals={true}
          >
            <MapMarker />
          </GoogleMapReact>
        </>
      )}
    </div>
  );
};

export default GoogleMap;
