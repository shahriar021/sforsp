import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  Modal,
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
//import {forest_type_list} from '../../constants/public_schema';

import MonthPicker from 'react-native-month-year-picker';
import {
  gener43_2021_core_create,
  gener43_2021_fbli_ca_tloc_ad_upzilla_create,
  gener43_2021_fbli_m_sh1_create,
  gener43_2021_core_list,
  gener43_2021_fbli_m_sh1_list,
  jur_ad_districts_list,
  jur_ad_divisions_list,
  jur_ad_upazillas_list,
  jur_fd_beats_list,
  jur_fd_circles_list,
  jur_fd_divisions_list,
  jur_fd_ecozones_list,
  jur_fd_ranges_list,
  mouza_types_list,
  /*jur_ad_districts_api,
  
  jur_ad_divisions_api,
  
  jur_ad_upazillas_api,
  
  jur_fd_beats_api,
  
  jur_fd_circles_api,
  
  jur_fd_divisions_api,
  
  jur_fd_ecozones_api,
  
  jur_fd_ranges_api,
  
  mouza_types_api,*/
} from '../../database/sqlDatabase';
import useUUID from '../../hooks/useUUID';
import useCreateUri from '../../hooks/useCreatUri';
import useInternetConnection from '../../hooks/useInternetConnection';

