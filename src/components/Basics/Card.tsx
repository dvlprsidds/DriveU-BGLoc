import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../../redux/reducers';
import { componentStyles } from '../componentStyles';

export const Card = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
  return (
    <>
    <TouchableOpacity style={componentStyles.cardWrap} activeOpacity={0.7} onPress={() => navigation.navigate('ViewPastLocations')}>
          <Text style={componentStyles.cardText}>See all your past locations  -></Text>
      </TouchableOpacity>
      <TouchableOpacity style={componentStyles.cardWrap} activeOpacity={0.7} onPress={() => dispatch(updateHistory(null))}>
              <Text style={componentStyles.cardText}>Clear all past history</Text>
          </TouchableOpacity>
          </>
  );
};
