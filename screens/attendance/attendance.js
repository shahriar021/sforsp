// import {
//   ImageBackground,
//   Platform,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import {
//   Colors,
//   Fonts,
//   Sizes,
//   CommonStyles,
//   FontFamily,
// } from '../../constants/styles';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {TabView, TabBar} from 'react-native-tab-view';
// import * as Progress from 'react-native-progress';
// import {Touchable} from '../../components/touchable';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const dummyMembers = [
//   require('../../assets/images/users/user14.png'),
//   require('../../assets/images/users/user12.png'),
//   require('../../assets/images/users/user13.png'),
//   require('../../assets/images/users/user3.png'),
//   require('../../assets/images/users/user14.png'),
//   require('../../assets/images/users/user11.png'),
//   require('../../assets/images/users/user10.png'),
//   require('../../assets/images/users/user9.png'),
//   require('../../assets/images/users/user8.png'),
// ];

// const activeProjectsList = [
//   {
//     id: '1',
//     title: 'Shopping app project',
//     date: '25 feb 2023',
//     taskCount: '15 task',
//     progress: 30,
//     members: dummyMembers.slice(0, 6),
//     fill: Colors.woodenColor,
//     unfill: 'rgba(218, 152, 135, 0.16)',
//   },
//   {
//     id: '2',
//     title: 'Food delivery app project',
//     date: '22 feb 2023',
//     taskCount: '15 task',
//     progress: 50,
//     members: dummyMembers.slice(0, 5),
//     fill: Colors.parrotColor,
//     unfill: 'rgba(102, 195, 144, 0.16)',
//   },
//   {
//     id: '3',
//     title: '5 star hotel website',
//     date: '22 feb 2023',
//     taskCount: '10 task',
//     progress: 60,
//     members: dummyMembers.slice(0, 7),
//     fill: Colors.tomatoColor,
//     unfill: 'rgba(229, 113, 110, 0.16)',
//   },
//   {
//     id: '4',
//     title: 'Student tracking app',
//     date: '9 feb 2023',
//     taskCount: '15 task',
//     progress: 60,
//     members: dummyMembers.slice(0, 8),
//     fill: Colors.blueColor,
//     unfill: 'rgba(124, 146, 228, 0.16)',
//   },
//   {
//     id: '5',
//     title: 'PDF scanner app project',
//     date: '8 feb 2023',
//     taskCount: '10 task',
//     progress: 80,
//     members: dummyMembers.slice(0, 9),
//     fill: Colors.woodenColor,
//     unfill: 'rgba(218, 152, 135, 0.16)',
//   },
//   {
//     id: '6',
//     title: 'Ecommerce app project',
//     date: '9 feb 2023',
//     taskCount: '15 task',
//     progress: 90,
//     members: dummyMembers.slice(0, 6),
//     fill: Colors.tomatoColor,
//     unfill: 'rgba(229, 113, 110, 0.16)',
//   },
// ];

// const completedProjectsList = [
//   {
//     id: '1',
//     title: 'Shopping app project',
//     date: '25 feb 2023',
//     taskCount: '15 task',
//     members: dummyMembers.slice(0, 6),
//     fill: Colors.woodenColor,
//     unfill: 'rgba(218, 152, 135, 0.16)',
//   },
//   {
//     id: '2',
//     title: 'Food delivery app project',
//     date: '22 feb 2023',
//     taskCount: '15 task',
//     members: dummyMembers.slice(0, 5),
//     fill: Colors.parrotColor,
//     unfill: 'rgba(102, 195, 144, 0.16)',
//   },
//   {
//     id: '3',
//     title: '5 star hotel website',
//     date: '22 feb 2023',
//     taskCount: '10 task',
//     members: dummyMembers.slice(0, 7),
//     fill: Colors.tomatoColor,
//     unfill: 'rgba(229, 113, 110, 0.16)',
//   },
//   {
//     id: '4',
//     title: 'Student tracking app',
//     date: '9 feb 2023',
//     taskCount: '15 task',
//     members: dummyMembers.slice(0, 8),
//     fill: Colors.blueColor,
//     unfill: 'rgba(124, 146, 228, 0.16)',
//   },
//   {
//     id: '5',
//     title: 'PDF scanner app project',
//     date: '8 feb 2023',
//     taskCount: '10 task',
//     members: dummyMembers.slice(0, 9),
//     fill: Colors.woodenColor,
//     unfill: 'rgba(218, 152, 135, 0.16)',
//   },
//   {
//     id: '6',
//     title: 'Ecommerce app project',
//     date: '9 feb 2023',
//     taskCount: '15 task',
//     members: dummyMembers.slice(0, 6),
//     fill: Colors.tomatoColor,
//     unfill: 'rgba(229, 113, 110, 0.16)',
//   },
// ];

