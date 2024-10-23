import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ToastAndroid,
} from 'react-native';
import Header from '../../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';

const change_password = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setUserId(userId);

        // console.log(userId, 'mobile..');
      } catch (error) {
        console.error('Error retrieving userId:', error);
      }
    };
    fetchUserId();
  }, []);

  const handleChangePassword = async () => {
    console.log(userId);
    const postData = {
      old_password: oldPassword,
      new_password: newPassword,
    };

    const showToastSuccess = () => {
      ToastAndroid.show('password does not match!', ToastAndroid.SHORT);
    };

    if (newPassword === confirmPassword) {
      const res = await fetch(
        `http://192.168.0.194:5000/change_password/${userId}`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );
      if (res.ok === true) {
        // Handle successful login

        navigation.push('Profile');

        console.log('pressed....');
      }
    } else {
      showToastSuccess();
    }
  };
  return (
    <>
      <Header header="change password" navigation={navigation} />
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Old Password</Text>
        <View style={styles.infoBox}>
          <TextInput
            style={{...Fonts.blackColor15Medium, padding: 0}}
            onChangeText={setOldPassword}
            placeholder="type your old password..."
            value={oldPassword}
          />
        </View>

        <Text style={{...Fonts.blackColor16Medium}}>New Password</Text>
        <View style={styles.infoBox}>
          <TextInput
            style={{...Fonts.blackColor15Medium, padding: 0}}
            placeholder="type your new password"
            onChangeText={setNewPassword}
            value={newPassword}
          />
        </View>

        <Text style={{...Fonts.blackColor16Medium}}>Confirm Password</Text>
        <View style={styles.infoBox}>
          <TextInput
            style={{...Fonts.blackColor15Medium, padding: 0}}
            placeholder="type your confirm password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Save" onPress={handleChangePassword} color="#9672fb" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: 'black',
  },
  input: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  infoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 2.0,
    marginTop: Sizes.fixPadding,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
    backgroundColor: Colors.primaryColor,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default change_password;
