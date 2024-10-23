import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Colors} from '../../constants/styles';
import {useRoute} from '@react-navigation/native';
import {SERVER_IP_ADDRESS} from '@env';
import { liveApi, serverApi } from '../../constants/server_api';

const RemarksList = ({office_id}) => {
  // const route = useRoute();
  // const {office_id} = route.params;
  console.log(office_id, 'item id from remarks list ....');
  const [remarksData, setRemarksData] = useState([]);

  useEffect(() => {
    async function getData() {
      const id = office_id;
      const data = await fetch(
        `${liveApi}/office_visit/office_visit_remarks_list/${id}`,
      );
      const jsonData = await data.json();
      setRemarksData(jsonData);
      console.log(jsonData, 'json data..');
    }
    getData();
  }, [office_id]);

  // Render item function for FlatList
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.date}>{item.remarks_date}</Text>
      <Text style={styles.remark}>{item.remarks}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remarks Information</Text>
      <FlatList
        data={remarksData}
        renderItem={renderItem}
        keyExtractor={item => item.date} // Assuming each date is unique
      />
    </View>
  );
};

export default RemarksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  remark: {
    fontSize: 16,
  },
});
