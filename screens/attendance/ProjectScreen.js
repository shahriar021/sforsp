// import React, {useEffect, useState} from 'react';
// import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
// import {TabBar, TabView} from 'react-native-tab-view';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProjectScreen = ({navigation, selectedValue}) => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {key: 'daily', title: 'Daily'},
//     {key: 'monthly', title: 'Monthly'},
//     {key: 'summary', title: 'Summary'},
//   ]);

//   const [id, setId] = useState(null);
//   const [data, setData] = useState([]);
//   const [dataDaily, setDataDaily] = useState([]);
//   const [dataMonthly, setDataMonthly] = useState([]);

//   useEffect(() => {
//     const getUserID = async () => {
//       try {
//         const userID = await AsyncStorage.getItem('userId');
//         setId(userID);
//       } catch (error) {
//         console.error('Failed to load userID', error);
//       }
//     };

//     getUserID();
//   }, []);

//   useEffect(() => {
//     if (id && selectedValue) {
//       const getData = async () => {
//         try {
//           const response = await fetch(
//             `http://192.168.0.190:5000/attendance/attendance_list_summary/${id}`,
//             {
//               method: 'POST',
//               headers: {'Content-Type': 'application/json'},
//               body: JSON.stringify({date: selectedValue, id}),
//             },
//           );
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };

//       getData();
//     }
//   }, [id,selectedValue]);

//   console.log(selectedValue, 'selectedValue in ProjectScreen', id, 'id');

//   useEffect(() => {
//     if (id && selectedValue) {
//       const getDataDaily = async () => {
//         try {
//           const response = await fetch(
//             `http://192.168.0.190:5000/attendance/attedance_list_date_for_search_box/${id}`,
//             {
//               method: 'POST',
//               headers: {'Content-Type': 'application/json'},
//               body: JSON.stringify({date: selectedValue, id}),
//             },
//           );
//           const jsonData = await response.json();
//           setDataDaily(jsonData);
//         } catch (error) {
//           console.error('Error fetching daily data:', error);
//         }
//       };

//       getDataDaily();
//     }
//   }, [id, selectedValue]);

//   useEffect(() => {
//     if (id && selectedValue) {
//       const getDataMonthly = async () => {
//         try {
//           const response = await fetch(
//             `http://192.168.0.190:5000/attendance/attedance_list_monthly/${id}`,
//             {
//               method: 'POST',
//               headers: {'Content-Type': 'application/json'},
//               body: JSON.stringify({date: selectedValue, id}),
//             },
//           );
//           const jsonData = await response.json();

//           setDataMonthly(jsonData);
//         } catch (error) {
//           console.error('Error fetching monthly data:', error);
//         }
//       };

//       getDataMonthly();
//     }
//   }, [id, selectedValue]);

//   const renderItem = ({item}) => (
//     <View style={styles.itemContainer}>
//       {/* <Text style={styles.boldText}>
//         Total Salary: <Text style={styles.valueText}>{item.total_salary}</Text>
//       </Text> */}
//       <Text style={styles.boldText}>
//         Present: <Text style={styles.valueText}>{item.present}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Total Holiday:{' '}
//         <Text style={styles.valueText}>{item.total_holiday}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Total Leave: <Text style={styles.valueText}>{item.total_leave}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Total Days Off:{' '}
//         <Text style={styles.valueText}>{item.total_days_off}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Working Days: <Text style={styles.valueText}>{item.working_days}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Absent: <Text style={styles.valueText}>{item.absent}</Text>
//       </Text>
//     </View>
//   );

//   const renderItemDaily = ({item}) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.boldText}>
//         {item.checktime} - {item.device_id}
//       </Text>
//     </View>
//   );

//   const renderItemMonthly = ({item}) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.boldText}>{item.checktime}</Text>
//       <Text style={styles.boldText}>entry: {item.entry_time}</Text>
//       <Text style={styles.boldText}>exit: {item.exit_time}</Text>
//       <Text style={styles.boldText}>{item.device_id}</Text>
//     </View>
//   );

//   const renderScene = ({route}) => {
//     switch (route.key) {
//       case 'daily':
//         return (
//           <DailyTab dataDaily={dataDaily} renderItemDaily={renderItemDaily} />
//         );
//       case 'monthly':
//         return (
//           <MonthlyTab
//             dataMonthly={dataMonthly}
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
//       <Button title='date'/>
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
//       keyExtractor={item => item.id}
//     />
//   </View>
// );

// const MonthlyTab = ({dataMonthly, renderItemMonthly}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       data={dataMonthly}
//       renderItem={renderItemMonthly}
//       keyExtractor={item => item.id}
//     />
//   </View>
// );

