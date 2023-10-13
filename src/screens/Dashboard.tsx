import React, {useState} from 'react';

import {View} from 'react-native';

import {Card, MasterView, StartStop} from '../components';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MasterView>
      <View style={{marginTop: 100, alignItems: 'center'}}>
        <StartStop />
        <Card />
      </View>
    </MasterView>
  );
};

export default Dashboard;
