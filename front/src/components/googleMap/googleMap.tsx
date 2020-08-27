import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from 'assets';
import { PositionProps } from 'store/position/reducer';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import './googleMap.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  zoom: number;
  onChange: React.EventHandler<any>;
}

const GoogleMap: React.FC<Props> = (props) => {
  const { className, style, zoom, onChange } = props;

  const position: PositionProps = useSelector<RootState, PositionProps>(
    (state) => state.position,
  );

  return (
    <div
      className={className}
      style={{
        ...style,
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        height: '752px',
      }}
    >
      <MapMarker
        style={{
          marginTop: '242',
          position: 'absolute',
          zIndex: 2,
        }}
      />
      {position.latitude !== 0 && position.longitude !== 0 && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBj90odFn56Ethoo4NK3r3VJh11O6jcjmk',
          }}
          defaultCenter={{ lat: position.latitude, lng: position.longitude }}
          center={{ lat: position.latitude, lng: position.longitude }}
          defaultZoom={zoom}
          onChange={onChange}
        ></GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMap;
