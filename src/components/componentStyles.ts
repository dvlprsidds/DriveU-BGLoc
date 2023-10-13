import {StyleSheet} from 'react-native';
import {COLORS} from '../util';

export const componentStyles = StyleSheet.create({
  startStopCard: {
    alignItems: 'center',
    width: 130,
    height: 130,
    borderRadius: 100,
    justifyContent: 'center',
  },
  cardWrap: {
    width: '90%',
    height: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {fontSize: 18, fontWeight: '700', color: COLORS.white},
});