// const ProjectScreen = ({navigation, route}) => {
//   const [id, setId] = useState(null);

//   useEffect(() => {
//     const getUserID = async () => {
//       try {
//         const userID = await AsyncStorage.getItem('userId');
//         const userName = await AsyncStorage.getItem('name');
//         // const login = await AsyncStorage.getItem('last_login_time');
//         // console.log(userID, 'dashboard..');
//         console.log(userName, 'dashboard');
//         setId(userID);

//         //setLastLogin(login);
//       } catch (error) {
//         console.error('Failed to load userID', error);
//       }
//     };

//     getUserID();
//   }, []);

//   const [index, setIndex] = useState(0);
//   const [activeProjects, setactiveProjects] = useState(activeProjectsList);
//   const [completeProjects, setcompleteProjects] = useState(
//     completedProjectsList,
//   );
//   const [Summary, setSummary] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.0.190:5000/salary/getSalary/${id}`,
//         );
//         const jsonData = await response.json();
//         setSummary(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getData();
//   }, [id]);

//   console.log(Summary, 'summary');

//   return (
//     <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
//       {header()}

//       {tabBarInfo()}
//     </View>
//   );

//   function tabBarInfo() {
//     const routes = [
//       {key: 'first', title: 'Daily'},
//       {key: 'second', title: 'Monthly'},
//       {key: 'third', title: 'Summary'},
//     ];

//     const renderScene = ({route}) => {
//       switch (route.key) {
//         case 'first':
//           return (
//             <Active navigation={navigation} activeProjects={activeProjects} />
//           );
//         case 'second':
//           return (
//             <Complete
//               navigation={navigation}
//               completeProjects={completeProjects}
//             />
//           );
//         case 'third':
//           return <Summary navigation={navigation} Summary={Summary} />;
//       }
//     };

//     return (
//       <TabView
//         navigationState={{index, routes}}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         renderTabBar={props => (
//           <TabBar
//             {...props}
//             indicatorStyle={{height: 0}}
//             style={{backgroundColor: '#EDEDED', elevation: 0}}
//             pressColor={Colors.bodyBackColor}
//             renderLabel={({route, focused}) => (
//               <Text
//                 numberOfLines={1}
//                 style={{
//                   ...(focused
//                     ? {...Fonts.primaryColor16SemiBold}
//                     : {...Fonts.grayColor16SemiBold}),
//                 }}>
//                 {route.title}
//               </Text>
//             )}
//           />
//         )}
//       />
//     );
//   }

//   function header() {
//     return (
//       <View style={{backgroundColor: Colors.primaryColor}}>
//         <ImageBackground
//           source={require('../../assets/images/top_image2.png')}
//           style={{width: '100%'}}
//           tintColor="rgba(241, 183,255,0.8)">
//           <View style={styles.headerWrapStyle}>
//             <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
//               <TouchableOpacity onPress={() => navigation.push('Profile')}>
//                 <Image
//                   source={require('../../assets/images/icons/whiteLeft.png')}
//                   style={{width: 25, height: 25, marginRight: 10}}
//                 />
//               </TouchableOpacity>
//               <Text
//                 numberOfLines={1}
//                 style={{...Fonts.whiteColor22SemiBold, marginBottom: 5}}>
//                 Attendance
//               </Text>
//             </View>
//           </View>
//         </ImageBackground>
//       </View>
//     );
//   }
// };

// const Summary = props => {
//   const renderItem = ({item}) => (
//    <>

