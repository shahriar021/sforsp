import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Header from '../../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Salary = ({navigation}) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        const userName = await AsyncStorage.getItem('name');
        // const login = await AsyncStorage.getItem('last_login_time');
        // console.log(userID, 'dashboard..');
        console.log(userName, 'dashboard');
        setId(userID);

        //setLastLogin(login);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  console.log(id, 'salary');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://192.168.0.190:5000/salary/getSalary/${id}`,
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [id]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.boldText}>
          ID: <Text style={styles.valueText}>{item.id}</Text>
        </Text>
        <Text style={styles.boldText}>
          User ID: <Text style={styles.valueText}>{item.user_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Salary Month:{' '}
          <Text style={styles.valueText}>{item.salary_month}</Text>
        </Text>
        <Text style={styles.boldText}>
          Salary Date: <Text style={styles.valueText}>{item.salary_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Receipt: <Text style={styles.valueText}>{item.receipt}</Text>
        </Text>
        <Text style={styles.boldText}>
          Created By: <Text style={styles.valueText}>{item.created_by}</Text>
        </Text>
        <Text style={styles.boldText}>
          Created Date:{' '}
          <Text style={styles.valueText}>{item.created_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Modified By: <Text style={styles.valueText}>{item.modified_by}</Text>
        </Text>
        <Text style={styles.boldText}>
          Modified Date:{' '}
          <Text style={styles.valueText}>{item.modified_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Due: <Text style={styles.valueText}>{item.due}</Text>
        </Text>
        <Text style={styles.boldText}>
          Paid Amount: <Text style={styles.valueText}>{item.paid_amount}</Text>
        </Text>
        <Text style={styles.boldText}>
          Paid By: <Text style={styles.valueText}>{item.paid_by}</Text>
        </Text>
        <Text style={styles.boldText}>
          Join Date: <Text style={styles.valueText}>{item.join_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Payroll ID: <Text style={styles.valueText}>{item.payroll_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Designation ID:{' '}
          <Text style={styles.valueText}>{item.designation_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          School Shift ID:{' '}
          <Text style={styles.valueText}>{item.school_shift_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Promotion ID:{' '}
          <Text style={styles.valueText}>{item.promotion_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Promotion Month:{' '}
          <Text style={styles.valueText}>{item.promotion_month}</Text>
        </Text>
        <Text style={styles.boldText}>
          Designation Name:{' '}
          <Text style={styles.valueText}>{item.designation_name}</Text>
        </Text>
        <Text style={styles.boldText}>
          Serial Number:{' '}
          <Text style={styles.valueText}>{item.serial_number}</Text>
        </Text>
        <Text style={styles.boldText}>
          Is Teacher: <Text style={styles.valueText}>{item.is_teacher}</Text>
        </Text>
        <Text style={styles.boldText}>
          Attendance Date:{' '}
          <Text style={styles.valueText}>{item.attendance_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Device ID: <Text style={styles.valueText}>{item.device_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Checktime: <Text style={styles.valueText}>{item.checktime}</Text>
        </Text>
        <Text style={styles.boldText}>
          Unique ID: <Text style={styles.valueText}>{item.unique_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Holiday Category:{' '}
          <Text style={styles.valueText}>{item.holiday_category}</Text>
        </Text>
        <Text style={styles.boldText}>
          Start Date: <Text style={styles.valueText}>{item.start_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Holiday Name:{' '}
          <Text style={styles.valueText}>{item.holiday_name}</Text>
        </Text>
        <Text style={styles.boldText}>
          End Date: <Text style={styles.valueText}>{item.end_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Leave Category:{' '}
          <Text style={styles.valueText}>{item.leave_category}</Text>
        </Text>
        <Text style={styles.boldText}>
          Receiver: <Text style={styles.valueText}>{item.receiver}</Text>
        </Text>
        <Text style={styles.boldText}>
          Application Status:{' '}
          <Text style={styles.valueText}>{item.application_status}</Text>
        </Text>
        <Text style={styles.boldText}>
          Whose Leave: <Text style={styles.valueText}>{item.whose_leave}</Text>
        </Text>
        <Text style={styles.boldText}>
          School Session ID:{' '}
          <Text style={styles.valueText}>{item.school_session_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Leave Application ID:{' '}
          <Text style={styles.valueText}>{item.leave_application_id}</Text>
        </Text>
        <Text style={styles.boldText}>
          Leave Date: <Text style={styles.valueText}>{item.leave_date}</Text>
        </Text>
        <Text style={styles.boldText}>
          Basic: <Text style={styles.valueText}>{item.basic}</Text>
        </Text>
        <Text style={styles.boldText}>
          Medical: <Text style={styles.valueText}>{item.medical}</Text>
        </Text>
        <Text style={styles.boldText}>
          House: <Text style={styles.valueText}>{item.house}</Text>
        </Text>
        <Text style={styles.boldText}>
          Convince: <Text style={styles.valueText}>{item.convince}</Text>
        </Text>
        <Text style={styles.boldText}>
          Tax: <Text style={styles.valueText}>{item.tax}</Text>
        </Text>
        <Text style={styles.boldText}>
          Notes: <Text style={styles.valueText}>{item.notes}</Text>
        </Text>
        <Text style={styles.boldText}>
          Medical Value:{' '}
          <Text style={styles.valueText}>{item.medical_val}</Text>
        </Text>
        <Text style={styles.boldText}>
          House Value: <Text style={styles.valueText}>{item.house_val}</Text>
        </Text>
        <Text style={styles.boldText}>
          Convince Value:{' '}
          <Text style={styles.valueText}>{item.convince_val}</Text>
        </Text>
        <Text style={styles.boldText}>
          Tax Value: <Text style={styles.valueText}>{item.tax_val}</Text>
        </Text>
        <Text style={styles.boldText}>
          Total: <Text style={styles.valueText}>{item.total}</Text>
        </Text>
        <Text style={styles.boldText}>
          Title: <Text style={styles.valueText}>{item.title}</Text>
        </Text>
        <Text style={styles.boldText}>
          Total Salary:{' '}
          <Text style={styles.valueText}>{item.total_salary}</Text>
        </Text>
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
          Working Days:{' '}
          <Text style={styles.valueText}>{item.working_days}</Text>
        </Text>
        <Text style={styles.boldText}>
          Absent: <Text style={styles.valueText}>{item.absent}</Text>
        </Text>
      </View>
    );
  };

  console.log(data, 'salary');
  return (
    <View>
      <Header navigation={navigation} header={'Salary'} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  valueText: {
    fontWeight: 'normal',
  },
});

export default Salary;
