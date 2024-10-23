import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const HeaderAttendance = ({selectedValue, setSelectedValue}) => {
  const navigation = useNavigation();
  const [dateFromAttendance, setDateFromAttendance] = useState([]);

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

      for (let year = 2000; year <= currentYear; year++) {
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
  }, [setSelectedValue]);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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

export default HeaderAttendance;