//       <View style={styles.taskCardDivider} />
//       <View style={{flex: 1, margin: Sizes.fixPadding}}>
//         <View style={{...CommonStyles.rowAlignCenter}}>
//           <View style={{flex: 1, marginRight: Sizes.fixPadding}}>
//             <Text numberOfLines={1} style={{...Fonts.blackColor16Medium}}>
//               {item.title}
//             </Text>
//             <View
//               style={{
//                 ...CommonStyles.rowAlignCenter,
//                 marginTop: Sizes.fixPadding - 5.0,
//               }}>
//               <View style={{flexDirection: 'row', flex: 1}}>
//                 <MaterialIcons
//                   name="calendar-today"
//                   color={Colors.grayColor}
//                   size={14}
//                 />
//                 <Text
//                   numberOfLines={1}
//                   style={{
//                     flex: 1,
//                     ...Fonts.grayColor12SemiBold,
//                     marginLeft: Sizes.fixPadding - 5.0,
//                   }}>
//                   {item.date}
//                 </Text>
//               </View>
//               <View style={styles.dateAndTaskDivider} />
//               <View style={{flexDirection: 'row', flex: 1}}>
//                 <MaterialIcons
//                   name="list-alt"
//                   color={Colors.grayColor}
//                   size={16}
//                 />
//                 <Text
//                   numberOfLines={1}
//                   style={{
//                     flex: 1,
//                     ...Fonts.grayColor12SemiBold,
//                     marginLeft: Sizes.fixPadding - 5.0,
//                   }}>
//                   {item.taskCount}
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <View
//             style={{
//               ...CommonStyles.rowAlignCenter,
//               marginRight:
//                 item.members.length > 4 ? -25 : -(item.members.length * 5),
//             }}>
//             {item.members.slice(0, 4).map((i, index) => (
//               <Image
//                 key={`${index}`}
//                 source={i}
//                 style={{...styles.selectedMemberStyle, left: -(index * 6)}}
//               />
//             ))}
//             {item.members.length > 4 ? (
//               <View
//                 style={{
//                   ...styles.selectedMemberStyle,
//                   ...CommonStyles.center,
//                   left: -25.0,
//                 }}>
//                 <Text style={{...Fonts.blackColor12SemiBold}}>
//                   +{item.members.length - 4}
//                 </Text>
//               </View>
//             ) : null}
//           </View>
//         </View>
//         <View
//           style={{...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding}}>
//           <View style={{flex: 1}}>
//             <Progress.Bar
//               progress={1}
//               width={null}
//               height={4}
//               color={item.fill}
//               unfilledColor={item.unfill}
//               borderWidth={0}
//             />
//           </View>
//           <MaterialIcons
//             name="done"
//             color={item.fill}
//             size={18}
//             style={{marginLeft: Sizes.fixPadding - 4.0}}
//           />
//         </View>
//       </View>

//     </>
//   );
//   return (
//     <View style={{flex: 1}}>
//       {props.completeProjects.length == 0 ? (
//         noDataInfo()
//       ) : (
//         <FlatList
//           data={props.completeProjects}
//           renderItem={renderItem}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{paddingTop: Sizes.fixPadding * 2.0}}
//         />
//       )}
//     </View>
//   );

//   function noDataInfo() {
//     return (
//       <View style={{flex: 1, ...CommonStyles.center}}>
//         <Image
//           source={require('../../assets/images/icons/folder.png')}
//           style={{width: 55.0, height: 55.0, resizeMode: 'contain'}}
//         />
//         <Text style={{...Fonts.grayColor16Medium}}>Empty project list</Text>
//       </View>
//     );
//   }
// };

