import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {baseApi, token} from '../constants/base_api';

const useLogistic = () => {
  const [logistic, setLogistic] = useState([]);

  useEffect(() => {
    const logistic = async () => {
      const data = await fetch(`${baseApi}/logistic_conditions?token=${token}`);
      const jsonData = await data.json();
      setLogistic(jsonData);
    };
    logistic();
  }, []);

  return {logistic};
};

export default useLogistic;
