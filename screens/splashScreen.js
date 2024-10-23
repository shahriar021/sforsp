import {View, Image, Text} from 'react-native';
import React from 'react';
import {Colors, Fonts, Sizes} from '../constants/styles';
import MyStatusBar from '../components/myStatusBar';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.push('Login');
  }, 2000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MyStatusBar />
      {appIcon()}
      {appName()}
    </View>
  );

  function appName() {
    return (
      <Text
        style={{
          ...Fonts.whiteColor30Medium,
          marginTop: Sizes.fixPadding - 5.0,
        }}>
        SSP
      </Text>
    );
  }

  function appIcon() {
    return (
      <Image
        source={require('../assets/images/app_icon.png')}
        style={{width: 65.0, height: 65.0, resizeMode: 'contain'}}
      />
    );
  }
};

export default SplashScreen;