// const Complete = props => {
//   const renderItem = ({item}) => (
//     <Touchable
//       onPress={() => {
//         props.navigation.push('ProjectDetail', {item, category: 'complete'});
//       }}
//       style={styles.taskCard}>
//       <View style={styles.taskCardDivider} />
//       <View style={{flex: 1, margin: Sizes.fixPadding}}>
//         <View style={{...CommonStyles.rowAlignCenter}}>
//           <View style={{flex: 1, marginRight: Sizes.fixPadding}}>
//             <Text numberOfLines={1} style={{...Fonts.blackColor16Medium}}>
//               {item.title}
//             </Text>
//             <View
//               style={{
//                 ...CommonStyles.rowAlignCenter,
//                 marginTop: Sizes.fixPadding - 5.0,
//               }}>
//               <View style={{flexDirection: 'row', flex: 1}}>
//                 <MaterialIcons
//                   name="calendar-today"
//                   color={Colors.grayColor}
//                   size={14}
//                 />
//                 <Text
//                   numberOfLines={1}
//                   style={{
//                     flex: 1,
//                     ...Fonts.grayColor12SemiBold,
//                     marginLeft: Sizes.fixPadding - 5.0,
//                   }}>
//                   {item.date}
//                 </Text>
//               </View>
//               <View style={styles.dateAndTaskDivider} />
//               <View style={{flexDirection: 'row', flex: 1}}>
//                 <MaterialIcons
//                   name="list-alt"
//                   color={Colors.grayColor}
//                   size={16}
//                 />
//                 <Text
//                   numberOfLines={1}
//                   style={{
//                     flex: 1,
//                     ...Fonts.grayColor12SemiBold,
//                     marginLeft: Sizes.fixPadding - 5.0,
//                   }}>
//                   {item.taskCount}
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <View
//             style={{
//               ...CommonStyles.rowAlignCenter,
//               marginRight:
//                 item.members.length > 4 ? -25 : -(item.members.length * 5),
//             }}>
//             {item.members.slice(0, 4).map((i, index) => (
//               <Image
//                 key={`${index}`}
//                 source={i}
//                 style={{...styles.selectedMemberStyle, left: -(index * 6)}}
//               />
//             ))}
//             {item.members.length > 4 ? (
//               <View
//                 style={{
//                   ...styles.selectedMemberStyle,
//                   ...CommonStyles.center,
//                   left: -25.0,
//                 }}>
//                 <Text style={{...Fonts.blackColor12SemiBold}}>
//                   +{item.members.length - 4}
//                 </Text>
//               </View>
//             ) : null}
//           </View>
//         </View>
//         <View
//           style={{...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding}}>
//           <View style={{flex: 1}}>
//             <Progress.Bar
//               progress={1}
//               width={null}
//               height={4}
//               color={item.fill}
//               unfilledColor={item.unfill}
//               borderWidth={0}
//             />
//           </View>
//           <MaterialIcons
//             name="done"
//             color={item.fill}
//             size={18}
//             style={{marginLeft: Sizes.fixPadding - 4.0}}
//           />
//         </View>
//       </View>
//     </Touchable>
//   );
//   return (
//     <View style={{flex: 1}}>
//       {props.completeProjects.length == 0 ? (
//         noDataInfo()
//       ) : (
//         <FlatList
//           data={props.completeProjects}
//           renderItem={renderItem}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{paddingTop: Sizes.fixPadding * 2.0}}
//         />
//       )}
//     </View>
//   );

//   function noDataInfo() {
//     return (
//       <View style={{flex: 1, ...CommonStyles.center}}>
//         <Image
//           source={require('../../assets/images/icons/folder.png')}
//           style={{width: 55.0, height: 55.0, resizeMode: 'contain'}}
//         />
//         <Text style={{...Fonts.grayColor16Medium}}>Empty project list</Text>
//       </View>
//     );
//   }
// };

// const Active = props => {
//   const renderItem = ({item}) => (
//     <Touchable
//       onPress={() => {
//         props.navigation.push('ProjectDetail', {item, category: 'active'});
//       }}
//       style={styles.taskCard}>
//       <View style={styles.taskCardDivider} />
//       <View style={{flex: 1, margin: Sizes.fixPadding}}>
//         <View style={{...CommonStyles.rowAlignCenter}}>
//           <View style={{flex: 1, marginRight: Sizes.fixPadding}}>
//             <Text numberOfLines={1} style={{...Fonts.blackColor16Medium}}>
//               {item.title}
//             </Text>
//             <View
//               style={{
//                 ...CommonStyles.rowAlignCenter,
//                 marginTop: Sizes.fixPadding - 5.0,
//               }}>
//               <View style={{flexDirection: 'row', flex: 1}}>
//                 <MaterialIcons
//                   name="calendar-today"
//                   color={Colors.grayColor}
//                   size={14}
//                 />
//                 <Text
//                   numberOfLines={1}
//                   style={{
//                     flex: 1,
//                     ...Fonts.grayColor12SemiBold,
//                     marginLeft: Sizes.fixPadding - 5.0,
//                   }}>
//                   {item.date}
//                 </Text>
//               </View>
//               <View style={styles.dateAndTaskDivider} />
//               <View style={{flexDirection: 'row', flex: 1}}>
//                 <MaterialIcons
//                   name="list-alt"
//                   color={Colors.grayColor}
//                   size={16}
//                 />
//                 <Text
//                   numberOfLines={1}
//                   style={{
//                     flex: 1,
//                     ...Fonts.grayColor12SemiBold,
//                     marginLeft: Sizes.fixPadding - 5.0,
//                   }}>
//                   {item.taskCount}
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <View
//             style={{
//               ...CommonStyles.rowAlignCenter,
//               marginRight:
//                 item.members.length > 4 ? -25 : -(item.members.length * 5),
//             }}>
//             {item.members.slice(0, 4).map((i, index) => (
//               <Image
//                 key={`${index}`}
//                 source={i}
//                 style={{...styles.selectedMemberStyle, left: -(index * 6)}}
//               />
//             ))}
//             {item.members.length > 4 ? (
//               <View
//                 style={{
//                   ...styles.selectedMemberStyle,
//                   ...CommonStyles.center,
//                   left: -25.0,
//                 }}>
//                 <Text style={{...Fonts.blackColor12SemiBold}}>
//                   +{item.members.length - 4}
//                 </Text>
//               </View>
//             ) : null}
//           </View>
//         </View>
//         <View
//           style={{...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding}}>
//           <View style={{flex: 1}}>
//             <Progress.Bar
//               progress={item.progress / 100}
//               width={null}
//               height={4}
//               color={item.fill}
//               unfilledColor={item.unfill}
//               borderWidth={0}
//             />
//           </View>
//           <Text style={{color: item.fill, ...styles.progressTextStyle}}>
//             {item.progress}%
//           </Text>
//         </View>
//       </View>
//     </Touchable>
//   );
//   return (
//     <View style={{flex: 1}}>
//       {props.activeProjects.length == 0 ? (
//         noDataInfo()
//       ) : (
//         <FlatList
//           data={props.activeProjects}
//           renderItem={renderItem}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{paddingTop: Sizes.fixPadding * 2.0}}
//         />
//       )}
//     </View>
//   );

