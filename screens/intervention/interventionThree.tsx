import React, {useState} from 'react';
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

const interventionThree = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
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
          5. Regeneration and Stock Assessment (প্রাকৃতিকভাবে জন্মানো চারা ও
          গাছের সমীক্ষা)
        </Text>
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            5.a.Plot size: for Enrichment and ANR plantations (এনরিচমেন্ট ও
            এ.এন.আর বাগানের ক্ষেত্রে)
          </Text>
          <Button title="Add New"></Button>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>5.a.1.Plot No (প্লট নং)</Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            5.a.2. Geographic Plot location (at Plot center)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            5.a.2. Geographic Plot location (at Plot center)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            {' '}
            5.a.7. Crown Closure (%) at plot center (ocular
            extimation/densiometer)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChange={text => setInputValue1(text)}
          />
        </View> */}

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>
              5.a. Plot size: for Enrichment and ANR plantations (এনরিচমেন্ট ও
              এ.এন.আর বাগানের ক্ষেত্রে)
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          {/* Modal for plot size and location inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>Add Plot Information</Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>5.a.1. Plot No (প্লট নং)</Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Plot No"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      5.a.2. Geographic Plot Location (at Plot Center)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Geographic Location 1"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      5.a.3. Geographic Plot Location (at Plot Center)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Geographic Location 2"
                      onChangeText={text => setInputValue1(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      5.a.7. Crown Closure (%) at Plot Center (ocular
                      estimation/densiometer)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue1}
                      placeholder="Enter Crown Closure (%)"
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

        <Text style={styles.label}>5.a.3. From Plot center to North</Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select  From Plot center to North"
        />

        <Text style={styles.label}>5.a.4. From Plot center to East</Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select From Plot center to East"
        />

        <Text style={styles.label}>5.a.5. From Plot center to South</Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select From Plot center to South"
        />

        <Text style={styles.label}> 5.a.6. From Plot center to West</Text>

        <TextInput
          style={styles.input}
          value={inputValue1}
          onChange={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select From Plot center to West"
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('interventionFour' as never)}>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10, // Space between back arrow and title
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
});

export default interventionThree;
