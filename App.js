import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Alert, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from './screens/splashScreen';
import OnboardingScreen from './screens/onboarding/onboardingScreen';
import LoginScreen from './screens/auth/loginScreen';
import RegisterScreen from './screens/auth/registerScreen';
import VerificationScreen from './screens/auth/verificationScreen';
import BottomTabBarScreen from './components/bottomTabBarScreen';
import TaskDetailScreen from './screens/taskDetail/taskDetailScreen';
import InviteMemberScreen from './screens/inviteMember/inviteMemberScreen';
import AddNewTaskScreen from './screens/addNewTask/addNewTaskScreen';
import NotificationScreen from './screens/notification/notificationScreen';
import SearchScreen from './screens/search/searchScreen';
import ProjectDetailScreen from './screens/projectDetail/projectDetailScreen';
import ChatScreen from './screens/chat/chatScreen';
import EditProfileScreen from './screens/editProfile/editProfileScreen';
import TeamScreen from './screens/team/teamScreen';

import PrivacyPolicyScreen from './screens/privacyPolicy/privacyPolicyScreen';


import Mobile_allowance_all from './screens/mobile_allowance/mobile_allowance_all';


import Geo_location from './screens/geo_location/geo_location';
import Profile_updates from './screens/profile_updates/profile_updates';
import Payment_history from './screens/payment_history/payment_history';
import Change_password from './screens/change_password/change_password';
import Remarks from './screens/remarks/remarks';
import Add_person from './screens/add_person/add_person';
import Add_person_create from './screens/add_person/add_person_create';
import Mobile_allowance_create from './screens/mobile_allowance/mobile_allowance_create';
import ProfileScreen from './screens/profile/profileScreen';




import messaging from '@react-native-firebase/messaging';
import RemoteNotification from './screens/notification/RemoteNotification';
import locationTrackingFunc from './screens/notification/locationTrackingFunc';
import geo_location_map from './screens/geo_location/geo_location_map';
import geo_location_live_map from './screens/geo_location/geo_location_live_map';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageScreen from './screens/profile/imageScreen';
import attendance from './screens/attendance/attendance';


import parentAttendance from './screens/attendance/parentAttendance';
import report from './screens/attendance/report';
import ProjectScreen from './screens/attendance/attendance';
import leave_application_list from './screens/leave_application/leave_application_list';
import leave_application_create from './screens/leave_application/leave_application_create';
import beatOne from './screens/beat/beatOne';
import beatTwo from './screens/beat/beatTwo';
import beatThree from './screens/beat/beatThree';
import beatFour from './screens/beat/beatFour';
import interventionOne from './screens/intervention/interventionOne';
import interventionTwo from './screens/intervention/interventionTwo';
import interventionThree from './screens/intervention/interventionThree';
import interventionFour from './screens/intervention/interventionFour';
import interventionFive from './screens/intervention/interventionFive';
import interventionSix from './screens/intervention/interventionSix';
import interventionSeven from './screens/intervention/interventionSeven';
import interventionEight from './screens/intervention/interventionEight';
import consultOne from './screens/consult/consultOne';
import consultTwo from './screens/consult/consultTwo';
import consultThree from './screens/consult/consultThree';
import database_update from './screens/database_update/database_update';
import TabViewExample from './screens/tabview_dashboard/tabview_dash';
import beatDashboard from './screens/beat/beatDashboard';
import InterventionDashboar from './screens/intervention/interventionDashboar';
import consult from './screens/consult/consultDashboard';
import NetInfo from '@react-native-community/netinfo';

import {
  
  initial_setup,
} from './database/sqlDatabase';

