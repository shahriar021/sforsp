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
import {Colors, CommonStyles, Sizes, Fonts} from '../../constants/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Button} from '../../components/button';
import Add_person_list from './add_person_list';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi} from '../../constants/server_api';

const Add_person = ({navigation}) => {
  const route = useRoute();
  const {itemID} = route.params;
  console.log(itemID, 'item id in add_person...');
  const [personName, setPersonName] = useState('');
  const [personMobile, setPersonMobile] = useState('');
  const [personEmail, setPersonEmail] = useState('');

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

  function addButton() {
    return (
      <View style={styles.addButtonOuterCircle}>
        <Touchable
          onPress={() => {
            navigation.push('remarks');
          }}
          style={styles.addButtonInnerCircle}>
          <MaterialIcons name="maps-ugc" size={33} color={Colors.whiteColor} />
        </Touchable>
      </View>
    );
  }

  const handleMobileAllowacneCreate = async () => {
    const postData = {
      add_person_date: selectedDatetime,
      person_name: personName,
      person_mobile: personMobile,
      person_email: personEmail,
      office_visit_id: itemID,

      created_by: userId,
    };

    const res = await fetch(
      `${liveApi}/office_visit/office_visit_person_create`,
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
        buttonText="Create person."
        onPress={handleMobileAllowacneCreate}
      />
    );
  }

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
      <View style={{margin: 5 * 1.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Person Name</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={personName}
            onChangeText={setPersonName}
            placeholder="Enter Person Name"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function personEmailInfo() {
    return (
      <View style={{margin: 5 * 1.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Person Email</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={personEmail}
            onChangeText={setPersonEmail}
            placeholder="Enter Person Email"
            placeholderTextColor={Colors.grayColor}
            style={{...Fonts.blackColor15Medium, padding: 0}}
            cursorColor={Colors.primaryColor}
            selectionColor={Colors.primaryColor}
          />
        </View>
      </View>
    );
  }

  function personMobileInfo() {
    return (
      <View style={{margin: 5 * 1.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Person Mobile</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={personMobile}
            onChangeText={setPersonMobile}
            placeholder="Enter Person Mobile"
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
  return (
    <View style={styles.container}>
      <Header header="add person" navigation={navigation} />
      {taskNameInfo()}
      {personEmailInfo()}
      {personMobileInfo()}
      {dateAndTime()}
      {addTaskButton()}
      <Add_person_list />
      {addButton()}
    </View>
  );
};

export default Add_person;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 2.0,
    marginTop: Sizes.fixPadding,
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
  datePickerContainer: {
    margin: 5 * 2.0,
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
