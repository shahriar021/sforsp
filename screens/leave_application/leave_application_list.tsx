import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Header from '../../components/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ActivityIndicator} from 'react-native-paper';
import {Touchable} from '../../components/touchable';
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';

const leave_application_list = ({navigation}) => {
  const [mobileAllowanceList, setMobileAllowanceList] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  // console.log(serverApi);

  useEffect(() => {
    fetch(`http://192.168.0.190:5000/leave/get_leave_list`)
      .then(res => res.json())
      .then(data => {
        setMobileAllowanceList(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(true); // In case of an error, set loading to false
      });
  }, []);

  const hadleDelete = async id => {
    // console.log(id, 'mobile....');
    const res = await fetch(`http://192.168.0.190:5000/leave/get_leave_list`);
    if (res.ok == true) {
      console.log('deleted');
      const updatedData = mobileAllowanceList.filter(item => item.id != id);
      setMobileAllowanceList(updatedData);
    }
  };

  function addButton() {
    return (
      <View style={styles.addButtonOuterCircle}>
        <Touchable
          onPress={() => {
            navigation.push('leave_create');
          }}
          style={styles.addButtonInnerCircle}>
          <MaterialIcons name="add" size={33} color={Colors.whiteColor} />
        </Touchable>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="leave application" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {privacyInfo()}
      </ScrollView>
      {addButton()}
    </View>
  );

  function privacyInfo() {
    return (
      <View>
        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Applicant Name</Text>
            <Text style={styles.headerText}>Leave Reason</Text>
            <Text style={styles.headerText}>Date (Start-End)</Text>
            <Text style={styles.headerText}>Status</Text>
            <Text style={styles.headerText}>Receiver</Text>
            {/* <Text style={styles.headerText}>Approved By</Text> */}
            <Text style={styles.headerText}>Created By</Text>
            <Text style={styles.headerText}>Created Date</Text>
          </View>

          {mobileAllowanceList && mobileAllowanceList.length > 0 ? (
            mobileAllowanceList.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.rowText}>{item.whose_leave_name}</Text>
                <Text style={styles.rowText}>{item.leave_category_name}</Text>
                <Text style={styles.rowText}>
                  {item.start_date} {item.end_date}
                </Text>
                <Text style={styles.rowText}>                      {item.application_status}</Text>
                <Text style={styles.rowText}>{item.receiver_name}</Text>
                <Text style={styles.rowText}>{item.created_by_name}</Text>
                <Text style={styles.rowText}>{item.created_date}</Text>
              </View>
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No data available</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  value: {
    color: 'black',
  },
  dvalue: {
    fontSize: 10,
    color: '#808080',
  },
  deleteButton: {
    padding: 8,
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
  firstBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  rowText: {
    fontSize: 14,
    color: 'black',
    flex: 1, // Or use a fixed width like width: '16%'
    textAlign: 'center', // Center align the text
  },
  emptyText: {
    fontSize: 16,
    color: '#888888',
  },
});

export default leave_application_list;
