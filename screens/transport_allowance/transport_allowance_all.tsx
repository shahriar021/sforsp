import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Header from '../../components/header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ActivityIndicator} from 'react-native-paper';
import {Touchable} from '../../components/touchable';
import {Col, Grid} from 'react-native-easy-grid';
import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';

const Transport_allowance_all = ({navigation}) => {
  const [mobileAllowanceList, setMobileAllowanceList] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   fetch(`${serverApi}/transport_allowance/transport_allowance_list`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setMobileAllowanceList(data);
  //       setLoading(false); // Set loading to false after data is fetched
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       setLoading(true); // In case of an error, set loading to false
  //     });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `http://192.168.0.190:5000/transport_allowance/transport_allowance_list`,
        );
        const jsonData = await data.json();
        setMobileAllowanceList(jsonData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(true);
      }
    };
    getData();
  });

  function addButton() {
    return (
      <View style={styles.addButtonOuterCircle}>
        <Touchable
          onPress={() => {
            navigation.push('transport_allowance_create');
          }}
          style={styles.addButtonInnerCircle}>
          <MaterialIcons name="add" size={33} color={Colors.whiteColor} />
        </Touchable>
      </View>
    );
  }

  const handleDelete = async id => {
    try {
      const res = await fetch(
        `http://192.168.0.190:5000/transport_allowance/transport_allowance_delete/${id}`,
        {
          method: 'post',
        },
      );
      if (res.ok == true) {
        // console.log(res);
        const updatedData = mobileAllowanceList.filter(item => item.id != id);
        setMobileAllowanceList(updatedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (
    id,
    travel_from,
    travel_to,
    travel_from_time,
    travel_to_time,

    vehicle,
    km_travel,
    amount,
  ) => {
    // console.log(id, 'edit');
    navigation.push('transport_allowance_edit', {
      Id: id,
      Travel_From: travel_from.toString(),
      Travel_To: travel_to,
      Travel_from_time: travel_from_time,
      Travel_to_time: travel_to_time,
      Km: km_travel,
      Vehicle: vehicle,
      Amount: amount,
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Transport Allowance" navigation={navigation} />
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
          <>
            <View
              key={index}
              style={[
                styles.infoContainer,
                {backgroundColor: index % 2 === 0 ? '#ffffff' : '#f2f2f2'},
              ]}>
              <View style={styles.info}>
                <Grid style={styles.grid}>
                  <Col style={styles.fcol}>
                    <View style={styles.fgcontainer}>
                      <Text style={styles.label}>
                        {item.travel_from.toString()}
                      </Text>
                    </View>
                  </Col>
                  <Col style={styles.col}>
                    <View style={styles.gcontainer}>
                      <MaterialIcons
                        name="directions-bus"
                        size={24}
                        color="black"
                      />
                    </View>
                  </Col>
                  <Col style={styles.rcol}>
                    <View style={styles.gcontainer}>
                      <Text style={styles.label}>{item.travel_to}</Text>
                    </View>
                  </Col>
                </Grid>

                <View style={styles.secondBox}>
                  <Text style={[styles.tvalue, styles.lDate]}>
                    {item.travel_from_time}
                  </Text>

                  <Text style={[styles.tvalue, styles.rDate]}>
                    {item.travel_to_time}
                  </Text>
                </View>

                <View style={styles.separator}></View>

                <View style={styles.thirdBox}>
                  <View style={styles.group}>
                    <MaterialIcons
                      name="directions-bus"
                      size={20}
                      color="#456598"
                    />
                    <Text style={styles.value}>{item.vehicle_name}</Text>
                  </View>

                  <View style={styles.group}>
                    <MaterialIcons name="fmd-good" size={20} color="#456598" />
                    <Text style={styles.value}>{item.km_travel} km</Text>
                  </View>

                  <View style={styles.group}>
                    <MaterialIcons
                      name="request-page"
                      size={20}
                      color="#456598"
                    />
                    <Text style={styles.value}>{item.amount} Tk.</Text>
                  </View>
                </View>
                <View style={styles.fourthBox}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => {
                      handleEdit(
                        item.id,
                        item.travel_from.toString(),
                        item.travel_to.toString(),
                        item.travel_from_time,
                        item.travel_to_time,
                        item.vehicle_name,
                        item.km_travel,
                        item.amount,
                      );
                    }}>
                    <MaterialIcons name="edit" size={24} color="white" />
                  </TouchableOpacity>
                  <View style={styles.divider} />

                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => {
                      handleDelete(item.id);
                    }}>
                    <MaterialIcons name="delete" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  infoContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,

    marginRight: 10,
  },
  label: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
  },
  value: {
    fontSize: 10,
    marginBottom: 8,
    color: 'black',
  },
  tvalue: {
    fontSize: 8,
    marginBottom: 8,
    color: 'black',
  },
  deleteButton: {
    alignItems: 'center',
    width: 140,
    backgroundColor: '#E5716E',
    padding: 8,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E5716E',
  },

  editButton: {
    alignItems: 'center',
    width: 140,
    backgroundColor: '#66C390',

    padding: 8,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#66C390',
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    marginBottom: 10,
  },
  thirdBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fourthBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
  },
  divider: {
    width: 1,
    height: '100%',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  lDate: {
    textAlign: 'left',
  },
  rDate: {
    textAlign: 'right',
  },

  fcontainer: {
    flex: 1,
  },
  fgridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    gridTemplateColumns: 'auto auto auto',
    alignItems: 'baseline',
  },
  flabel: {
    // your label styles

    alignSelf: 'flex-start',
  },
  f2label: {
    // your label styles

    alignSelf: 'flex-end',
  },
  ficon: {
    gridColumn: '2 / 3',
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },

  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fcol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rcol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  gcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Transport_allowance_all;
