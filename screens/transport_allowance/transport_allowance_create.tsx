// import React, {useState} from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Header from '../../components/header';
// import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
// import {Button} from '../../components/button';

// const TransportAllowanceCreate = ({navigation}) => {
//   const [selectedDatetime, setSelectedDatetime] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isDatePickerVisibleTo, setDatePickerVisibilityTo] = useState(false);

//   const [selectedDatetimeTo, setSelectedDatetimeTo] = useState(new Date());
//   const [mode, setMode] = useState('date');
//   const [modeTo, setModeTo] = useState('date');

//   const [traveFrom, setTravelFrom] = useState('');
//   const [traveTo, setTravelTo] = useState('');

//   const [amount, setAmount] = useState('');

//   const [vehicle, setVehicle] = useState('');
//   const [travelKM, setTravelKM] = useState('');

//   // const handleDatetimeChange = (event, date) => {
//   //   if (date) {
//   //     if (mode === 'date') {
//   //       // If date is picked, switch to time picker

//   //       setSelectedDatetime(date);
//   //       setMode('time');
//   //       setDatePickerVisibility(true); // Show time picker
//   //     } else {
//   //       // If time is picked, finalize the date-time selection
//   //       const updatedDateTime = new Date(selectedDatetime);
//   //       updatedDateTime.setHours(date.getHours());
//   //       updatedDateTime.setMinutes(date.getMinutes());
//   //       setSelectedDatetime(updatedDateTime);
//   //       setDatePickerVisibility(false); // Hide picker
//   //     }
//   //   } else {
//   //     setDatePickerVisibility(false); // Hide picker if canceled
//   //   }
//   // };

//   // const handleDatetimeChangeTo = (event, date2) => {
//   //   if (date2) {
//   //     if (modeTo === 'date') {
//   //       // If date is picked, switch to time picker

//   //       setSelectedDatetimeTo(date2);
//   //       setModeTo('time');
//   //       setDatePickerVisibilityTo(true); // Show time picker
//   //     } else {
//   //       // If time is picked, finalize the date-time selection
//   //       const updatedDateTimeTo = new Date(selectedDatetimeTo);
//   //       updatedDateTimeTo.setHours(date2.getHours());
//   //       updatedDateTimeTo.setMinutes(date2.getMinutes());
//   //       setSelectedDatetimeTo(updatedDateTimeTo);
//   //       setDatePickerVisibilityTo(false); // Hide picker
//   //     }
//   //   } else {
//   //     setDatePickerVisibilityTo(false); // Hide picker if canceled
//   //   }
//   // };

//   // const showDateTimePicker = () => {
//   //   setMode('date');
//   //   setDatePickerVisibility(true);
//   // };

//   // const showDateTimePickerTo = () => {
//   //   setModeTo('date');
//   //   setDatePickerVisibilityTo(true);
//   // };

//   const handleDatetimeChange = date => {
//     if (date) {
//       if (mode === 'date') {
//         // If date is picked, switch to time picker
//         setSelectedDatetime(date);
//         setMode('time');
//         setDatePickerVisibility(true); // Show time picker
//       } else {
//         // If time is picked, finalize the date-time selection
//         const updatedDateTime = new Date(selectedDatetime);
//         updatedDateTime.setHours(date.getHours());
//         updatedDateTime.setMinutes(date.getMinutes());
//         setSelectedDatetime(updatedDateTime);
//         setDatePickerVisibility(false); // Hide picker
//         setMode('date'); // Reset mode
//       }
//     } else {
//       setDatePickerVisibility(false); // Hide picker if canceled
//     }
//   };

//   const handleDatetimeChangeTo = date => {
//     if (date) {
//       if (modeTo === 'date') {
//         // If date is picked, switch to time picker
//         setSelectedDatetimeTo(date);
//         setModeTo('time');
//         setDatePickerVisibilityTo(true); // Show time picker
//       } else {
//         // If time is picked, finalize the date-time selection
//         const updatedDateTimeTo = new Date(selectedDatetimeTo);
//         updatedDateTimeTo.setHours(date.getHours());
//         updatedDateTimeTo.setMinutes(date.getMinutes());
//         setSelectedDatetimeTo(updatedDateTimeTo);
//         setDatePickerVisibilityTo(false); // Hide picker
//         setModeTo('date'); // Reset mode
//       }
//     } else {
//       setDatePickerVisibilityTo(false); // Hide picker if canceled
//     }
//   };

//   const showDateTimePicker = () => {
//     setMode('date');
//     setDatePickerVisibility(true);
//   };