// const SummaryTab = ({data, renderItem}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: '#9672FB',
//     padding: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     color: '#9672FB',
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
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
//     padding: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//     margin: 5,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: 'black',
//   },
//   valueText: {
//     fontWeight: 'normal',
//     color: 'black',
//   },
//   dropdown: {
//     width: 150,
//     backgroundColor: 'black',
//     borderRadius: 8,
//     padding: 8,
//   },
//   placeholderStyle: {
//     color: 'black',
//   },
//   selectedTextStyle: {
//     color: 'white',
//   },
//   itemTextStyle: {
//     color: 'black',
//   },
// });

// export default ProjectScreen;

// -------------------------------------------------------------------------------------------

// import React, {useEffect, useState} from 'react';
// import {Button, FlatList, StyleSheet, Text, View, Platform} from 'react-native';
// import {TabBar, TabView} from 'react-native-tab-view';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const ProjectScreen = ({navigation, selectedValue}) => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {key: 'daily', title: 'Daily'},
//     {key: 'monthly', title: 'Monthly'},
//     {key: 'summary', title: 'Summary'},
//   ]);

//   const [id, setId] = useState(null);
//   const [data, setData] = useState([]);
//   const [dataDaily, setDataDaily] = useState([]);
//   const [dataMonthly, setDataMonthly] = useState([]);
//   const [dateP, setDate] = useState(new Date());
//   const [showPicker, setShowPicker] = useState(false);

//   const formatDateToYearMonth = date => {
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // `getMonth()` is 0-based, so we add 1
//     return `${year}-${month}`;
//   };

//   const updatedDate = formatDateToYearMonth(dateP);

//   console.log(updatedDate, 'date picker.',dateP);

//   useEffect(() => {
//     const getUserID = async () => {
//       try {
//         const userID = await AsyncStorage.getItem('userId');
//         setId(userID);
//       } catch (error) {
//         console.error('Failed to load userID', error);
//       }
//     };

//     getUserID();
//   }, []);

//   useEffect(() => {
//     if (id && dateP) {
//       const getData = async () => {
//         try {
//           const response = await fetch(
//             `http://192.168.0.190:5000/attendance/attendance_list_summary/${id}`,
//             {
//               method: 'POST',
//               headers: {'Content-Type': 'application/json'},
//               body: JSON.stringify({date: updatedDate, id}),
//             },
//           );
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };

//       getData();
//     }
//   }, [id, updatedDate]);

//   useEffect(() => {
//     if (id && dateP) {
//       const getDataDaily = async () => {
//         try {
//           const response = await fetch(
//             `http://192.168.0.190:5000/attendance/attedance_list_date_for_search_box/${id}`,
//             {
//               method: 'POST',
//               headers: {'Content-Type': 'application/json'},
//               body: JSON.stringify({date: updatedDate, id}),
//             },
//           );
//           const jsonData = await response.json();
//           setDataDaily(jsonData);
//         } catch (error) {
//           console.error('Error fetching daily data:', error);
//         }
//       };

//       getDataDaily();
//     }
//   }, [id, updatedDate]);

//   useEffect(() => {
//     if (id && dateP) {
//       const getDataMonthly = async () => {
//         try {
//           const response = await fetch(
//             `http://192.168.0.190:5000/attendance/attedance_list_monthly/${id}`,
//             {
//               method: 'POST',
//               headers: {'Content-Type': 'application/json'},
//               body: JSON.stringify({date: updatedDate, id}),
//             },
//           );
//           const jsonData = await response.json();

//           setDataMonthly(jsonData);
//         } catch (error) {
//           console.error('Error fetching monthly data:', error);
//         }
//       };

//       getDataMonthly();
//     }
//   }, [id, updatedDate]);

//   const renderItem = ({item}) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.boldText}>
//         Present: <Text style={styles.valueText}>{item.present}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Total Holiday:{' '}
//         <Text style={styles.valueText}>{item.total_holiday}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Total Leave: <Text style={styles.valueText}>{item.total_leave}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Total Days Off:{' '}
//         <Text style={styles.valueText}>{item.total_days_off}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Working Days: <Text style={styles.valueText}>{item.working_days}</Text>
//       </Text>
//       <Text style={styles.boldText}>
//         Absent: <Text style={styles.valueText}>{item.absent}</Text>
//       </Text>
//     </View>
//   );

//   const renderItemDaily = ({item}) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.boldText}>
//         {item.checktime} - {item.device_id}
//       </Text>
//     </View>
//   );

//   const renderItemMonthly = ({item}) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.boldText}>{item.checktime}</Text>
//       <Text style={styles.boldText}>entry: {item.entry_time}</Text>
//       <Text style={styles.boldText}>exit: {item.exit_time}</Text>
//       <Text style={styles.boldText}>{item.device_id}</Text>
//     </View>
//   );

