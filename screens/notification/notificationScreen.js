import {StyleSheet, View, Text, Button} from 'react-native';
import React from 'react';
import {
  Colors,
  Fonts,
  Sizes,
  CommonStyles,
  screenWidth,
} from '../../constants/styles';
import Header from '../../components/header';
import PushNotification from 'react-native-push-notification';
import LocalNotification from './LocalNotification';
import RemoteNotification from './RemoteNotification';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Notification" navigation={navigation} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Text> Push Notification!! </Text>

        <Button title={'Click Here'} onPress={LocalNotification} />
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
