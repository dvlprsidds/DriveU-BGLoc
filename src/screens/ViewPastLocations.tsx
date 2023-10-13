import React from 'react';

import {Text, View} from 'react-native';
import {AppMapView, MasterView} from '../components';
import {screenStyles} from './screenStyles';

const ViewPastLocations = () => {
  return (
    <MasterView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text style={screenStyles.text}>Past locations on Map</Text>
        <AppMapView />
      </View>
    </MasterView>
  );
};

export default ViewPastLocations;
