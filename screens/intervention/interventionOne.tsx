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
import useTrace from '../../hooks/useTrace';
import {
  jur_ad_districts_api,
  jur_ad_districts_list,
  jur_ad_divisions_api,
  jur_ad_divisions_list,
  jur_ad_upazillas_api,
  jur_ad_upazillas_list,
  jur_fd_beats_api,
  jur_fd_beats_list,
  jur_fd_circles_api,
  jur_fd_circles_list,
  jur_fd_divisions_api,
  jur_fd_divisions_list,
  jur_fd_ecozones_api,
  jur_fd_ecozones_list,
  jur_fd_ranges_api,
  jur_fd_ranges_list,
  mouza_types_api,
  mouza_types_list,
  plant27_2021_core_create,
  plant27_2021_location_data_m_sh1_create,
  plant27_2021_location_data_m_sh1_list,
} from '../../database/sqlDatabase';
import useUUID from '../../hooks/useUUID';
import {getCurrentDateandTime} from '../../hooks/dateUtils';
import useCreateUri from '../../hooks/useCreatUri';

const interventionOne = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [fstLnd, setFstLnd] = useState([]);
  const [fstCircle, setFstCircle] = useState([]);
  const [fstDivision, setFstDivision] = useState([]);
  const [fstrange, setFstRange] = useState([]);
  const [fstbeat, setFstbeat] = useState([]);

  const [division, setDivision] = useState([]);
  const [district, setDistrict] = useState([]);
  const [upazila, setUpazila] = useState([]);

  const [survey, setSurvey] = useState([]);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [inputValue8, setInputValue8] = useState('');
  const [inputValue9, setInputValue9] = useState('');
  const [inputValue10, setInputValue10] = useState('');
  const [inputValue11, setInputValue11] = useState('');
  const [inputValue12, setInputValue12] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedForestCircle, setSelectedForestCircle] = useState(null);
  const [selectedForestDivision, setSelectedForestDivision] = useState(null);
  const [selectedForestrange, setSelectedForestRange] = useState(null);
  const [selectedForestbeat, setSelectedForestBeat] = useState(null);

  const [selectedSurvey, setselectedSurvey] = useState(null);

  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedUpazila, setSelectedUpazila] = useState(null);
  const [testData, setTestData] = useState([]);
  const {initialUUID, generateUUID} = useUUID();
  const [newUUID, setNewUUID] = useState('');
  const [oridianl, setoridianl] = useState(0);
  const uri = useCreateUri();

  const navigation = useNavigation();

  const {rankOptions, selectedRank, setSelectedRank} = useTrace();
  console.log(rankOptions, '  Rank');

  const {md5} = useUUID();
  const uuid = md5;
  console.log(uuid, 'uuid-page 1');

  useEffect(() => {
    const forest_landscape = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_ecozones?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await jur_fd_ecozones_api();
        const data = await jur_fd_ecozones_list();
        setFstLnd(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_landscape();
  }, []);

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
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await jur_fd_circles_api();
        const data = await jur_fd_circles_list();
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
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await jur_fd_divisions_api();
        const data = await jur_fd_divisions_list();
        setFstDivision(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_division();
  }, [selectedForestCircle]);

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
  }, [selectedForestDivision]);

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
        // await jur_fd_beats_api();
        const data = await jur_fd_beats_list();
        setFstbeat(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_beat();
  }, [selectedForestrange]);

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
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data

        //await jur_ad_divisions_api();
        const data = await jur_ad_divisions_list();
        setDivision(data); // Update state with the fetched data
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
        await jur_ad_districts_api();
        const data = await jur_ad_districts_list();
        setDistrict(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    district();
  }, [selectedDivision]);

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
        // await jur_ad_upazillas_api();
        const data = await jur_ad_upazillas_list();
        setUpazila(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    upazila();
  }, [selectedDistrict]);

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
        await mouza_types_api();
        const data = await mouza_types_list();
        setSurvey(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    survey();
  }, []);

  const onDocumentPress = async () => {
    const res = await DocumentPicker.pick({
      type: ['application/*', 'text/*'], // General MIME types to capture all related formats
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Hide the picker after selection (Android closes automatically)
    setDate(currentDate);
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
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

  const interventionOneSubmit = async () => {
    console.log('Input Values:', uuid);
    console.log('inputValue1:', inputValue1);
    console.log('inputValue2:', inputValue2);
    console.log('inputValue3:', inputValue3);
    console.log('inputValue4:', inputValue4);
    console.log('inputValue5:', inputValue5);
    console.log('inputValue6:', inputValue6);
    console.log('inputValue7:', inputValue7);
    console.log('inputValue8:', inputValue8);
    console.log('inputValue9:', inputValue9);

    console.log('\nSelected Values:');
    console.log('selectedForest:', selectedForest);
    console.log('selectedForestCircle:', selectedForestCircle);
    console.log('selectedForestDivision:', selectedForestDivision);
    console.log('selectedForestRange:', selectedForestrange);
    console.log('selectedForestBeat:', selectedForestbeat);
    console.log('selectedSurvey:', selectedSurvey);
    console.log('selectedDivision:', selectedDivision);
    console.log('selectedDistrict:', selectedDistrict);
    console.log('selectedUpazila:', selectedUpazila);

    const dataToInsert = {
      _uri: uuid,
      GUSER_DCOLLECTION_RAW: inputValue1,
      GUSER_TUSER: inputValue2,
      GUSER_TUSER_CELL: inputValue3,
      GUSER_TUSER_EMAIL: inputValue4,
      LOCATION_DATA_ECOZONE: selectedForest,
      LOCATION_DATA_FOREST_AD_TLOC_FD_CIR: selectedForestCircle,
      LOCATION_DATA_FOREST_AD_TLOC_FD_DIVISION: selectedForestDivision,
      LOCATION_DATA_FOREST_AD_TLOC_FD_RANGE: selectedForestrange,
      LOCATION_DATA_FOREST_AD_TLOC_FD_BEAT: selectedForestbeat,
      LOCATION_DATA_FOREST_AD_TLOC_FD_BLOCK: inputValue5,
      LOCATION_DATA_FOREST_AD_TLOC_FD_CHAR: inputValue6,

      LOCATION_DATA_CA_TLOC_AD_DIVISION: selectedDivision,
      LOCATION_DATA_CA_TLOC_AD_DISTRICT: selectedDistrict,
      LOCATION_DATA_CA_UNION: inputValue7,
      LOCATION_DATA_CA_VILLAGE: inputValue8,

      // FBLI_TLOC_ECOZONE: selectedForest,
      // FBLI_FA_TLOC_FD_CIR: selectedForestCircle,
      // FBLI_FA_TLOC_FD_DIVISION: selectedForestDivision,
      // FBLI_FA_TLOC_FD_RANGE: selectedForestrange,
      // FBLI_FA_TLOC_FD_BEAT: selectedForestbeat,
      // FBLI_CA_TLOC_AD_DIVISION: selectedDivision,
      // FBLI_CA_TLOC_AD_DISTRICT: selectedDistrict,
      // FBLI_CA_UNION: FBLI_CA_UNION,

      // selectedUpazila: selectedUpazila,
      // survey_type: survey_type,
    };

    try {
      await plant27_2021_core_create(dataToInsert);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error); // Log the error message
    }

    navigation.navigate('interventionTwo', {uId: initialUUID});
  };

  const tableData = [];

  const addNew = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInsertadd = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      mouza1: inputValue10,
      survey_types: selectedSurvey,
      sheet1: inputValue11,
      plot_no: inputValue12,
      _ordinal_number: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd, 'datato insert');

    try {
      await plant27_2021_location_data_m_sh1_create(dataToInsertadd);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  //-----------------just to check

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await plant27_2021_location_data_m_sh1_list();
  //     setTestData(data);
  //   };
  //   getData();
  // }, []);

  // setTimeout(() => console.log(testData, 'test data....'), 5000);

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Intervention Planning</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.headerLabel}>
          Part B: Plantation Intervention Planning of the Beat (বনায়ন কার্যক্রম
          পরিকল্পনা)
        </Text>
        <Text style={styles.headerLabel}>
          {' '}
          1. General Information (প্রাথমিক তথ্য)
        </Text>

        <Text style={styles.label}>
          1a. Information Collection date (তথ্য সংগ্রহের তারিখ):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChangeText={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Collection date"
        />

        <Text style={styles.label}>
          1.b. Name of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি কর্মকর্তার
          নাম):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue2}
          onChangeText={text => setInputValue2(text)}
          placeholderTextColor="black"
          placeholder="select  Beat/Camp/SFPC Officer"
        />

        <Text style={styles.label}>
          1.c. Mobile number Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
          কর্মকর্তার মোবাইল নং):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue3}
          onChangeText={text => setInputValue3(text)}
          placeholderTextColor="black"
          placeholder="select Mobile number Beat"
        />

        <Text style={styles.label}>
          1.d. Email address of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
          কর্মকর্তার ইমেল):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue4}
          onChangeText={text => setInputValue4(text)}
          placeholderTextColor="black"
          placeholder="select Mobile number Beat"
        />

        <Text style={styles.label}>
          2. Location Data (Beat/Camp/SFPC Information) (এলাকার তথ্য)
        </Text>

        <Text style={styles.label}>Forest Landscape (বনের ধরণ):</Text>

        <Dropdown
          style={styles.input}
          data={fstLnd}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="id" // Use the 'id' as the value field
          placeholder="Select Landscape type"
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

        <Text style={styles.label}>2.1.d.1. Block (ব্লক):</Text>

        <TextInput
          style={styles.input}
          value={inputValue5}
          onChangeText={text => setInputValue5(text)}
          placeholderTextColor="black"
          placeholder="select Block"
        />

        <Text style={styles.label}>2.1.d.2. Char (চর):</Text>

        <TextInput
          style={styles.input}
          value={inputValue6}
          onChangeText={text => setInputValue6(text)}
          placeholderTextColor="black"
          placeholder="select Char"
        />

        <Text style={styles.label}>
          2.2. Civil Administrative Information (নাগরিক প্রশাসনিক তথ্য)
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
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          placeholder="select Union"
        />

        <Text style={styles.label}>2.2.e. Village (গ্রাম):</Text>

        <TextInput
          style={styles.input}
          value={inputValue8}
          onChangeText={text => setInputValue8(text)}
          placeholderTextColor="black"
          placeholder="select Village"
        />
        <View style={styles.txtNbutton}>
          <Text style={styles.headerLabel}>
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
            <Text style={styles.headerLabel}>Name of Mouza (মৌজার নাম)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Survey Types (সার্ভের ধরণ)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Sheet Number (সিট নম্বর)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Plot Number (দাগ নম্বর)</Text>
          </View>

          {/* Data Rows */}
          {tableData.length > 0 ? (
            <FlatList
              data={tableData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.dataRowContainer}>
                  <Text style={styles.cellContent}>{item.mouzaName}</Text>
                  <Text style={styles.cellSeparator}>|</Text>
                  <Text style={styles.cellContent}>{item.surveyType}</Text>
                  <Text style={styles.cellSeparator}>|</Text>
                  <Text style={styles.cellContent}>{item.sheetNumber}</Text>
                  <Text style={styles.cellSeparator}>|</Text>
                  <Text style={styles.cellContent}>{item.plotNumber}</Text>
                </View>
              )}
            />
          ) : (
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>No data available</Text>
            </View>
          )}
        </View>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Text style={styles.modalTitle}>Add Mouza Information</Text>

                {/* Form inside modal */}
                <View style={styles.box}>
                  <Text style={styles.label}>
                    2.3.a. Name of Mouza (মৌজার নাম)
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={inputValue10}
                    placeholder="Enter Mouza Name"
                    onChangeText={text => setInputValue10(text)}
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
                    value={selectedSurvey}
                    onChange={item => setselectedSurvey(item.code)}
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
                    value={inputValue11}
                    placeholder="Enter Sheet Number"
                    onChangeText={text => setInputValue11(text)}
                    placeholderTextColor="black"
                    placeholder="select"
                  />

                  <Text style={styles.label}>
                    2.3.d. Plot Number (দাগ নম্বর)
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={inputValue12}
                    placeholder="Enter Plot Number"
                    onChangeText={text => setInputValue12(text)}
                  />

                  {/* Close modal button */}
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      margin: 5,
                    }}>
                    <Button title="Save" onPress={addNew} />
                    <Button
                      title="Close"
                      onPress={() => setModalVisible(false)}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionOneSubmit()}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

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
  },
  customButton: {
    backgroundColor: '#C0C0C0', // Button background color
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5,
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
  // txtNbutton: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  box: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    marginTop: 5,
  },

  txtNbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  header: {
    marginTop: 20,
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10, // Space between back arrow and title
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },

  addButton: {
    marginBottom: 10,
    borderRadius: 10,
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

export default interventionOne;
