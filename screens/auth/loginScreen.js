// import {
//   ImageBackground,
//   Modal,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   Platform,
//   BackHandler,
//   Alert,
//   ToastAndroid,
// } from 'react-native';
// import React, {useState, useRef, useCallback, useEffect} from 'react';
// import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
// import IntlPhoneInput from 'react-native-intl-phone-input';
// import {Button} from '../../components/button';
// import {useFocusEffect} from '@react-navigation/native';
// import {ExitToast} from '../../components/exitToast';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {SERVER_IP_ADDRESS} from '@env';
// import {liveApi, serverApi} from '../../constants/server_api';

// const LoginScreen = ({navigation}) => {
//   const backAction = () => {
//     if (Platform.OS == 'ios') {
//       navigation.addListener('beforeRemove', e => {
//         e.preventDefault();
//       });
//     } else {
//       backClickCount == 1 ? BackHandler.exitApp() : _spring();
//     }
//     return true;
//   };

//   useFocusEffect(
//     useCallback(() => {
//       BackHandler.addEventListener('hardwareBackPress', backAction);
//       navigation.addListener('gestureEnd', backAction);
//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', backAction);
//         navigation.removeListener('gestureEnd', backAction);
//       };
//     }, [backAction]),
//   );

//   function _spring() {
//     setBackClickCount(1);
//     setTimeout(() => {
//       setBackClickCount(0);
//     }, 1000);
//   }

//   const [countries, setcountries] = useState();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [backClickCount, setBackClickCount] = useState(0);

//   // -----------------------valid--------------
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // -------------------- valid ----------------

//   // const handleLogin = async () => {
//   //   if (email === '' || password === '') {
//   //     ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
//   //     return;
//   //   }
//   //   const loginDb = {
//   //     email,
//   //     password,
//   //   };

//   //   console.log(loginDb, 'hellow..');

//   //   try {
//   //     const response = await fetch(`http://192.168.0.109:5000/login_user`, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(loginDb),
//   //     });
//   //     const data = await response.json();

//   //     const token = await AsyncStorage.getItem('notificationToken');
//   //     console.log(token, 'token in login page..');

//   //     const showToastt = () => {
//   //       ToastAndroid.show('Log in successfull !', ToastAndroid.SHORT);
//   //     };

//   //     const showToast = () => {
//   //       ToastAndroid.show('invalid password. !', ToastAndroid.SHORT);
//   //     };

//   //     if (response.ok === true) {
//   //       // Handle successful login
//   //       showToastt();
//   //       // console.log('Login successful:');
//   //       console.log('Login successful:', data.userId);
//   //       const uuid = data.userId;
//   //       console.log(uuid, 'uuid....');
//   //       await AsyncStorage.setItem('userId', data.userId.toString());
//   //       await AsyncStorage.setItem('uuid', data.userId.toString());
//   //       console.log('User ID:', data.userId);

//   //       navigation.push('Profile');

//   //       const userTokenRes = await fetch(
//   //         console.log(
//   //           uuid,
//   //           'uuid inside usertoken....',
//   //         )`http://192.168.0.109:5000/user_token/${uuid}`,
//   //         {
//   //           method: 'POST',
//   //           headers: {
//   //             'Content-Type': 'application/json',
//   //           },
//   //           body: JSON.stringify({token}),
//   //         },
//   //       );
//   //       const userTokenData = await userTokenRes.json();
//   //       console.log(userTokenData, 'userTokenres..');
//   //     } else if (response.status === 400) {
//   //       showToast();
//   //       console.log('invalid password.');
//   //     } else {
//   //       // Handle unsuccessful login
//   //       console.error('Login failed:', response);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error during login:', error);
//   //   }
//   // };

//   const handleLogin = async () => {
//     if (email === '' || password === '') {
//       ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
//       return;
//     }

//     const loginDb = {
//       email,
//       password,
//     };

//     console.log(loginDb, 'hellow..');

//     navigation.push('Profile');

//     // try {
//     //   console.log(serverApi);
//     //   const response = await fetch(`${liveApi}/login_user`, {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify(loginDb),
//     //   });

