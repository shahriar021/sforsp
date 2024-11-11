import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const useInternetConnection = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const internet = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        showAlert();
      }
    });
    return () => {
      internet();
    };
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Internet Connection',
      'You are offline. Some features may not be available.',
    );
  };
  return isConnected;
};

export default useInternetConnection;