//   const showDateTimePickerTo = () => {
//     setModeTo('date');
//     setDatePickerVisibilityTo(true);
//   };

//   const showMode = currentMode => {
//     setMode(currentMode);
//     setDatePickerVisibility(true);
//   };

//   const handleTransportAllowacneCreate = async () => {
//     const postData = {
//       travel_from: traveFrom,
//       travel_from_time: selectedDatetime,
//       travel_to: traveTo,
//       travel_to_time: selectedDatetimeTo,
//       vehicle_name: vehicle,
//       km_travel: travelKM,
//       amount: amount,
//       created_by: 1,
//     };

//     const res = await fetch(
//       'http://192.168.0.195:5000/transport_allowance/transport_allowance_create',
//       {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(postData),
//       },
//     );
//     if (res.ok === true) {
//       // Handle successful login

//       navigation.push('transport_allowance');
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
//       <Header header="Transport Allowance Create" navigation={navigation} />
//       <View style={{flex: 1}}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           automaticallyAdjustKeyboardInsets={true}>
//           {travel_from()}
//           {dateAndTime()}
//           {travel_to()}
//           {dateAndTimeTo()}
//           {vehicle_name()}
//           {travel_km()}
//           {amountInfo()}
//         </ScrollView>
//       </View>
//       {addTaskButton()}
//     </View>
//   );

//   function dateAndTime() {
//     return (
//       <View style={styles.datePickerContainer}>
//         <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
//           <Text style={styles.buttonText}>
//             {selectedDatetime.toLocaleString()}
//           </Text>
//         </TouchableOpacity>
//         {isDatePickerVisible && (
//           <DateTimePicker
//             isVisible={isDatePickerVisible}
//             mode={mode}
//             onConfirm={handleDatetimeChange}
//             onCancel={() => setDatePickerVisibility(false)}
//           />
//         )}
//       </View>
//     );
//   }

//   function dateAndTimeTo() {
//     return (
//       <View style={styles.datePickerContainer}>
//         <TouchableOpacity style={styles.button} onPress={showDateTimePickerTo}>
//           <Text style={styles.buttonText}>
//             {selectedDatetimeTo.toLocaleString()}
//           </Text>
//         </TouchableOpacity>
//         {isDatePickerVisibleTo && (
//           <DateTimePicker
//             isVisible={isDatePickerVisibleTo}
//             mode={modeTo}
//             onConfirm={handleDatetimeChangeTo}
//             onCancel={() => setDatePickerVisibilityTo(false)}
//           />
//         )}
//       </View>
//     );
//   }

//   function addTaskButton() {
//     return (
//       <Button
//         buttonText="Create Transport Allowance"
//         onPress={handleTransportAllowacneCreate}
//       />
//     );
//   }

//   function amountInfo() {
//     return (
//       <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Amount</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={amount}
//             onChangeText={setAmount}
//             placeholder="Enter  amount"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function travel_from() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Travel From</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={traveFrom}
//             onChangeText={setTravelFrom}
//             placeholder="Enter travel from address"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function travel_to() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Travel to</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={traveTo}
//             onChangeText={setTravelTo}
//             placeholder="Enter travel to address"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function vehicle_name() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Vehicle</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={vehicle}
//             onChangeText={setVehicle}
//             placeholder="Enter vehicle name"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function travel_km() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Travel (km)</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={travelKM}
//             onChangeText={setTravelKM}
//             placeholder="Enter km"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }
// };

// export default TransportAllowanceCreate;

// const styles = StyleSheet.create({
//   infoBox: {
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding,
//     ...CommonStyles.shadow,
//     padding: Sizes.fixPadding + 2.0,
//     marginTop: Sizes.fixPadding,
//   },
//   datePickerContainer: {
//     margin: Sizes.fixPadding * 2.0,
//   },
//   selectedDateText: {
//     marginTop: Sizes.fixPadding,
//     ...Fonts.blackColor15Medium,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: Colors.primaryColor,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/header';
import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
import {Button} from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';

