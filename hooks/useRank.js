import {useState} from 'react';

const useRank = () => {
  const [selectedRank, setSelectedRank] = useState(null);

  // Dropdown data for rank levels
  const rankOptions = [
    {label: 'LOW', value: 'low'},
    {label: 'MEDIUM', value: 'medium'},
    {label: 'HIGH', value: 'high'},
    {label: 'VERY HIGH', value: 'very_high'},
  ];

  // Return the data and the setter for updating selected value
  return {rankOptions, selectedRank, setSelectedRank};
};

export default useRank;