//   const renderScene = ({route}) => {
//     switch (route.key) {
//       case 'daily':
//         return (
//           <DailyTab dataDaily={dataDaily} renderItemDaily={renderItemDaily} />
//         );
//       case 'monthly':
//         return (
//           <MonthlyTab
//             dataMonthly={dataMonthly}
//             renderItemMonthly={renderItemMonthly}
//           />
//         );
//       case 'summary':
//         return <SummaryTab data={data} renderItem={renderItem} />;
//       default:
//         return null;
//     }
//   };

//   const onDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowPicker(Platform.OS === 'ios');
//     setDate(currentDate);
//     // Handle the selected date here if needed
//   };

//   return (
//     <View style={{flex: 1}}>
//       <View style={styles.headerContainer}>
//         <Button title="Pick Date" onPress={() => setShowPicker(true)} />
//         {showPicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={dateP}
//             mode="date"
//             display="default"
//             onChange={onDateChange}
//           />
//         )}
//       </View>
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
//       keyExtractor={item => item.id}
//     />
//   </View>
// );

// const MonthlyTab = ({dataMonthly, renderItemMonthly}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       data={dataMonthly}
//       renderItem={renderItemMonthly}
//       keyExtractor={item => item.id}
//     />
//   </View>
// );

// const SummaryTab = ({data, renderItem}) => (
//   <View style={styles.tabContainer}>
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: 10,
//   },
//   tabContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemContainer: {
//     padding: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//     margin: 5,
//   },
//   boldText: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: 'black',
//   },
//   valueText: {
//     fontWeight: 'normal',
//     color: 'black',
//   },
// });

// export default ProjectScreen;

import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MonthPicker from 'react-native-month-year-picker';
import Fontisto from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProjectScreen = ({navigation, selectedValue}) => {
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
  const [dateP, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const formatDateToYearMonth = date => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // `getMonth()` is 0-based, so we add 1
    return `${year}-${month}`;
  };

  const updatedDate = formatDateToYearMonth(dateP);

  console.log(updatedDate, 'Selected Date');

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        setId(userID);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  useEffect(() => {
    if (id && dateP) {
      const getData = async () => {
        try {
          const response = await fetch(
            `http://192.168.0.190:5000/attendance/attendance_list_summary/${id}`,
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({date: updatedDate, id}),
            },
          );
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      getData();
    }
  }, [id, updatedDate]);

  useEffect(() => {
    if (id && dateP) {
      const getDataDaily = async () => {
        try {
          const response = await fetch(
            `http://192.168.0.190:5000/attendance/attedance_list_date_for_search_box/${id}`,
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({date: updatedDate, id}),
            },
          );
          const jsonData = await response.json();
          setDataDaily(jsonData);
        } catch (error) {
          console.error('Error fetching daily data:', error);
        }
      };

      getDataDaily();
    }
  }, [id, updatedDate]);

  useEffect(() => {
    if (id && dateP) {
      const getDataMonthly = async () => {
        try {
          const response = await fetch(
            `http://192.168.0.190:5000/attendance/attedance_list_monthly/${id}`,
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({date: updatedDate, id}),
            },
          );
          const jsonData = await response.json();

          setDataMonthly(jsonData);
        } catch (error) {
          console.error('Error fetching monthly data:', error);
        }
      };

      getDataMonthly();
    }
  }, [id, updatedDate]);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
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
        {item.checktime} - {item.device_id}
      </Text>
    </View>
  );

  const renderItemMonthly = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.boldText}>{item.checktime}</Text>
      <Text style={styles.boldText}>entry: {item.entry_time}</Text>
      <Text style={styles.boldText}>exit: {item.exit_time}</Text>
      <Text style={styles.boldText}>{item.device_id}</Text>
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

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/images/icons/whiteLeft.png')}
            style={{
              width: 25,
              height: 25,
              marginRight: 10,
              alignSelf: 'flex-start',
            }}
          />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
          <TouchableOpacity
            onPress={() => setShowPicker(true)}
            style={{marginRight: 20}}>
            <MaterialIcons name="date-range" size={33} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('report')}>
            <MaterialIcons name="report" size={33} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {showPicker && (
        <MonthPicker
          onChange={onDateChange}
          value={dateP}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date(2025, 11)}
        />
      )}

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
      keyExtractor={item => item.id}
    />
  </View>
);

const MonthlyTab = ({dataMonthly, renderItemMonthly}) => (
  <View style={styles.tabContainer}>
    <FlatList
      data={dataMonthly}
      renderItem={renderItemMonthly}
      keyExtractor={item => item.id}
    />
  </View>
);

const SummaryTab = ({data, renderItem}) => (
  <View style={styles.tabContainer}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#9672FB',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 20,
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
});

export default ProjectScreen;
