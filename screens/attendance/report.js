// import {useNavigation} from '@react-navigation/native';
// import React, {useState} from 'react';
// import {View, TouchableOpacity, Image, StyleSheet, Modal} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MonthPicker from 'react-native-month-year-picker';

// const Report = () => {
//   const navigation = useNavigation();
//   const [showPicker, setShowPicker] = useState(false);

//   const [dateOne, setDateOne] = useState(new Date());

//   const onDateChange = selectedDate => {
//     setShowPicker(false);
//     if (selectedDate) {
//       setDateOne(selectedDate);
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.push('parentAttendance')}>
//           <Image
//             source={require('../../assets/images/icons/whiteLeft.png')}
//             style={styles.iconStyle}
//           />
//         </TouchableOpacity>

//         <View style={styles.rightIconsContainer}>
//           <TouchableOpacity
//             style={styles.iconButton}
//             onPress={() => setShowPicker(true)}>
//             <MaterialIcons name="date-range" size={33} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.iconButton}>
//             <MaterialIcons name="date-range" size={33} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <MaterialIcons name="search" size={33} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showPicker && (
//         <MonthPicker
//           onChange={onDateChange}
//           value={dateOne}
//           minimumDate={new Date(2000, 0)}
//           maximumDate={new Date(2025, 11)}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#9672FB',
//   },
//   iconStyle: {
//     width: 25,
//     height: 25,
//   },
//   rightIconsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 20,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// });

// export default Report;

// import {useNavigation} from '@react-navigation/native';
// import React, {useEffect, useState} from 'react';
// import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MonthPicker from 'react-native-month-year-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Report = () => {
//   const navigation = useNavigation();
//   const [showPickerOne, setShowPickerOne] = useState(false);
//   const [showPickerTwo, setShowPickerTwo] = useState(false);

//   const [dateOne, setDateOne] = useState(new Date());
//   const [dateTwo, setDateTwo] = useState(new Date());

//   const [id, setId] = useState(null);

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

//   const onDateChangeOne = selectedDate => {
//     setShowPickerOne(false);
//     if (selectedDate) {
//       setDateOne(selectedDate);
//     }
//   };

//   const onDateChangeTwo = selectedDateTwo => {
//     setShowPickerTwo(false);
//     if (selectedDateTwo) {
//       setDateTwo(selectedDateTwo);
//     }
//   };

//   const handleSearch = () => {
//     if (dateOne || dateTwo) {
//       console.log('Date One:', dateOne);
//       console.log('Date Two:', dateTwo);
//       // Perform the search or API call here
//     } else {
//       console.log('Please select both dates');
//     }
//   };

//   React.useEffect(() => {
//     console.log('Date One Updated:', dateOne);
//     console.log('Date Two Updated:', dateTwo);
//   }, [dateOne, dateTwo]);

//   return (
//     <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.push('parentAttendance')}>
//           <Image
//             source={require('../../assets/images/icons/whiteLeft.png')}
//             style={styles.iconStyle}
//           />
//         </TouchableOpacity>

//         <View style={styles.rightIconsContainer}>
//           <TouchableOpacity
//             style={styles.iconButton}
//             onPress={() => setShowPickerOne(true)}>
//             <MaterialIcons name="date-range" size={33} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.iconButton}
//             onPress={() => setShowPickerTwo(true)}>
//             <MaterialIcons name="date-range" size={33} color="white" />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={handleSearch}>
//             <MaterialIcons name="search" size={33} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showPickerOne && (
//         <MonthPicker
//           onChange={onDateChangeOne}
//           value={dateOne}
//           minimumDate={new Date(2000, 0)}
//           maximumDate={new Date(2025, 11)}
//         />
//       )}

//       {showPickerTwo && (
//         <MonthPicker
//           onChange={onDateChangeTwo}
//           value={dateTwo}
//           minimumDate={new Date(2000, 0)}
//           maximumDate={new Date(2025, 11)}
//         />
//       )}

//       <View>
//         <View style={styles.tableHeader}>
//           <Text style={styles.headerText}>Designation</Text>
//           <Text style={styles.headerText}>Working Days</Text>
//           <Text style={styles.headerText}>Holiday</Text>
//           <Text style={styles.headerText}>Present</Text>
//           <Text style={styles.headerText}>Absent</Text>
//           <Text style={styles.headerText}>Leave</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#9672FB',
//   },
//   iconStyle: {
//     width: 25,
//     height: 25,
//   },
//   rightIconsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 20,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: 'black',
//   },
// });

