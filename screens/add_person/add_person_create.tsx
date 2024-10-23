import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header';

const Add_person_create = ({navigation}) => {
  return (
    <View>
      <Header header="add person" navigation={navigation} />
      <Text>Aadd_person_create</Text>
    </View>
  );
};

export default Add_person_create;

const styles = StyleSheet.create({});
