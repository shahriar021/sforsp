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

// const office_visit_create = ({navigation}) => {
//   const [selectedDatetime, setSelectedDatetime] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [mode, setMode] = useState('date');

//   const [mobile, setTaskName] = useState('');
//   const [amount, setProjectName] = useState('');

//   const handleDatetimeChange = (event, date) => {
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
//       }
//     } else {
//       setDatePickerVisibility(false); // Hide picker if canceled
//     }
//   };

//   const showDateTimePicker = () => {
//     setMode('date');
//     setDatePickerVisibility(true);
//   };

//   const showMode = currentMode => {
//     setMode(currentMode);
//     setDatePickerVisibility(true);
//   };

//   const handleOfficeVisitCreate = async () => {
//     const postData = {
//       recharge_time: selectedDatetime,
//       mobile,
//       amount,
//       recharge_user: 1,
//       created_by: 1,
//     };

//     const res = await fetch(
//       'http://192.168.0.195:5000/office_visit/offce_visit_all_create',
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

//       navigation.push('office_visit');
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
//       <Header header="Mobile Allowance Create" navigation={navigation} />
//       <View style={{flex: 1}}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           automaticallyAdjustKeyboardInsets={true}>
//           {officeName()}
//           {officeAddress()}
//           {officeMobile()}
//           {officeEmail()}
//           {addOfficeDate()}
//           {remarks()}
//           {remarksDate()}
//           {personName()}
//           {personMobile()}
//           {personEmail()}
//           {addPersonDate()}
//         </ScrollView>
//       </View>
//       {addTaskButton()}
//     </View>
//   );

//   function addOfficeDate() {
//     return (
//       <View style={styles.datePickerContainer}>
//         <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
//           <Text style={styles.buttonText}>
//             {selectedDatetime.toLocaleString()}
//           </Text>
//         </TouchableOpacity>
//         {isDatePickerVisible && (
//           <DateTimePicker
//             value={selectedDatetime}
//             mode={mode}
//             display="default"
//             onChange={handleDatetimeChange}
//           />
//         )}
//       </View>
//     );
//   }

//   function addTaskButton() {
//     return (
//       <Button
//         buttonText="Create Mobile Allowance"
//         onPress={handleOfficeVisitCreate}
//       />
//     );
//   }

//   function officeMobile() {
//     return (
//       <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Recharge Amount</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={amount}
//             onChangeText={setProjectName}
//             placeholder="Enter recharge amount"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function officeEmail() {
//     return (
//       <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Recharge Amount</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={amount}
//             onChangeText={setProjectName}
//             placeholder="Enter recharge amount"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function officeAddress() {
//     return (
//       <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Recharge Amount</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={amount}
//             onChangeText={setProjectName}
//             placeholder="Enter recharge amount"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function officeName() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Mobile Number</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={mobile}
//             onChangeText={setTaskName}
//             placeholder="Enter mobile number"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function remarks() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Mobile Number</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={mobile}
//             onChangeText={setTaskName}
//             placeholder="Enter mobile number"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function remarksDate() {
//     return (
//       <View style={styles.datePickerContainer}>
//         <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
//           <Text style={styles.buttonText}>
//             {selectedDatetime.toLocaleString()}
//           </Text>
//         </TouchableOpacity>
//         {isDatePickerVisible && (
//           <DateTimePicker
//             value={selectedDatetime}
//             mode={mode}
//             display="default"
//             onChange={handleDatetimeChange}
//           />
//         )}
//       </View>
//     );
//   }

