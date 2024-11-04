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
import {months_api, months_list} from '../../database/sqlDatabase';

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
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedMonth2, setSelectedMonth2] = useState(null);
  const [selectedMonth3, setSelectedMonth3] = useState(null);
  const [months, setMonths] = useState(null);

  const navigation = useNavigation();

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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Hide the picker after selection (Android closes automatically)
    setDate(currentDate);
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    setInputValue100(formattedDate); // Update TextInput with selected date and time
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

  const interventionSeven = () => {
    console.log(
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6,
    );

    navigation.navigate('interventionEight' as never);
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
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChangeText={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Plan Year"
        />
        <Text style={styles.label}>10.1.b. Plan Months:</Text>
        {/* <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={months}
          labelField="name"
          valueField="code"
          placeholder="Select Plan Months type"
          value={selectedMonth}
          onChange={item => setSelectedMonths(item.code)}
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
        <TextInput
          style={styles.input}
          value={inputValue2}
          onChangeText={text => setInputValue2(text)}
          placeholderTextColor="black"
          placeholder="select Plan Year"
        />

        <Text style={styles.label}>10.2.b. Plan Months:</Text>
        {/* <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={months}
          labelField="name"
          valueField="code"
          placeholder="Select Plan Months type"
          value={selectedForest}
          onChange={item => setSelectedForest(item.value)}
        /> */}
        <Text style={styles.label}>10.3. Planting:</Text>
        <Text style={styles.label}>10.3.a. Plan Year:</Text>
        <TextInput
          style={styles.input}
          value={inputValue3}
          onChangeText={text => setInputValue3(text)}
          placeholderTextColor="black"
          placeholder="select Plan Year"
        />
        <Text style={styles.label}>10.3.b. Plan Months:</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={forestOptions}
          labelField="label"
          valueField="value"
          placeholder="Select Plan Months type"
          value={selectedForest}
          onChange={item => setSelectedForest(item.value)}
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
                      data={forestOptions}
                      labelField="label"
                      valueField="value"
                      placeholder="Select forest type"
                      value={selectedForest}
                      onChange={item => setSelectedForest(item.value)}
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
                    <TextInput
                      style={styles.input}
                      value={inputValue6}
                      placeholder="Enter Plan Year"
                      onChangeText={text => setInputValue6(text)}
                    />

                    <Text style={styles.label}>10.5.b. Plan Months</Text>
                    <Dropdown
                      style={styles.input}
                      data={forestOptions}
                      labelField="label"
                      valueField="value"
                      placeholder="Select month"
                      value={selectedForest}
                      onChange={item => setSelectedForest(item.value)}
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
                      <Button title="Save" />
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
