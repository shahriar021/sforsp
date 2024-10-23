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

const mobile_allowance_all = ({navigation}) => {
  const [mobileAllowanceList, setMobileAllowanceList] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  // console.log(serverApi);

  useEffect(() => {
    fetch(`http://192.168.0.190:5000/mobile_allowance/mobile_allowance_list`)
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
    const res = await fetch(
      `${liveApi}/mobile_allowance/mobile_allowance_delete/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
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
            navigation.push('mobile_allowance_create');
          }}
          style={styles.addButtonInnerCircle}>
          <MaterialIcons name="add" size={33} color={Colors.whiteColor} />
        </Touchable>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Mobile Allowance" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {privacyInfo()}
      </ScrollView>
      {addButton()}
    </View>
  );

  function privacyInfo() {
    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator />}
        {mobileAllowanceList.map((item, index) => (
          <View key={index} style={styles.infoContainer}>
            <View style={styles.info}>
              <View style={styles.firstBox}>
                <Text style={styles.label}>
                  Mobile: <Text style={styles.value}>{item.mobile}</Text>
                </Text>

                <Text style={styles.label}>
                  Amount: <Text style={styles.value}>{item.amount} Tk.</Text>
                </Text>
              </View>
              <View style={styles.secondBox}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <MaterialIcons name="date-range" size={20} color="#ccc" />
                  <Text style={styles.dvalue}>
                    {item.recharge_time.toString()}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    hadleDelete(item.id);
                  }}>
                  <MaterialIcons name="delete" size={24} color="#E5716E" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
});

export default mobile_allowance_all;