//   function noDataInfo() {
//     return (
//       <View style={{flex: 1, ...CommonStyles.center}}>
//         <Image
//           source={require('../../assets/images/icons/folder.png')}
//           style={{width: 55.0, height: 55.0, resizeMode: 'contain'}}
//         />
//         <Text style={{...Fonts.grayColor16Medium}}>Empty project list</Text>
//       </View>
//     );
//   }
// };

// export default ProjectScreen;

// const styles = StyleSheet.create({
//   headerWrapStyle: {
//     ...CommonStyles.rowAlignCenter,
//     justifyContent: 'space-between',
//     paddingHorizontal: Sizes.fixPadding * 2.0,
//     paddingTop:
//       Platform.OS == 'ios'
//         ? Sizes.fixPadding * 5.0
//         : StatusBar.currentHeight + Sizes.fixPadding,
//   },
//   projectAndTaskIconWrapper: {
//     width: 40.0,
//     height: 40.0,
//     borderRadius: 20.0,
//     ...CommonStyles.center,
//     backgroundColor: Colors.primaryColor,
//   },
//   projectAndTaskBox: {
//     flex: 1,
//     backgroundColor: Colors.whiteColor,
//     ...CommonStyles.shadow,
//     borderRadius: Sizes.fixPadding,
//     paddingHorizontal: Sizes.fixPadding + 2.0,
//     paddingVertical: Sizes.fixPadding * 2.5,
//     ...CommonStyles.rowAlignCenter,
//   },
//   selectedMemberStyle: {
//     width: 25.0,
//     height: 25.0,
//     borderColor: Colors.whiteColor,
//     borderWidth: 2.0,
//     borderRadius: 13.0,
//     backgroundColor: Colors.extraLightGrayColor,
//     overflow: 'hidden',
//   },
//   taskCardDivider: {
//     width: 8.0,
//     backgroundColor: '#D0CFCF',
//     borderTopLeftRadius: Sizes.fixPadding,
//     borderBottomLeftRadius: Sizes.fixPadding,
//   },
//   taskCard: {
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding,
//     ...CommonStyles.shadow,
//     flexDirection: 'row',
//     marginHorizontal: Sizes.fixPadding * 2.0,
//     marginBottom: Sizes.fixPadding * 2.5,
//   },
//   progressTextStyle: {
//     fontSize: 12.0,
//     fontFamily: FontFamily.bold,
//     marginLeft: Sizes.fixPadding - 4.0,
//   },
//   dateAndTaskDivider: {
//     height: 15.0,
//     width: 1.0,
//     backgroundColor: Colors.grayColor,
//     marginHorizontal: Sizes.fixPadding - 5.0,
//   },
//   addButtonOuterCircle: {
//     backgroundColor: Colors.primaryColor,
//     position: 'absolute',
//     bottom: 25.0,
//     right: 20.0,
//     width: 60.0,
//     height: 60.0,
//     borderRadius: 30.0,
//   },
//   addButtonInnerCircle: {
//     backgroundColor: Colors.primaryColor,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//     borderWidth: 4.0,
//     width: 60.0,
//     height: 60.0,
//     borderRadius: 30.0,
//     ...CommonStyles.center,
//     ...CommonStyles.buttonShadow,
//     shadowColor: Colors.blackColor,
//     shadowOpacity: 0.25,
//   },
// });

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';
// import {TabView, TabBar} from 'react-native-tab-view';

