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

const MobileAllowanceCreate = ({navigation}) => {
  const [selectedDatetime, setSelectedDatetime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState('date');

  const [mobile, setTaskName] = useState('');
  const [amount, setProjectName] = useState('');
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

  const handleDatetimeChange = (event, date) => {
    if (date) {
      if (mode === 'date') {
        // If date is picked, switch to time picker

        setSelectedDatetime(date);
        setMode('time');
        setDatePickerVisibility(true); // Show time picker
      } else {
        // If time is picked, finalize the date-time selection
        const updatedDateTime = new Date(selectedDatetime);
        updatedDateTime.setHours(date.getHours());
        updatedDateTime.setMinutes(date.getMinutes());
        setSelectedDatetime(updatedDateTime);
        setDatePickerVisibility(false); // Hide picker
      }
    } else {
      setDatePickerVisibility(false); // Hide picker if canceled
    }
  };

  const showDateTimePicker = () => {
    setMode('date');
    setDatePickerVisibility(true);
  };

  const showMode = currentMode => {
    setMode(currentMode);
    setDatePickerVisibility(true);
  };

  const handleMobileAllowacneCreate = async () => {
    const postData = {
      recharge_time: selectedDatetime,
      mobile,
      amount,
      recharge_user: userId,
      created_by: userId,
    };

    const res = await fetch(
      `http://192.168.0.190:5000/mobile_allowance/mobile_allowance_create`,
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

      navigation.push('mobile_allowance');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Mobile Allowance Create" navigation={navigation} />
      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}>
          {taskNameInfo()}
          {projectNameInfo()}
          {dateAndTime()}
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

  function addTaskButton() {
    return (
      <Button
        buttonText="Create Mobile Allowance"
        onPress={handleMobileAllowacneCreate}
      />
    );
  }

  function projectNameInfo() {
    return (
      <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Recharge Amount</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={amount}
            onChangeText={setProjectName}
            placeholder="Enter recharge amount"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function taskNameInfo() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Mobile Number</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={mobile}
            onChangeText={setTaskName}
            placeholder="Enter mobile number"
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

export default MobileAllowanceCreate;

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








































































// import React, {useState, useEffect} from 'react';
// import {View, Button, StyleSheet} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';

// const HeaderAttendance = ({selectedValue, setSelectedValue}) => {
//   const [dateFromAttendance, setDateFromAttendance] = useState([]);

//   useEffect(() => {
//     const generateMonthOptions = () => {
//       const currentDate = new Date();
//       const currentYear = currentDate.getFullYear();
//       const currentMonth = currentDate.getMonth();

//       const months = [];
//       const monthNames = [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec',
//       ];

//       for (let year = 2024; year <= currentYear; year++) {
//         const endMonth = year === currentYear ? currentMonth : 11;
//         for (let month = 0; month <= endMonth; month++) {
//           const monthLabel = `${monthNames[month]} ${year}`;
//           const monthValue = `${year}-${String(month + 1).padStart(2, '0')}`;
//           months.push({label: monthLabel, value: monthValue});
//         }
//       }

//       setDateFromAttendance(months);
//       setSelectedValue(
//         `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}`,
//       );
//     };

//     generateMonthOptions();
//   }, [setSelectedValue]);

//   return (
//     <View style={styles.headerContainer}>
//       <Dropdown
//         style={styles.dropdown}
//         data={dateFromAttendance}
//         labelField="label"
//         valueField="value"
//         placeholder="Select month"
//         value={selectedValue}
//         onChange={item => setSelectedValue(item.value)}
//       />
//       <Button title="Pick Date" onPress={() => console.log('Button Pressed')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     flexDirection: 'row', // Align items horizontally
//     alignItems: 'center', // Center vertically
//     padding: 10,
//   },
//   dropdown: {
//     width: 150,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     padding: 8,
//     marginRight: 10, // Space between dropdown and button
//   },
// });

// export default HeaderAttendance;





