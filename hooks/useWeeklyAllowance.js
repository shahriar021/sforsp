import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

const UseWeeklyAllowance = () => {
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
            `https://hr-backend-lovat.vercel.app/dashboard/weekly_allowance/${id}`,
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

  return <View></View>;
};

const styles = StyleSheet.create({});

export default UseWeeklyAllowance;