// const ProjectScreen = () => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {key: 'daily', title: 'Daily'},
//     {key: 'monthly', title: 'Monthly'},
//     {key: 'summary', title: 'Summary'},
//   ]);

//   const [id, setId] = useState(null);
//   const [data, setData] = useState([]);
//   const [dataDaily, setDataDaily] = useState([]);
//   const [dataMontly, setDataMonthly] = useState([]);

//   useEffect(() => {
//     const getUserID = async () => {
//       try {
//         const userID = await AsyncStorage.getItem('userId');
//         const userName = await AsyncStorage.getItem('name');
//         console.log(userName, 'dashboard');
//         setId(userID);
//       } catch (error) {
//         console.error('Failed to load userID', error);
//       }
//     };

//     getUserID();
//   }, []);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.0.190:5000/salary/getSalary/${id}`,
//         );
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getData();
//   }, [id]);

//   useEffect(() => {
//     const getDataDaily = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.0.190:5000/attendance/attedance_list_daily/${id}`,
//         );
//         const jsonData = await response.json();
//         setDataDaily(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getDataDaily();
//   }, [id]);

//   console.log(dataDaily, 'datadaily');

//   useEffect(() => {
//     const getDataMonthly = async () => {
//       try {
//         const response = await fetch(
//           `http://192.168.0.190:5000/attendance/attedance_list_monthly/${id}`,
//         );
//         const jsonData = await response.json();
//         setDataMonthly(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     getDataMonthly();
//   }, [id]);

//   console.log(dataMontly, 'datadaily');

//   const renderItem = ({item}) => {
//     return (
//       <View style={styles.itemContainer}>
//         <Text style={styles.boldText}>
//           Total Salary:{' '}
//           <Text style={styles.valueText}>{item.total_salary}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Present: <Text style={styles.valueText}>{item.present}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Total Holiday:{' '}
//           <Text style={styles.valueText}>{item.total_holiday}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Total Leave: <Text style={styles.valueText}>{item.total_leave}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Total Days Off:{' '}
//           <Text style={styles.valueText}>{item.total_days_off}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Working Days:{' '}
//           <Text style={styles.valueText}>{item.working_days}</Text>
//         </Text>
//         <Text style={styles.boldText}>
//           Absent: <Text style={styles.valueText}>{item.absent}</Text>
//         </Text>
//       </View>
//     );
//   };

//   const renderItemDaily = ({item}) => {
//     return (
//       <View style={styles.itemContainer}>
//         <Text style={styles.boldText}>
//           <Text style={styles.valueText}>{item.checktime.toString()}</Text>
//           <Text style={styles.valueText}>{item.checktime.device_id}</Text>
//         </Text>
//       </View>
//     );
//   };

//   const renderItemMonthly = ({item}) => {
//     return (
//       <View style={styles.itemContainer}>
//         <Text style={styles.boldText}>
//           <Text style={styles.valueText}>{item.checktime.toString()}</Text>
//           <Text style={styles.valueText}>{item.checktime.device_id}</Text>
//         </Text>
//       </View>
//     );
//   };

//   const renderScene = ({route}) => {
//     switch (route.key) {
//       case 'daily':
//         return (
//           <DailyTab dataDaily={dataDaily} renderItemDaily={renderItemDaily} />
//         );
//       case 'monthly':
//         return (
//           <MonthlyTab
//             dataMontly={dataMontly}
//             renderItemMonthly={renderItemMonthly}
//           />
//         );
//       case 'summary':
//         return <SummaryTab data={data} renderItem={renderItem} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <View style={{flex: 1}}>
//       {/* <HeaderAttendance /> */}
//       <TabView
//         navigationState={{index, routes}}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         renderTabBar={props => (
//           <TabBar
//             {...props}
//             indicatorStyle={{backgroundColor: 'black'}}
//             style={{backgroundColor: '#EDEDED'}}
//             labelStyle={{color: 'black'}}
//           />
//         )}
//       />
//     </View>
//   );
// };

