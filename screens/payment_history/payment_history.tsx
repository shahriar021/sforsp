import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  Platform,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, Fonts, Sizes, CommonStyles} from '../../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Touchable} from '../../components/touchable';
import Header from '../../components/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const usersList = [
  {
    id: '1',

    amount: '500 tk',
    lastMsg: 'I will send update design',
    time: '2:00AM',
  },
  {
    id: '2',
    image: require('../../assets/images/users/user5.png'),
    amount: '500 tk',
    lastMsg: 'I will send update design',
    time: '2:00AM',
  },
  {
    id: '3',
    image: require('../../assets/images/users/user2.png'),
    amount: '1500 tk',
    lastMsg: 'I will send update design',
    time: '2:00AM',
  },
  {
    id: '4',
    image: require('../../assets/images/users/user6.png'),
    amount: '100 tk',
    lastMsg: 'I will send update design',
    time: '2:30AM',
  },
  {
    id: '5',
    image: require('../../assets/images/users/user8.png'),
    amount: '40 tk',
    lastMsg: 'I will send update design',
    time: 'Yesterday',
  },
  {
    id: '6',
    image: require('../../assets/images/users/user9.png'),
    amount: '60 tk',
    lastMsg: 'I will send update design',
    time: 'Yesterday',
  },
  {
    id: '7',
    image: require('../../assets/images/users/user10.png'),
    amount: '50 tk',
    lastMsg: 'I will send update design',
    time: '3 day ago',
  },
  {
    id: '8',
    image: require('../../assets/images/users/user11.png'),
    amount: '10 tk',
    lastMsg: 'I will send update design',
    time: '3 day ago',
  },
  {
    id: '9',
    image: require('../../assets/images/users/user12.png'),
    amount: ' 30 tk',
    lastMsg: 'I will send update design',
    time: '25 jan 2022',
  },
  {
    id: '10',
    image: require('../../assets/images/users/user13.png'),
    amount: '600 tk',
    lastMsg: 'I will send update design',
    time: '25 jan 2022',
  },
];

const Payment_history = ({navigation}) => {
  const [search, setSearch] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: Colors.bodyBackColor}}>
      <Header header="Payment History" navigation={navigation} />

      {usersInfo()}
    </View>
  );

  function usersInfo() {
    const renderItem = ({item}) => (
      <View style={styles.infoBox}>
        <View style={{flex: 1, marginLeft: Sizes.fixPadding}}>
          <View style={{alignSelf:"flex-end"}}>
          <View style={{display:"flex",flexDirection:"row"}}>
        <MaterialIcons name="date-range" size={20} color="#ccc" />
        <Text style={{...Fonts.grayColor13Medium,textAlign:"right"}}>{item.time}</Text>
        
        </View></View>
          <View style={{...CommonStyles.rowAlignCenter}}>
          
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.blackColor15Medium,
                flex: 1,
                marginRight: Sizes.fixPadding,
              }}>
              {item.amount}
            </Text>
            
          </View>
        </View>
      </View>
    );
    return (
      <FlatList
        data={usersList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: Sizes.fixPadding - 5.0}}
        automaticallyAdjustKeyboardInsets={true}
      />
    );
  }
};

export default Payment_history;

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: Colors.whiteColor,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.rowAlignCenter,
  },
});
