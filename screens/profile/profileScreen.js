import {
  ImageBackground,
  Modal,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Colors,
  Fonts,
  Sizes,
  CommonStyles,
  FontFamily,
} from '../../constants/styles';
import * as Progress from 'react-native-progress';
import {Touchable} from '../../components/touchable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {liveApi} from '../../constants/server_api';

import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import axios from 'axios';

import VectorImage from 'react-native-vector-image';
import Geolocationsvg from '../../assets/images/icons/Geolocationsvg.svg';
import Attendancesvg from '../../assets/images/icons/Attendancesvg.svg';
import Mobileallowncwsvg from '../../assets/images/icons/Mobileallowncwsvg.svg';
import Transportsvg from '../../assets/images/icons/Transportsvg.svg';
import Officevisitsvg from '../../assets/images/icons/Officevisitsvg.svg';
import Salarysvg from '../../assets/images/icons/Salarysvg.svg';
import {
  aspects_api,
  aspects_delete,
  aspects_list,
  gener43_2021_core_api,
  sources_api,
  sources_list,
  spatial_ref_sys_api,
  spatial_ref_sys_list,
} from '../../database/sqlDatabase';
import {useNavigation} from '@react-navigation/native';
import useUUID from '../../hooks/useUUID';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [designation, setDesignation] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);
  const [photo, setPhoto] = useState('');

  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await aspects_api(); // Make sure the data is fetched and inserted
  //       const spatialData = await aspects_list(); // Wait for the data to be fetched from the database
  //       console.log(spatialData, 'mmmm'); // Log the fetched data
  //     } catch (error) {
  //       console.error('Error fetching or inserting data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       await aspects_api();
  //       const spatialData = await aspects_list();
  //       console.log(spatialData, 'mmmm');

  //       await aspects_delete();

  //       const spatialData3 = await aspects_list();
  //       console.log(spatialData3, 'ooooo');
  //     } catch (error) {
  //       console.error('Error fetching or inserting data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // SQLite and API functions as defined above

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        const userName = await AsyncStorage.getItem('name');
        // const login = await AsyncStorage.getItem('last_login_time');
        // console.log(userID, 'dashboard..');
        // console.log(userName, 'dashboard');
        setId(userID);

        //setLastLogin(login);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  // console.log(id, 'profile');

  useEffect(() => {
    const Info = async () => {
      const data = await fetch(`http://192.168.0.190:5000/specifi_user/${id}`);
      const jsonData = await data.json();
      setUserName(jsonData[0].full_name);
    };

    Info();
  }, [id]);

  useEffect(() => {
    const Info = async () => {
      const data = await fetch(
        `https://hr-backend-lovat.vercel.app/designaiton/${id}`,
      );
      const jsonData = await data.json();
      setDesignation(jsonData[0].designation_name);
    };

    Info();
  }, [id]);

  console.log(designation, 'user data...');

  useEffect(() => {
    const Info = async () => {
      const data = await fetch(`http://192.168.0.190:5000/specifi_user/${id}`);
      const jsonData = await data.json();

      setPhoto(jsonData[0].photo);
      console.log(jsonData[0].photo, 'photo...');
    };

    Info();
  }, []);

  const [showLogoutDialog, setshowLogoutDialog] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      console.log('User ID removed from AsyncStorage');
      setshowLogoutDialog(false);
      navigation.push('Login'); // Navigate to the login screen
    } catch (error) {
      console.error('Error removing user ID from AsyncStorage:', error);
    }
  };

  const {md5} = useUUID();
  console.log(md5, 'uuid-md5');
  // const microseconds = (performance.now() * 1000).toString().slice(0, 10); // Convert milliseconds to microseconds
  // console.log(microseconds, 'micorosecond');

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      {userInfo()}
      {/* {projectAndTaskInfo()} */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>{options()}</ScrollView> */}

      {menuItems()}
      {logoutDialog()}
    </View>
  );

  function projectAndTaskInfo() {
    return (
      <View style={{flexDirection: 'row', margin: 20}}>
        {/* First Column */}
        <View style={{flex: 1, margin: 1}}>
          {/* First Row */}
          <TouchableOpacity onPress={() => navigation.push('weeklyAllowance')}>
            <View
              style={{
                ...styles.projectAndTaskBox,

                backgroundColor: '#A6F0E4',
              }}>
              <Image
                source={require('../../assets/images/category_bg.png')}
                style={{
                  width: '75%',
                  height: '100%',
                  position: 'absolute',
                  right: 0,
                }}
              />
              <View style={styles.projectAndTaskIconWrapper}></View>
              <View style={{flex: 1, marginLeft: Sizes.fixPadding}}>
                <Text
                  numberOfLines={1}
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Weekly Allowance
                </Text>
                <Text numberOfLines={1} style={{color: 'white'}}>
                  ৳ 86.45
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Second Row */}
          <View
            style={{
              ...styles.projectAndTaskBox,
              marginTop: Sizes.fixPadding,
              backgroundColor: '#E8E6FB',
            }}>
            <Image
              source={require('../../assets/images/category_bg.png')}
              style={{
                width: '75%',
                height: '100%',
                position: 'absolute',
                right: 0,
              }}
            />
            <View style={styles.projectAndTaskIconWrapper}></View>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                Total Allowance
              </Text>
              <Text numberOfLines={1} style={{color: 'white'}}>
                ৳ 552.95
              </Text>
            </View>
          </View>
        </View>

        {/* Second Column */}
        <View style={{flex: 1, margin: 1}}>
          {/* First Row */}
          <View
            style={{
              ...styles.projectAndTaskBox,
              marginBottom: 3,
              backgroundColor: '#F7D9D4',
            }}>
            <Image
              source={require('../../assets/images/category_bg.png')}
              style={{
                width: '75%',
                height: '100%',
                position: 'absolute',
                right: 0,
              }}
            />
            <View style={[styles.projectAndTaskIconWrapper]}></View>
            <View style={{flex: 1, marginLeft: Sizes.fixPadding}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                Due
              </Text>
              <Text numberOfLines={1} style={{color: 'white'}}>
                ৳ 120.99
              </Text>
            </View>
          </View>
          {/* Second Row */}
          <View
            style={{
              ...styles.projectAndTaskBox,
              marginTop: 5,
              backgroundColor: '#F9C4C3',
            }}>
            <Image
              source={require('../../assets/images/category_bg.png')}
              style={{
                width: '75%',
                height: '100%',
                position: 'absolute',
                right: 0,
              }}
            />
            <View style={[styles.projectAndTaskIconWrapper]}></View>
            <View style={{flex: 1, marginLeft: Sizes.fixPadding}}>
              <Text
                numberOfLines={1}
                style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                Total Paid
              </Text>
              <Text numberOfLines={1} style={{color: 'white'}}>
                ৳ 53.25
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  const handleLog = () => {
    Alert.alert('logout...');
  };

  function logoutDialog() {
    const handleLogout = async () => {
      try {
        await AsyncStorage.removeItem('userId');
        console.log('User ID removed from AsyncStorage');
        setshowLogoutDialog(false);
        navigation.push('Login'); // Navigate to the login screen
      } catch (error) {
        console.error('Error removing user ID from AsyncStorage:', error);
      }
    };
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLogoutDialog}
        onRequestClose={() => {
          setshowLogoutDialog(false);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setshowLogoutDialog(false);
          }}
          style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{justifyContent: 'center', flex: 1}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {}}
              style={styles.dialogStyle}>
              <Image
                source={require('../../assets/images/icons/logout_big.png')}
                style={styles.dialogImageStyle}
              />
              <Text style={{textAlign: 'center', ...Fonts.blackColor16Medium}}>
                Are you sure you want to logout this account?
              </Text>
              <View
                style={{
                  ...CommonStyles.rowAlignCenter,
                  marginTop: Sizes.fixPadding + 5.0,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setshowLogoutDialog(false);
                  }}
                  style={{
                    ...styles.dialogButtonStyle,
                    backgroundColor: Colors.whiteColor,
                    ...CommonStyles.shadow,
                    marginRight: Sizes.fixPadding,
                  }}>
                  <Text style={{...Fonts.primaryColor18Medium}}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleLogout} // Call handleLogout on press
                  style={{
                    ...styles.dialogButtonStyle,
                    backgroundColor: Colors.primaryColor,
                    ...CommonStyles.buttonShadow,
                    marginLeft: Sizes.fixPadding,
                  }}>
                  <Text style={{...Fonts.whiteColor18Medium}}>Yes</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }

  function menuItems() {
    return (
      <View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonCardList}
            onPress={() => navigation.push('beat_dashboard')}>
            <Image
              source={require('../../assets/images/one.jpg')}
              style={styles.tinyLogo}
            />

            {/* <Icon name="podium-outline" size={38} color="#EC7063" /> */}
            <Text style={styles.cardTextL}>Beat Information</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCardList}
            onPress={() => navigation.push('InterventionDashboar')}>
            <Image
              source={require('../../assets/images/two.png')}
              style={styles.tinyLogo}
            />

            {/* <Icon name="person-outline" size={38} color="#028741" /> */}
            <Text style={styles.cardTextL}>Intervention Planning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCardList}
            onPress={() => navigation.push('consultDashboard')}>
            <Image
              source={require('../../assets/images/three.png')}
              style={styles.tinyLogo}
            />
            {/* <Icon name="cash-outline" size={38} color="#33BBFF" /> */}
            <Text style={styles.cardTextL}>Community Consultation</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.buttonCardList}
            onPress={() => navigation.push('database_update')}>
            <MaterialCommunityIcons
              name="database-cog"
              size={38}
              color="#33BBFF"
            />
            <Text style={styles.cardTextL}>Database Update</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

  function options() {
    return (
      <View style={styles.optionsWrapper}>
        {optionSort({
          iconName: 'location',
          option: 'Geo Location',
          onPress: () => {
            navigation.push('geo_location');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'call',
          option: 'Mobile Allowance',
          onPress: () => {
            navigation.push('mobile_allowance');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'notifications',
          option: 'Notification',
          onPress: () => {
            navigation.push('notification');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'business-sharp',
          option: 'Office Visit',
          onPress: () => {
            navigation.push('office_visit');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'money-outline',
          option: 'Payment History',
          onPress: () => {
            navigation.push('payment_history');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'male-sharp',
          option: 'Profile Update',
          onPress: () => {
            navigation.push('profile_update');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'bus-sharp',
          option: 'Transport Allowance',
          onPress: () => {
            navigation.push('transport_allowance');
          },
        })}
        {divider()}
        {optionSort({
          iconName: 'bus-sharp',
          option: 'Change Password',
          onPress: () => {
            navigation.push('change_password');
          },
        })}
        {divider()}
        {logoutOption()}
      </View>
    );
  }

  function logoutOption() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setshowLogoutDialog(true);
        }}
        style={{
          ...CommonStyles.rowAlignCenter,
          marginHorizontal: Sizes.fixPadding,
          marginVertical: Sizes.fixPadding + 5.0,
        }}>
        <Image
          source={require('../../assets/images/icons/logout.png')}
          style={{width: 18.0, height: 18.0, resizeMode: 'contain'}}
        />
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.redColor16Medium,
            flex: 1,
            marginHorizontal: Sizes.fixPadding,
          }}>
          Logout
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={18}
          color={Colors.blackColor}
        />
      </TouchableOpacity>
    );
  }

  function divider() {
    return (
      <View
        style={{backgroundColor: Colors.extraLightGrayColor, height: 1.0}}
      />
    );
  }

  function optionSort({iconName, option, onPress}) {
    return (
      <Touchable
        onPress={onPress}
        style={{
          ...CommonStyles.rowAlignCenter,
          marginHorizontal: Sizes.fixPadding,
          marginVertical: Sizes.fixPadding + 5.0,
        }}>
        <Ionicons name={iconName} size={18} color={Colors.blackColor} />
        <Text
          numberOfLines={1}
          style={{
            ...Fonts.blackColor16Medium,
            flex: 1,
            marginHorizontal: Sizes.fixPadding,
          }}>
          {option}
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={18}
          color={Colors.blackColor}
        />
      </Touchable>
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

    const selectImageCamera = () => {
      launchCamera({mediaType: 'photo'}, response => {
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

    const onPress = () => {
      navigation.push('Image');
    };

    const imageSource = () => {
      if (localImage) {
        return {uri: localImage};
      } else if (photo) {
        return {uri: `${liveApi}/uploads/${photo}`};
      } else {
        return require('../../assets/avatar-15-32.png');
      }
    };

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {/* <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageHandler}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageCamera}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity> */}
        </View>
        {
          //         <TouchableOpacity onPress={onPress}>
          //           {localImage  === null?
          //           <Image
          //             source={require('../../assets/avatar-15-32.png')}
          //             style={{
          //               width: 50,
          //               height: 50,
          //               marginBottom: 20,
          //               borderRadius: 200,
          //               marginTop: 5,
          //             }}
          //           />:
          //           <Image
          //             source={{
          //               uri: localImage ? localImage : `${liveApi}/uploads/${photo}`,
          //             }}
          //             style={{
          //               width: 50,
          //               height: 50,
          //               marginBottom: 20,
          //               borderRadius: 200,
          //               marginTop: 5,
          //             }}
          //           />
          // }
          //         </TouchableOpacity>

          <TouchableOpacity onPress={onPress}>
            <Image
              source={
                localImage
                  ? {uri: localImage}
                  : photo
                  ? {uri: `${liveApi}/uploads/${photo}`}
                  : require('../../assets/avatar-15-32.png')
              }
              style={{
                width: 50,
                height: 50,

                borderRadius: 200,

                borderWidth: 2,
                borderColor: '#eeeeee',
              }}
            />
          </TouchableOpacity>
        }
        <View style={styles.buttonsContainer}>
          {/* <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageHandler}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageCamera}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={styles.singleButton}
            onPress={uploadImageHandler}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

  // function userInfo() {
  //   return (
  //     <View
  //       style={{
  //         ...CommonStyles.rowAlignCenter,

  //         justifyContent: 'space-between',
  //         backgroundColor: '#d3d3d3',
  //       }}>
  //       <View style={{display: 'flex', flexDirection: 'row'}}>
  //         <Text> {userPicWithChangeOption()}</Text>
  //         <View style={{marginLeft: 10}}>
  //           {/* <Text style={{...Fonts.blackColor16SemiBold}}>{userName}</Text> */}
  //           <Text style={{...Fonts.blackColor16SemiBold}}>"shahriar chowdhury shahriar chowdhury"</Text>
  //           <Text style={{...Fonts.blackColor16SemiBold}}>"shahriar chowdhury shahriar chowdhury"</Text>
  //           <Text style={{...Fonts.blackColor16SemiBold}}>"shahriar chowdhury shahriar chowdhury"</Text>
  //           <Text style={{...Fonts.blackColor16SemiBold}}>"shahriar chowdhury shahriar chowdhury"</Text>
  //           <Text style={{...Fonts.blackColor16SemiBold}}>"shahriar chowdhury shahriar chowdhury"</Text>

  //           <Text style={{...Fonts.grayColor16SemiBold}}>{designation}</Text>
  //         </View>
  //       </View>
  //       <Image
  //         source={require('../../assets/images/users/mini-urban-it-logo.png')}
  //         style={{width: 70.0, height: 70.0, borderRadius: 35.0}}
  //       />
  //       <Image
  //         source={require('../../assets/images/users/mini-urban-it-logo.png')}
  //         style={{width: 70.0, height: 70.0, borderRadius: 35.0}}
  //       />
  //     </View>
  //   );
  // }

  // function formatText(text, maxLength) {
  //   // Check if the text is longer than the maximum allowed length
  //   if (text.length > maxLength) {
  //     // Find the last space within the maxLength to avoid cutting words in half
  //     let splitIndex = text.lastIndexOf(' ', maxLength);
  //     if (splitIndex === -1) splitIndex = maxLength;

  //     // Split the text into two lines
  //     let firstPart = text.substring(0, splitIndex).trim();
  //     let secondPart = text.substring(splitIndex).trim();

  //     // Return the formatted text with a line break
  //     return `${firstPart}\n${secondPart}`;
  //   }
  //   // If the text is not too long, return it as is
  //   return text;
  // }

  // function userInfo() {
  //   return (
  //     <View
  //       style={{
  //         ...CommonStyles.rowAlignCenter,
  //         justifyContent: 'space-between',
  //         backgroundColor: '#d3d3d3',
  //       }}>
  //       <View style={{display: 'flex', flexDirection: 'row'}}>
  //         <Text>{userPicWithChangeOption()}</Text>
  //         <View style={{marginLeft: 10}}>
  //           <Text style={{...Fonts.blackColor16SemiBold}}>
  //             {(formatText(userName), 20)}
  //           </Text>

  //           <Text style={{...Fonts.grayColor16SemiBold}}>{designation}</Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
  //         <Image
  //           source={require('../../assets/images/users/mini-urban-it-logo.png')}
  //           style={{width: 70.0, height: 70.0, borderRadius: 35.0}}
  //         />
  //         <TouchableOpacity
  //           style={{
  //             backgroundColor: '#ff5c5c',
  //             paddingVertical: 10,
  //             paddingHorizontal: 15,
  //             borderRadius: 5,
  //             marginLeft: 10,
  //           }}
  //           onPress={() => console.log('Logout button pressed')}>
  //           <Text style={{color: '#fff', ...Fonts.blackColor16SemiBold}}>
  //             Logout
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }

  function formatText(text, maxLength) {
    // Check if the text is longer than the maximum allowed length
    if (text.length > maxLength) {
      // Find the last space within the maxLength to avoid cutting words in half
      let splitIndex = text.lastIndexOf(' ', maxLength);
      if (splitIndex === -1) splitIndex = maxLength;

      // Split the text into two lines
      let firstPart = text.substring(0, splitIndex).trim();
      let secondPart = text.substring(splitIndex).trim();

      // Return the formatted text with a line break
      return `${firstPart}\n${secondPart}`;
    }
    // If the text is not too long, return it as is
    return text;
  }

  // function userInfo() {
  //   return (
  //     <View
  //       style={{
  //         ...CommonStyles.rowAlignCenter,
  //         justifyContent: 'space-between',
  //         backgroundColor: '#d3d3d3',
  //       }}>
  //       <View style={{display: 'flex', flexDirection: 'row'}}>
  //         <Text>{userPicWithChangeOption()}</Text>
  //         <View style={{marginLeft: 10}}>
  //           <Text style={{...Fonts.blackColor16SemiBold}}>
  //             {formatText(userName, 20)}
  //           </Text>

  //           <Text style={{...Fonts.grayColor16SemiBold}}>{designation}</Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
  //         <Image
  //           source={require('../../assets/images/users/mini-urban-it-logo.png')}
  //           style={{width: 70.0, height: 70.0, borderRadius: 35.0}}
  //         />
  //         <TouchableOpacity
  //           style={{

  //             marginLeft: 10,
  //           }}
  //           onPress={() => console.log('Logout button pressed')}>
  //           <Text style={{color: '#fff', ...Fonts.blackColor16SemiBold}}>
  //             <Image
  //               source={require('../../assets/images/icons/logout.png')}
  //               style={{width: '100%', height: '100%'}}
  //             />
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }

  function userInfo() {
    return (
      <View
        style={{
          ...CommonStyles.rowAlignCenter,
          justifyContent: 'space-between',
          backgroundColor: '#d3d3d3',
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 5,
            marginLeft: 15,
          }}>
          <Text>{userPicWithChangeOption()}</Text>
          <View style={{marginLeft: 10}}>
            <Text style={{...Fonts.blackColor16SemiBold}}>
              {formatText(userName, 20)}
            </Text>

            {/* <Text style={{...Fonts.grayColor16SemiBold}}>{designation}</Text> */}
            <Text style={{...Fonts.blackColor16SemiBold}}>ismail hossain</Text>
          </View>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/sufaldashtwo.jpg')}
            style={{width: 50.0, height: 50.0, borderRadius: 35.0}}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={{
              marginLeft: 5,
              width: 50, // Set a fixed size for the icon`
              height: 50,
              marginRight: 15,
            }}
            onPress={() => handleLogout()}>
            <Image
              source={require('../../assets/images/icons/logout_4034229.png')}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View style={{backgroundColor: Colors.primaryColor}}>
        <ImageBackground
          source={require('../../assets/images/top_image2.png')}
          style={{width: '100%'}}
          tintColor="rgba(241, 183,255,0.8)">
          <View style={styles.headerWrapStyle}>
            <View style={{flex: 1}}>
              <Text numberOfLines={1} style={{...Fonts.whiteColor22SemiBold}}>
                Profile
              </Text>
              <Text
                numberOfLines={1}
                style={{...Fonts.whiteColor16Medium, opacity: 0.8}}>
                Hello robert fox
              </Text>
            </View>
            <View style={{height: 95, justifyContent: 'flex-end'}}>
              <Image
                source={require('../../assets/images/working_boy.png')}
                style={{width: 110, height: 80.0, resizeMode: 'stretch'}}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerWrapStyle: {
    ...CommonStyles.rowAlignCenter,
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingTop:
      Platform.OS == 'ios'
        ? Sizes.fixPadding * 5.0
        : StatusBar.currentHeight + Sizes.fixPadding,
  },
  optionsWrapper: {
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  dialogButtonStyle: {
    flex: 1,
    ...CommonStyles.center,
    padding: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
  },
  dialogImageStyle: {
    width: 80.0,
    height: 80.0,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: Sizes.fixPadding - 5.0,
  },
  dialogStyle: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    padding: Sizes.fixPadding * 2.0,
    width: '80%',
    alignSelf: 'center',
  },
  projectAndTaskBox: {
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    borderRadius: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding + 2.0,
    paddingVertical: Sizes.fixPadding * 2.5,
    ...CommonStyles.rowAlignCenter,
  },
  projectAndTaskIconWrapper: {
    borderRadius: 20.0,
    ...CommonStyles.center,
  },

  buttonCardList: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    width: '30%', // Adjust width to fit 3 items per row
    aspectRatio: 1, // Ensure the button is square
  },
  cardTextL: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
