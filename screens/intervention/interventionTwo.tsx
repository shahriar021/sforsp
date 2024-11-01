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
import useTrace from '../../hooks/useTrace';
import {baseApi, token} from '../../constants/base_api';
import {historys_api, historys_list} from '../../database/sqlDatabase';

const interventionTwo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [history, setHistory] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
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
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}>Total Area (ha)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}>Total Area (ac)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
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
                      value={inputValue1}
                      placeholder="Enter Total Area (ha)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      3.c. Name of Track GPX in GPS (জিপিএস-রিসিভারের ডিফল্ট নাম
                      লিখুন)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter GPX Track Name"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>Total Area (ha)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Total Area (ha)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>Total Area (ac)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Total Area (ac)"
                      keyboardType="numeric"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    {/* Close modal button */}
                    <Button
                      title="Close"
                      onPress={() => setModalVisible(false)}
                    />
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
          onChange={text => setInputValue1(text)}
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
          value={inputValue1}
          keyboardType="numeric"
          onChange={text => setInputValue1(text)}
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
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.2. Longitude</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.3. Bearing (degree)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.4. PPIC Location</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}> 3.e.5. PPIC Location ACC</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />
        </View> */}

        <View>
          {/* Button to open modal */}

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible2(true)}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>

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
                      value={inputValue1}
                      placeholder="Enter Latitude"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.2. Longitude</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Longitude"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.3. Bearing (degree)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Bearing"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.4. PPIC Location</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter PPIC Location"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>3.e.5. PPIC Location ACC</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter PPIC Location ACC"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    {/* Close modal button */}
                    <Button
                      title="Close"
                      onPress={() => setModalVisible2(false)}
                    />
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
          value={inputValue1}
          onChange={text => setInputValue1(text)}
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
            onPress={() => navigation.navigate('interventionThree' as never)}>
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
});

export default interventionTwo;