const TransportAllowanceCreate = ({navigation}) => {
  const [selectedDatetime, setSelectedDatetime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDatetimeTo, setSelectedDatetimeTo] = useState(new Date());
  const [isDatePickerVisibleTo, setDatePickerVisibilityTo] = useState(false);
  const [mode, setMode] = useState('date');
  const [modeTo, setModeTo] = useState('date');

  const [travelFrom, setTravelFrom] = useState('');
  const [travelTo, setTravelTo] = useState('');
  const [amount, setAmount] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [travelKM, setTravelKM] = useState('');

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setUserId(userId);

        console.log(userId, 'trans..');
      } catch (error) {
        console.error('Error retrieving userId:', error);
      }
    };
    fetchUserId();
  }, []);

  const handleDatetimeChange = (event, date) => {
    if (date) {
      if (mode === 'date') {
        setSelectedDatetime(date);
        setMode('time');
        setDatePickerVisibility(true);
      } else {
        const updatedDateTime = new Date(selectedDatetime);
        updatedDateTime.setHours(date.getHours());
        updatedDateTime.setMinutes(date.getMinutes());
        setSelectedDatetime(updatedDateTime);
        setDatePickerVisibility(false);
        setMode('date');
      }
    } else {
      setDatePickerVisibility(false);
    }
  };

  const handleDatetimeChangeTo = (event, date) => {
    if (date) {
      if (modeTo === 'date') {
        setSelectedDatetimeTo(date);
        setModeTo('time');
        setDatePickerVisibilityTo(true);
      } else {
        const updatedDateTimeTo = new Date(selectedDatetimeTo);
        updatedDateTimeTo.setHours(date.getHours());
        updatedDateTimeTo.setMinutes(date.getMinutes());
        setSelectedDatetimeTo(updatedDateTimeTo);
        setDatePickerVisibilityTo(false);
        setModeTo('date');
      }
    } else {
      setDatePickerVisibilityTo(false);
    }
  };

  const showDateTimePicker = () => {
    setMode('date');
    setDatePickerVisibility(true);
  };

  const showDateTimePickerTo = () => {
    setModeTo('date');
    setDatePickerVisibilityTo(true);
  };

  const handleTransportAllowacneCreate = async () => {
    const postData = {
      travel_from: travelFrom,
      travel_from_time: selectedDatetime,
      travel_to: travelTo,
      travel_to_time: selectedDatetimeTo,
      vehicle_name: vehicle,
      km_travel: travelKM,
      amount: amount,
      created_by: userId,
      user_id: userId,
    };

    const res = await fetch(
      `http://192.168.0.190:5000/transport_allowance/transport_allowance_create`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      },
    );

    if (res.ok === true) {
      navigation.push('transport_allowance');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Transport Allowance Create" navigation={navigation} />
      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}>
          {travel_from()}
          {dateAndTime()}
          {travel_to()}
          {dateAndTimeTo()}
          {vehicle_name()}
          {travel_km()}
          {amountInfo()}
        </ScrollView>
      </View>
      {addTaskButton()}
    </View>
  );

  function dateAndTime() {
    return (
      <View style={styles.datePickerContainer}>
        <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
          <Text style={styles.buttonText}>
            {selectedDatetime.toLocaleString()}
          </Text>
        </TouchableOpacity>
        {isDatePickerVisible && (
          <DateTimePicker
            value={selectedDatetime}
            mode={mode}
            display="default"
            onChange={handleDatetimeChange}
          />
        )}
      </View>
    );
  }

  function dateAndTimeTo() {
    return (
      <View style={styles.datePickerContainer}>
        <TouchableOpacity style={styles.button} onPress={showDateTimePickerTo}>
          <Text style={styles.buttonText}>
            {selectedDatetimeTo.toLocaleString()}
          </Text>
        </TouchableOpacity>
        {isDatePickerVisibleTo && (
          <DateTimePicker
            value={selectedDatetimeTo}
            mode={modeTo}
            display="default"
            onChange={handleDatetimeChangeTo}
          />
        )}
      </View>
    );
  }

  function addTaskButton() {
    return (
      <Button
        buttonText="Create Transport Allowance"
        onPress={handleTransportAllowacneCreate}
      />
    );
  }

  function amountInfo() {
    return (
      <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Amount</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function travel_from() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Travel From</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={travelFrom}
            onChangeText={setTravelFrom}
            placeholder="Enter travel from address"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function travel_to() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Travel To</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={travelTo}
            onChangeText={setTravelTo}
            placeholder="Enter travel to address"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function vehicle_name() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Vehicle</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={vehicle}
            onChangeText={setVehicle}
            placeholder="Enter vehicle name"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function travel_km() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Travel (km)</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={travelKM}
            onChangeText={setTravelKM}
            placeholder="Enter km"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }
};

export default TransportAllowanceCreate;

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 2.0,
    marginTop: Sizes.fixPadding,
  },
  datePickerContainer: {
    margin: Sizes.fixPadding * 2.0,
  },
  selectedDateText: {
    marginTop: Sizes.fixPadding,
    ...Fonts.blackColor15Medium,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.primaryColor,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
