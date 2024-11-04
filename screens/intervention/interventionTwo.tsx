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
import useTrace from '../../hooks/useTrace';
import {baseApi, token} from '../../constants/base_api';
import {historys_api, historys_list} from '../../database/sqlDatabase';

const interventionTwo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [history, setHistory] = useState([]);
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
  const [inputValue100, setInputValue100] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedHistory, setSelectedHistory] = useState(null);

  const navigation = useNavigation();

  const {rankOptions, selectedRank, setSelectedRank} = useTrace();
  console.log(rankOptions, '  Rank');

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

  useEffect(() => {
    const history = async () => {
      try {
        // const response = await fetch(`${baseApi}/historys?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await historys_api();
        const data = await historys_list();
        setHistory(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    history();
  }, []);

  const interventionTwo = () => {
    console.log(
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6,
      'intervention two',
    );

    navigation.navigate('interventionThree');
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
            3. Plantation Intervention Site Planning (বনায়ন কার্যক্রমের
            স্থান-ভিত্তিক পরিকল্পনা)
          </Text>

          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>
            3.a.Site map of proposed planting site (প্রস্তাবিত বনায়নের ম্যাপ
            প্রনয়ণ)
          </Text>

          <Dropdown
            style={styles.input}
            data={rankOptions} // Use rank options from the hook
            labelField="label"
            valueField="value"
            placeholder="Select proposed planting"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedRank} // Bind the selected value from the hook
            onChange={item => {
              setSelectedRank(item.value); // Update selected rank via the hook
              console.log(
                `Selected label: ${item.label}, value: ${item.value}`,
              );
            }}
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
            3.b.Trace shape with GPS (polytrace) (জিপিএস দিয়ে এলাকা ঘুরে এসে)
          </Text>

          <Text style={styles.label}>
            3.b.Trace line with GPS (polyline) (জিপিএস দিয়ে লাইন আঁকা)
          </Text>

          <Text style={styles.label}>
            3.c.Name of Track GPX in GPS (জিপিএস-রিসিভারের ডিফল্ট নাম লিখুন)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>Total Area (ha)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>Total Area (ac)</Text>

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
              3. Plantation Intervention Site Planning (বনায়ন কার্যক্রমের
              স্থান-ভিত্তিক পরিকল্পনা)
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.tableContainer} horizontal={true}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              {/* Headers */}
              <View style={styles.headerRowContainer}>
                <Text style={styles.headerLabel}>
                  Site Map of Proposed Planting Site (প্রস্তাবিত বনায়নের ম্যাপ
                  প্রনয়ণ)
                </Text>
                <Text style={styles.headerSeparator}>|</Text>
                <Text style={styles.headerLabel}>
                  Trace Shape with GPS (polytrace) (জিপিএস দিয়ে এলাকা ঘুরে এসে)
                </Text>
                <Text style={styles.headerSeparator}>|</Text>
                <Text style={styles.headerLabel}>
                  Trace Line with GPS (polyline) (জিপিএস দিয়ে লাইন আঁকা)
                </Text>
                <Text style={styles.headerSeparator}>|</Text>
                <Text style={styles.headerLabel}>
                  Name of Track GPX in GPS (জিপিএস-রিসিভারের ডিফল্ট নাম লিখুন)
                </Text>
                <Text style={styles.headerSeparator}>|</Text>
                <Text style={styles.headerLabel}>Total Area (ha)</Text>
                <Text style={styles.headerSeparator}>|</Text>
                <Text style={styles.headerLabel}>Total Area (ac)</Text>
              </View>

              {/* Data Rows */}
              {tableData.length > 0 ? (
                <FlatList
                  data={tableData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View style={styles.dataRowContainer}>
                      <Text style={styles.cellContent}>
                        {item.plantingSiteMap}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.traceShapeGPS}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.traceLineGPS}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.trackGPXName}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>{item.totalAreaHa}</Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>{item.totalAreaAc}</Text>
                    </View>
                  )}
                />
              ) : (
                <View style={styles.noDataContainer}>
                  <Text style={styles.noDataText}>No data available</Text>
                </View>
              )}
            </View>
          </ScrollView>

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Plantation Site Information
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>
                      3.a. Site map of proposed planting site (প্রস্তাবিত
                      বনায়নের ম্যাপ প্রনয়ণ)
                    </Text>
                    <Dropdown
                      style={styles.input}
                      data={rankOptions}
                      labelField="label"
                      valueField="value"
                      placeholder="Select proposed planting"
                      placeholderStyle={{color: 'black', fontSize: 16}}
                      selectedTextStyle={{color: 'black', fontSize: 16}}
                      value={selectedRank}
                      onChange={item => setSelectedRank(item.value)}
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
                      3.b. Trace shape with GPS (polytrace) (জিপিএস দিয়ে এলাকা
                      ঘুরে এসে)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Total Area (ha)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      3.b. Trace line with GPS (polyline) (জিপিএস দিয়ে লাইন
                      আঁকা)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue2}
                      placeholder="Enter Total Area (ha)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue2(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      3.c. Name of Track GPX in GPS (জিপিএস-রিসিভারের ডিফল্ট নাম
                      লিখুন)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue3}
                      placeholder="Enter GPX Track Name"
                      onChangeText={text => setInputValue3(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>Total Area (ha)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue4}
                      placeholder="Enter Total Area (ha)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue4(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>Total Area (ac)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue5}
                      placeholder="Enter Total Area (ac)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue5(text)}
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

        {/* <Text style={styles.label}>Upload GPX file:</Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChangeText={text => setInputValue1(text)}
        /> */}

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>Upload GPX file:</Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>
          3.d.Total Measured area by Tab (ha) (বনায়নের সর্বমোট এলাকা (হেঃ)):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue6}
          keyboardType="numeric"
          onChangeText={text => setInputValue6(text)}
          placeholderTextColor="black"
          placeholder="select Measured area"
        />
        <View style={styles.txtNbutton}>
          <Text style={styles.label}>3.e.1.Take picture of the site:</Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>
        {/* <Button title="Add New"></Button>
        <View style={styles.box}>
          <Text style={styles.label}>3.e.2. Lattitude</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.2. Longitude</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.3. Bearing (degree)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.4. PPIC Location</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.5. PPIC Location ACC</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />
        </View> */}

        <View>
          {/* Button to open modal */}

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible2(true)}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>Latitude</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Longitude</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Bearing (degree)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>PPIC Location</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>PPIC Location ACC</Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.latitude}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.longitude}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.bearing}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>{item.ppicLocation}</Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.ppicLocationACC}
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

          {/* Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => setModalVisible2(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Location Information
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>3.e.2. Latitude</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue7}
                      placeholder="Enter Latitude"
                      onChangeText={text => setInputValue7(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.2. Longitude</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue8}
                      placeholder="Enter Longitude"
                      onChangeText={text => setInputValue8(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.3. Bearing (degree)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue9}
                      placeholder="Enter Bearing"
                      onChangeText={text => setInputValue9(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.4. PPIC Location</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue10}
                      placeholder="Enter PPIC Location"
                      onChangeText={text => setInputValue10(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.5. PPIC Location ACC</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue11}
                      placeholder="Enter PPIC Location ACC"
                      onChangeText={text => setInputValue11(text)}
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

        <Text style={styles.label}>
          4. Site Information (বনায়ন এলাকার তথ্য)
        </Text>

        <Text style={styles.label}>
          {' '}
          4.a. Plantation site/patch no (if plantation site is of multiple
          patches) (বনায়নের সাইট/ টুকরা নম্বর (প্রস্তাবিত বনায়ন এলাকা এক এর অধিক
          টুকরা হলে)):
        </Text>

        <TextInput
          style={styles.input}
          value={inputValue12}
          onChangeText={text => setInputValue12(text)}
          placeholderTextColor="black"
          placeholder="select Plantation site"
        />

        <Text style={styles.label}>
          4.b. Existing site condition: (বিদ্যমান ভূমির অবস্থা):
        </Text>

        <Dropdown
          style={styles.input}
          data={history}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select site condition type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedHistory}
          onChange={item => setSelectedHistory(item.value)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionTwo()}>
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

export default interventionTwo;
