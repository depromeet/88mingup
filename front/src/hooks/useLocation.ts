import { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper, GoogleAPI } from 'google-maps-react';

export const useLocation = () => {
  const [location, setLocation] = useState<Position | null>(null);
  const [error, setError] = useState<PositionError | null>(null);


  navigator.geolocation.getCurrentPosition(setLocation, setError);

  useEffect(() => {
    let id: number | null = null;
    if (navigator.geolocation) {
      id = navigator.geolocation.watchPosition(setLocation, setError, {
        enableHighAccuracy: true,
        timeout: 5000,
      });
    }
    return () => {
      if (id) {
        navigator.geolocation.clearWatch(id);
      }
    };
  }, []);

  return [location, error];
};