//   function personName() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Mobile Number</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={mobile}
//             onChangeText={setTaskName}
//             placeholder="Enter mobile number"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function personMobile() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Mobile Number</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={mobile}
//             onChangeText={setTaskName}
//             placeholder="Enter mobile number"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function personEmail() {
//     return (
//       <View style={{margin: Sizes.fixPadding * 2.0}}>
//         <Text style={{...Fonts.blackColor16Medium}}>Mobile Number</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={mobile}
//             onChangeText={setTaskName}
//             placeholder="Enter mobile number"
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function addPersonDate() {
//     return (
//       <View style={styles.datePickerContainer}>
//         <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
//           <Text style={styles.buttonText}>
//             {selectedDatetime.toLocaleString()}
//           </Text>
//         </TouchableOpacity>
//         {isDatePickerVisible && (
//           <DateTimePicker
//             value={selectedDatetime}
//             mode={mode}
//             display="default"
//             onChange={handleDatetimeChange}
//           />
//         )}
//       </View>
//     );
//   }
// };

// export default office_visit_create;

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

// ---------------------------------------

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

// const OfficeVisitCreate = ({navigation}) => {
//   const [officeName, setOfficeName] = useState('');
//   const [officeAddress, setOfficeAddress] = useState('');
//   const [officeMobile, setOfficeMobile] = useState('');
//   const [officeEmail, setOfficeEmail] = useState('');
//   const [addOfficeDate, setAddOfficeDate] = useState(new Date());
//   const [createdBy, setCreatedBy] = useState('');
//   const [remarks, setRemarks] = useState('');
//   const [remarksDate, setRemarksDate] = useState(new Date());
//   const [personName, setPersonName] = useState('');
//   const [personMobile, setPersonMobile] = useState('');
//   const [personEmail, setPersonEmail] = useState('');
//   const [addPersonDate, setAddPersonDate] = useState(new Date());

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [currentDateType, setCurrentDateType] = useState('');

//   const handleDatetimeChange = (event, selectedDate) => {
//     if (selectedDate) {
//       setDatePickerVisibility(false);
//       switch (currentDateType) {
//         case 'addOfficeDate':
//           setAddOfficeDate(selectedDate);
//           break;
//         case 'remarksDate':
//           setRemarksDate(selectedDate);
//           break;
//         case 'addPersonDate':
//           setAddPersonDate(selectedDate);
//           break;
//       }
//     } else {
//       setDatePickerVisibility(false);
//     }
//   };

//   const showDateTimePicker = dateType => {
//     setCurrentDateType(dateType);
//     setDatePickerVisibility(true);
//   };

//   const handleOfficeVisitCreate = async () => {
//     const postData = {
//       office_name: officeName,
//       office_address: officeAddress,
//       office_mobile: officeMobile,
//       office_email: officeEmail,
//       add_office_date: addOfficeDate,
//       created_by: 1,
//       remarks: remarks,
//       remarks_date: remarksDate,
//       person_name: personName,
//       person_mobile: personMobile,
//       person_email: personEmail,
//       add_person_date: addPersonDate,
//     };

//     const res = await fetch(
//       'http://192.168.0.195:5000/office_visit/offce_visit_all_create',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(postData),
//       },
//     );

//     if (res.ok) {
//       navigation.push('office_visit');
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
//       <Header header="Office Visit Create" navigation={navigation} />
//       <View style={{flex: 1}}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {renderInputField(
//             'Office Name',
//             officeName,
//             setOfficeName,
//             'Enter office name',
//           )}
//           {renderInputField(
//             'Office Address',
//             officeAddress,
//             setOfficeAddress,
//             'Enter office address',
//           )}
//           {renderInputField(
//             'Office Mobile',
//             officeMobile,
//             setOfficeMobile,
//             'Enter office mobile',
//           )}
//           {renderInputField(
//             'Office Email',
//             officeEmail,
//             setOfficeEmail,
//             'Enter office email',
//           )}
//           {renderDatePicker('Add Office Date', addOfficeDate, () =>
//             showDateTimePicker('addOfficeDate'),
//           )}

//           {renderInputField('Remarks', remarks, setRemarks, 'Enter remarks')}
//           {renderDatePicker('Remarks Date', remarksDate, () =>
//             showDateTimePicker('remarksDate'),
//           )}
//           {renderInputField(
//             'Person Name',
//             personName,
//             setPersonName,
//             'Enter person name',
//           )}
//           {renderInputField(
//             'Person Mobile',
//             personMobile,
//             setPersonMobile,
//             'Enter person mobile',
//           )}
//           {renderInputField(
//             'Person Email',
//             personEmail,
//             setPersonEmail,
//             'Enter person email',
//           )}
//           {renderDatePicker('Add Person Date', addPersonDate, () =>
//             showDateTimePicker('addPersonDate'),
//           )}
//         </ScrollView>
//       </View>
//       <Button
//         buttonText="Create Office Visit"
//         onPress={handleOfficeVisitCreate}
//       />
//       {isDatePickerVisible && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDatetimeChange}
//         />
//       )}
//     </View>
//   );

//   function renderInputField(label, value, setValue, placeholder) {
//     return (
//       <View
//         style={{
//           marginHorizontal: Sizes.fixPadding * 2.0,
//           marginTop: Sizes.fixPadding,
//         }}>
//         <Text style={{...Fonts.blackColor16Medium}}>{label}</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={value}
//             onChangeText={setValue}
//             placeholder={placeholder}
//             placeholderTextColor={Colors.grayColor}
//             style={{...Fonts.blackColor15Medium, padding: 0}}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function renderDatePicker(label, date, onPress) {
//     return (
//       <View
//         style={{
//           marginHorizontal: Sizes.fixPadding * 2.0,
//           marginTop: Sizes.fixPadding,
//         }}>
//         <Text style={{...Fonts.blackColor16Medium}}>{label}</Text>
//         <TouchableOpacity style={styles.button} onPress={onPress}>
//           <Text style={styles.buttonText}>{date.toLocaleString()}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// };

// export default OfficeVisitCreate;

// const styles = StyleSheet.create({
//   infoBox: {
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding,
//     ...CommonStyles.shadow,
//     padding: Sizes.fixPadding + 2.0,
//     marginTop: Sizes.fixPadding,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: Colors.primaryColor,
//     alignItems: 'center',
//     marginTop: Sizes.fixPadding,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// --------------------------------------

// import React, { useState } from 'react';
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
// import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles';
// import { Button } from '../../components/button';

// const OfficeVisitCreate = ({ navigation }) => {
//   const [officeName, setOfficeName] = useState('');
//   const [officeAddress, setOfficeAddress] = useState('');
//   const [officeMobile, setOfficeMobile] = useState('');
//   const [officeEmail, setOfficeEmail] = useState('');
//   const [addOfficeDate, setAddOfficeDate] = useState(new Date());
//   const [createdBy, setCreatedBy] = useState('');
//   const [remarks, setRemarks] = useState('');
//   const [remarksDate, setRemarksDate] = useState(new Date());
//   const [personName, setPersonName] = useState('');
//   const [personMobile, setPersonMobile] = useState('');
//   const [personEmail, setPersonEmail] = useState('');
//   const [addPersonDate, setAddPersonDate] = useState(new Date());

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [currentDateType, setCurrentDateType] = useState('');
//   const [mode, setMode] = useState('date');

//   const handleDatetimeChange = (event, selectedDate) => {
//     if (selectedDate) {
//       if (mode === 'date') {
//         setMode('time');
//         setDatePickerVisibility(true);
//         switch (currentDateType) {
//           case 'addOfficeDate':
//             setAddOfficeDate(selectedDate);
//             break;
//           case 'remarksDate':
//             setRemarksDate(selectedDate);
//             break;
//           case 'addPersonDate':
//             setAddPersonDate(selectedDate);
//             break;
//         }
//       } else {
//         setDatePickerVisibility(false);
//         const currentDate = new Date(
//           currentDateType === 'addOfficeDate' ? addOfficeDate :
//           currentDateType === 'remarksDate' ? remarksDate :
//           addPersonDate
//         );
//         currentDate.setHours(selectedDate.getHours());
//         currentDate.setMinutes(selectedDate.getMinutes());
//         switch (currentDateType) {
//           case 'addOfficeDate':
//             setAddOfficeDate(currentDate);
//             break;
//           case 'remarksDate':
//             setRemarksDate(currentDate);
//             break;
//           case 'addPersonDate':
//             setAddPersonDate(currentDate);
//             break;
//         }
//         setMode('date');
//       }
//     } else {
//       setDatePickerVisibility(false);
//     }
//   };

//   const showDateTimePicker = dateType => {
//     setCurrentDateType(dateType);
//     setDatePickerVisibility(true);
//   };

//   const handleOfficeVisitCreate = async () => {
//     const postData = {
//       office_name: officeName,
//       office_address: officeAddress,
//       office_mobile: officeMobile,
//       office_email: officeEmail,
//       add_office_date: addOfficeDate,
//       created_by: 1,
//       remarks: remarks,
//       remarks_date: remarksDate,
//       person_name: personName,
//       person_mobile: personMobile,
//       person_email: personEmail,
//       add_person_date: addPersonDate,
//     };

//     const res = await fetch(
//       'http://192.168.0.195:5000/office_visit/offce_visit_all_create',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(postData),
//       },
//     );

//     if (res.ok) {
//       navigation.push('office_visit');
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
//       <Header header="Office Visit Create" navigation={navigation} />
//       <View style={{ flex: 1 }}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {renderInputField('Office Name', officeName, setOfficeName, 'Enter office name')}
//           {renderInputField('Office Address', officeAddress, setOfficeAddress, 'Enter office address')}
//           {renderInputField('Office Mobile', officeMobile, setOfficeMobile, 'Enter office mobile')}
//           {renderInputField('Office Email', officeEmail, setOfficeEmail, 'Enter office email')}
//           {renderDatePicker('Add Office Date', addOfficeDate, () => showDateTimePicker('addOfficeDate'))}
//           {renderInputField('Remarks', remarks, setRemarks, 'Enter remarks')}
//           {renderDatePicker('Remarks Date', remarksDate, () => showDateTimePicker('remarksDate'))}
//           {renderInputField('Person Name', personName, setPersonName, 'Enter person name')}
//           {renderInputField('Person Mobile', personMobile, setPersonMobile, 'Enter person mobile')}
//           {renderInputField('Person Email', personEmail, setPersonEmail, 'Enter person email')}
//           {renderDatePicker('Add Person Date', addPersonDate, () => showDateTimePicker('addPersonDate'))}
//         </ScrollView>
//       </View>
//       <Button buttonText="Create Office Visit" onPress={handleOfficeVisitCreate} />
//       {isDatePickerVisible && (
//         <DateTimePicker
//           value={currentDateType === 'addOfficeDate' ? addOfficeDate : currentDateType === 'remarksDate' ? remarksDate : addPersonDate}
//           mode={mode}
//           display="default"
//           onChange={handleDatetimeChange}
//         />
//       )}
//     </View>
//   );

//   function renderInputField(label, value, setValue, placeholder) {
//     return (
//       <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding }}>
//         <Text style={{ ...Fonts.blackColor16Medium }}>{label}</Text>
//         <View style={styles.infoBox}>
//           <TextInput
//             value={value}
//             onChangeText={setValue}
//             placeholder={placeholder}
//             placeholderTextColor={Colors.grayColor}
//             style={{ ...Fonts.blackColor15Medium, padding: 0 }}
//             cursorColor={Colors.primaryColor}
//             selectionColor={Colors.primaryColor}
//           />
//         </View>
//       </View>
//     );
//   }

//   function renderDatePicker(label, date, onPress) {
//     return (
//       <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding }}>
//         <Text style={{ ...Fonts.blackColor16Medium }}>{label}</Text>
//         <TouchableOpacity style={styles.button} onPress={onPress}>
//           <Text style={styles.buttonText}>{date.toLocaleString()}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// };

// export default OfficeVisitCreate;

// const styles = StyleSheet.create({
//   infoBox: {
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding,
//     ...CommonStyles.shadow,
//     padding: Sizes.fixPadding + 2.0,
//     marginTop: Sizes.fixPadding,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: Colors.primaryColor,
//     alignItems: 'center',
//     marginTop: Sizes.fixPadding,
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

const OfficeVisitCreate = ({navigation}) => {
  const [officeName, setOfficeName] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [officeMobile, setOfficeMobile] = useState('');
  const [officeEmail, setOfficeEmail] = useState('');
  const [addOfficeDate, setAddOfficeDate] = useState(new Date());
  const [createdBy, setCreatedBy] = useState('');
  const [remarks, setRemarks] = useState('');
  const [remarksDate, setRemarksDate] = useState(new Date());
  const [personName, setPersonName] = useState('');
  const [personMobile, setPersonMobile] = useState('');
  const [personEmail, setPersonEmail] = useState('');
  const [addPersonDate, setAddPersonDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentDateType, setCurrentDateType] = useState('');
  const [mode, setMode] = useState('date');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setUserId(userId);

        console.log(userId, 'office');
      } catch (error) {
        console.error('Error retrieving userId:', error);
      }
    };
    fetchUserId();
  }, []);

  const handleDatetimeChange = (event, selectedDate) => {
    if (selectedDate) {
      if (mode === 'date') {
        setSelectedDate(selectedDate);
        setMode('time');
        setDatePickerVisibility(true);
      } else {
        setDatePickerVisibility(false);
        const updatedDate = new Date(selectedDate);
        updatedDate.setHours(selectedDate.getHours());
        updatedDate.setMinutes(selectedDate.getMinutes());
        switch (currentDateType) {
          case 'addOfficeDate':
            setAddOfficeDate(updatedDate);
            break;
          case 'remarksDate':
            setRemarksDate(updatedDate);
            break;
          case 'addPersonDate':
            setAddPersonDate(updatedDate);
            break;
        }
        setMode('date');
      }
    } else {
      setDatePickerVisibility(false);
      setMode('date');
    }
  };

  const showDateTimePicker = dateType => {
    setCurrentDateType(dateType);
    setDatePickerVisibility(true);
    setMode('date');
  };

  const handleOfficeVisitCreate = async () => {
    const postData = {
      office_name: officeName,
      office_address: officeAddress,
      office_mobile: officeMobile,
      office_email: officeEmail,
      add_office_date: addOfficeDate,
      created_by: userId,
      remarks: remarks,
      remarks_date: remarksDate,
      person_name: personName,
      person_mobile: personMobile,
      person_email: personEmail,
      add_person_date: addPersonDate,
      user_id: userId,
    };

    console.log(userId, 'user id ...');

    const res = await fetch(`${liveApi}/office_visit/offce_visit_all_create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (res.ok) {
      navigation.push('office_visit');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Office Visit Create" navigation={navigation} />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderInputField(
            'Office Name',
            officeName,
            setOfficeName,
            'Enter office name',
          )}
          {renderInputField(
            'Office Address',
            officeAddress,
            setOfficeAddress,
            'Enter office address',
          )}
          {renderInputField(
            'Office Mobile',
            officeMobile,
            setOfficeMobile,
            'Enter office mobile',
          )}
          {renderInputField(
            'Office Email',
            officeEmail,
            setOfficeEmail,
            'Enter office email',
          )}
          {renderDatePicker('Add Office Date', addOfficeDate, () =>
            showDateTimePicker('addOfficeDate'),
          )}
          {renderInputField('Remarks', remarks, setRemarks, 'Enter remarks')}
          {renderDatePicker('Remarks Date', remarksDate, () =>
            showDateTimePicker('remarksDate'),
          )}
          {renderInputField(
            'Person Name',
            personName,
            setPersonName,
            'Enter person name',
          )}
          {renderInputField(
            'Person Mobile',
            personMobile,
            setPersonMobile,
            'Enter person mobile',
          )}
          {renderInputField(
            'Person Email',
            personEmail,
            setPersonEmail,
            'Enter person email',
          )}
          {renderDatePicker('Add Person Date', addPersonDate, () =>
            showDateTimePicker('addPersonDate'),
          )}
        </ScrollView>
      </View>
      <Button
        buttonText="Create Office Visit"
        onPress={handleOfficeVisitCreate}
      />
      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate}
          mode={mode}
          display="default"
          onChange={handleDatetimeChange}
        />
      )}
    </View>
  );

  function renderInputField(label, value, setValue, placeholder) {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding,
        }}>
        <Text style={{...Fonts.blackColor16Medium}}>{label}</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function renderDatePicker(label, date, onPress) {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding,
        }}>
        <Text style={{...Fonts.blackColor16Medium}}>{label}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{date.toLocaleString()}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default OfficeVisitCreate;

const styles = StyleSheet.create({
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
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    marginTop: Sizes.fixPadding,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