//     //   const data = await response.json();

//     //   const token = await AsyncStorage.getItem('notificationToken');
//     //   console.log(token, 'token in login page..');

//     //   const showToastSuccess = () => {
//     //     ToastAndroid.show('Log in successful!', ToastAndroid.SHORT);
//     //   };

//     //   const showToastInvalidPassword = () => {
//     //     ToastAndroid.show('Invalid password!', ToastAndroid.SHORT);
//     //   };

//     //   if (response.ok) {
//     //     // Handle successful login
//     //     // showToastSuccess();
//     //     console.log(
//     //       'Login successful:',
//     //       data.userId,
//     //       data.userEmail,
//     //       data.full_name,
//     //       data.userMobile,
//     //     );

//     //     const uuid = data.userId.toString();

//     //     await AsyncStorage.setItem('userId', uuid);
//     //     await AsyncStorage.setItem('uuid', uuid);

//     //     console.log('User ID:', uuid);

//     //     // const userTokenRes = await fetch(`${liveApi}/user_token/${uuid}`, {
//     //     //   method: 'POST',
//     //     //   headers: {
//     //     //     'Content-Type': 'application/json',
//     //     //   },
//     //     //   body: JSON.stringify({token}),
//     //     // });

//     //     // const userTokenData = await userTokenRes.json();
//     //     // console.log(userTokenData, 'userTokenres..');

//     //     // navigation.push('Profile');
//     //   } else if (response.status === 400) {
//     //     showToastInvalidPassword();
//     //     console.log('Invalid password.');
//     //   } else {
//     //     // Handle unsuccessful login
//     //     console.error('Login failed:', response);
//     //   }
//     // } catch (error) {
//     //   console.error('Error during login:', error);
//     // }

//     // useEffect(() => {
//     //   const getLogin = async () => {
//     //     try {
//     //       const response = await fetch(`http://192.168.0.196:5000/login_user`, {
//     //         method: 'POST',
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify(loginDb),
//     //       });
//     //       const data = await response.json();
//     //       const token = await AsyncStorage.getItem('notificationToken');
//     //       console.log(token, 'token in login page..');
//     //       const showToastSuccess = () => {
//     //         ToastAndroid.show('Log in successful!', ToastAndroid.SHORT);
//     //       };
//     //       const showToastInvalidPassword = () => {
//     //         ToastAndroid.show('Invalid password!', ToastAndroid.SHORT);
//     //       };
//     //       if (response.ok) {
//     //         // Handle successful login
//     //         showToastSuccess();
//     //         console.log('Login successful:', data.userId);
//     //         const uuid = data.userId.toString();
//     //         await AsyncStorage.setItem('userId', uuid);
//     //         await AsyncStorage.setItem('uuid', uuid);
//     //         console.log('User ID:', uuid);
//     //         navigation.push('Profile');
//     //         const userTokenRes = await fetch(
//     //           `http://192.168.0.113:5000/user_token/${uuid}`,
//     //           {
//     //             method: 'POST',
//     //             headers: {
//     //               'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify({token}),
//     //           },
//     //         );
//     //         const userTokenData = await userTokenRes.json();
//     //         console.log(userTokenData, 'userTokenres..');
//     //       } else if (response.status === 400) {
//     //         showToastInvalidPassword();
//     //         console.log('Invalid password.');
//     //       } else {
//     //         // Handle unsuccessful login
//     //         console.error('Login failed:', response);
//     //       }
//     //     } catch (error) {
//     //       console.error('Error during login:', error);
//     //     }
//     //   };
//     //   getLogin();
//     // }, []);
//   };

//   const phoneInput = useRef();

//   return (
//     <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
//       <StatusBar
//         translucent
//         backgroundColor={'transparent'}
//         barStyle={'light-content'}
//       />
//       <View style={{flex: 1}}>
//         {topImageWithHeader()}
//         {loginInfo()}
//       </View>
//       {backClickCount == 1 ? <ExitToast /> : null}
//     </View>
//   );

