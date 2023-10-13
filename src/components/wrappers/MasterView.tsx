import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {COLORS} from '../../util';

export const MasterView = ({children}: any) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.white}}
      edges={['right', 'bottom', 'left']}>
      <View style={{paddingHorizontal: 15}}>{children}</View>
    </SafeAreaView>
  );
};
