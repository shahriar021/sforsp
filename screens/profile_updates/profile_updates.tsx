import {
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
import Header from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {liveApi} from '../../constants/server_api';

const Profile_updates = ({navigation}) => {
  const [userName, setUserName] = useState('Robert fox');
  const [email, setEmail] = useState('Robertfox@mail.com');
  const [mobileNo, setMobileNo] = useState('+91 1234567890');
  const [OffmobileNo, setOffMobileNo] = useState('+91 1234567890');
  const [photo, setPhoto] = useState('');
  const [showOptionsSheet, setShowOptionsSheet] = useState(false);

  const [id, setId] = useState(null);
  const [userDetails, setUserDetails] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        // const login = await AsyncStorage.getItem('last_login_time');
        // console.log(userID, 'dashboard..');
        setId(userID);

        //setLastLogin(login);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  console.log(id, 'profile update...');

  useEffect(() => {
    const Info = async () => {
      const data = await fetch(`${liveApi}/specifi_user/${id}`);
      const jsonData = await data.json();
      setUserDetails(jsonData);
      setEmail(jsonData[0].email);
      setUserName(jsonData[0].full_name);
      setMobileNo(jsonData[0].mobile);
      setOffMobileNo(jsonData[0].official_number);
      setPhoto(jsonData[0].photo);
      console.log(jsonData[0].photo, 'photo...');
    };

    Info();
  }, [id]);

  const updateUserData = async () => {
    console.log('update clicked...');
    try {
      const updatedUserDetails = {
        full_name: userName,
        email: email,
        mobile: mobileNo,
      };
      const response = await fetch(`${liveApi}/update_profile/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserDetails),
      });

      if (response.ok) {
        Alert.alert('Success', 'Profile updated successfully');
      } else {
        Alert.alert('Error', 'Failed to update profile');
      }
    } catch (error) {
      console.error('Failed to update profile', error);
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Update Profile" navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}>
        {/* {userPicWithChangeOption()} */}
        {userNameInfo()}
        {emailInfo()}
        {mobileNumberInfo()}
        {OfficialmobileNumberInfo()}
      </ScrollView>
      {/* {updateButton()} */}
      {addTaskButton()}
      {optionsSheet()}
    </View>
  );

  function optionsSheet() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showOptionsSheet}
        onRequestClose={() => {
          setShowOptionsSheet(false);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setShowOptionsSheet(false);
          }}
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{justifyContent: 'flex-end', flex: 1}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {}}
              style={styles.sheetWrapStyle}>
              <Text style={{...Fonts.blackColor16SemiBold}}>
                Change profile Photo
              </Text>
              {optionSort({
                iconName: 'camera',
                color: Colors.darkBlueColor,
                option: 'Camera',
              })}
              {optionSort({
                iconName: 'image',
                color: Colors.darkGreenColor,
                option: 'Gallery',
              })}
              {optionSort({
                iconName: 'trash',
                color: Colors.redColor,
                option: 'Remove image',
              })}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function optionSort({iconName, color, option}) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setShowOptionsSheet(false);
        }}
        style={{
          ...CommonStyles.rowAlignCenter,
          marginTop: Sizes.fixPadding * 2.0,
        }}>
        <View style={styles.optionCircle}>
          <Ionicons name={iconName} color={color} size={22} />
        </View>
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.blackColor16Medium,
            flex: 1,
            marginLeft: Sizes.fixPadding + 5.0,
          }}>
          {option}
        </Text>
      </TouchableOpacity>
    );
  }

  function addTaskButton() {
    return <Button buttonText="Save" onPress={updateUserData} />;
  }

  function mobileNumberInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}>
        <Text style={{...Fonts.blackColor16Medium}}>Mobile number</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={mobileNo}
            onChangeText={setMobileNo}
            placeholder="Enter mobile number"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            keyboardType="number-pad"
          />
        </View>
      </View>
    );
  }

  function OfficialmobileNumberInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}>
        <Text style={{...Fonts.blackColor16Medium}}>
          Official Mobile number
        </Text>
        <View style={styles.infoBox}>
          <TextInput
            value={OffmobileNo}
            onChangeText={setOffMobileNo}
            placeholder="Enter mobile number"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            keyboardType="number-pad"
          />
        </View>
      </View>
    );
  }

  function emailInfo() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>E-Mail Address</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
            keyboardType="email-address"
          />
        </View>
      </View>
    );
  }

  function userNameInfo() {
    return (
      <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Name</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={userName}
            onChangeText={setUserName}
            placeholder="Enter user name"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function userPicWithChangeOption() {
    const selectImageHandler = () => {
      launchImageLibrary({mediaType: 'photo'}, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setSelectedImage(response?.assets[0]);
          console.log(response?.assets[0], 'what is this...?');
        }
      });
    };

    // Function to handle image upload
    const uploadImageHandler = () => {
      if (!selectedImage) {
        Alert.alert('No image selected');
        return;
      }
      console.log(id, '4545');
      const formData = new FormData();
      formData.append('originalname', {
        uri: selectedImage.uri,
        type: selectedImage.type,
        name: selectedImage.fileName,
      });

      console.log(id);

      axios
        .post(`${liveApi}/upload/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log('Upload successful:', response.data);
          Alert.alert('Upload successful!');
        })
        .catch(error => {
          console.error('Error uploading image:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          }
          Alert.alert('Error uploading image. Please try again later.');
        });
    };

    const localImage = selectedImage?.uri;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {
          <Image
            source={{
              uri: localImage ? localImage : `${liveApi}/uploads/${photo}`,
            }}
            style={{
              width: 200,
              height: 200,
              marginBottom: 20,
              borderRadius: 200,
              marginTop: 5,
            }}
          />
        }
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageHandler}>
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.singleButton}
            onPress={uploadImageHandler}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Profile_updates;

const styles = StyleSheet.create({
  changePicIconWrapper: {
    width: 35.0,
    height: 35.0,
    borderRadius: 17.5,
    backgroundColor: Colors.whiteColor,
    position: 'absolute',
    bottom: 5.0,
    right: 0,
    ...CommonStyles.center,
  },
  infoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 2.0,
    marginTop: Sizes.fixPadding,
  },
  sheetWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: Sizes.fixPadding * 2.0,
    borderTopRightRadius: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingVertical: Sizes.fixPadding * 2.5,
  },
  optionCircle: {
    width: 40.0,
    height: 40.0,
    borderRadius: 20.0,
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    ...CommonStyles.center,
  },
  image: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  singleButton: {
    backgroundColor: '#9672FB',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
