import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/header';
import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
import {Button} from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';

const leave_application_create = ({navigation}) => {
  const [id, setId] = useState(null);
  const [selectedLeaveCategory, setSelectedLeaveCategory] = useState(null);

  const [leaveCategories, setLeaveCategories] = useState([]);

  const [selectedDatetime, setSelectedDatetime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDatetimeTo, setSelectedDatetimeTo] = useState(new Date());
  const [isDatePickerVisibleTo, setDatePickerVisibilityTo] = useState(false);
  const [mode, setMode] = useState('date');
  const [modeTo, setModeTo] = useState('date');

  const [receiver, setReceiver] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState([]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setId(userId);
      } catch (error) {
        console.error('Error retrieving userId:', error);
      }
    };
    fetchUserId();
  }, []);
  console.log(id, 'id...');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'http://192.168.0.190:5000/leave/get_leave_cat',
        );
        const jsonData = await response.json();

        // Assuming jsonData is an array of objects like [{ id: 1, name: 'Sick Leave' }, ...]
        const formattedData = jsonData.map(item => ({
          label: item.name, // Displayed in the dropdown
          value: item.id, // Value stored in the state
        }));

        setLeaveCategories(formattedData);
      } catch (error) {
        console.error('Error fetching leave categories:', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(id, 'inside'); // Check if id is correct here
        const data = await fetch(
          `http://192.168.0.190:5000/leave/get_leave_employee`,
        );

        if (!data.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await data.json();

        // Ensure the id comparison is correct
        const filteredData = jsonData.filter(item => item.id !== Number(id));

        const formattedData = filteredData.map(item => ({
          label: item.full_name,
          value: item.id,
        }));

        setReceiver(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [id]);

  console.log(receiver, 'receiver...');

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

  const handleLeaveApplicationCreate = async () => {
    const postData = {
      leave_category: selectedLeaveCategory,
      start_date: selectedDatetime,
      created_by: userId,
      whose_leave: userId,
    };

    const res = await fetch(
      `http://192.168.0.190:5000/leave_application/leave_create`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      },
    );
    if (res.ok === true) {
      navigation.push('LeaveApplications');
    }
  };

  console.log(selectedLeaveCategory, '-------');

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Leave Application Create" navigation={navigation} />
      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}>
          {dateAndTime()}
          {dateAndTimeTo()}
          <Dropdown
            style={styles.dropdown}
            data={leaveCategories}
            labelField="label"
            valueField="value"
            placeholder="Select Leave Category"
            value={selectedLeaveCategory}
            onChange={item => {
              setSelectedLeaveCategory(item.value);
            }}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.itemTextStyle}
          />

          <Dropdown
            style={styles.dropdown}
            data={receiver}
            labelField="label"
            valueField="value"
            placeholder="Select Leave Category"
            value={setSelectedReceiver}
            onChange={item => {
              setSelectedReceiver(item.value);
              console.log(item.value, 'id');
            }}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.itemTextStyle}
          />
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
        buttonText="Create Leave Application"
        onPress={handleLeaveApplicationCreate}
      />
    );
  }
};

export default leave_application_create;

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
  dropdown: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: Colors.whiteColor,
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    ...CommonStyles.shadow,
  },
  placeholderStyle: {
    color: Colors.placeholderColor,
    fontSize: 16,
  },
  selectedTextStyle: {
    color: Colors.blackColor,
    fontSize: 16,
  },
  itemTextStyle: {
    color: Colors.blackColor,
    fontSize: 16,
  },
});
