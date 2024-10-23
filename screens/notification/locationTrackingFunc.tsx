// import {PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const requestLocationPermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: 'Location Access Required',
//           message: 'This App needs to Access your location',
//         },
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   }
//   return true;
// };

// const locationTrackingFunc = async () => {
//   const hasPermission = await requestLocationPermission();
//   if (!hasPermission) {
//     console.error('Location permission denied');
//     return;
//   }

//   Geolocation.getCurrentPosition(
//     position => {
//       const {latitude, longitude} = position.coords;
//       console.log('Current position:', {latitude, longitude});
//     },
//     error => {
//       console.error('Location error:', error);
//     },
//     {
//       enableHighAccuracy: true,
//       timeout: 30000,
//       maximumAge: 10000,
//     },
//   );
// };

// export default locationTrackingFunc;

import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { liveApi } from '../../constants/server_api';



// const requestAuthorization=()=>{
//     Geolocation.requestAuthorization(
//         success?: () => void,
//         error?: (
//           error: {
//             code: number;
//             message: string;
//             PERMISSION_DENIED: number;
//             POSITION_UNAVAILABLE: number;
//             TIMEOUT: number;
//           }
//         ) => void
//       )
// }

const locationTrackingFunc = async () => {
  const uuid = await AsyncStorage.getItem('uuid');
  console.log(uuid, 'location function..');
  Geolocation.getCurrentPosition(info => {
    const {latitude, longitude} = info.coords;
    console.log(latitude, longitude);
    console.log(uuid, 'location function..');
    const data = {
      user_id: uuid,
      latitude: latitude,
      longitude: longitude,
    };

    // Make a POST request to your API endpoint
    fetch(`${liveApi}/geo_location/geo_location_create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Location data posted successfully:', data);
      })
      .catch(error => {
        console.error('Error posting location data:', error);
        // Log detailed error message if available
        if (error.message) {
          console.error('Detailed error message:', error.message);
        }
      });
  });
};

export default locationTrackingFunc;