const beatOne = () => {
  const [uuidadd2, setuuidadd2] = useState('');
  const [fstLnd, setFstLnd] = useState([]);
  const [fstCircle, setFstCircle] = useState([]);
  const [fstDivision, setFstDivision] = useState([]);
  const [fstrange, setFstRange] = useState([]);
  const [fstbeat, setFstbeat] = useState([]);

  const [division, setDivision] = useState([]);
  const [district, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);

  const [survey, setSurvey] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [GUSER_DCOLLECTION_RAW, setInputValue1] = useState('');
  const [GUSER_USER, setInputValue2] = useState('');
  const [GUSER_USER_CELL, setGUSER_USER_CELL] = useState('');
  const [GUSER_BEAT_ADDRESS, setGUSER_BEAT_ADDRESS] = useState('');
  const [GUSER_TLOC_FD_BEAT_POINT_LAT, setGUSER_TLOC_FD_BEAT_POINT_LAT] =
    useState('');
  const [GUSER_TLOC_FD_BEAT_POINT_LNG, setGUSER_TLOC_FD_BEAT_POINT_LNG] =
    useState('');
  const [FBLI_FA_TLOC_FD_BLOCK, setFBLI_FA_TLOC_FD_BLOCK] = useState('');
  const [FBLI_FA_TLOC_FD_CHAR, setFBLI_FA_TLOC_FD_CHAR] = useState('');
  const [FBLI_CA_UNION, setFBLI_CA_UNION] = useState('');
  const [mouza_name, setmouza_name] = useState('');
  const [sheet_number, setsheet_number] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedForestCircle, setSelectedForestCircle] = useState(null);
  const [selectedForestDivision, setSelectedForestDivision] = useState(null);
  const [selectedForestrange, setSelectedForestRange] = useState(null);
  const [selectedForestbeat, setSelectedForestBeat] = useState(null);

  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedUpazila, setSelectedUpazila] = useState(null);

  const [fbliData, setFbliData] = useState([]);

  const [survey_type, setsurvey_type] = useState(null);
  const [oridianl, setoridianl] = useState(0);

  setTimeout(() => setShowPicker(false), 0);

  // ------------------------------
  const [gener43_2021_core_listdata, setgener43_2021_core_list] = useState([]);
  const isConnected = useInternetConnection();
  console.log(isConnected ? 'online in beat one' : 'offline in beat one');
  const navigation = useNavigation();
  //create useruri
  const uri = useCreateUri();
  console.log(uri, 'user creation....');

  useEffect(() => {
    const fetchData = async () => {
      try {
        //await jur_fd_ecozones_api();

        const spatialData3 = await jur_fd_ecozones_list();
        setFstLnd(spatialData3);
        // console.log(spatialData3, 'ooooo');
      } catch (error) {
        console.error('Error fetching or inserting data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fbli = async () => {
      const data = await gener43_2021_fbli_m_sh1_list();
      setFbliData(data);
    };
    fbli();
  }, []);

  //console.log(fbliData, 'fbli data....');

  const onDocumentPress = async () => {
    const res = await DocumentPicker.pick({
      type: ['application/*', 'text/*'], // General MIME types to capture all related formats
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Hide the picker after selection (Android closes automatically)
    setDate(currentDate);
    const formattedDate = `${currentDate.toLocaleDateString()} `;
    setInputValue1(formattedDate); // Update TextInput with selected date and time
  };

  const showDatePicker = () => {
    setShowPicker(true); // Show the DateTimePicker when the TextInput is pressed
  };

  const forestOptions = [
    {label: 'Tropical Rainforest', value: 'tropical'},
    {label: 'Mangrove Forest', value: 'mangrove'},
    {label: 'Deciduous Forest', value: 'deciduous'},
    {label: 'Coniferous Forest', value: 'coniferous'},
    {label: 'Bamboo Forest', value: 'bamboo'},
  ];

  const {initialUUID, generateUUID} = useUUID();
  const [newUUID, setNewUUID] = useState('');

  // Function to generate a new UUID
  // const addNewGenerateNewUUID = async () => {
  //   const newGeneratedUUID = generateUUID(); // Generate a new UUID
  //   setNewUUID(newGeneratedUUID); // Update state, if needed elsewhere

  //   // Use the newly generated UUID directly
  //   const dataToInsertadd = {
  //     _uri: newGeneratedUUID, // Use newGeneratedUUID directly
  //   };
  //   console.log(dataToInsertadd, 'datato insert');

  //   // Delayed insertion logic remains unchanged
  //   setTimeout(async () => {
  //     try {
  //       await gener43_2021_fbli_m_sh1_create(dataToInsertadd);
  //       console.log('All data inserted successfully');
  //     } catch (error) {
  //       console.error('Failed to insert data:', error.message || error);
  //     }
  //   }, 1000);

  //   setTimeout(() => console.log(dataToInsertadd), 1000);
  // };
  const getCurrentDateandTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const days = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const miliseconds = now.getMilliseconds().toString().padStart(4, '0');

    return `${year}-${month}-${days} ${hours}:${minutes}:${seconds}:${miliseconds}`;
  };

  const addNewGenerateNewUUID = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInsertadd = {
      _URI: newGeneratedUUID, // Use the freshly generated UUID
      _CREATOR_URI_USER: uri,
      _PARENT_AURI: initialUUID,
      _TOP_LEVEL_AURI: initialUUID,
      _CREATION_DATE: getCurrentDateandTime(),
      _LAST_UPDATE_DATE: getCurrentDateandTime(),
      MOUZA1: mouza_name,
      SURVEY_TYPES: survey_type,
      SHEET1: sheet_number,
      _ORDINAL_NUMBER: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd, 'datato insert');

    try {
      await gener43_2021_fbli_m_sh1_create(dataToInsertadd);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  console.log(initialUUID, 'page -1');
  console.log(newUUID, 'page -add new');

  console.log(oridianl, 'ordinal');

  const handleValueChange = (event, newDate) => {
    // When user selects a date
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`; // Formats as yyyy-mm-07 (sets the day as 07)
      setInputValue1(formattedDate);
      // TODO: Save `formattedDate` to the database as needed
    }
    setShowPicker(false); // Hide the picker after selection
  };

  // const {md5} = useUUID();
  // const uuid = md5;

  // console.log(uuid, 'uuid-page 1');
  // const uuid2 = md5;
  // console.log(uuid2, 'uuid-page 1-2');

  // useEffect(() => {
  //   if (modalVisible) {
  //     const uuid2 = md5;
  //     setuuidadd2(uuid2);
  //   }
  // }, [modalVisible]);

  // console.log(uuidadd2, 'uuid-page 1 in add new');

  // const formattedDate = (GUSER_DCOLLECTION_RAW) => {
  //   const info = GUSER_DCOLLECTION_RAW; // Assuming info is in the format "11/2/2024"
  //   const [day, month, year] = info?.split('/'); // Split the date by "/"
  //   return `${day}-${month}-${year}`; // Return in "11-2-2021" format
  // };

  // useEffect(() => {
  //   const forest_landscape = async () => {
  //     try {
  //       const response = await fetch(
  //         `${baseApi}/jur_fd_ecozones?token=${token}`,
  //       );
  //       // console.log('data: ' + response);
  //       if (!response.ok) {
  //         //throw new Error('Network response was not ok');
  //       }

  //       const jsonData = await response.json();
  //       // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
  //       setFstLnd(jsonData.data || jsonData); // Update state with the fetched data
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   forest_landscape();
  // }, []);

  useEffect(() => {
    const forest_circle = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_circles?token=${token}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();

        //await jur_fd_circles_api();
        const data = await jur_fd_circles_list();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        setFstCircle(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_circle();
  }, []);

  useEffect(() => {
    const forest_division = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_divisions?token=${token}&&circle_code=${selectedForestCircle}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();

        //await jur_fd_divisions_api();
        const data = await jur_fd_divisions_list();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        setFstDivision(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_division();
  }, []);

  useEffect(() => {
    const forest_range = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_ranges?token=${token}&&division_code=${selectedForestDivision}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await jur_fd_ranges_api();
        const data = await jur_fd_ranges_list();
        setFstRange(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_range();
  }, []);

  useEffect(() => {
    const forest_beat = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_beats?token=${token}&&range_code=${selectedForestrange}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data

        //await jur_fd_beats_api();
        const data = await jur_fd_beats_list();
        setFstbeat(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_beat();
  }, []);

  useEffect(() => {
    const division = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_ad_divisions?token=${token}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();

        //await jur_ad_divisions_api();
        const jur_ad_divisions = await jur_ad_divisions_list();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        setDivision(jur_ad_divisions); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    division();
  }, []);

  useEffect(() => {
    const district = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_ad_districts?token=${token}&&division_code=${selectedDivision}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data

        //await jur_ad_districts_api();
        const data = await jur_ad_districts_list();
        setDistrict(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    district();
  }, []);

  useEffect(() => {
    const upazila = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_ad_upazillas?token=${token}&&district_code=${selectedDistrict}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await jur_ad_upazillas_api();
        const data = await jur_ad_upazillas_list();
        setUpazila(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    upazila();
  }, []);

  useEffect(() => {
    const survey = async () => {
      try {
        // const response = await fetch(`${baseApi}/mouza_types?token=${token}`);
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await mouza_types_api();
        const data = await mouza_types_list();
        setSurvey(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    survey();
  }, []);

  // useEffect(() => {
  //   const gener43_2021_core_list_funct = async () => {
  //     const data = await gener43_2021_core_list();
  //     setgener43_2021_core_list(data);
  //   };
  //   gener43_2021_core_list_funct();
  // }, []);

  // console.log(gener43_2021_core_listdata, 'new data');
  function getCurrentDateandTimeMain() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format: YYYY-MM-DD HH:mm:ss (no milliseconds)
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const beat_one_submit = async () => {
    // console.log(
    //   GUSER_DCOLLECTION_RAW,
    //   GUSER_USER,
    //   GUSER_USER_CELL,
    //   GUSER_BEAT_ADDRESS,
    //   GUSER_TLOC_FD_BEAT_POINT_LAT,
    //   GUSER_TLOC_FD_BEAT_POINT_LNG,
    //   FBLI_FA_TLOC_FD_BLOCK,
    //   mouza_name,
    //   sheet_number,
    //   selectedForest,
    //   selectedForestCircle,
    //   selectedForestDivision,
    //   selectedForestrange,
    //   selectedForestbeat,
    //   selectedDistrict,
    //   selectedUpazila,
    //   survey_type,
    //   md5,
    //   'uuid is here.......',
    // );

    const dataToInsert = {
      _uri: initialUUID,
      _creator_uri_user: uri,
      _creation_date: getCurrentDateandTimeMain(),
      _last_update_date: getCurrentDateandTimeMain(),
      GUSER_DCOLLECTION_RAW: GUSER_DCOLLECTION_RAW,
      GUSER_USER: GUSER_USER,
      GUSER_USER_CELL: GUSER_USER_CELL,
      GUSER_BEAT_ADDRESS: GUSER_BEAT_ADDRESS,
      GUSER_TLOC_FD_BEAT_POINT_LAT: GUSER_TLOC_FD_BEAT_POINT_LAT,
      GUSER_TLOC_FD_BEAT_POINT_LNG: GUSER_TLOC_FD_BEAT_POINT_LNG,
      FBLI_FA_TLOC_FD_BLOCK: FBLI_FA_TLOC_FD_BLOCK,
      mouza_name: mouza_name,
      sheet_number: sheet_number,

      FBLI_TLOC_ECOZONE: selectedForest,
      FBLI_FA_TLOC_FD_CIR: selectedForestCircle,
      FBLI_FA_TLOC_FD_DIVISION: selectedForestDivision,
      FBLI_FA_TLOC_FD_RANGE: selectedForestrange,
      FBLI_FA_TLOC_FD_BEAT: selectedForestbeat,
      FBLI_CA_TLOC_AD_DIVISION: selectedDivision,
      FBLI_CA_TLOC_AD_DISTRICT: selectedDistrict,
      FBLI_CA_UNION: FBLI_CA_UNION,

      selectedUpazila: selectedUpazila,
      survey_type: survey_type,
    };
    console.log(dataToInsert, 'beat one ....data...');
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInserUpazila = {
      _uri: initialUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      value: selectedUpazila,

      _ordinal_number: updatedOrdinalNumber,
    };

    // try {
    //   await gener43_2021_core_create(dataToInsert);
    //   await gener43_2021_fbli_ca_tloc_ad_upzilla_create(dataToInserUpazila);
    //   console.log('All data inserted successfully');
    // } catch (error) {
    //   console.error('Failed to insert data:', error.message || error); // Log the error message
    // }

    navigation.navigate('beatTwo', {uId: initialUUID});
  };

  // const addLive = async () => {
  //   console.log('clicked..');
  //   const datelala = getCurrentDateandTimeMain();

  //   const lastData = fbliData[fbliData.length - 1];

  //   console.log(lastData, 'last data fbli');

  //   // Ensure lastData is not empty
  //   if (!lastData) {
  //     console.error('No data available in plant27Dat.');
  //     return;
  //   }

  //   console.log('Before formData creation');
  //   const formData = new FormData();
  //   console.log('FormData created successfully');
  //   // Append values to formData
  //   formData.append('_uri', newUUID);
  //   console.log('Appended _uri:', newUUID);
  //   formData.append('_creator_uri_user', uri);
  //   console.log(
  //     formData.append('_creation_date', lastData.getCurrentDateandTimeMain()),
  //     'creation date...........',
  //   );
  //   console.log(
  //     formData.append(
  //       '_last_update_date',
  //       lastData.getCurrentDateandTimeMain(),
  //     ),
  //     'last update date....',
  //   );
  //   formData.append('_parent_auri', initialUUID);
  //   formData.append('_ordinal_number', oridianl);
  //   formData.append('_top_level_auri', initialUUID);
  //   formData.append('mouza1', lastData.mouza1);
  //   formData.append('survey_types', lastData.survey_types);
  //   formData.append('others_s_types', lastData.others_s_types);
  //   formData.append('sheet1', lastData.sheet1);
  //   formData.append('generated_note_name_40', lastData.generated_note_name_40);

  //   // Log formData
  //   // for (let [key, value] of formData.entries()) {
  //   //   console.log(`${key}: ${value}`);
  //   // }

  //   // Your API call or further processing of formData
  //   try {
  //     const response = await fetch(
  //       'http://192.168.0.187:8000/api/plant27_2021_core_create?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
  //       {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //       },
  //     );

  //     if (!response.ok) {
  //       console.error(`Error: ${response.status} - ${response.statusText}`);
  //     }

  //     console.log('Fetch response status:', response.status);
  //     const result = await response.json();
  //     console.log('Response JSON:', result);
  //   } catch (error) {
  //     console.error('Error during the API call:', error);
  //   }
  // };

  // console.log('fstDivison:', survey);
  // console.log('Selected Forest division:', selectedDistrict);
  const tableData = [];

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beat Information</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.headerLabel}>
          1. General Information (প্রাথমিক তথ্য)
        </Text>

        <Text style={styles.label}>
          1a. Information Collection date (তথ্য সংগ্রহের তারিখ):
        </Text>
        {/* <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={styles.input}
            value={GUSER_DCOLLECTION_RAW}
            placeholder="Select date and time"
            editable={false} // Prevent manual editing
            pointerEvents="none" // Ensure the input doesn't focus, acting like a button
            placeholderTextColor="black"
          />
        </TouchableOpacity>

        {showPicker && (
          <MonthPicker
            onChange={onChange}
            value={date}
            minimumDate={new Date()}
            maximumDate={new Date(2025, 5)}
            locale="en"
          />
        )} */}

        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Text style={styles.input}>
            {GUSER_DCOLLECTION_RAW || 'Select date'}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <MonthPicker
            onChange={handleValueChange}
            value={new Date()} // default value for picker, can be adjusted
            minimumDate={new Date(2000, 0)} // optional
            maximumDate={new Date(2030, 11)} // optional
            mode="short" // or "full"
          />
        )}

        <Text style={styles.label}>
          1b. Name of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি কর্মকর্তার
          নাম):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here SFPC Officer"
          value={GUSER_USER} // This will initially be an empty string
          onChangeText={text => setInputValue2(text)} // Updates inputValue2 with user input
          placeholderTextColor="black" // Optional: placeholder color
        />

        <Text style={styles.label}>
          1.c. Mobile number Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
          কর্মকর্তার মোবাইল নং):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here SFPC Officer Mobile"
          value={GUSER_USER_CELL}
          onChangeText={text => setGUSER_USER_CELL(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          1.d. Address of the Office (Beat/Camp/SFPC) (বিট/ক্যাম্প/এসএফপিসি
          অফিসের ঠিকানা):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Address"
          value={GUSER_BEAT_ADDRESS}
          onChangeText={text => setGUSER_BEAT_ADDRESS(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          1.e. GPS Location of the Beat/Camp/SFPC Office (বিট/ক্যাম্প/এসএফপিসি
          অফিসের জিপিএস রিডিং): Latitude:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here GPS Location"
          value={GUSER_TLOC_FD_BEAT_POINT_LAT}
          onChangeText={text => setGUSER_TLOC_FD_BEAT_POINT_LAT(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>Longitude:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Longitude"
          value={GUSER_TLOC_FD_BEAT_POINT_LNG}
          onChangeText={text => setGUSER_TLOC_FD_BEAT_POINT_LNG(text)}
          placeholderTextColor="black"
        />

        {/* Section 2 */}
        <Text style={styles.headerLabel}>
          2. Location Data (Beat/Camp/SFPC Information) (এলাকার তথ্য)
        </Text>

        <Text style={styles.label}>Forest Landscape (বনের ধরণ):</Text>
        <Dropdown
          style={styles.input}
          data={fstLnd}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="id" // Use the 'id' as the value field
          placeholder="Select forest type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForest}
          onChange={item => setSelectedForest(item.value)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>
          2.1. Forest Administration Information (বন প্রশাসনিক তথ্য)
        </Text>
        <Text style={styles.label}>2.1.a. Forest Circle (বন অঞ্চল):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstCircle}
          labelField="name"
          valueField="id"
          placeholder="Select forest Circle"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestCircle}
          onChange={item => setSelectedForestCircle(item.id)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.1.b. Forest Division (বন বিভাগ):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstDivision}
          labelField="name"
          valueField="code"
          placeholder="Select forest division"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestDivision}
          onChange={item => setSelectedForestDivision(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.1.c. Range/SFNTC (রেঞ্জ/এফইএনটিসি):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstrange}
          labelField="name"
          valueField="code"
          placeholder="Select forest range"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestrange}
          onChange={item => setSelectedForestRange(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>
          2.1.d. Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি):
        </Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstbeat}
          labelField="name"
          valueField="id"
          placeholder="Select forest beat"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestbeat}
          onChange={item => setSelectedForestBeat(item.id)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.1.d.1.Block (ব্লক):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Block"
          value={FBLI_FA_TLOC_FD_BLOCK}
          onChangeText={text => setFBLI_FA_TLOC_FD_BLOCK(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>2.1.d.2.Char (চর):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Char"
          value={FBLI_FA_TLOC_FD_CHAR}
          onChangeText={text => setFBLI_FA_TLOC_FD_CHAR(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          2.2 Civil Administrative Information (নাগরিক প্রশাসনিক তথ্য)
        </Text>

        <Text style={styles.label}>2.2.a. Division (বিভাগ):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={division}
          labelField="name"
          valueField="code"
          placeholder="Select Division type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedDivision}
          onChange={item => setSelectedDivision(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.2.b. District (জেলা):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={district}
          labelField="name"
          valueField="code"
          placeholder="Select District type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedDistrict}
          onChange={item => setSelectedDistrict(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.2.c. Upazila (উপজেলা):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={upazila}
          labelField="name"
          valueField="code"
          placeholder="Select Upazila type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedUpazila}
          onChange={item => setSelectedUpazila(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        <Text style={styles.label}>2.2.d. Union (ইউনিয়ন):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Union"
          value={FBLI_CA_UNION}
          onChangeText={text => setFBLI_CA_UNION(text)}
          placeholderTextColor="black"
        />
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label} numberOfLines={5} ellipsizeMode="tail">
            2.3. Mouza Information (মৌজার তথ্যাদি)
          </Text>
          <View style={styles.addButton}>
            <Button title="Add New"></Button>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>2.3.a. Name of Mouza (মৌজার নাম)</Text>

          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={FBLI_FA_TLOC_FD_BLOCK}
            onChangeText={text => setFBLI_FA_TLOC_FD_BLOCK(text)}
          />

          <Text style={styles.label}>2.3.b. Survey Types (সার্ভের ধরণ)</Text>
          <Dropdown
            style={styles.input} // Reusing the input style for consistency
            data={survey}
            labelField="name"
            valueField="code"
            placeholder="Select survey type"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={survey_type}
            onChange={item => setsurvey_type(item.code)}
            dropdownStyle={{
              backgroundColor: 'white', // Ensure dropdown has a visible background
              borderRadius: 8, // Rounded corners for consistency
            }}
            itemTextStyle={{
              color: 'black', // Set item text color to black for visibility
              fontSize: 16, // Set an appropriate font size
            }}
          />

          <Text style={styles.label}>2.3.c. Sheet Number (সিট নম্বর)</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={FBLI_FA_TLOC_FD_BLOCK}
            onChangeText={text => setFBLI_FA_TLOC_FD_BLOCK(text)}
          />
        </View> */}

        <View style={styles.mcontainer}>
          <View style={styles.mtxtNbutton}>
            <Text style={styles.label} numberOfLines={5} ellipsizeMode="tail">
              2.3. Mouza Information (মৌজার তথ্যাদি)
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>
                Name of Mouza <Text>(মৌজার নাম)</Text>{' '}
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Survey Types (সার্ভের ধরণ)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Sheet Number (সিট নম্বর)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Actions</Text>
            </View>

            {/* Data Rows */}
            {fbliData.length > 0 ? (
              <FlatList
                data={fbliData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.MOUZA1}</Text>
                    <Text style={styles.cellContent}>{item.SURVEY_TYPES}</Text>
                    <Text style={styles.cellContent}>{item.SHEET1}</Text>
                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.editButtonStyle}>
                        <Text style={styles.buttonTextStyle}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteButtonStyle}>
                        <Text style={styles.buttonTextStyle}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
          </View>

          {/* Modal Section */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} // Close modal when back button is pressed
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.label}>
                    2.3.a. Name of Mouza (মৌজার নাম)
                  </Text>
                  <TextInput
                    style={styles.minput}
                    placeholder="Type here Mouza"
                    value={mouza_name}
                    onChangeText={text => setmouza_name(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    2.3.b. Survey Types (সার্ভের ধরণ)
                  </Text>
                  <Dropdown
                    style={styles.input}
                    data={survey}
                    labelField="name"
                    valueField="code"
                    placeholder="Select survey type"
                    placeholderStyle={{color: 'black', fontSize: 16}}
                    selectedTextStyle={{color: 'black', fontSize: 16}}
                    value={survey_type}
                    onChange={item => setsurvey_type(item.code)}
                    dropdownStyle={{
                      backgroundColor: 'white',
                      borderRadius: 8,
                    }}
                    itemTextStyle={{
                      color: 'black',
                      fontSize: 16,
                    }}
                  />

                  <Text style={styles.label}>
                    2.3.c. Sheet Number (সিট নম্বর)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Sheet Number"
                    value={sheet_number}
                    onChangeText={text => setsheet_number(text)}
                    placeholderTextColor="black"
                  />

                  {/* Close Button */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 5,
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        padding: 10,
                        backgroundColor: '#007AFF', // Default iOS button color. Use '#2196F3' for Android.
                        borderRadius: 5,
                      }}
                      onPress={addNewGenerateNewUUID}>
                      <Text style={{color: 'white'}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        padding: 10,
                        backgroundColor: '#007AFF', // Same default color as above
                        borderRadius: 5,
                      }}
                      onPress={() => setModalVisible(false)}>
                      <Text style={{color: 'white'}}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => beat_one_submit()}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 8,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   button: {
//     marginBottom: 50,
//   },
//   customButton: {
//     backgroundColor: '#C0C0C0', // Button background color
//     paddingVertical: 10, // Vertical padding
//     paddingHorizontal: 20, // Horizontal padding
//     borderBottomRightRadius: 5,
//     borderTopRightRadius: 5,
//     alignItems: 'center',
//     borderColor: 'gray',
//     borderWidth: 1,
//     height: 48,
//   },
//   infoBox: {
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding,
//     ...CommonStyles.shadow,
//     padding: Sizes.fixPadding + 2.0,
//     marginTop: Sizes.fixPadding,
//   },
// });

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
  },

  // label: {
  //   fontSize: 16, // Medium font size
  //   marginBottom: 8,
  //   color: 'black',
  //   fontWeight: 'bold', // Bold to match the previous design
  // },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10, // Padding for comfortable input
    borderRadius: 8, // Rounded corners for a modern look
    marginBottom: 15,
    backgroundColor: 'white', // Background for the input field
    ...CommonStyles.shadow, // Apply subtle shadow for elevation
    color: 'black',
  },
  button: {
    marginBottom: 50,
    marginTop: 5,
  },
  customButton: {
    backgroundColor: '#C0C0C0', // Button background color
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    height: 48,
  },
  infoBox: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    ...CommonStyles.shadow,
    padding: Sizes.fixPadding + 2.0,
    marginTop: Sizes.fixPadding,
  },
  txtNbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 5,
    borderRadius: 5,
  },

  label: {
    flex: 1, // Make the label take all available space
    marginRight: 10, // Add some margin to separate from the button

    fontSize: 16, // Medium font size
    marginBottom: 8,
    color: 'black',
    fontWeight: 'bold', // Bold to match the previous design
  },

  headerLabel: {
    fontSize: 20, // Medium font size
    marginBottom: 8,
    color: 'black',
    fontWeight: 'bold', // Bold to match the previous design
    flex: 1, // This makes the label take up available space
    flexShrink: 1,
  },

  buttonText: {
    borderRadius: 5,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white', // Background color for the header
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // Offset for iOS
    shadowOpacity: 0.2, // Opacity for iOS
    shadowRadius: 2, // Radius for iOS
    width: '100%',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10, // Space between back arrow and title
  },

  mcontainer: {
    flex: 1,
    padding: 16,
  },
  mtxtNbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mabel: {
    fontSize: 16,
    color: 'black',
  },
  minput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  maddButton: {
    marginLeft: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Adds shadow for Android
  },
  addButton: {
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#008CBA', // Set your desired background color
    padding: 10, // Add some padding
  },
  buttonText: {
    color: 'white', // Set the text color
    textAlign: 'center', // Center the text
  },

  tableContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  headerRowContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerLabel: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  dataRowContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  cellContent: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  actionButtons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  editButtonStyle: {
    backgroundColor: '#4CAF50',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  deleteButtonStyle: {
    backgroundColor: '#F44336',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 14,
  },
  noDataContainer: {
    padding: 16,
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 16,
    color: 'gray',
  },
  headerSeparator: {
    alignSelf: 'center',
    color: 'black',
    // Adjusted margin for better spacing
    fontWeight: 'bold',
    // Increased font size for consistency
  },
  rowSeparator: {
    alignSelf: 'center',
    color: 'black',
    marginHorizontal: 8, // Adjusted margin for better spacing
    fontSize: 16, // Increased font size for consistency
  },
});

export default beatOne;
