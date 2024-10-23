// // import {useEffect} from 'react';
// // import {PermissionsAndroid, Platform} from 'react-native';
// // import PushNotification from 'react-native-push-notification';

// // const checkApplicationPermission = async () => {
// //   if (Platform.OS === 'android') {
// //     try {
// //       await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
// //       );
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // };

// // const RemoteNotification = () => {
// //   useEffect(() => {
// //     checkApplicationPermission();
// //     // Using this function as we are rendering local notification so without this function we will receive multiple notification for same notification
// //     // We have same channelID for every FCM test server notification.
// //     PushNotification.getChannels(function (channel_ids) {
// //       channel_ids.forEach(id => {
// //         PushNotification.deleteChannel(id);
// //       });
// //     });
// //     PushNotification.configure({
// //       // (optional) Called when Token is generated (iOS and Android)
// //       onRegister: function (token) {
// //         console.log('TOKEN:', token);
// //       },

// //       // (required) Called when a remote or local notification is opened or received
// //       onNotification: function (notification) {
// //         console.log(notification, 'notification.........');
// //         const {message, title, id} = notification;
// //         let strTitle: string = JSON.stringify(title).split('"').join('');
// //         let strBody: string = JSON.stringify(message).split('"').join('');
// //         const key: string = JSON.stringify(id).split('"').join('');
// //         PushNotification.createChannel(
// //           {
// //             channelId: key, // (required & must be unique)
// //             channelName: 'remote messasge', // (required)
// //             channelDescription: 'Notification for remote message', // (optional) default: undefined.
// //             importance: 4, // (optional) default: 4. Int value of the Android notification importance
// //             vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
// //           },
// //           created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// //         );
// //         PushNotification.localNotification({
// //           channelId: key, //this must be same with channelId in createchannel
// //           title: strTitle,
// //           message: strBody,
// //         });
// //         console.log(
// //           'REMOTE NOTIFICATION ==>',
// //           title,
// //           message,
// //           id,
// //           notification,
// //         );
// //         // process the notification here
// //       },
// //       // Android only: GCM or FCM Sender ID
// //       senderID: '794358140948',
// //       popInitialNotification: true,
// //       requestPermissions: true,
// //     });
// //   }, []);
// //   return null;
// // };
// // export default RemoteNotification;

// // import {useEffect} from 'react';
// // import {PermissionsAndroid, Platform} from 'react-native';
// // import PushNotification from 'react-native-push-notification';

// // const checkApplicationPermission = async () => {
// //   if (Platform.OS === 'android') {
// //     try {
// //       await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
// //       );
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // };

// // const RemoteNotification = () => {
// //   useEffect(() => {
// //     checkApplicationPermission();
// //     // Using this function as we are rendering local notification so without this function we will receive multiple notification for same notification
// //     // We have same channelID for every FCM test server notification.
// //     PushNotification.getChannels(function (channel_ids) {
// //       channel_ids.forEach(id => {
// //         PushNotification.deleteChannel(id);
// //       });
// //     });
// //     PushNotification.configure({
// //       // (optional) Called when Token is generated (iOS and Android)
// //       onRegister: function (token) {
// //         console.log('TOKEN:', token);
// //       },

// //       // (required) Called when a remote or local notification is opened or received
// //       onNotification: function (notification) {
// //         const {message, title, id} = notification;
// //         let strTitle: string = JSON.stringify(title).split('"').join('');
// //         let strBody: string = JSON.stringify(message).split('"').join('');
// //         const key: string = JSON.stringify(id).split('"').join('');
// //         PushNotification.createChannel(
// //           {
// //             channelId: key, // (required & must be unique)
// //             channelName: 'remote messasge', // (required)
// //             channelDescription: 'Notification for remote message', // (optional) default: undefined.
// //             importance: 4, // (optional) default: 4. Int value of the Android notification importance
// //             vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
// //           },
// //           created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// //         );
// //         PushNotification.localNotification({
// //           channelId: key, //this must be same with channelId in createchannel
// //           title: strTitle,
// //           message: strBody,
// //         });
// //         console.log(
// //           'REMOTE NOTIFICATION ==>',
// //           title,
// //           message,
// //           id,
// //           notification,
// //         );
// //         // process the notification here
// //       },
// //       // Android only: GCM or FCM Sender ID
// //       senderID: '794358140948',
// //       popInitialNotification: true,
// //       requestPermissions: true,
// //     });
// //   }, []);
// //   return null;
// // };
// // export default RemoteNotification;

