import {Alert, Linking, Platform} from 'react-native';
import {PERMISSIONS, check, request} from 'react-native-permissions';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    const status = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
    if (status === 'granted') {
      return true;
    } else if (status === 'blocked') {
      Alert.alert(
        'Permission needed',
        'change location to Always in settings',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => grantAlwaysAllowPerm(),
          },
        ],
        {cancelable: false},
      );
    } else {
      const result = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
      if (result === 'granted') {
        return true;
      }
    }
  }
  return false;
};

export const grantAlwaysAllowPerm = () => {
  Linking.openSettings();
};
