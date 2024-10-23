import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const weeklyAllowance = ({navigation}) => {
  const [id, setId] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        // const login = await AsyncStorage.getItem('last_login_time');
        // console.log(userID, 'dashboard..');
        setId(userID);

        //setLastLogin(login);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  useEffect(() => {
    if (id !== null) {
      const getData = async () => {
        try {
          const response = await fetch(
            `http://192.168.0.190:5000/dashboard/weekly_allowance/${id}`,
          );
          const jsonData = await response.json();
          setInfo(jsonData);
        } catch (error) {
          console.error('Failed to fetch data', error);
        }
      };
      getData();
    }
  }, [id]);

  console.log(id, 'weekly');

  console.log(info, 'info....');

  return (
    // <View style={styles.container}>
    //   <Header header="Weekly Allowance" navigation={navigation} />
    //   <ScrollView style={styles.table}>
    //     <View style={styles.headerContainer}>
    //       <Text style={[styles.headerText, styles.headerTextWide]}>
    //         Allowance Type
    //       </Text>
    //       <Text style={styles.headerText}>Amount</Text>
    //       <Text style={styles.headerText}>Date</Text>
    //     </View>

    //     {info.length > 0 ? (
    //       info.map((item, index) => (
    //         <View key={index} style={styles.row}>
    //           <Text style={styles.dataText}>
    //             {item.travel_from || 'No from'} - {item.travel_to || 'No to'}
    //           </Text>
    //           <Text style={styles.dataText}>{item.amount || 'No amount'} </Text>
    //           <Text style={styles.dataText}>
    //             {item.created_date || 'No date'}
    //           </Text>
    //         </View>
    //       ))
    //     ) : (
    //       <Text style={styles.infoText}>Loading data...</Text>
    //     )}
    //   </ScrollView>
    // </View>
    <View style={styles.container}>
      <Header header="Weekly Allowance" navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        {/* Existing Table Section */}
        <View style={styles.tableContainer}>
          <View style={styles.headerContainer}>
            <Text style={[styles.headerText, styles.headerTextWide]}>
              Allowance Type
            </Text>
            <Text style={styles.headerText}>Amount</Text>
            <Text style={styles.headerText}>Date</Text>
          </View>

          {info.length > 0 ? (
            info.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.dataText}>
                  {item.travel_from || 'No from'} - {item.travel_to || 'No to'}
                </Text>
                <Text style={styles.dataText}>
                  {item.amount || 'No amount'}{' '}
                </Text>
                <Text style={styles.dataText}>
                  {item.created_date || 'No date'}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.infoText}>Loading data...</Text>
          )}
        </View>

        {/* New Section with Additional Headers */}
        <View style={styles.tableContainer}>
          <View style={styles.headerContainer}>
            <Text style={[styles.headerText, styles.headerTextWide]}>
              Mobile
            </Text>
            <Text style={styles.headerText}>Amount</Text>
            <Text style={styles.headerText}>Date</Text>
          </View>

          {info.length > 0 ? (
            info.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.dataText}>{item.mobile || 'No from'}</Text>
                <Text style={styles.dataText}>
                  {item.amount || 'No amount'}{' '}
                </Text>
                <Text style={styles.dataText}>
                  {item.recharge_time || 'No date'}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.infoText}>Loading data...</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {},
  headerContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1, // Equal space for each header column
    fontWeight: 'bold',
    color: '#333',
  },
  box: {
    display: 'flex',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontWeight: 'bold',
    color: 'black',
  },
  infoText: {
    color: 'black',
  },
  actions: {
    // Add styles if you need any action buttons or icons
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  headerTextWide: {
    flex: 2, // Make allowance type header wider
  },
  dataText: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
});

export default weeklyAllowance;
