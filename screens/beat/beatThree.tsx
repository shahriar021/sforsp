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
import useLogistic from '../../hooks/useLogistic';

const beatThree = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLogistic1, setSelectedLogistic1] = useState(null);
  const [selectedLogistic2, setSelectedLogistic2] = useState(null);
  const [selectedLogistic3, setSelectedLogistic3] = useState(null);
  const [selectedLogistic4, setSelectedLogistic4] = useState(null);
  const [selectedLogistic5, setSelectedLogistic5] = useState(null);
  const [selectedLogistic6, setSelectedLogistic6] = useState(null);
  const [selectedLogistic7, setSelectedLogistic7] = useState(null);
  const [selectedLogistic8, setSelectedLogistic8] = useState(null);
  const [selectedLogistic9, setSelectedLogistic9] = useState(null);
  const [selectedLogistic10, setSelectedLogistic10] = useState(null);
  const [selectedLogistic11, setSelectedLogistic11] = useState(null);
  const [selectedLogistic12, setSelectedLogistic12] = useState(null);
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

  const [modalTitle, setModalTitle] = useState('');

  const navigation = useNavigation();

  const {logistic} = useLogistic();
  console.log(logistic, 'logistic');

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
  console.log(selectedLogistic1);

  const forestOptions = [
    {label: 'Tropical Rainforest', value: 'tropical'},
    {label: 'Mangrove Forest', value: 'mangrove'},
    {label: 'Deciduous Forest', value: 'deciduous'},
    {label: 'Coniferous Forest', value: 'coniferous'},
    {label: 'Bamboo Forest', value: 'bamboo'},
  ];

  const handleOpenModal = title => {
    setModalTitle(title);
    setModalVisible(true);
  };

  const handleInputChange = (field, value) => {
    setInputValue(prevValue => ({...prevValue, [field]: value}));
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
        <Text style={styles.headerLabel}>
          6. Existing Manpower and logistics in the Beat/Camp/SFPC
          (বিট/ক্যাম্প/এসএফপিসিতে বিদ্যমান জনবল ও সরবরাহ)
        </Text>
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            6.1.a.Range Officer/Officer in charge (SFNTC) (ফরেষ্ট রেঞ্জার)
          </Text>
          <View style={styles.addButton}>
            <Button title="Add New"></Button>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Rank::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Joining date of the Range/Beat::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Mobile Number::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>NID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>
            6.1.b.Beat/Camp/SFPC in charge (বিট কর্মকর্তা)
          </Text>

          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Rank::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Joining date of the Range/Beat::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Mobile Number::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>NID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>
            6.1.c. All Other Staffs (অন্যান্য কর্মচারীর তথ্যাদি)
          </Text>

          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Rank::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Joining date of the Range/Beat::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>Mobile Number::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>NID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue7}
            onChangeText={text => setInputValue7(text)}
          />
        </View> */}

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            6.1.a. Range Officer/Officer in charge (SFNTC) (ফরেষ্ট রেঞ্জার)
          </Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txtNbutton}>
          {/* Section 6.1.b */}
          <Text style={styles.label}>
            6.1.b. Beat/Camp/SFPC in charge (বিট কর্মকর্তা)
          </Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleOpenModal('6.1.b')}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txtNbutton}>
          {/* Section 6.1.c */}
          <Text style={styles.label}>
            6.1.c. All Other Staffs (অন্যান্য কর্মচারীর তথ্যাদি)
          </Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleOpenModal('6.1.c')}>
            <Text style={styles.buttonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        {/* Modal */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Text style={styles.modalTitle}>{modalTitle}</Text>

                {/* <Text style={styles.label}>Name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type here"
                  value={inputValue2.name}
                  onChangeText={text => handleInputChange('name', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>Rank:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type here"
                  value={inputValue2.rank}
                  onChangeText={text => handleInputChange('rank', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>
                  Joining date of the Range/Beat:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type here"
                  value={inputValue1.joiningDate}
                  onChangeText={text => handleInputChange('joiningDate', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>Mobile Number:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type here"
                  value={inputValue1.mobile}
                  onChangeText={text => handleInputChange('mobile', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>NID:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type here"
                  value={inputValue1.nid}
                  onChangeText={text => handleInputChange('nid', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Type here"
                  value={inputValue1.email}
                  onChangeText={text => handleInputChange('email', text)}
                  placeholderTextColor="black"
                /> */}

                <Text style={styles.label}>Name:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter name"
                  value={inputValue2.name}
                  onChangeText={text => handleInputChange('name', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>Rank:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter rank"
                  value={inputValue2.rank}
                  onChangeText={text => handleInputChange('rank', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>
                  Joining date of the Range/Beat:
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter joining date"
                  value={inputValue1.joiningDate}
                  onChangeText={text => handleInputChange('joiningDate', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>Mobile Number:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter mobile number"
                  value={inputValue1.mobile}
                  onChangeText={text => handleInputChange('mobile', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>NID:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter NID"
                  value={inputValue1.nid}
                  onChangeText={text => handleInputChange('nid', text)}
                  placeholderTextColor="black"
                />

                <Text style={styles.label}>E-mail:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter e-mail"
                  value={inputValue1.email}
                  onChangeText={text => handleInputChange('email', text)}
                  placeholderTextColor="black"
                />

                <Button title="Close" onPress={() => setModalVisible(false)} />
              </ScrollView>
            </View>
          </View>
        </Modal>

        <Text style={styles.label}>
          6.2. Existing logistics in the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসিতে
          বিদ্যমান সরবরাহ সমূহ)
        </Text>

        <Text style={styles.label}>6.2.1. Land Transports</Text>
        <Text style={styles.label}>6.2.1.a. Motorbike:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select forest type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic1}
          onChange={item => setSelectedLogistic1(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.1.b. Bi-Cycle:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Cycle"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select forest type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic2}
          onChange={item => setSelectedLogistic2(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.1.c. Other (Please specify):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Other"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistic type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic3}
          onChange={item => setSelectedLogistic3(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.2. Water transports</Text>

        <Text style={styles.label}>6.2.2.a. Speed Boat:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Speed Boat"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistic type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic4}
          onChange={item => setSelectedLogistic4(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.2.b. Engine Trawler:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Engine Trawler"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic5}
          onChange={item => setSelectedLogistic5(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.2.c. Country Boat:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Country Boat"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic6}
          onChange={item => setSelectedLogistic6(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.2.d. Other (Please specify):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Other"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic7}
          onChange={item => setSelectedLogistic7(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.3. Fire Arms</Text>

        <Text style={styles.label}>6.2.3.a. 303 Rifle:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here 303 Rifle"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic8}
          onChange={item => setSelectedLogistic8(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.3.b. Self-Loading Rifle (SLR):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Self-Loading Rifle"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic9}
          onChange={item => setSelectedLogistic9(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.3.c. Short Gun:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Short Gun"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic10}
          onChange={item => setSelectedLogistic10(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>6.2.3.d. Chinese Rifle:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Chinese Rifle"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic11}
          onChange={item => setSelectedLogistic11(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        <Text style={styles.label}>6.2.3.e. Other (Please specify):</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Other"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={logistic}
          labelField="name"
          valueField="code"
          placeholder="Select logistice type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedLogistic12}
          onChange={item => setSelectedLogistic12(item.code)}
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
            onPress={() => navigation.navigate('beatFour' as never)}>
            <Text style={styles.buttonText}>Next</Text>
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
    marginBottom: 5,
  },
  label: {
    fontSize: 16, // Medium font size
    marginBottom: 8,
    color: 'black',
    fontWeight: 'bold', // Bold to match the previous design
  },
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Adds shadow for Android
  },
});

export default beatThree;
