import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentCoord, updateHistory} from '../../redux/reducers';
import {fetchLocationCoordinates, requestLocationPermission} from '../../util';
import {componentStyles} from '../componentStyles';

export const StartStop = () => {
  const {history} = useSelector((state: any) => state.location);
  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState(null);
  const [isBgTaskActive, setIsBgTaskActive] = useState(false);
  const [coordinates, setCoordinates] = useState<any>(null);

  //START BG TASK TO GET COORDINATES
  const startBGTask = async () => {
    const isGranted = await requestLocationPermission();
    if (isGranted) {
      BackgroundTimer.start();
      const bgTaskId = BackgroundTimer.setInterval(async () => {
        try {
          const coordinates: any = await fetchLocationCoordinates();
          console.log('====================================');
          console.log('coordinates', coordinates);
          console.log('====================================');
          const coord: any = {
            latitude: coordinates?.latitude,
            longitude: coordinates?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };

          dispatch(updateCurrentCoord(coord));
          setCoordinates(coord);
        } catch (error) {
          console.error('Something went wrong', error);
        }
      }, 2000);
      setTaskId(bgTaskId);
    } else {
      setIsBgTaskActive(false);
    }
  };

  //UPDATING LOCATION HISTORY
  useEffect(() => {
    if (coordinates) {
      const log = {
        coordinates,
        timestamp: new Date(),
      };
      if (history) {
        const updatedWithHistory = [...history, log];
        dispatch(updateHistory(updatedWithHistory));
      } else {
        dispatch(updateHistory([log]));
      }
    }
  }, [coordinates]);

  //STOP BG TASK TO GET COORDINATES
  const stopBGTask = () => {
    // Stop the timer and clear the interval.
    BackgroundTimer.clearInterval(taskId);
    BackgroundTimer.stop();
    setCoordinates(null);
    dispatch(updateCurrentCoord(null));
  };

  //BASED ON STATUS TASK WILL PERFORM
  useEffect(() => {
    if (isBgTaskActive) {
      startBGTask();
    } else {
      stopBGTask();
    }
    return () => {
      stopBGTask();
    };
  }, [isBgTaskActive]);

  //TOGGELING BG TASK
  const toggleTask = () => {
    setIsBgTaskActive(!isBgTaskActive);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => toggleTask()}
        activeOpacity={0.7}
        style={[
          componentStyles.startStopCard,
          {
            backgroundColor: isBgTaskActive ? 'red' : 'green',
          },
        ]}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          {isBgTaskActive ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
      <>
        {coordinates && (
          <>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Lat - {coordinates?.latitude}
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Lon - {coordinates?.longitude}
            </Text>
          </>
        )}
      </>
    </>
  );
};