import {GlobalStateProvider} from './hooks/globalStateContext';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  // RemoteNotification();

  //   if(data!=1){
  //  jur_ad_districts_api();
  //  d
  //   }
  //    jur_ad_districts_api();

  // useEffect(() => {
  //   const callCreateApi = async () => {
  //     await jur_ad_districts_api(),
  //       await jur_ad_divisions_api(),
  //       await jur_ad_upazillas_api(),
  //       await jur_fd_beats_api(),
  //       await jur_fd_circles_api(),
  //       await jur_fd_divisions_api(),
  //       await jur_fd_ecozones_api(),
  //       await jur_fd_ranges_api(),
  //       await mouza_types_api();
  //     await natural_issues_api();
  //     await human_issues_api();
  //     await months_api();
  //     await users_api();
  //   };
  //   callCreateApi();
  // }, []);

  useEffect(() => {
    try {
      console.log('useEffect is being called');
      const initial_setup_func = async () => {
        console.log(
          'gener43_2021_core_api_func has been called------------------------------------------------------',
        );
        try {
          await initial_setup();
        } catch (err) {
          console.log(
            'Error fetching gener43_2021_core API data:-----------------------------------------------------',
            err,
          );
        }
      };
      initial_setup_func();
    } catch (error) {
      console.log(
        'Error in useEffect:---------------------------------------------------------------------',
        error,
      );
    }
  }, []);
  

  // useEffect(() => {
  //   // Request permission to receive notifications
  //   messaging()
  //     .requestPermission()
  //     .then(authStatus => {
  //       const enabled =
  //         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //       if (enabled) {
  //         console.log('Authorization status:', authStatus);
  //       }
  //     });

  //   // Get the device token
  //   messaging()
  //     .getToken()
  //     .then(token => {
  //       console.log('Device FCM Token: ', token);
  //       // Save this token for use in Postman
  //     });

  //   // Listen to whether the token changes
  //   return messaging().onTokenRefresh(token => {
  //     console.log('Device FCM Token Refreshed: ', token);
  //     // Save this token for use in Postman
  //   });

  //   // Handle incoming messages
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     // Display a notification using your preferred method
  //   });

  //   return unsubscribe;
  // }, []);

  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     try {
  //       const userId = await AsyncStorage.getItem('userId');
  //       setUserId(userId);
  //       console.log(userId, 'app..');
  //     } catch (error) {
  //       console.error('Error retrieving userId:', error);
  //     }
  //   };
  //   fetchUserId();
  // }, []);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userID');
        setUserId(userId);
        setIsLoading(false); // Set loading to false after fetching userId
        console.log(userId, 'app..');
      } catch (error) {
        console.error('Error retrieving userId:', error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchUserId();
  }, []);

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

  if (isLoading) {
    return null; // Optionally, you can return a loading spinner or splash screen here
  }
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          initialRouteName={userId ? 'Profile' : 'Splash'}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} />
          <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
          <Stack.Screen name="InviteMember" component={InviteMemberScreen} />
          <Stack.Screen name="AddNewTask" component={AddNewTaskScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Team" component={TeamScreen} />
         
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />

         
         
          <Stack.Screen
            name="mobile_allowance"
            component={Mobile_allowance_all}
          />
          

         
          <Stack.Screen name="notification" component={NotificationScreen} />
          <Stack.Screen name="geo_location" component={Geo_location} />
          <Stack.Screen name="geo_location_map" component={geo_location_map} />
          <Stack.Screen
            name="geo_location_live_map"
            component={geo_location_live_map}
          />
          <Stack.Screen name="profile_update" component={Profile_updates} />
          <Stack.Screen name="payment_history" component={Payment_history} />
          <Stack.Screen name="change_password" component={Change_password} />
          <Stack.Screen name="remarks" component={Remarks} />
          <Stack.Screen name="add_person" component={Add_person} />
          <Stack.Screen
            name="add_person_create"
            component={Add_person_create}
          />
          
          <Stack.Screen
            name="mobile_allowance_create"
            component={Mobile_allowance_create}
          />

          
          
         

          <Stack.Screen
            name="locationTrackingFunc"
            component={locationTrackingFunc}
          />

          <Stack.Screen name="attendance" component={attendance} />
          
          <Stack.Screen name="parentAttendance" component={parentAttendance} />
          <Stack.Screen name="report" component={report} />
          <Stack.Screen name="leave" component={leave_application_list} />
          <Stack.Screen
            name="leave_create"
            component={leave_application_create}
          />

          <Stack.Screen
            name="beatOne"
            component={beatOne}
            options={{
              title: 'Beat Information',
              headerTitleStyle: {
                fontSize: 24, // Adjust the font size as needed
              },
            }}
          />
          <Stack.Screen
            name="beatTwo"
            component={beatTwo}
            options={{title: 'Beat Information'}}
          />
          <Stack.Screen
            name="beatThree"
            component={beatThree}
            options={{title: 'Beat Information'}}
          />
          <Stack.Screen
            name="beatFour"
            component={beatFour}
            options={{title: 'Beat Information'}}
          />

          <Stack.Screen
            name="interventionOne"
            component={interventionOne}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionTwo"
            component={interventionTwo}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionThree"
            component={interventionThree}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionFour"
            component={interventionFour}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionFive"
            component={interventionFive}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionSix"
            component={interventionSix}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionSeven"
            component={interventionSeven}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="interventionEight"
            component={interventionEight}
            options={{title: 'Intervention Planning'}}
          />

          <Stack.Screen
            name="communityconsultOne"
            component={consultOne}
            options={{title: 'Community Consult'}}
          />

          <Stack.Screen
            name="communityconsultTwo"
            component={consultTwo}
            options={{title: 'Community Consult'}}
          />

          <Stack.Screen
            name="communityconsultThree"
            component={consultThree}
            options={{title: 'Community Consult'}}
          />

          <Stack.Screen
            name="database_update"
            component={database_update}
            options={{title: 'Database Update'}}
          />

          <Stack.Screen
            name="tabview_dashboard"
            component={TabViewExample}
            options={{title: 'Database Update'}}
          />

          <Stack.Screen
            name="beat_dashboard"
            component={beatDashboard}
            options={{title: 'Beat Dashboard'}}
          />

          <Stack.Screen
            name="InterventionDashboar"
            component={InterventionDashboar}
            options={{title: 'Intervention Dashboard'}}
          />

          <Stack.Screen
            name="consultDashboard"
            component={consult}
            options={{title: 'Consult Dashboard'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
};

export default App;