//   function loginInfo() {
//     return (
//       <View style={styles.loginInfoWrapper}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           automaticallyAdjustKeyboardInsets={true}
//           style={{
//             borderTopLeftRadius: Sizes.fixPadding * 4.0,
//             borderTopRightRadius: Sizes.fixPadding * 4.0,
//             overflow: 'hidden',
//           }}>
//           {authGirlImage()}
//           {emailInfo()}
//           {passwordInfo()}
//           <Button onPress={handleLogin} buttonText="Login" />
//         </ScrollView>
//       </View>
//     );
//   }

//   //   function loginButton() {
//   //     return <Button onPress={handleLogin()} buttonText="Login" />;
//   //   }

//   // function mobileNumberInfo() {
//   //     return (
//   //         <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 3.0 }}>
//   //             <Text style={{ ...Fonts.blackColor16Medium }}>
//   //                 Mobile number
//   //             </Text>
//   //             <IntlPhoneInput
//   //                 ref={phoneInput}
//   //                 onChangeText={({ phoneNumber }) => setMobileNumber(phoneNumber)}
//   //                 defaultCountry="BD"
//   //                 inputProps={{ cursorColor: Colors.primaryColor, selectionColor: Colors.primaryColor }}
//   //                 containerStyle={styles.mobileFieldStyle}
//   //                 placeholder={"Enter your mobile number"}
//   //                 phoneInputStyle={{ flex: 1, ...Fonts.blackColor15Medium,padding:0 }}
//   //                 placeholderTextColor={Colors.grayColor}
//   //                 dialCodeTextStyle={{ ...Fonts.blackColor15SemiBold, marginHorizontal: Sizes.fixPadding, }}
//   //                 filterInputStyle={{ ...Fonts.whiteColor16SemiBold }}
//   //                 flagStyle={{ fontSize: 0, width: 0, height: 0 }}
//   //                 customModal={(modalVisible, allCountries, onCountryChange) => {
//   //                     const filterCountries = (value) => {
//   //                         const data = allCountries.filter(
//   //                             (obj) =>
//   //                                 obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1
//   //                         );
//   //                         setcountries(data);
//   //                     };
//   //                     return (
//   //                         <View>
//   //                             <Modal
//   //                                 visible={modalVisible}
//   //                                 transparent={true}
//   //                                 onRequestClose={() => { phoneInput.current.hideModal() }}
//   //                                 animationType="slide"
//   //                             >
//   //                                 <TouchableOpacity
//   //                                     activeOpacity={1}
//   //                                     onPress={() => { phoneInput.current.hideModal() }}
//   //                                     style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)", }}
//   //                                 >
//   //                                     <TouchableOpacity
//   //                                         activeOpacity={1}
//   //                                         onPress={() => { }}
//   //                                         style={styles.countryPickerModal}
//   //                                     >
//   //                                         <View>
//   //                                             <TextInput
//   //                                                 autoCapitalize="words"
//   //                                                 autoFocus
//   //                                                 style={styles.countrySearchFieldStyle}
//   //                                                 cursorColor={Colors.primaryColor}
//   //                                                 selectionColor={Colors.primaryColor}
//   //                                                 onFocus={() => setcountries(allCountries)}
//   //                                                 onChangeText={filterCountries}
//   //                                                 placeholderTextColor={Colors.grayColor}
//   //                                                 placeholder="Search"
//   //                                             />
//   //                                         </View>
//   //                                         <FlatList
//   //                                             contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
//   //                                             data={countries ? countries : allCountries}
//   //                                             keyExtractor={(item, index) => index.toString()}
//   //                                             showsVerticalScrollIndicator={false}
//   //                                             renderItem={({ item }) => (
//   //                                                 <TouchableOpacity
//   //                                                     onPress={() => onCountryChange(item.code)}
//   //                                                     style={{ ...CommonStyles.rowAlignCenter, marginVertical: Sizes.fixPadding - 5.0, }}
//   //                                                 >
//   //                                                     <Text style={{ fontSize: 25 }}>{item.flag}</Text>
//   //                                                     <Text style={{ ...Fonts.blackColor15Medium, flex: 1, marginHorizontal: Sizes.fixPadding, }}>
//   //                                                         {item.en}
//   //                                                     </Text>
//   //                                                     <Text style={{ ...Fonts.blackColor15SemiBold }}>
//   //                                                         {item.dialCode}
//   //                                                     </Text>
//   //                                                 </TouchableOpacity>
//   //                                             )}
//   //                                         />
//   //                                     </TouchableOpacity>
//   //                                 </TouchableOpacity>
//   //                             </Modal>
//   //                         </View>
//   //                     );
//   //                 }}
//   //             />
//   //         </View>
//   //     )
//   // }

