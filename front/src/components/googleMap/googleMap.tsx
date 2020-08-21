import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapMarker } from 'assets';
import MintBkText from 'components/mintBkText';
import { PositionProps } from 'store/position/reducer';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  zoom: number;
  height: string;
  alert?: boolean;
}

const GoogleMap: React.FC<Props> = (props) => {
  const { className, style, zoom, height, alert } = props;

  const position: PositionProps = useSelector<RootState, PositionProps>(
    (state) => state.position,
  );
  console.log('으악',position)

  return (
    <div
      className={className}
      style={{
        ...style,
        height: height,
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      {alert && (
        <MintBkText
          width={'194px'}
          rgba={'rgba(165, 255, 174, 0.55)'}
          style={{
            marginTop: '27px',
            position: 'absolute',
            zIndex: 1,
          }}
        >
          지도를 움직여서 <b>위치를 조정</b>해보세요!
        </MintBkText>
      )}
      {position.latitude !== 0 && position.longitude !== 0 && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBj90odFn56Ethoo4NK3r3VJh11O6jcjmk',
          }}
          defaultCenter={{ lat: position.latitude, lng: position.longitude }}
          defaultZoom={zoom}
        >
          <MapMarker />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMap;
