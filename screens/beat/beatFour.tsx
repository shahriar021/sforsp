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
import {Colors, CommonStyles, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

const beatFour = () => {
  const [modalVisible, setModalVisible] = useState(false);
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

  const [inputValues, setInputValues] = useState({
    upzilla: '',
    union: '',
    villages: '',
    location1: '',
    location2: '',
    distance: '',
    households: '',
    forestVillagers: '',
    forestryParticipants: '',
    conservationParticipants: '',
  });

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

  const handleInputChange = (name, value) => {
    setInputValues(prevValues => ({...prevValues, [name]: value}));
  };

  const beatFour = () => {
    console.log(
      inputValues.upzilla,
      inputValues.union,
      inputValues.villages,
      inputValues.location1,
      inputValues.location2,
      inputValues.distance,
      inputValues.households,
      inputValues.forestVillagers,
      inputValues.forestryParticipants,
      inputValues.conservationParticipants,
    );
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beat Information</Text>
      </View>
      <ScrollView style={styles.container}>
        {/* <View style={styles.txtNbutton}>
          <Text
            style={styles.headerLabel}
            numberOfLines={5}
            ellipsizeMode="tail">
            7. Villages and Community: Information of each village, in nd around
            Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি সংলগ্ন গ্রামীণ জনগোষ্ঠীর তথ্য)
          </Text>
          <View style={styles.addButton}>
            <Button title="Add New"></Button>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>7.1.</Text>
          <Text style={styles.label}>Upzilla</Text>
          <Text style={styles.label}>(উপজেলা)</Text>
          <Dropdown
            style={styles.input} // Reusing the input style for consistency
            data={forestOptions}
            labelField="label"
            valueField="value"
            placeholder="Select forest type"
            value={selectedForest}
            onChange={item => setSelectedForest(item.value)}
          />

          <Text style={styles.label}>7.2.</Text>
          <Text style={styles.label}>Union</Text>
          <Text style={styles.label}>(ইউনিয়ন)</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>7.3. Name of the Villages/Para</Text>
          <Text style={styles.label}>Villages/Para</Text>
          <Text style={styles.label}>(গ্রাম/পাড়ার নাম)</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>7.4.</Text>
          <Text style={styles.label}>Geographic Location of the village</Text>
          <Text style={styles.label}>(গ্রামের অবস্থান)</Text>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />

          <Text style={styles.label}>
            7.5. Distance of the village from the Beat/Camp/SFPC Boundary (KM){' '}
          </Text>
          <Text style={styles.label}>
            {' '}
            (বিটের সীমানা হতে গ্রামের দুরত্ব (কিমি))
          </Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>
            7.6. Total number of Household in the village{' '}
          </Text>
          <Text style={styles.label}> (মোট খানার সংখ্যা)</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>
            7.7. Number of Forest villagers (Number of Household){' '}
          </Text>
          <Text style={styles.label}> (বন জায়গীরদার / খানার সংখ্যা)</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>
            7.8. Number of Social Forestry participants (Number of Household){' '}
          </Text>
          <Text style={styles.label}>
            {' '}
            (সামাজিক বনায়নের উপকারভোগী / খানাার সংখ্যা)
          </Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>
            7.9. Number of Forest Conservation Village/Village Conservation
            Forum participants (Number of Household){' '}
          </Text>
          <Text style={styles.label}>
            {' '}
            (গ্রামে এফসিভি/ভিসিএফ এর খানার সংখ্যা)
          </Text>
          <TextInput style={styles.input} />
        </View> */}

        <View style={styles.txtNbutton}>
          <Text
            style={styles.headerLabel}
            numberOfLines={5}
            ellipsizeMode="tail">
            7. Villages and Community: Information of each village, in and
            around Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি সংলগ্ন গ্রামীণ জনগোষ্ঠীর
            তথ্য)
          </Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Component */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Text style={styles.modalTitle}>Add Village Information</Text>

                {/* Form inside the modal */}
                <View style={styles.box}>
                  <Text style={styles.label}>7.1. Upzilla (উপজেলা)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Upzilla"
                    value={inputValues.upzilla}
                    onChangeText={text => handleInputChange('upzilla', text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>7.2. Union (ইউনিয়ন)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Union"
                    value={inputValues.union}
                    onChangeText={text => handleInputChange('union', text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.3. Name of the Villages/Para (গ্রাম/পাড়ার নাম)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Villages/Para"
                    value={inputValues.villages}
                    onChangeText={text => handleInputChange('villages', text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.4. Geographic Location of the village (গ্রামের অবস্থান)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Location 1"
                    value={inputValues.location1}
                    onChangeText={text => handleInputChange('location1', text)}
                    placeholderTextColor="black"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Location 2"
                    value={inputValues.location2}
                    onChangeText={text => handleInputChange('location2', text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.5. Distance from Beat (KM) (বিটের সীমানা হতে গ্রামের
                    দুরত্ব)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Distance from Beat"
                    value={inputValues.distance}
                    onChangeText={text => handleInputChange('distance', text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.6. Total Households (মোট খানার সংখ্যা)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Total Households"
                    value={inputValues.households}
                    onChangeText={text => handleInputChange('households', text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.7. Number of Forest Villagers (বন জায়গীরদার / খানার
                    সংখ্যা)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Number of Forest Villagers"
                    value={inputValues.forestVillagers}
                    onChangeText={text =>
                      handleInputChange('forestVillagers', text)
                    }
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.8. Social Forestry Participants (সামাজিক বনায়নের
                    উপকারভোগী)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Social Forestry Participants"
                    value={inputValues.forestryParticipants}
                    onChangeText={text =>
                      handleInputChange('forestryParticipants', text)
                    }
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.9. Conservation Forum Participants (গ্রামে এফসিভি/ভিসিএফ)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Conservation Forum Participants "
                    value={inputValues.conservationParticipants}
                    onChangeText={text =>
                      handleInputChange('conservationParticipants', text)
                    }
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
        <View style={styles.txtNbutton}>
          <Text style={styles.headerLabel}>
            8. Additional Notes with Image (সার্বিক অবস্থার তথ্যাদির বিস্তারিত
            খাতায় লিখে ছবি তুলে আপলোড করুন)
          </Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={()=>beatFour()}>
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
  buttonContainer: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-around', // Add space between buttons
    marginBottom: 50,
    margin: 5,
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
  box: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 5,
    marginBottom: 5,
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

export default beatFour;
