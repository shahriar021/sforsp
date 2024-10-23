import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Touchable} from '../../components/touchable';
import {Colors, CommonStyles} from '../../constants/styles';
import {ActivityIndicator} from 'react-native-paper';

import {SERVER_IP_ADDRESS} from '@env';
import {liveApi, serverApi} from '../../constants/server_api';

const Ofiice_visit_all = ({navigation}) => {
  const [officeVisitList, setOfficeVisitList] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(process.env.SERVER_IP_ADDRESS);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(`${liveApi}/office_visit/office_visit_list`);
        const list = await data.json();
        setOfficeVisitList(list);
        console.log(list[0], 'remarks...');
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  function addButton() {
    return (
      <View style={styles.addButtonOuterCircle}>
        <Touchable
          onPress={() => {
            navigation.push('office_visit_create');
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
        `${serverApi}/office_visit/office_visit_delete/${id}`,
        {
          method: 'post',
        },
      );
      if (res.ok == true) {
        console.log(res);
        const updatedData = officeVisitList.filter(item => item.id != id);
        setOfficeVisitList(updatedData);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(id);
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Office Visit" navigation={navigation} />
      <ScrollView>
        {loading && <ActivityIndicator />}
        {officeVisitList &&
          officeVisitList.map((item, index) => {
            return (
              <View style={styles.container} key={index}>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(item.id)}>
                  {/* <MaterialIcons
                    name="highlight-remove"
                    size={30}
                    color="#E5716E"
                  /> */}
                  <Text style={{color: 'black'}}>Delete</Text>
                </TouchableOpacity>
                <View style={styles.officeSection}>
                  <Text style={styles.title}>{item?.office_name}</Text>
                  {/* <Text style={styles.title}>{item.office_address}</Text> */}
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <MaterialIcons name="date-range" size={20} color="#ccc" />
                    <Text style={styles.info}>
                      {item.add_office_date?.toString()}
                    </Text>
                  </View>
                  <View style={styles.innerOfficeSection}>
                    <View style={styles.itemContainer}>
                      <MaterialIcons name="add-call" size={20} color="black" />
                      <Text style={styles.info}>{item?.office_mobile}</Text>
                    </View>
                    <View style={styles.itemContainer}>
                      <MaterialIcons name="email" size={20} color="black" />
                      <Text style={styles.info}>{item?.office_email}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.line} />

                <View style={styles.officeSection}>
                  <Text style={styles.title}>{item?.person_name}</Text>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <MaterialIcons name="date-range" size={20} color="#ccc" />
                    <Text style={styles.info}>{item?.add_person_date}</Text>
                  </View>
                  <View style={styles.innerOfficeSection}>
                    <View style={styles.itemContainer}>
                      <MaterialIcons name="add-call" size={20} color="black" />
                      <Text style={styles.info}>{item?.person_mobile}</Text>
                    </View>
                    <View style={styles.itemContainer}>
                      <MaterialIcons name="email" size={20} color="black" />
                      <Text style={styles.info}>{item?.person_email}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.line} />

                <View style={styles.officeSection}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <MaterialIcons name="date-range" size={20} color="#ccc" />
                    <Text style={styles.info}>{item?.remarks_date}</Text>
                  </View>
                  <View style={styles.innerOfficeSection}>
                    <View style={styles.itemContainer}>
                      <MaterialIcons name="maps-ugc" size={20} color="black" />
                      <Text style={styles.info}>{item?.remarks}</Text>
                    </View>
                  </View>
                </View>
                {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.push('remarks');
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <MaterialIcons name="maps-ugc" size={20} color="white" />
              <Text style={styles.buttonText}>Renmarks</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.personButton}
            onPress={() => {
              navigation.push('add_person');
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Octicons name="person-add" size={20} color="white" />
              <Text style={styles.buttonText}>See Person</Text>
            </View>
          </TouchableOpacity>
        </View> */}

                <View style={styles.fourthBox}>
                  <TouchableOpacity
                    style={styles.remarksButton}
                    onPress={() => {
                      navigation.push('remarks', {
                        itemID: item.office_visit_id,
                      });
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <FontAwesome5 name="comments" size={20} color="white" />
                      <Text style={styles.buttonText}>Renmarks</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />

                  <TouchableOpacity
                    style={styles.personButton}
                    onPress={() => {
                      navigation.push('add_person', {
                        itemID: item.office_visit_id,
                      });
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <FontAwesome5 name="user-plus" size={20} color="white" />
                      <Text style={styles.buttonText}>See Person</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </ScrollView>
      {addButton()}
    </View>
  );
};

export default Ofiice_visit_all;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 16,
    overflow: 'hidden',
    elevation: 2,
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },

  alignRight: {
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#39bda8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10, // Adjust as needed
  },
  officeSection: {},

  innerOfficeSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust as needed
    alignItems: 'center', // Align items vertically in the container
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    marginLeft: 5, // Adjust as needed to create spacing between icon and text
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

  fourthBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  divider: {
    width: 1,
    height: '100%',
  },

  personButton: {
    alignItems: 'center',
    width: 140,
    backgroundColor: '#E5716E',
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E5716E',
  },

  remarksButton: {
    alignItems: 'center',
    width: 140,
    backgroundColor: '#66C390',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#66C390',
    padding: 8,
  },
});