//   function emailInfo() {
//     return (
//       <View
//         style={{
//           marginHorizontal: Sizes.fixPadding * 2.0,
//           marginBottom: Sizes.fixPadding * 3.0,
//         }}>
//         <Text style={{...Fonts.blackColor16Medium}}>E-mail Address</Text>
//         <TextInput
//           onChangeText={email => setEmail(email)}
//           style={styles.emailInputStyle}
//           placeholder={'Enter your E-mail address'}
//           placeholderTextColor={Colors.grayColor}
//         />
//       </View>
//     );
//   }

//   function passwordInfo() {
//     return (
//       <View
//         style={{
//           marginHorizontal: Sizes.fixPadding * 2.0,
//           marginBottom: Sizes.fixPadding * 3.0,
//         }}>
//         <Text style={{...Fonts.blackColor16Medium}}>Password</Text>
//         <TextInput
//           onChangeText={password => setPassword(password)} // Assuming setEmail is a state setter function for email
//           style={styles.emailInputStyle}
//           placeholder={'Enter your Password'}
//           placeholderTextColor={Colors.grayColor}
//         />
//       </View>
//     );
//   }
//   function authGirlImage() {
//     return (
//       <Image
//         source={require('../../assets/images/auth_girl.png')}
//         style={styles.authGirlImageStyle}
//       />
//     );
//   }

