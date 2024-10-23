import PushNotification from 'react-native-push-notification';

const LocalNotification = () => {
  const channelId = '200'; // Consistent channel ID as a string

  console.log('Creating notification channel...');
  // Create the notification channel
  PushNotification.createChannel(
    {
      channelId: channelId, // (required)
      channelName: 'Local Message', // (required)
      channelDescription: 'Notification for Local message', // (optional)
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );

  console.log('Triggering local notification...');
  // Trigger the local notification
  PushNotification.localNotification({
    channelId: channelId, // This must be the same as the channelId in createChannel
    title: 'Local Message',
    message: 'Local message !!',
  });
  console.log('Local notification triggered');
};

export default LocalNotification;
