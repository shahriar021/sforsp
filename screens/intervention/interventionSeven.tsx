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
import {
  months_api,
  months_list,
  plant27_2021_core_update7,
  plant27_2021_filling_month_create,
  plant27_2021_gtrts_vacancy_filling_create,
  plant27_2021_gtrts_weeding_create,
  plant27_2021_weeding_month_create,
} from '../../database/sqlDatabase';
import MonthPicker from 'react-native-month-year-picker';
import useUUID from '../../hooks/useUUID';
import useCreateUri from '../../hooks/useCreatUri';
import {getCurrentDateandTime} from '../../hooks/dateUtils';

const interventionSeven = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [showPicker3, setShowPicker3] = useState(false);
  const [showPicker4, setShowPicker4] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedMonth2, setSelectedMonth2] = useState(null);
  const [selectedMonth3, setSelectedMonth3] = useState(null);
  const [selectedMonth4, setSelectedMonth4] = useState(null);
  const [selectedMonth5, setSelectedMonth5] = useState(null);

  const [selectedMonths1, setSelectedMonths1] = useState(null);
  const [selectedMonths2, setSelectedMonths2] = useState(null);
  const [selectedMonths3, setSelectedMonths3] = useState(null);
  const [selectedMonths4, setSelectedMonths4] = useState(null);

  const [months, setMonths] = useState([]);

  const {initialUUID, generateUUID} = useUUID();
  const [newUUID, setNewUUID] = useState('');
  const [oridianl, setoridianl] = useState(0);
  const uri = useCreateUri();

  const navigation = useNavigation();

  const route = useRoute();
  const {uuid} = route.params;
  const uid = uuid;
  console.log(uid, 'uuid in page 7');

  useEffect(() => {
    const months = async () => {
      try {
        // const response = await fetch(`${baseApi}/months?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await months_api();
        const data = await months_list();
        setMonths(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    months();
  }, []);

  const onDocumentPress = async () => {
    const res = await DocumentPicker.pick({
      type: ['application/*', 'text/*'], // General MIME types to capture all related formats
    });
  };

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShowPicker(Platform.OS === 'ios'); // Hide the picker after selection (Android closes automatically)
  //   setDate(currentDate);
  //   const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  //   setInputValue100(formattedDate); // Update TextInput with selected date and time
  // };

  // const showDatePicker = () => {
  //   setShowPicker(true); // Show the DateTimePicker when the TextInput is pressed
  // };

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

  const handleValueChange2 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`; // Formats as yyyy-mm-07
      setInputValue2(formattedDate);
    }
    setShowPicker2(false);
  };

  const handleValueChange3 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`;
      setInputValue3(formattedDate);
    }
    setShowPicker3(false);
  };

  const handleValueChange4 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`;
      setInputValue4(formattedDate);
    }
    setShowPicker4(false);
  };

  setTimeout(() => setShowPicker(false), 0);
  setTimeout(() => setShowPicker2(false), 0);
  setTimeout(() => setShowPicker3(false), 0);
  setTimeout(() => setShowPicker4(false), 0);

  const forestOptions = [
    {label: 'Tropical Rainforest', value: 'tropical'},
    {label: 'Mangrove Forest', value: 'mangrove'},
    {label: 'Deciduous Forest', value: 'deciduous'},
    {label: 'Coniferous Forest', value: 'coniferous'},
    {label: 'Bamboo Forest', value: 'bamboo'},
  ];

  const addNewOne = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInsertadd1 = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      weeding_cycle: inputValue4,
      weeding_year: inputValue5,
      _ordinal_number: updatedOrdinalNumber,
    };

    const dataToInsertadd2 = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      // value: selectedMonth4,
      value: setSelectedMonth5,

      _ordinal_number: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd1, 'datato insert', dataToInsertadd2);

    try {
      await plant27_2021_gtrts_weeding_create(dataToInsertadd1);
      // setTimeout(async () => {
      //   await plant27_2021_weeding_month_create(dataToInsertadd2);
      // }, 2000);
      console.log('Before weeding month insertion');
      await plant27_2021_weeding_month_create(dataToInsertadd2);
      console.log('After weeding month insertion');

      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  const addNewTwo = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInsertadd1 = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),

      filling_year: inputValue5,
      _ordinal_number: updatedOrdinalNumber,
    };

    const dataToInsertadd2 = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      // value: selectedMonth4,
      value: selectedMonth5,

      _ordinal_number: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd1, 'datato insert', dataToInsertadd2);

    try {
      await plant27_2021_gtrts_vacancy_filling_create(dataToInsertadd1);
      // setTimeout(async () => {
      //   await plant27_2021_weeding_month_create(dataToInsertadd2);
      // }, 2000);
      console.log('Before weeding month insertion');
      await plant27_2021_filling_month_create(dataToInsertadd2);
      console.log('After weeding month insertion');

      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  console.log(selectedMonth5, 'selectedMonth5');

  const interventionSeven = async () => {
    console.log(
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6,
    );

    const dataToInsert = {
      GTRTS_NUERSERY_RAISING_NURSERY_YEAR_RAW: inputValue1,
      GTRTS_PLANTATION_SITE_YEAR_RAW: inputValue2,
      GTRTS_PLANTING_PLANTING_YEAR: inputValue3,

      // NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME: inputValue1,
      // NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE: inputValue2,
      // NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID: inputValue3,
    };

    try {
      await plant27_2021_core_update7(uid, dataToInsert);
      console.log('All data updated successfully');
    } catch (error) {
      console.error('Failed to updated data:', error.message || error); // Log the error message
    }

    navigation.navigate('interventionEight' as never, {uId: uid});
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
          10. Silvicultural Calender (প্রস্তাবিত বনায়নে সিলভিকালচারাল
          কার্যক্রমের সময়সূচী)
        </Text>
        <Text style={styles.label}>
          10. Silvicultural Calender 10.1. Nursery Raising:
        </Text>
        <Text style={styles.label}>10.1.a. Plan Year:</Text>
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Text style={styles.input}>{inputValue1 || 'Select Plan Year'}</Text>
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
        <Text style={styles.label}>10.1.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths1}
          onChange={item => setSelectedMonths1(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        {/* <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={months}
          labelField="name"
          valueField="code"
          placeholder="Select Plan Months type"
          value={selectedMonth}
          onChange={item => setSelectedMonth(item.code)} // Update based on selected month
          placeholderStyle={{color: 'black', fontSize: 16}}
          selectedTextStyle={{color: 'black', fontSize: 16}}
          dropdownStyle={{
            backgroundColor: 'white',
            borderRadius: 8,
          }}
          itemTextStyle={{
            color: 'black',
            fontSize: 16,
          }}
        /> */}
        <Text style={styles.label}>10.2. Plantation Site Prearartion:</Text>
        <Text style={styles.label}>10.2.a. Plan Year:</Text>
        <TouchableOpacity onPress={() => setShowPicker2(true)}>
          <Text style={styles.input}>{inputValue2 || 'Select Plan Year'}</Text>
        </TouchableOpacity>
        {showPicker2 && (
          <MonthPicker
            onChange={handleValueChange2}
            value={new Date()}
            minimumDate={new Date(2000, 0)}
            maximumDate={new Date(2030, 11)}
            mode="short"
          />
        )}

        <Text style={styles.label}>10.2.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths1}
          onChange={item => setSelectedMonths2(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        <Text style={styles.label}>10.3. Planting:</Text>
        <Text style={styles.label}>10.3.a. Plan Year:</Text>
        <TouchableOpacity onPress={() => setShowPicker3(true)}>
          <Text style={styles.input}>{inputValue3 || 'Select Plan Year'}</Text>
        </TouchableOpacity>
        {showPicker3 && (
          <MonthPicker
            onChange={handleValueChange3}
            value={new Date()}
            minimumDate={new Date(2000, 0)}
            maximumDate={new Date(2030, 11)}
            mode="short"
          />
        )}
        <Text style={styles.label}>10.3.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths1}
          onChange={item => setSelectedMonths3(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>10.4. Weeding and Mulching:</Text>
          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>10.4.a. Cycle (চক্র)</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
           onChangeText={text =>  setInputValue1(text)}
          />

          <Text style={styles.label}>10.4.b. Plan Year</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
           onChangeText={text =>  setInputValue1(text)}
          />

          <Text style={styles.label}>10.4.c. Plan Months</Text>
          <Dropdown
            style={styles.input} // Reusing the input style for consistency
            data={forestOptions}
            labelField="label"
            valueField="value"
            placeholder="Select forest type"
            value={selectedForest}
            onChange={item => setSelectedForest(item.value)}
          />
          </View> */}

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>10.4. Weeding and Mulching:</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>Cycle</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Plan Year</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Plan Months</Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.cycle}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.planYear}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.planMonths}</Text>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
          </View>

          {/* Modal for weeding and mulching inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Weeding and Mulching Details
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>10.4.a. Cycle (চক্র)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue4}
                      placeholder="Enter Cycle"
                      onChangeText={text => setInputValue4(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>10.4.b. Plan Year</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue5}
                      placeholder="Enter Plan Year"
                      onChangeText={text => setInputValue5(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>10.4.c. Plan Months</Text>
                    <Dropdown
                      style={styles.input}
                      data={months}
                      labelField="name"
                      valueField="code"
                      placeholder="Select forest type"
                      value={selectedMonth4}
                      onChange={item => setSelectedMonth4(item.code)}
                      dropdownStyle={{
                        backgroundColor: 'white',
                        borderRadius: 8,
                      }}
                      itemTextStyle={{
                        color: 'black',
                        fontSize: 16,
                      }}
                    />

                    {/* Close modal button */}
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 5,
                      }}>
                      <Button title="Save" onPress={addNewOne} />
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
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>10.5. Vacancy Filling</Text>
          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>10.5.a. Plan Year</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
           onChangeText={text =>  setInputValue1(text)}
          />
          <Text style={styles.label}>10.5.b. Plan Months</Text>
          <Dropdown
            style={styles.input} // Reusing the input style for consistency
            data={forestOptions}
            labelField="label"
            valueField="value"
            placeholder="Select forest type"
            value={selectedForest}
            onChange={item => setSelectedForest(item.value)}
          />
        </View> */}

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>10.5. Vacancy Filling</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible2(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>Plan Year</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Plan Months</Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.planYear}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.planMonths}</Text>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
          </View>

          {/* Modal for vacancy filling inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => setModalVisible2(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Vacancy Filling Details
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>10.5.a. Plan Year</Text>
                    <TouchableOpacity onPress={() => setShowPicker4(true)}>
                      <Text style={styles.input}>
                        {inputValue5 || 'Select Plan Year'}
                      </Text>
                    </TouchableOpacity>
                    {showPicker4 && (
                      <MonthPicker
                        onChange={handleValueChange4}
                        value={new Date()}
                        minimumDate={new Date(2000, 0)}
                        maximumDate={new Date(2030, 11)}
                        mode="short"
                      />
                    )}

                    <Text style={styles.label}>10.5.b. Plan Months</Text>
                    <Dropdown
                      style={styles.input}
                      data={months}
                      labelField="name"
                      valueField="code"
                      placeholder="Select month"
                      value={selectedMonth5}
                      onChange={item => setSelectedMonth5(item.code)}
                      dropdownStyle={{
                        backgroundColor: 'white',
                        borderRadius: 8,
                      }}
                      itemTextStyle={{
                        color: 'black',
                        fontSize: 16,
                      }}
                    />

                    {/* Close modal button */}
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 5,
                      }}>
                      <Button title="Save" onPress={addNewTwo} />
                      <Button
                        title="Close"
                        onPress={() => setModalVisible2(false)}
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
            onPress={() => interventionSeven()}>
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

export default interventionSeven;
