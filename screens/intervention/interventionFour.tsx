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
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
import {
  financial_years_api,
  financial_years_list,
  intervention_lists_api,
  intervention_lists_list,
} from '../../database/sqlDatabase';

const interventionFour = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [years, setYears] = useState([]);

  const [interventinList, setInterventionList] = useState([]);

  const [seedlingsPerPlot, setSeedlingsPerPlot] = useState('');
  const [seedlingsPerHector, setSeedlingsPerHector] = useState('');
  const [treesPerPlot, setTreesPerPlot] = useState('');
  const [treesPerHector, setTreesPerHector] = useState('');

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
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedYears, setSelectedYears] = useState(null);
  const [selectedInterventionList, setselectedInterventionList] =
    useState(null);

  const navigation = useNavigation();

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
    const years = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/financial_years?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await financial_years_api();
        const data = await financial_years_list();
        setYears(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    years();
  }, []);

  useEffect(() => {
    const intervention_list = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/intervention_lists?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await intervention_lists_api();
        const data = await intervention_lists_list();
        setInterventionList(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    intervention_list();
  }, []);

  const interventionFourSubmit = () => {
    console.log(
      inputValue1,
      inputValue7,
      inputValue8,
      inputValue9,
      inputValue10,
      inputValue11,
      selectedYears,

      seedlingsPerPlot,
      seedlingsPerHector,
      treesPerPlot,
      treesPerHector,
    );

    navigation.navigate('interventionFive');
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
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.headerLabel}>
            {' '}
            Regeneration Species (প্রাকৃতিক চারা)
          </Text>
          <Button title="Add New"></Button>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}> Plot No (প্লট নং)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            {' '}
            Species name (Local Name / from the app BGD Trees)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}> Number of Seedlings / Sapling</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>Number of Trees</Text>

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
              Regeneration Species (প্রাকৃতিক চারা)
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
              <Text style={styles.headerLabel}>Plot No (প্লট নং)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Species Name (Local Name / from the app BGD Trees)
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Number of Seedlings / Sapling
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Number of Trees</Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.plotNo}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.speciesName}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.numberOfSeedlings}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.numberOfTrees}</Text>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
          </View>

          {/* Modal for regeneration species inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Regeneration Species
                  </Text>

                  <Text style={styles.label}>Plot No (প্লট নং)</Text>
                  <TextInput
                    style={styles.input}
                    value={inputValue1}
                    placeholder="Enter Plot No"
                    onChangeText={text => setInputValue1(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    Species Name (Local Name / from the app BGD Trees)
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={inputValue2}
                    placeholder="Enter Species Name"
                    onChangeText={text => setInputValue2(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    Number of Seedlings / Sapling
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={inputValue3}
                    placeholder="Enter Number of Seedlings"
                    onChangeText={text => setInputValue3(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>Number of Trees</Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <TextInput
                      style={styles.input}
                      value={inputValue4}
                      placeholder="Enter Number of Trees"
                      onChangeText={text => setInputValue4(text)}
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
        </View>
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            নমুনা প্লটে প্রাকৃতিক চারার গড় সংখ্যাঃ
          </Text>
          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>
            Number of seedling/Sapling per plot (প্রাকৃতিক চারার গড় সংখ্যা
            (প্লটে প্রতি))
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            Number of seedling/Sapling per hector (প্রাকৃতিক চারার গড় সংখ্যা
            (হেক্টর প্রতি))
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            Number of Trees per plot (প্রাকৃতিক গাছের গড় সংখ্যা (প্লটে প্রতি))
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            {' '}
            Number of Trees per hector (প্রাকৃতিক গাছের গড় সংখ্যা (হেক্টর
            প্রতি))
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />
        </View> */}

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>
              নমুনা প্লটে প্রাকৃতিক চারার গড় সংখ্যাঃ
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible2(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>
                Number of Seedlings/Sapling per Plot (প্রাকৃতিক চারার গড় সংখ্যা
                (প্লটে প্রতি))
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Number of Seedlings/Sapling per Hector (প্রাকৃতিক চারার গড়
                সংখ্যা (হেক্টর প্রতি))
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Number of Trees per Plot (প্রাকৃতিক গাছের গড় সংখ্যা (প্লটে
                প্রতি))
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Number of Trees per Hector (প্রাকৃতিক গাছের গড় সংখ্যা (হেক্টর
                প্রতি))
              </Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>
                      {item.seedlingsPerPlot}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.seedlingsPerHector}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.treesPerPlot}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.treesPerHector}
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

          {/* Modal for average number of seedlings and trees inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => setModalVisible2(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Average Number of Natural Seedlings/Trees
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>
                      Number of Seedlings/Sapling per Plot (প্রাকৃতিক চারার গড়
                      সংখ্যা (প্লটে প্রতি))
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={seedlingsPerPlot}
                      placeholder="Enter Seedlings/Sapling per Plot"
                      onChangeText={text => setSeedlingsPerPlot(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      Number of Seedlings/Sapling per Hector (প্রাকৃতিক চারার গড়
                      সংখ্যা (হেক্টর প্রতি))
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={seedlingsPerHector}
                      placeholder="Enter Seedlings/Sapling per Hector"
                      onChangeText={text => setSeedlingsPerHector(text)}
                    />

                    <Text style={styles.label}>
                      Number of Trees per Plot (প্রাকৃতিক গাছের গড় সংখ্যা (প্লটে
                      প্রতি))
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={treesPerPlot}
                      placeholder="Enter Trees per Plot"
                      placeholderTextColor="black"
                      onChangeText={text => setTreesPerPlot(text)}
                    />

                    <Text style={styles.label}>
                      Number of Trees per Hector (প্রাকৃতিক গাছের গড় সংখ্যা
                      (হেক্টর প্রতি))
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={treesPerHector}
                      placeholder="Enter Trees per Hector"
                      onChangeText={text => setTreesPerHector(text)}
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
                        onPress={() => setModalVisible2(false)}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>

        <Text style={styles.label}> Number of Regeneration Plots</Text>

        <TextInput
          style={styles.input}
          value={inputValue5}
          onChangeText={text => setInputValue5(text)}
          placeholderTextColor="black"
          placeholder="select Regeneration Plots"
        />

        <Text style={styles.label}>Avg. Seedling/Sapling per plot</Text>

        <TextInput
          style={styles.input}
          value={inputValue6}
          onChangeText={text => setInputValue6(text)}
          placeholderTextColor="black"
          placeholder="select Avg Seedling/Sapling per plot"
        />

        <Text style={styles.label}>Avg. Trees per plot</Text>

        <TextInput
          style={styles.input}
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          placeholder="select Avg. Trees per plot"
        />

        <Text style={styles.label}>Trees Per hectare</Text>

        <TextInput
          style={styles.input}
          value={inputValue8}
          onChangeText={text => setInputValue8(text)}
          placeholderTextColor="black"
          placeholder="select Trees Per hectare"
        />

        <Text style={styles.label}>
          6. Intervention Detail (কার্যক্রমের বর্ণনা)
        </Text>

        <Text style={styles.label}>6.a. Plantation Year (বনায়নের সাল):</Text>

        <Dropdown
          style={styles.input}
          data={years}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select Plantation year"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedYears}
          onChange={item => setSelectedYears(item.code)} // Update the selected value based on 'id'
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
          6.b. Proposed Plantation Area (ha) (প্রস্তাবিত বন এলাকা (হে.)):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue9}
          onChangeText={text => setInputValue9(text)}
          placeholderTextColor="black"
          placeholder="select Proposed Plantation Area"
        />

        <Text style={styles.label}>
          6.c. Plantation Type: Activity/operations/Intervention nam (বনায়নের
          ধরণ):
        </Text>

        <Dropdown
          style={styles.input}
          data={interventinList}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select Plantation Type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedInterventionList}
          onChange={item => setselectedInterventionList(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>Patches (কয় টুকরা জমি):</Text>

        <TextInput
          style={styles.input}
          value={inputValue10}
          onChangeText={text => setInputValue10(text)}
          placeholderTextColor="black"
          placeholder="select Patches"
        />

        <Text style={styles.label}>Seeding/ha:</Text>

        <TextInput
          style={styles.input}
          value={inputValue11}
          onChangeText={text => setInputValue11(text)}
          placeholderTextColor="black"
          placeholder="select Seeding/ha"
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionFourSubmit()}>
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

export default interventionFour;
