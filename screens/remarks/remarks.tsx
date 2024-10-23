import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import {Touchable} from '../../components/touchable';
import {Colors, CommonStyles, Sizes} from '../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Fonts} from '../../constants/styles';
import {Button} from '../../components/button';
import {Modal} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import Reamrks_create from './reamrks_create';
import Remarks_list from './remarks_list';
import {useRoute} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';

const Remarks = ({navigation}) => {
  const route = useRoute();
  const {itemID} = route.params;
  // console.log(itemID, 'item id');
  const [remarks, setTaskName] = useState('');

  const [selectedDatetime, setSelectedDatetime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [mode, setMode] = useState('date');

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

  function taskNameInfo() {
    return (
      <View style={{margin: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Remars</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={remarks}
            onChangeText={setTaskName}
            placeholder="Enter mobile remarks"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

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

  function addButton() {
    return (
      <View style={styles.addButtonOuterCircle}>
        <Touchable
          onPress={() => {
            navigation.push('add_person');
          }}
          style={styles.addButtonInnerCircle}>
          <FontAwesome5 name="user-plus" size={20} color="white" />
        </Touchable>
      </View>
    );
  }

  const handleMobileAllowacneCreate = async () => {
    const postData = {
      remarks_date: selectedDatetime,
      remarks,
      office_visit_id: itemID,

      created_by: userId,
    };

    const res = await fetch(
      `${liveApi}/office_visit/office_visit_remarks_create`,
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

      Alert.alert('inserted successfully..');
    }
  };

  function addTaskButton() {
    return (
      <Button
        buttonText="Create remarks."
        onPress={handleMobileAllowacneCreate}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header header="reamrks" navigation={navigation} />
      {taskNameInfo()}
      {dateAndTime()}
      {addTaskButton()}
      <Remarks_list office_id={itemID} />

      {addButton()}
    </View>
  );
};

export default Remarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButtonOuterCircle: {
    backgroundColor: Colors.primaryColor,
    position: 'absolute',
    bottom: 25.0,
    right: 20.0,
    width: 60.0,
    height: 60.0,
    borderRadius: 30.0,
  },
  addButtonInnerCircle: {
    backgroundColor: Colors.primaryColor,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 4.0,
    width: 60.0,
    height: 60.0,
    borderRadius: 30.0,
    ...CommonStyles.center,
    ...CommonStyles.buttonShadow,
    shadowColor: Colors.blackColor,
    shadowOpacity: 0.25,
  },
  infoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 2.0,
    marginTop: Sizes.fixPadding,
  },
  dialogStyle: {
    backgroundColor: Colors.whiteColor,
    alignSelf: 'center',
    width: '85%',
    borderRadius: Sizes.fixPadding,
    padding: Sizes.fixPadding,
  },

  attachmentIconWrapper: {
    width: 26.0,
    height: 26.0,
    borderRadius: 13.0,
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    ...CommonStyles.center,
  },
  selectedMemberStyle: {
    width: 25.0,
    height: 25.0,
    borderColor: Colors.whiteColor,
    borderWidth: 2.0,
    borderRadius: 13.0,
    backgroundColor: Colors.extraLightGrayColor,
    overflow: 'hidden',
  },
  addIconOuterCircle: {
    backgroundColor: Colors.primaryColor,
    width: 16,
    height: 16,
    borderRadius: 8.0,
  },
  addIconinnerCircle: {
    width: 16.0,
    height: 16.0,
    borderRadius: 8.0,
    ...CommonStyles.center,
    backgroundColor: Colors.primaryColor,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2.0,
    ...CommonStyles.buttonShadow,
    shadowColor: Colors.blackColor,
    shadowOpacity: 0.25,
  },
  calenderDateWrapStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28.0,
    height: 28.0,
    borderRadius: Sizes.fixPadding - 7.0,
  },
  dialogButtonStyle: {
    ...CommonStyles.shadow,
    ...CommonStyles.center,
    borderRadius: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    minWidth: 105,
  },
  dialogButtonWrapper: {
    ...CommonStyles.rowAlignCenter,
    marginHorizontal: Sizes.fixPadding,
    marginVertical: Sizes.fixPadding * 1.5,
    justifyContent: 'flex-end',
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