// const DailyTab = ({dataDaily, renderItemDaily}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       data={dataDaily}
//       renderItem={renderItemDaily}
//       keyExtractor={item => item.id.toString()}
//     />
//   </View>
// );

// const MonthlyTab = ({dataMontly, renderItemMonthly}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       dataMontly={dataMontly}
//       renderItemMonthly={renderItemMonthly}
//       keyExtractor={item => item.id.toString()}
//     />
//   </View>
// );

// const SummaryTab = ({data, renderItem}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id.toString()}
//     />
//   </View>
// );

// const HeaderAttendance = () => (
//   <View style={styles.headerContainer}>
//     <Text style={styles.headerText}>Attendance</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: '#EDEDED',
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   tabContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   itemContainer: {
//     padding: 80,

//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//     margin: 5,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   valueText: {
//     fontWeight: 'normal',
//   },
// });

// export default ProjectScreen;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';

import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

const ProjectScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'daily', title: 'Daily'},
    {key: 'monthly', title: 'Monthly'},
    {key: 'summary', title: 'Summary'},
  ]);

  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [dataDaily, setDataDaily] = useState([]);
  const [dataMonthly, setDataMonthly] = useState([]);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        const userName = await AsyncStorage.getItem('name');
        console.log(userName, 'dashboard');
        setId(userID);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  useEffect(() => {
    if (id) {
      const getData = async () => {
        try {
          const response = await fetch(
            `http://192.168.0.190:5000/salary/getSalary/${id}`,
          );
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      getData();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const getDataDaily = async () => {
        try {
          const response = await fetch(
            // `http://192.168.0.190:5000/attendance/attedance_list_daily/${id}`,
            `http://192.168.0.190:5000/attendance/attedance_list_date_for_search_box/${id}`,
          );
          const jsonData = await response.json();
          setDataDaily(jsonData);
        } catch (error) {
          console.error('Error fetching daily data:', error);
        }
      };

      getDataDaily();
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const getDataMonthly = async () => {
        try {
          const response = await fetch(
            `http://192.168.0.190:5000/attendance/attedance_list_monthly/${id}`,
          );
          const jsonData = await response.json();
          setDataMonthly(jsonData);
        } catch (error) {
          console.error('Error fetching monthly data:', error);
        }
      };

      getDataMonthly();
    }
  }, [id]);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.boldText}>
        Total Salary: <Text style={styles.valueText}>{item.total_salary}</Text>
      </Text>
      <Text style={styles.boldText}>
        Present: <Text style={styles.valueText}>{item.present}</Text>
      </Text>
      <Text style={styles.boldText}>
        Total Holiday:{' '}
        <Text style={styles.valueText}>{item.total_holiday}</Text>
      </Text>
      <Text style={styles.boldText}>
        Total Leave: <Text style={styles.valueText}>{item.total_leave}</Text>
      </Text>
      <Text style={styles.boldText}>
        Total Days Off:{' '}
        <Text style={styles.valueText}>{item.total_days_off}</Text>
      </Text>
      <Text style={styles.boldText}>
        Working Days: <Text style={styles.valueText}>{item.working_days}</Text>
      </Text>
      <Text style={styles.boldText}>
        Absent: <Text style={styles.valueText}>{item.absent}</Text>
      </Text>
    </View>
  );

  const renderItemDaily = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.boldText}>
        {item.checktime.toString()} - {item.device_id}
      </Text>
    </View>
  );

  const renderItemMonthly = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.boldText}>
        {item.checktime.toString()} - {item.device_id}
      </Text>
    </View>
  );

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'daily':
        return (
          <DailyTab dataDaily={dataDaily} renderItemDaily={renderItemDaily} />
        );
      case 'monthly':
        return (
          <MonthlyTab
            dataMonthly={dataMonthly}
            renderItemMonthly={renderItemMonthly}
          />
        );
      case 'summary':
        return <SummaryTab data={data} renderItem={renderItem} />;
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1}}>
      <HeaderAttendance navigation={navigation} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'black'}}
            style={{backgroundColor: '#EDEDED'}}
            labelStyle={{color: 'black'}}
          />
        )}
      />
    </View>
  );
};

