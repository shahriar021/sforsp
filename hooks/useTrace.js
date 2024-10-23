import React, { useState } from 'react';
import { View, Text } from 'react-native';

const useTrace = () => {
 const [selectedRank, setSelectedRank] = useState(null);

 // Dropdown data for rank levels
 const rankOptions = [
   {label: 'Select One', value: 'Select One'},
   {label: 'Trace', value: 'trace'},
   {label: 'Line', value: 'line'},
   
 ];

 // Return the data and the setter for updating selected value
 return {rankOptions, selectedRank, setSelectedRank};
}

export default useTrace;