// // import {useEffect} from 'react';
// // import {PermissionsAndroid, Platform} from 'react-native';
// // import PushNotification from 'react-native-push-notification';

// // const checkApplicationPermission = async () => {
// //   if (Platform.OS === 'android') {
// //     try {
// //       await PermissionsAndroid.request(
// //         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
// //       );
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }
// // };

// // const RemoteNotification = () => {
// //   useEffect(() => {
// //     checkApplicationPermission();

// //     PushNotification.configure({
// //       onRegister: function (token) {
// //         console.log('TOKEN:', token);
// //       },

// //       onNotification: function (notification) {
// //         console.log('NOTIFICATION:', notification);

// //         const {message, title} = notification;

// //         PushNotification.localNotification({
// //           channelId: '200',
// //           title: title,
// //           message: message,
// //           importance: 'high',
// //           priority: 'high',
// //         });
// //       },

// //       senderID: '794358140948',
// //       popInitialNotification: true,
// //       requestPermissions: true,
// //     });
// //   }, []);

// //   return null;
// // };

// // export default RemoteNotification;

// import {useEffect} from 'react';
// import {PermissionsAndroid, Platform} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import locationTrackingFunc from './locationTrackingFunc';

// const checkApplicationPermission = async () => {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//       );
//       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//         console.error('Notification permission denied');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
// };

// const RemoteNotification = () => {
//   useEffect(() => {
//     checkApplicationPermission();

//     PushNotification.configure({
//       onRegister: function (token) {
//         console.log('TOKEN:', token);
//       },

//       onNotification: function (notification) {
//         console.log('NOTIFICATION:', notification, 'on remote notification');

//         const {message, title, data} = notification;
//         var category = data.category;
//         console.log(category, 'gps category');
//         //locationTrackingFunc();
//         if (category === 'location') {
//           console.log(category, 'location..');
//           locationTrackingFunc();
//         } else if (category === 'offer') {
//           console.log(category, 'offer...');
//           //locationTrackingFunc();
//         } else {
//           console.log('cilllll');
//         }
//         // const category = data.category;
//         // const gps = async category => {
//         //   const data = await category;
//         //    console.log(data, 'gps....');
//         // };
//         // gps(category);

//         // Create a unique channel ID for this notification
//         const channelId = '98716458';

//         // Create the notification channel
//         PushNotification.createChannel(
//           {
//             channelId: channelId,
//             channelName: 'Remote Message',
//             channelDescription: 'Notification for Remote message',
//             importance: 4, // High importance
//             vibrate: true,
//           },
//           created => {
//             if (created) {
//               console.log('Remote notification channel created successfully');
//             } else {
//               console.log('Remote notification channel already exists');
//             }

//             // Trigger the local notification
//             PushNotification.localNotification({
//               channelId: channelId,
//               title: title,
//               body: message,
//               category: category,
//               priority: 'high',
//             });
//           },
//         );
//       },

//       senderID: '794358140948',
//       popInitialNotification: true,
//       requestPermissions: true,
//     });
//   }, []);

//   return null;
// };

// export default RemoteNotification;

import {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import locationTrackingFunc from './locationTrackingFunc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const checkApplicationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.error('Notification permission denied');
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const saveToken = async token => {
  try {
    await AsyncStorage.setItem('notificationToken', token);
  } catch (error) {
    console.error('Failed to save token to AsyncStorage', error);
  }
};

const RemoteNotification = () => {
  useEffect(() => {
    checkApplicationPermission();

    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
        saveToken(token.token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification, 'on remote notification');

        const {message, title, data} = notification;
        const category = data.category;
        console.log(category, 'gps category');

        if (category === 'location') {
          console.log(category, 'location..');
          locationTrackingFunc();
        } else if (category === 'offer') {
          console.log(category, 'offer...');
        } else {
          console.log('Unknown category');
        }

        const channelId = '98716458';

        PushNotification.createChannel(
          {
            channelId: channelId,
            channelName: 'Remote Message',
            channelDescription: 'Notification for Remote message',
            importance: 4,
            vibrate: true,
          },
          created => {
            if (created) {
              console.log('Remote notification channel created successfully');
            } else {
              console.log('Remote notification channel already exists');
            }

            PushNotification.localNotification({
              channelId: channelId,
              title: title,
              message: message,
              category: category,
              priority: 'high',
            });
          },
        );
      },

      senderID: '974511991341',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  return null;
};

export default RemoteNotification;