const DailyTab = ({dataDaily, renderItemDaily}) => (
  <View style={styles.tabContainer}>
    <FlatList
      data={dataDaily}
      renderItem={renderItemDaily}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

const MonthlyTab = ({dataMonthly, renderItemMonthly}) => (
  <View style={styles.tabContainer}>
    <FlatList
      data={dataMonthly}
      renderItem={renderItemMonthly}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

const SummaryTab = ({data, renderItem}) => (
  <View style={styles.tabContainer}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  </View>
);

// const HeaderAttendance = ({
//   navigation,

// }) => (
//   <View style={styles.headerContainer}>
//     <TouchableOpacity onPress={() => navigation.push('Profile')}>
//       <Image
//         source={require('../../assets/images/icons/whiteLeft.png')}
//         style={{width: 25, height: 25, marginRight: 10}}
//       />
//     </TouchableOpacity>
//     <Text style={styles.headerText}>Attendance</Text>

//   </View>
// );

// const HeaderAttendance = ({navigation}) => {
//   const [selectedValue, setSelectedValue] = useState(null);

//   const [dateFromAttedance, setDateFromAttedance] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const data = await fetch(
//         'http://192.168.0.190:5000/attendance/attedance_list_date_for_search_box',
//       );
//       const jsonData = await data.json();
//       setDateFromAttedance(jsonData[0].checktime);
//       console.log(jsonData[0].checktime);
//     };
//     getData();
//   }, []);

//   console.log(dateFromAttedance, 'date...');

//   return (
//     <View style={styles.headerContainer}>
//       <TouchableOpacity onPress={() => navigation.push('Profile')}>
//         <Image
//           source={require('../../assets/images/icons/whiteLeft.png')}
//           style={{width: 25, height: 25, marginRight: 10}}
//         />
//       </TouchableOpacity>
//       <Text style={styles.headerText}>Attendance</Text>
//       <Dropdown
//         style={styles.dropdown}
//         data={dateFromAttedance}
//         labelField="label"
//         valueField="value"
//         placeholder="Select language"
//         value={selectedValue}
//         onChange={item => {
//           setSelectedValue(item.value);
//           console.log(item.value);
//         }}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         itemTextStyle={styles.itemTextStyle}
//       />
//     </View>
//   );
// };


const HeaderAttendance = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [dateFromAttendance, setDateFromAttendance] = useState([]);
  console.log(selectedValue, 'value...');

  useEffect(() => {
    // Generate month options from January 2024 to the current month
    const generateMonthOptions = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth(); // 0-indexed (0 = January)

      const months = [];
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      for (let year = 2024; year <= currentYear; year++) {
        const endMonth = year === currentYear ? currentMonth : 11;
        for (let month = 0; month <= endMonth; month++) {
          const monthLabel = `${monthNames[month]} ${year}`;
          const monthValue = `${year}-${String(month + 1).padStart(2, '0')}`;
          months.push({label: monthLabel, value: monthValue});
        }
      }

      setDateFromAttendance(months);

      // Set the current month as the default selected value
      const currentMonthValue = `${currentYear}-${String(
        currentMonth + 1,
      ).padStart(2, '0')}`;
      setSelectedValue(currentMonthValue);
    };

    generateMonthOptions();
  }, []);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.push('Profile')}>
        <Image
          source={require('../../assets/images/icons/whiteLeft.png')}
          style={{width: 25, height: 25, marginRight: 10}}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Attendance</Text>
      <Dropdown
        style={styles.dropdown}
        data={dateFromAttendance}
        labelField="label"
        valueField="value"
        placeholder="Select month"
        value={selectedValue}
        onChange={item => {
          setSelectedValue(item.value);
          console.log(item.value);
        }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#9672FB',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    color: '#9672FB',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 20, // Adjust padding as needed
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    margin: 5,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
  },
  valueText: {
    fontWeight: 'normal',
    color: 'black',
  },
  dropdown: {
    width: 150,
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 8,
  },
  placeholderStyle: {
    color: 'black', // Placeholder text color
  },
  selectedTextStyle: {
    color: 'white', // Selected item text color
  },
  itemTextStyle: {
    color: 'black', // Dropdown items text color
  },
});

export default ProjectScreen;