// export default Report;

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MonthPicker from 'react-native-month-year-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Report = () => {
  const navigation = useNavigation();
  const [showPickerOne, setShowPickerOne] = useState(false);
  const [showPickerTwo, setShowPickerTwo] = useState(false);
  const [dateOne, setDateOne] = useState(new Date());
  const [dateTwo, setDateTwo] = useState(new Date());
  const [id, setId] = useState(null);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        if (userID) {
          setId(userID);
        }
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  const onDateChangeOne = (event, selectedDate) => {
    setShowPickerOne(false);
    if (event === 'dateSetAction' && selectedDate) {
      setDateOne(selectedDate);
    } else {
      console.log('Date selection was cancelled or no date selected.');
    }
  };

  const onDateChangeTwo = (event, selectedDate) => {
    setShowPickerTwo(false);
    if (event === 'dateSetAction' && selectedDate) {
      setDateTwo(selectedDate);
    } else {
      console.log('Date selection was cancelled or no date selected.');
    }
  };

  const handleSearch = async () => {
    if (dateOne && dateTwo) {
      console.log('Date One:', dateOne);
      console.log('Date Two:', dateTwo);
      // Perform the search or API call here
      const data = await fetch(
        `http://192.168.0.190:5000/attendance/attendance_list_multiple_month/${id}`,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({date: dateOne, date2: dateTwo, id}),
        },
      );
      const jsonData = await data.json();
      setInfo(jsonData);
      setLoading(false);
    } else {
      console.log('Please select both dates');
    }
  };

  useEffect(() => {
    if (dateOne) {
      console.log('Date One Updated:', dateOne);
    }
    if (dateTwo) {
      console.log('Date Two Updated:', dateTwo);
    }
  }, [dateOne, dateTwo]);

  console.log(info, 'all');

  return (
    <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.push('parentAttendance')}>
          <Image
            source={require('../../assets/images/icons/whiteLeft.png')}
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <View style={styles.rightIconsContainer}>
          <View style={styles.dateOne}>
            <Text>{dateOne.toString().slice(0, 7)}</Text>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowPickerOne(true)}>
              <MaterialIcons name="date-range" size={33} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.dateTwo}>
            <Text>{dateTwo.toString().slice(0, 7)}</Text>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => setShowPickerTwo(true)}>
              <MaterialIcons name="date-range" size={33} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleSearch}>
            <MaterialIcons name="search" size={33} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {showPickerOne && (
        <MonthPicker
          onChange={(event, selectedDate) =>
            onDateChangeOne(event, selectedDate)
          }
          value={dateOne}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date(2025, 11)}
        />
      )}

      {showPickerTwo && (
        <MonthPicker
          onChange={(event, selectedDate) =>
            onDateChangeTwo(event, selectedDate)
          }
          value={dateTwo}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date(2025, 11)}
        />
      )}

      <View>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Designation</Text>
          <Text style={styles.headerText}>Working Days</Text>
          <Text style={styles.headerText}>Holiday</Text>
          <Text style={styles.headerText}>Present</Text>
          <Text style={styles.headerText}>Absent</Text>
          <Text style={styles.headerText}>Leave</Text>
        </View>

        {info && info.length > 0 ? (
          info.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.rowText}>{item.designation_name}</Text>
              <Text style={styles.rowText}>{item.working_days}</Text>
              <Text style={styles.rowText}>{item.total_holiday}</Text>
              <Text style={styles.rowText}>{item.present}</Text>
              <Text style={styles.rowText}>{item.absent}</Text>
              <Text style={styles.rowText}>{item.total_leave}</Text>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No data available</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#9672FB',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  rowText: {
    fontSize: 14,
    color: 'black',
    flex: 1, // Or use a fixed width like width: '16%'
    textAlign: 'center', // Center align the text
  },
  emptyText: {
    fontSize: 16,
    color: '#888888',
  },
  dateOne: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    color:"black"
  },
  dateTwo: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    color: 'black',
  },
});

export default Report;
