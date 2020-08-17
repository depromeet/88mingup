import React, { useEffect, useState } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import Marker from './marker';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  zoom: number;
  icon:
    | string
    | React.ReactNode
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
}

const GoogleMap: React.FC<Props> = (props) => {
  const { className, style, zoom, icon } = props;

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

  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  return (
    <div
      className={className}
      style={{ ...style, height: '100vh', width: '100%' }}
    >
      {loading && 'loading...'}
      {!loading && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBj90odFn56Ethoo4NK3r3VJh11O6jcjmk' }}
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker lat={59.955413} lng={30.337844} icon={icon} />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMap;
