import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SERVER_IP_ADDRESS} from "@env"
import { liveApi } from '../../constants/server_api';

const AddPersonList = () => {
  const route = useRoute();
  const {itemID} = route.params;
  const [personsData, setPersonData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const id = itemID;
        const data = await fetch(
          `${liveApi}/office_visit/office_visit_person/${id}`,
        );
        const jsonData = await data.json();
        setPersonData(jsonData);
        console.log(jsonData, 'jsonData..');
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  // Render item function for FlatList
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.person_name}</Text>
      <Text style={styles.date}>
        {item.add_person_date ? item.add_person_date : '00'}
      </Text>
      <Text style={styles.detail}>{item.person_email}</Text>
      <Text style={styles.detail}>{item.person_mobile}</Text>

      <View style={styles.fourthBox}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => Linking.openURL(`tel:${item.number}`)}>
          <MaterialIcons name="call" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => Linking.openURL(`mailto:${item.email}`)}>
          <MaterialIcons name="local-post-office" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          color: 'black',
        }}>
        Add person information
      </Text>
      <FlatList
        data={personsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AddPersonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    margin: 15,
  },
  name: {
    marginBottom: 5,

    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  clButton: {
    backgroundColor: '#1E4799',
    padding: 10,
    borderRadius: 10,
    color: 'white',
  },
  emlButton: {
    backgroundColor: '#1E996D',
    padding: 10,
    borderRadius: 10,
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
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#66C390',
    padding: 8,
  },
  date: {
    fontSize: 10,
    color: '#ccc',
  },
});
