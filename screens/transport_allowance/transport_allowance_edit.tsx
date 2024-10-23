import React, {useState} from 'react';
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
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';

const Transport_allowance_edit = ({navigation, route}) => {
  const {
    Id,
    Travel_From,
    Travel_To,
    Travel_from_time,
    Travel_to_time,

    Vehicle,
    Km,
    Amount,
  } = route.params;

  // console.log(Km, 'kilometer...');
  // console.log(Vehicle, 'vehicle...');

  const [selectedDatetime, setSelectedDatetime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDatetimeTo, setSelectedDatetimeTo] = useState(new Date());
  const [isDatePickerVisibleTo, setDatePickerVisibilityTo] = useState(false);
  const [mode, setMode] = useState('date');
  const [modeTo, setModeTo] = useState('date');

  const [editedData, setEditedData] = useState({
    id: Id,
    travel_from: Travel_From,
    travel_to: Travel_To,
    travel_from_time: Travel_from_time,
    travel_to_time: Travel_to_time,
    km_travel: Km,
    vehicle_name: Vehicle,
    amount: Amount,
  });

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
        setEditedData({...editedData, travel_from_time: updatedDateTime});
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
        setEditedData({...editedData, travel_to_time: updatedDateTimeTo});
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

  const handleInputChange = (name, value) => {
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleTransportAllowacneEdit = async (navigation, id) => {
    const res = await fetch(
      `${liveApi}/transport_allowance/transport_allowance_edit/${id}`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json', // Use application/json for JSON data
        },
        body: JSON.stringify(editedData),
      },
    );

    if (res.ok) {
      navigation.push('transport_allowance');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Transport Allowance Edit" navigation={navigation} />
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
            {editedData.travel_from_time.toString()}
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
            {editedData.travel_to_time.toString()}
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
        buttonText="Edit Transport Allowance"
        onPress={() => handleTransportAllowacneEdit(navigation, Id)}
      />
    );
  }

  function amountInfo() {
    return (
      <View style={{marginHorizontal: Sizes.fixPadding * 2.0}}>
        <Text style={{...Fonts.blackColor16Medium}}>Amount</Text>
        <View style={styles.infoBox}>
          <TextInput
            value={editedData.amount.toString()}
            onChangeText={value => handleInputChange('amount', value)}
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
            value={editedData.travel_from}
            onChangeText={value => handleInputChange('travel_from', value)}
            placeholder="Enter your travel from address"
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
            value={editedData.travel_to}
            onChangeText={value => handleInputChange('travel_to', value)}
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
            value={editedData.vehicle_name}
            onChangeText={value => handleInputChange('vehicle_name', value)}
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
            value={editedData.km_travel.toString()}
            onChangeText={value => handleInputChange('km_travel', value)}
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

export default Transport_allowance_edit;

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
