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
import {months_api, months_list} from '../../database/sqlDatabase';

const interventionEight = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [months, setMonths] = useState([]);
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
  const [planYear, setPlanYear] = useState('');

  const [selectedMonths1, setSelectedMonths1] = useState(null);
  const [selectedMonths2, setSelectedMonths2] = useState(null);
  const [selectedMonths3, setSelectedMonths3] = useState(null);
  const [selectedMonths4, setSelectedMonths4] = useState(null);

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
          10.6.Fertilizer (Compost, NPK etc.)
        </Text>
        <Text style={styles.label}>10.6.a. Plan Year:</Text>
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Plan Year"
        />
        <Text style={styles.label}>10.6.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths1}
          onChange={item => setSelectedMonths1(item.value)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        <Text style={styles.label}>10.7. Climber cutting</Text>
        <Text style={styles.label}>10.7.a. Plan Year:</Text>
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Plan Year"
        />
        <Text style={styles.label}>10.7.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths2}
          onChange={item => setSelectedMonths2(item.value)} // Update the selected value based on 'id'
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
          <Text style={styles.label}>10.8. Community Protection</Text>
          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>10.8.a. Plan Year</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />
          <Text style={styles.label}>10.8.b. Plan Months</Text>
          <Dropdown
            style={styles.input}
            data={months}
            labelField="name" // Display the 'name' field in the dropdown
            valueField="code" // Use the 'id' as the value field
            placeholder="Select month"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedMonths3}
            onChange={item => setSelectedMonths3(item.value)} // Update the selected value based on 'id'
            dropdownStyle={{
              backgroundColor: 'white', // Ensure dropdown has a visible background
              borderRadius: 8, // Rounded corners for consistency
            }}
            itemTextStyle={{
              color: 'black', // Set item text color to black for visibility
              fontSize: 16, // Set an appropriate font size
            }}
          />
        </View> */}

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>10.8. Community Protection</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          {/* Modal for community protection inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Community Protection Details
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>10.8.a. Plan Year</Text>
                    <TextInput
                      style={styles.input}
                      value={planYear}
                      placeholder="Enter Plan Year"
                      onChangeText={text => setPlanYear(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>10.8.b. Plan Months</Text>
                    <Dropdown
                      style={styles.input}
                      data={months}
                      labelField="name"
                      valueField="code"
                      placeholder="Select month"
                      placeholderStyle={{color: 'black', fontSize: 16}}
                      selectedTextStyle={{color: 'black', fontSize: 16}}
                      value={selectedMonths3}
                      onChange={item => setSelectedMonths3(item.code)} // Update the selected value based on 'code'
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
                    <Button
                      title="Close"
                      onPress={() => setModalVisible(false)}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>

          {/* Other UI elements can go here */}
        </View>

        <Text style={styles.label}>10.9. Others Treatment</Text>
        <Text style={styles.label}>10.9.a. Others Specify:</Text>
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Others Specify"
        />
        <Text style={styles.label}>10.9.b. Plan Year:</Text>
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select plan year"
        />
        <Text style={styles.label}>10.9.c. Plan Months</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths4}
          onChange={item => setSelectedMonths4(item.value)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            11. Additional Notes with Image (সার্বিক অবস্থার তথ্যাদির বিস্তারিত
            খাতায় লিখে ছবি তুলে আপলোড করুন)
          </Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Cancel</Text>
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
    borderRadius: 5,
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

  buttonContainer: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-around', // Add space between buttons
    marginBottom: 50,
    margin: 5,
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
});

export default interventionEight;
