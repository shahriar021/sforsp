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
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
import {
  age_plantations_api,
  age_plantations_list,
  directions_api,
  directions_list,
  inundations_api,
  inundations_list,
  month_inun_lists_api,
  month_inun_lists_list,
  plant27_2021_core_update5,
  planting_modes_api,
  planting_modes_list,
  repro_types_api,
  repro_types_list,
  sources_api,
  sources_list,
  yes_no_lists_api,
  yes_no_lists_list,
} from '../../database/sqlDatabase';

const interventionFive = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [inundation, setInundation] = useState([]);
  const [inundationMonth, setInundationMonth] = useState([]);
  const [agePlantation, setAgePlantation] = useState([]);
  const [yesNo, setYesNo] = useState([]);
  const [directions, setDirections] = useState([]);
  const [planting_modes, setPlantingModes] = useState([]);
  const [repro_types, setRepro] = useState([]);
  const [slurce, setSource] = useState([]);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedRepro, setSelectedRepro] = useState(null);
  const [selectedInundation, setSelectedInundation] = useState(null);
  const [selectedInundationMonth, setSelectedInundationMonth] = useState(null);
  const [selectedAgePlantation, setSelectedAgePlantation] = useState(null);
  const [selectedYesNo, setSelectedYesNo] = useState(null);
  const [selectedDerectins, setSelectedDerections] = useState(null);
  const [selectedDerectinsWind, setSelectedDerectionsWind] = useState(null);
  const [selectedDerectinsAllDirect, setSelectedDerectionsAllDirect] =
    useState(null);
  const [selectedPlantingModes, setSelectedPlantingModes] = useState(null);
  // const [selectedRepro, setSelectedRepro] = useState(null);
  // const [selectedSource, setSelectedSource] = useState(null);

  // const [speciesName, setSpeciesName] = useState('');
  // const [selectedRepro, setSelectedRepro] = useState(null);
  const [selectedSource, setSelectedSource] = useState(null);
  const [seedlingsRequired, setSeedlingsRequired] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const {uuid} = route.params;
  const uid = uuid;
  console.log(uid, 'uuid in page 5');

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

  useEffect(() => {
    const intervention_list = async () => {
      try {
        // const response = await fetch(`${baseApi}/inundations?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await inundations_api();
        const data = await inundations_list();
        setInundation(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    intervention_list();
  }, []);

  useEffect(() => {
    const month_inun_lists = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/month_inun_lists?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await month_inun_lists_api();
        const data = await month_inun_lists_list();
        setInundationMonth(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    month_inun_lists();
  }, []);

  useEffect(() => {
    const age_plantations = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/age_plantations?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await age_plantations_api();
        const data = await age_plantations_list();
        setAgePlantation(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    age_plantations();
  }, []);

  useEffect(() => {
    const yes_no_lists = async () => {
      try {
        // const response = await fetch(`${baseApi}/yes_no_lists?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await yes_no_lists_api();
        const data = await yes_no_lists_list();
        setYesNo(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    yes_no_lists();
  }, []);

  useEffect(() => {
    const directions = async () => {
      try {
        // const response = await fetch(`${baseApi}/directions?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await directions_api();
        const data = await directions_list();
        setDirections(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    directions();
  }, []);

  useEffect(() => {
    const directions = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/planting_modes?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await planting_modes_api();
        const data = await planting_modes_list();
        setPlantingModes(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    directions();
  }, []);

  useEffect(() => {
    const repro_types = async () => {
      try {
        // const response = await fetch(`${baseApi}/repro_types?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await repro_types_api();
        const data = await repro_types_list();
        setRepro(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    repro_types();
  }, []);

  useEffect(() => {
    const sources = async () => {
      try {
        // const response = await fetch(`${baseApi}/sources?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await sources_api();
        const data = await sources_list();
        setSource(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    sources();
  }, []);

  const interventionFiveSubmit = async () => {
    console.log(
      // inputValue1,
      // inputValue2,
      // inputValue3,
      // inputValue4,
      // inputValue5,

      selectedRepro,
      selectedInundation,
      selectedInundationMonth,
      selectedAgePlantation,
      selectedYesNo,
      selectedDerectins,
      selectedDerectinsWind,
      selectedDerectinsAllDirect,
    );

    const dataToInsert = {
      MAGROVE_PLANT_MAN_AFF_CLAY_LAYER: inputValue1,
      MAGROVE_PLANT_MAN_AFF_PIONEERS_SP: inputValue2,
      MAGROVE_PLANT_MAN_AFF_LEVEL_INUND: inputValue3,

      MAGROVE_PLANT_MANGROVE_ENRICH_INUNDATION_MONTH: selectedInundationMonth,
      MAGROVE_PLANT_MANGROVE_ENRICH_PLANTATION_AGE: selectedAgePlantation,
      MAGROVE_PLANT_CRABS_HOLE: selectedYesNo,
      MAGROVE_PLANT_WAVE_DIR: selectedDerectins,
      MAGROVE_PLANT_WIND_DIR: selectedDerectinsWind,
      MAGROVE_PLANT_FACING_ISLAND: inputValue4,
      MAGROVE_PLANT_FACING_DIR: selectedDerectinsAllDirect,
      PLANTING_PLAN_BPLANTING: selectedPlantingModes,
      PLANTING_PLAN_GPLANTING_SPACING: inputValue5,
    };

    try {
      await plant27_2021_core_update5(uid, dataToInsert);
      console.log('All data updated successfully');
    } catch (error) {
      console.error('Failed to updated data:', error.message || error); // Log the error message
    }

    navigation.navigate('interventionSix' as never, {uuid: uid});
  };

  const tableData = [];

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
          7. Mangrove Plantation (উপকূলীয় বনায়নের ক্ষেত্রে)
        </Text>
        <Text style={styles.label}>For Mangrove Afforestation</Text>

        <Text style={styles.label}>
          7.1.Depth of Clay Layer (cm) (কাদার গভীরতা (সে.মি.)):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChangeText={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Depth of Clay Layer"
        />

        <Text style={styles.label}>
          7.2.Existence of indicator species, Uri grass (সূচক প্রজাতি উরিঘাস আছে
          কি?):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue2}
          onChangeText={text => setInputValue2(text)}
          placeholderTextColor="black"
          placeholder="select Existence of indicator species, Uri grass"
        />

        <Text style={styles.label}>
          7.3. Level of Inundation (বনায়নের স্থানটির জলমগ্নতার ব্যাপি):
        </Text>

        <Dropdown
          style={styles.input}
          data={inundation}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select Inundation type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedInundation}
          onChange={item => setSelectedInundation(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>Mangrove Enrichment</Text>

        <Text style={styles.label}>
          7.4. Months of Inundation (বনায়নের স্থানটির জলমগ্নতার স্থায়িত্ব কত
          মাস?):
        </Text>

        <Dropdown
          style={styles.input}
          data={inundationMonth}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select Months of Inundation type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedInundationMonth}
          onChange={item => setSelectedInundationMonth(item.code)} // Update the selected value based on 'id'
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
          7.5. Age of existing plantation, for mangrove Enrichment Plantation (
          প্রস্তাবিত এনরচিমন্টে বনায়নের জায়গায় বনায়ন থাকলে তা কত বছর পূর্বের):
        </Text>

        <Dropdown
          style={styles.input}
          data={agePlantation}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select agePlantation type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedAgePlantation}
          onChange={item => setSelectedAgePlantation(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>Optional Information</Text>

        <Text style={styles.label}>
          7.6 Presence of crabs hole/ripple marks (বনায়নের স্থানটিতে কাঁকড়ার
          গর্ত / রিপল চিহ্ন আছে কি?):
        </Text>

        <Dropdown
          style={styles.input}
          data={yesNo}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes No type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedYesNo}
          onChange={item => setSelectedYesNo(item.code)} // Update the selected value based on 'id'
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
          7.7. Tidal / wave direction (form) (ঢেউ এর দিক):
        </Text>

        <Dropdown
          style={styles.input}
          data={directions}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select directions type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedDerectins}
          onChange={item => setSelectedDerections(item.code)} // Update the selected value based on 'id'
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
          7.8. Wind Direction (from) (বাতাসের দিক):
        </Text>

        <Dropdown
          style={styles.input}
          data={directions}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select directions type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedDerectinsWind}
          onChange={item => setSelectedDerectionsWind(item.code)} // Update the selected value based on 'id'
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
          7.9. Facing of the Island (বনায়নের স্থান বা দ্বীপটি কোনমূখী):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue4}
          onChangeText={text => setInputValue4(text)}
          placeholderTextColor="black"
          placeholder="Facing of the Island"
        />

        <Text style={styles.label}>
          7.10. Location of proposed plantation (N/E/S/W) side of the Island
          (দ্বীপের কোন পার্শ্বে প্রস্তাবিত বনায়ন এলাকার অবস্থান?):
        </Text>

        <Dropdown
          style={styles.input}
          data={directions}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select directions type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedDerectinsAllDirect}
          onChange={item => setSelectedDerectionsAllDirect(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>8. Planting Plan ( বনায়ন পরিকল্পনা)</Text>

        <Text style={styles.label}>
          8.1. Planting Mode/Type of root stock ( চারা রোপন হবে, না কি বীজ
          ছিটানো হবে?):
        </Text>

        <Dropdown
          style={styles.input}
          data={planting_modes}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select planting modes type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedPlantingModes}
          onChange={item => setSelectedPlantingModes(item.code)} // Update the selected value based on 'id'
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
          8.2. Seedling spacing (m) in plantation (চারা রোপনের দুরত্ব):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue5}
          onChangeText={text => setInputValue5(text)}
          placeholderTextColor="black"
          placeholder="select Seedling spacing"
        />
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.headerLabel}>
            8.3.Preferred Species list (নির্বাচিত প্রজাতিসমূহ):
          </Text>
          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>8.3.1.Name of Species</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>8.3.2.Reproductive material type</Text>
          <Dropdown
            style={styles.input}
            data={repro_types}
            labelField="name" // Display the 'name' field in the dropdown
            valueField="code" // Use the 'id' as the value field
            placeholder="Select history type"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedRepro}
            onChange={item => setSelectedRepro(item.value)} // Update the selected value based on 'id'
            dropdownStyle={{
              backgroundColor: 'white', // Ensure dropdown has a visible background
              borderRadius: 8, // Rounded corners for consistency
            }}
            itemTextStyle={{
              color: 'black', // Set item text color to black for visibility
              fontSize: 16, // Set an appropriate font size
            }}
          />

          <Text style={styles.label}>8.3.3.Source of planting materials</Text>
          <Dropdown
            style={styles.input}
            data={slurce}
            labelField="name" // Display the 'name' field in the dropdown
            valueField="code" // Use the 'id' as the value field
            placeholder="Select history type"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedSource}
            onChange={item => setSelectedSource(item.value)} // Update the selected value based on 'id'
            dropdownStyle={{
              backgroundColor: 'white', // Ensure dropdown has a visible background
              borderRadius: 8, // Rounded corners for consistency
            }}
            itemTextStyle={{
              color: 'black', // Set item text color to black for visibility
              fontSize: 16, // Set an appropriate font size
            }}
          />

          <Text style={styles.label}>8.3.4. Seedlings required (per ha)</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />
        </View> */}

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.headerLabel}>
              8.3.Preferred Species list (নির্বাচিত প্রজাতিসমূহ):
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
              <Text style={styles.headerLabel}>Name of Species</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Reproductive Material Type</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Source of Planting Materials
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Seedlings Required (per ha)
              </Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.speciesName}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.reproductiveType}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.source}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.seedlingsRequired}
                    </Text>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
          </View>

          {/* Modal for preferred species inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>Add Preferred Species</Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>8.3.1. Name of Species</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue5}
                      placeholder="Enter Species Name"
                      onChangeText={text => setInputValue5(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      8.3.2. Reproductive Material Type
                    </Text>
                    <Dropdown
                      style={styles.input}
                      data={repro_types}
                      labelField="name"
                      valueField="code"
                      placeholder="Select Reproductive Type"
                      placeholderStyle={{color: 'black', fontSize: 16}}
                      selectedTextStyle={{color: 'black', fontSize: 16}}
                      value={selectedRepro}
                      onChange={item => setSelectedRepro(item.code)}
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
                      8.3.3. Source of Planting Materials
                    </Text>
                    <Dropdown
                      style={styles.input}
                      data={slurce}
                      labelField="name"
                      valueField="code"
                      placeholder="Select Source"
                      placeholderStyle={{color: 'black', fontSize: 16}}
                      selectedTextStyle={{color: 'black', fontSize: 16}}
                      value={selectedSource}
                      onChange={item => setSelectedSource(item.code)}
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
                      8.3.4. Seedlings Required (per ha)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={seedlingsRequired}
                      placeholder="Enter Seedlings Required"
                      onChangeText={text => setSeedlingsRequired(text)}
                      placeholderTextColor="black"
                    />

                    {/* Close modal button */}
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 5,
                      }}>
                      <Button title="Save" />
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

          {/* Other UI elements can go here */}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionFiveSubmit()}>
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
    marginTop: 5,
    borderRadius: 5,
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

  buttonText: {
    color: 'white', // Set the text color
    textAlign: 'center', // Center the text
  },
  addButton: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#008CBA', // Set your desired background color
    padding: 10, // Add some padding
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

export default interventionFive;