//   function topImageWithHeader() {
//     return (
//       <ImageBackground
//         source={require('../../assets/images/top_image.png')}
//         style={{width: '100%', height: 280.0, ...CommonStyles.center}}
//         tintColor="rgba(241, 183,255,0.8)">
//         <View style={{marginHorizontal: Sizes.fixPadding * 5.0}}>
//           <Text style={{textAlign: 'center', ...Fonts.whiteColor22SemiBold}}>
//             Login
//           </Text>
//           <Text
//             style={{
//               marginTop: Sizes.fixPadding,
//               ...Fonts.whiteColor15Medium,
//               opacity: 0.8,
//               textAlign: 'center',
//             }}>
//             Welcome, login to your account
//           </Text>
//         </View>
//       </ImageBackground>
//     );
//   }
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   countryPickerModal: {
//     height: '70%',
//     marginHorizontal: Sizes.fixPadding * 2.0,
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding,
//     paddingHorizontal: Sizes.fixPadding * 2.0,
//     paddingTop: Sizes.fixPadding * 2.0,
//   },
//   countrySearchFieldStyle: {
//     ...Fonts.blackColor15Medium,
//     backgroundColor: Colors.whiteColor,
//     ...CommonStyles.shadow,
//     padding: Sizes.fixPadding + 3.0,
//     borderRadius: Sizes.fixPadding - 5.0,
//   },
//   mobileFieldStyle: {
//     backgroundColor: Colors.whiteColor,
//     paddingHorizontal: Sizes.fixPadding - 5.0,
//     paddingVertical: Sizes.fixPadding + 1.0,
//     ...CommonStyles.shadow,
//     marginTop: Sizes.fixPadding,
//   },
//   loginInfoWrapper: {
//     marginTop: -Sizes.fixPadding * 4.0,
//     flex: 1,
//     backgroundColor: Colors.whiteColor,
//     borderTopLeftRadius: Sizes.fixPadding * 4.0,
//     borderTopRightRadius: Sizes.fixPadding * 4.0,
//     overflow: 'hidden',
//   },
//   authGirlImageStyle: {
//     width: 120.0,
//     height: 120.0,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     margin: Sizes.fixPadding * 4.0,
//   },
//   emailInputStyle: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     fontSize: 16,
//     backgroundColor: '#FFFFFF',
//     ...CommonStyles.shadow,
//     color: 'black',
//   },
// });

import {
  ImageBackground,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  BackHandler,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
import IntlPhoneInput from 'react-native-intl-phone-input';
import {Button} from '../../components/button';
import {useFocusEffect} from '@react-navigation/native';
import {ExitToast} from '../../components/exitToast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';
import {usersListAll} from '../../backend/model/Admin/user_model/user_model';
import {users_list} from '../../database/sqlDatabase';

const LoginScreen = ({navigation}) => {
  useEffect(() => {
    const fetchData = async () => {
      await age_plantations_api(); // Make sure the data is fetched and inserted
      const spatialData = await age_plantations_list(); // Wait for the data to be fetched from the database
      console.log(spatialData, 'mmm'); // Log the fetched data
    };
    fetchData();
  }, []);

  const backAction = () => {
    if (Platform.OS == 'ios') {
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
      });
    } else {
      backClickCount == 1 ? BackHandler.exitApp() : _spring();
    }
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      navigation.addListener('gestureEnd', backAction);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backAction);
        navigation.removeListener('gestureEnd', backAction);
      };
    }, [backAction]),
  );

  function _spring() {
    setBackClickCount(1);
    setTimeout(() => {
      setBackClickCount(0);
    }, 1000);
  }

  const [countries, setcountries] = useState();
  const [mobileNumber, setMobileNumber] = useState('');
  const [backClickCount, setBackClickCount] = useState(0);

  // -----------------------valid--------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // -------------------- valid ----------------

  // const handleLogin = async () => {
  //   if (email === '' || password === '') {
  //     ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
  //     return;
  //   }
  //   const loginDb = {
  //     email,
  //     password,
  //   };

  //   console.log(loginDb, 'hellow..');

  //   try {
  //     const response = await fetch(`http://192.168.0.109:5000/login_user`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginDb),
  //     });
  //     const data = await response.json();

  //     const token = await AsyncStorage.getItem('notificationToken');
  //     console.log(token, 'token in login page..');

  //     const showToastt = () => {
  //       ToastAndroid.show('Log in successfull !', ToastAndroid.SHORT);
  //     };

  //     const showToast = () => {
  //       ToastAndroid.show('invalid password. !', ToastAndroid.SHORT);
  //     };

  //     if (response.ok === true) {
  //       // Handle successful login
  //       showToastt();
  //       // console.log('Login successful:');
  //       console.log('Login successful:', data.userId);
  //       const uuid = data.userId;
  //       console.log(uuid, 'uuid....');
  //       await AsyncStorage.setItem('userId', data.userId.toString());
  //       await AsyncStorage.setItem('uuid', data.userId.toString());
  //       console.log('User ID:', data.userId);

  //       navigation.push('Profile');

  //       const userTokenRes = await fetch(
  //         console.log(
  //           uuid,
  //           'uuid inside usertoken....',
  //         )`http://192.168.0.109:5000/user_token/${uuid}`,
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({token}),
  //         },
  //       );
  //       const userTokenData = await userTokenRes.json();
  //       console.log(userTokenData, 'userTokenres..');
  //     } else if (response.status === 400) {
  //       showToast();
  //       console.log('invalid password.');
  //     } else {
  //       // Handle unsuccessful login
  //       console.error('Login failed:', response);
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // };

  // const handleLogin = async () => {
  //   // navigation.push('Profile');

  //   if (email === '' || password === '') {
  //     ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
  //     return;
  //   }

  //   const loginDb = {
  //     email,
  //     password,
  //   };

  //   console.log(loginDb, 'hellow..');

  //   navigation.push('Profile');

  //   try {
  //     console.log(serverApi);
  //     const response = await fetch(`http://192.168.0.187:5000/login_user`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginDb),
  //     });

  //     const data = await response.json();

  //     const token = await AsyncStorage.getItem('notificationToken');
  //     console.log(token, 'token in login page..');

  //     const showToastSuccess = () => {
  //       ToastAndroid.show('Log in successful!', ToastAndroid.SHORT);
  //     };

  //     const showToastInvalidPassword = () => {
  //       ToastAndroid.show('Invalid password!', ToastAndroid.SHORT);
  //     };

  //     if (response.ok) {
  //       // Handle successful login
  //       // showToastSuccess();
  //       navigation.push('tabview_dashboard');
  //       console.log(
  //         'Login successful:',
  //         data.userId,
  //         data.userEmail,
  //         data.full_name,
  //         data.userMobile,
  //       );

  //       const uuid = data.userId.toString();

  //       await AsyncStorage.setItem('userId', uuid);
  //       await AsyncStorage.setItem('uuid', uuid);

  //       console.log('User ID:', uuid);

  //       const userTokenRes = await fetch(`${liveApi}/user_token/${uuid}`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({token}),
  //       });

  //       const userTokenData = await userTokenRes.json();
  //       console.log(userTokenData, 'userTokenres..');

  //       navigation.push('Profile');
  //     } else if (response.status === 400) {
  //       showToastInvalidPassword();
  //       console.log('Invalid password.');
  //     } else {
  //       // Handle unsuccessful login
  //       console.error('Login failed:', response);
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }

  //   // useEffect(() => {
  //   //   const getLogin = async () => {
  //   //     try {
  //   //       const response = await fetch(`http://192.168.0.196:5000/login_user`, {
  //   //         method: 'POST',
  //   //         headers: {
  //   //           'Content-Type': 'application/json',
  //   //         },
  //   //         body: JSON.stringify(loginDb),
  //   //       });
  //   //       const data = await response.json();
  //   //       const token = await AsyncStorage.getItem('notificationToken');
  //   //       console.log(token, 'token in login page..');
  //   //       const showToastSuccess = () => {
  //   //         ToastAndroid.show('Log in successful!', ToastAndroid.SHORT);
  //   //       };
  //   //       const showToastInvalidPassword = () => {
  //   //         ToastAndroid.show('Invalid password!', ToastAndroid.SHORT);
  //   //       };
  //   //       if (response.ok) {
  //   //         // Handle successful login
  //   //         showToastSuccess();
  //   //         console.log('Login successful:', data.userId);
  //   //         const uuid = data.userId.toString();
  //   //         await AsyncStorage.setItem('userId', uuid);
  //   //         await AsyncStorage.setItem('uuid', uuid);
  //   //         console.log('User ID:', uuid);
  //   //         navigation.push('Profile');
  //   //         const userTokenRes = await fetch(
  //   //           `http://192.168.0.113:5000/user_token/${uuid}`,
  //   //           {
  //   //             method: 'POST',
  //   //             headers: {
  //   //               'Content-Type': 'application/json',
  //   //             },
  //   //             body: JSON.stringify({token}),
  //   //           },
  //   //         );
  //   //         const userTokenData = await userTokenRes.json();
  //   //         console.log(userTokenData, 'userTokenres..');
  //   //       } else if (response.status === 400) {
  //   //         showToastInvalidPassword();
  //   //         console.log('Invalid password.');
  //   //       } else {
  //   //         // Handle unsuccessful login
  //   //         console.error('Login failed:', response);
  //   //       }
  //   //     } catch (error) {
  //   //       console.error('Error during login:', error);
  //   //     }
  //   //   };
  //   //   getLogin();
  //   // }, []);
  // };

  const handleLogin = async () => {
    //navigation.push('tabview_dashboard');
    if (email === '' || password === '') {
      ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT);
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch(
        'https://ssp.urbanitsolution.com/api/users?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
        {
          method: 'POST',
          body: formData,
        },
      );

      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Parsed Response Data:', data);

      // Check if the response contains any user data
      if (Array.isArray(data) && data.length > 0) {
        const user = data[0]; // Access the first user object from the array

        // Check if the email and password match
        if (user.email === email && password) {
          console.log('Login successful:', user.id);
          await AsyncStorage.setItem('userID', user.id.toString());
          navigation.push('tabview_dashboard');
        } else {
          console.log('Login failed: Invalid email or password');
          ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT);
        }
      } else {
        console.log('Login failed: No user found');
        ToastAndroid.show('No user found', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Error during login:', error);
      ToastAndroid.show('Login failed. Please try again.', ToastAndroid.SHORT);
    }
  };

  const phoneInput = useRef();

  return (
    <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <View style={{flex: 1}}>
        {topImageWithHeader()}
        {loginInfo()}
      </View>
      {backClickCount == 1 ? <ExitToast /> : null}
    </View>
  );

  function loginInfo() {
    return (
      <View style={styles.loginInfoWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
          style={{
            borderTopLeftRadius: Sizes.fixPadding * 4.0,
            borderTopRightRadius: Sizes.fixPadding * 4.0,
            overflow: 'hidden',
          }}>
          {authGirlImage()}
          {emailInfo()}
          {passwordInfo()}
          <Button onPress={handleLogin} buttonText="Login" />
        </ScrollView>
      </View>
    );
  }

  //   function loginButton() {
  //     return <Button onPress={handleLogin()} buttonText="Login" />;
  //   }

  // function mobileNumberInfo() {
  //     return (
  //         <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 3.0 }}>
  //             <Text style={{ ...Fonts.blackColor16Medium }}>
  //                 Mobile number
  //             </Text>
  //             <IntlPhoneInput
  //                 ref={phoneInput}
  //                 onChangeText={({ phoneNumber }) => setMobileNumber(phoneNumber)}
  //                 defaultCountry="BD"
  //                 inputProps={{ cursorColor: Colors.primaryColor, selectionColor: Colors.primaryColor }}
  //                 containerStyle={styles.mobileFieldStyle}
  //                 placeholder={"Enter your mobile number"}
  //                 phoneInputStyle={{ flex: 1, ...Fonts.blackColor15Medium,padding:0 }}
  //                 placeholderTextColor={Colors.grayColor}
  //                 dialCodeTextStyle={{ ...Fonts.blackColor15SemiBold, marginHorizontal: Sizes.fixPadding, }}
  //                 filterInputStyle={{ ...Fonts.whiteColor16SemiBold }}
  //                 flagStyle={{ fontSize: 0, width: 0, height: 0 }}
  //                 customModal={(modalVisible, allCountries, onCountryChange) => {
  //                     const filterCountries = (value) => {
  //                         const data = allCountries.filter(
  //                             (obj) =>
  //                                 obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1
  //                         );
  //                         setcountries(data);
  //                     };
  //                     return (
  //                         <View>
  //                             <Modal
  //                                 visible={modalVisible}
  //                                 transparent={true}
  //                                 onRequestClose={() => { phoneInput.current.hideModal() }}
  //                                 animationType="slide"
  //                             >
  //                                 <TouchableOpacity
  //                                     activeOpacity={1}
  //                                     onPress={() => { phoneInput.current.hideModal() }}
  //                                     style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)", }}
  //                                 >
  //                                     <TouchableOpacity
  //                                         activeOpacity={1}
  //                                         onPress={() => { }}
  //                                         style={styles.countryPickerModal}
  //                                     >
  //                                         <View>
  //                                             <TextInput
  //                                                 autoCapitalize="words"
  //                                                 autoFocus
  //                                                 style={styles.countrySearchFieldStyle}
  //                                                 cursorColor={Colors.primaryColor}
  //                                                 selectionColor={Colors.primaryColor}
  //                                                 onFocus={() => setcountries(allCountries)}
  //                                                 onChangeText={filterCountries}
  //                                                 placeholderTextColor={Colors.grayColor}
  //                                                 placeholder="Search"
  //                                             />
  //                                         </View>
  //                                         <FlatList
  //                                             contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
  //                                             data={countries ? countries : allCountries}
  //                                             keyExtractor={(item, index) => index.toString()}
  //                                             showsVerticalScrollIndicator={false}
  //                                             renderItem={({ item }) => (
  //                                                 <TouchableOpacity
  //                                                     onPress={() => onCountryChange(item.code)}
  //                                                     style={{ ...CommonStyles.rowAlignCenter, marginVertical: Sizes.fixPadding - 5.0, }}
  //                                                 >
  //                                                     <Text style={{ fontSize: 25 }}>{item.flag}</Text>
  //                                                     <Text style={{ ...Fonts.blackColor15Medium, flex: 1, marginHorizontal: Sizes.fixPadding, }}>
  //                                                         {item.en}
  //                                                     </Text>
  //                                                     <Text style={{ ...Fonts.blackColor15SemiBold }}>
  //                                                         {item.dialCode}
  //                                                     </Text>
  //                                                 </TouchableOpacity>
  //                                             )}
  //                                         />
  //                                     </TouchableOpacity>
  //                                 </TouchableOpacity>
  //                             </Modal>
  //                         </View>
  //                     );
  //                 }}
  //             />
  //         </View>
  //     )
  // }

  function emailInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 3.0,
        }}>
        <Text style={{...Fonts.blackColor16Medium}}>E-mail Address</Text>
        <TextInput
          onChangeText={email => setEmail(email)}
          style={styles.emailInputStyle}
          placeholder={'Enter your E-mail address'}
          placeholderTextColor={Colors.grayColor}
        />
      </View>
    );
  }

  function passwordInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 3.0,
        }}>
        <Text style={{...Fonts.blackColor16Medium}}>Password</Text>
        <TextInput
          onChangeText={password => setPassword(password)} // Assuming setEmail is a state setter function for email
          style={styles.emailInputStyle}
          placeholder={'Enter your Password'}
          placeholderTextColor={Colors.grayColor}
        />
      </View>
    );
  }
  function authGirlImage() {
    return (
      <View style={styles.imgcontainer}>
        <Image
          source={require('../../assets/images/ssplogin.jpg')}
          style={styles.authGirlImageStyle}
        />
      </View>
    );
  }

  function topImageWithHeader() {
    return (
      <ImageBackground
        source={require('../../assets/images/top_image.png')}
        style={{width: '100%', height: 280.0, ...CommonStyles.center}}
        tintColor="rgba(241, 183,255,0.8)">
        <View style={{marginHorizontal: Sizes.fixPadding * 5.0}}>
          <Text style={{textAlign: 'center', ...Fonts.whiteColor22SemiBold}}>
            SSP Data Entry
          </Text>
          <Text
            style={{
              marginTop: Sizes.fixPadding,
              ...Fonts.whiteColor15Medium,
              opacity: 0.8,
              textAlign: 'center',
            }}>
            Welcome, login to your account
          </Text>
        </View>
      </ImageBackground>
    );
  }
};

export default LoginScreen;

const styles = StyleSheet.create({
  countryPickerModal: {
    height: '70%',
    marginHorizontal: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingTop: Sizes.fixPadding * 2.0,
  },
  countrySearchFieldStyle: {
    ...Fonts.blackColor15Medium,
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 3.0,
    borderRadius: Sizes.fixPadding - 5.0,
  },
  mobileFieldStyle: {
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding + 1.0,
    ...CommonStyles.shadow,
    marginTop: Sizes.fixPadding,
  },
  loginInfoWrapper: {
    marginTop: -Sizes.fixPadding * 4.0,
    flex: 1,
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: Sizes.fixPadding * 4.0,
    borderTopRightRadius: Sizes.fixPadding * 4.0,
    overflow: 'hidden',
  },
  imgcontainer: {
    flex: 1, // Allow the container to take up full space
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    marginTop: 50,
    marginBottom: 40,
  },
  authGirlImageStyle: {
    width: 70,
    height: 80,
  },
  emailInputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    ...CommonStyles.shadow,
    color: 'black',
  },
});
