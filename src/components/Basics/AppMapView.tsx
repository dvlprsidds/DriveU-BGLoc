import React, {useEffect, useRef} from 'react';
import {Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {screenStyles} from '../../screens/screenStyles';

export const AppMapView = () => {
  const mapRef = useRef(null);
  const {history} = useSelector((state: any) => state.location);

  useEffect(() => {
    if (history?.length > 0 && mapRef.current) {
      mapRef.current.animateToRegion(history[0]?.coordinates, 1000);
    }
  }, [history]);

  if (history) {
    return (
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '96%', borderRadius: 10, marginTop: 10}}
        initialRegion={history[0]?.coordinates}>
        {history.map(marker => (
          <Marker
            key={marker?.timestamp}
            coordinate={marker?.coordinates}
            title={'Timestamp'}
            description={marker?.timestamp}
          />
        ))}
      </MapView>
    );
  } else {
    return <Text style={screenStyles.text}>No Past locations found</Text>;
  }
};
