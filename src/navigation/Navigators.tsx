import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Dashboard, ViewPastLocations} from '../screens';

const Nav = createStackNavigator();

const Navigators = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Dashboard'}>
      <Nav.Screen name="Dashboard" component={Dashboard} />
      <Nav.Screen name="ViewPastLocations" component={ViewPastLocations} />
    </Nav.Navigator>
  );
};

export default Navigators;
