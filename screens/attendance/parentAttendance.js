import React, {useState} from 'react';
import {View} from 'react-native';

import HeaderAttendance from './HeaderAttendance';
import ProjectScreen from './ProjectScreen';



const parentAttendance = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={{flex: 1}}>
      
      <ProjectScreen selectedValue={selectedValue} navigation={navigation} />
    </View>
  );
};

export default parentAttendance;
