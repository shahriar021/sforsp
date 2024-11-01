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
import {Colors, CommonStyles, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
import useRank from '../../hooks/useRank';
import {
  human_issues_api,
  human_issues_list,
  natural_issues_api,
  natural_issues_list,
} from '../../database/sqlDatabase';

const beatTwo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [naturalIssue, setnaturalIssue] = useState([]);
  const [humanIssue, sethumanIssue] = useState([]);

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

  const [selectedNaturalIssue, setSelectedNaturalIssue] = useState(null);
  const [selectedHumanIssue, setSelectedHumanIssue] = useState(null);

  console.log(selectedHumanIssue, 'human issue');
  console.log(selectedNaturalIssue, 'natural issue');

  const navigation = useNavigation();

  // const RankDropdown = useRank();
  const {rankOptions, selectedRank, setSelectedRank} = useRank();
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
    const natural = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/natural_issues?token=${token}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await natural_issues_api();
        const data = await natural_issues_list();
        setnaturalIssue(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    natural();
  }, []);

  useEffect(() => {
    const human = async () => {
      try {
        // const response = await fetch(`${baseApi}/human_issues?token=${token}`);
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await human_issues_api();
        const data = await human_issues_list();
        sethumanIssue(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    human();
  }, []);

  console.log(humanIssue, 'humanIssue issue..');

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
          3. Index Map of the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি - এর ইনডেক্স
          ম্যাপ)
        </Text>
        <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            3.a. Take a picture of Index Map of your Beat/Camp/SFPC
            (বিট/ক্যাম্প/এসএফপিসি এর ইনডেক্স ম্যাপের ছবি তুলুন)
          </Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerLabel}>
          4. Land information of the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসির ভূমির
          তথ্যাদি)
        </Text>

        <Text style={styles.label}>
          4.1.a. Reserved Forests (Hecter) (সংরক্ষিত বনভূমি (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Reserved Forests"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.b. Forest land under section 6 (Hecter) (ধারায় বনভূমি (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest land "
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.c. Forest Land, Declared under Section 4 (Hecter) (৪ ধারায় বনভূমি
          (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Land, Declared under Section"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.d. Protected Forests (PF) (Hecter) (রক্ষিত বন (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Protected Forests"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.e. Vested Forests (Hecter) অর্পিত বনভূমি (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Vested Forests"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.f. Aquired Forests (Hecter) (অর্জিত বনভূমি (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Aquired Forests"
          value={inputValue7}
          keyboardType="numeric"
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.g. Forest Land (Others) (Hecter) (অন্যান্য বনভূমি (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Land (Others)"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />
        <Text style={styles.label}>
          4.1.h. Total Beat/Camp/SFPC area: (Hecter) (বিট/ক্যাম্পের/এসএফপিসির
          আওতাধীন মোট বনভূমি (হেক্টর) ):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Total Beat/Camp/SFPC area"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2. Protected Area (রক্ষিত এলাকার পরিমাণ)
        </Text>

        <Text style={styles.label}>
          4.2.a. Wildlife Sanctuaries (Hecter) বন্যপ্রাণি অভয়ারন্য (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Wildlife Sanctuaries"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.b. National Park (Hecter) জাতীয় উদ্যান (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here  National Park"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.c. Eco-Park (Hecter) ইকো-পার্ক (হেক্টর) :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Eco-Park"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.d. Safari Park (Hecter) সাফারী পার্ক (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Safari Park"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.e. Special Biodiversity Conservation Area (Hecter) বিশেষ
          জীববৈচিত্র্য সংরক্ষণ এলাকা (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here  Special Biodiversity Conservation Area"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.f. Protected Area (Others) (Hecter) অন্যান্য (হেক্টর) :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Protected Area"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.3. Forest Cover Types (বনাচ্ছাদনের ধরণ)
        </Text>
        <Text style={styles.label}>
          4.3.a. Natural Forests (Hecter)(প্রাকৃতিক বন (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Natural Forests"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.3.b.1 Social Forestry/Participatory Plantations (Hecter) (সামাজিক/
          অংশীদারিত্ব বনায়ন (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Social Forestry/Participatory Plantations"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.3.b.2 Social Forestry/Participatory Plantations (SKM) (সামাজিক/
          অংশীদারিত্ব বনায়ন (কি.মি.)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Social Forestry/Participatory Plantations"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.3.c.1 Non Participatory Plantations (Hecter) (অংশীদারিত্ব বিহীন
          বনায়ন (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Non Participatory Plantations"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.3.c.2 Non Participatory Plantations (SKM) (অংশীদারিত্ব বিহীন বনায়ন
          (কি.মি.)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Non Participatory Plantations"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.3.d.1 Forest Cover Area (Others) (Hecter) (অন্যান্য (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Cover Area"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.3.d.2 Forest Cover Area (Others) (SKM) (অন্যান্য (কি.মি.)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Cover Area"
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        <Text style={styles.headerLabel} numberOfLines={5} ellipsizeMode="tail">
          5. Existing problems and its their intensity in Forest land (বনভূমির
          বিদ্যমান সমস্যা এবং সমস্যার মাত্রা)
        </Text>
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            5.A. Natural Disturbances/Threats/ Events (প্রাকৃতিক সমস্যাসমূহ)
          </Text>
          <View style={styles.addButton}>
            <Button title="Add New"></Button>
          </View>
        </View>
        <View style={styles.box}>
          <View>
            <Text style={styles.label}>
              Natural Disturbances/Threats/ Events issues (প্রাকৃতিক সমস্যাসমূহ)
            </Text>
          </View>

          <Dropdown
            style={styles.input} // Reusing the input style for consistency
            data={naturalIssue}
            labelField="name"
            valueField="code"
            placeholder="Select forest type"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedNaturalIssue}
            onChange={item => setSelectedNaturalIssue(item.code)}
            dropdownStyle={{
              backgroundColor: 'white', // Ensure dropdown has a visible background
              borderRadius: 8, // Rounded corners for consistency
            }}
            itemTextStyle={{
              color: 'black', // Set item text color to black for visibility
              fontSize: 16, // Set an appropriate font size
            }}
          />
          <Text style={styles.label}>Frequency (মাত্রা)</Text>
          <Dropdown
            style={styles.input}
            data={rankOptions} // Use rank options from the hook
            labelField="label"
            valueField="value"
            placeholder="Select rank"
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
        </View> */}

        <View style={styles.container}>
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>
              5.A. Natural Disturbances/Threats/ Events (প্রাকৃতিক সমস্যাসমূহ)
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          {/* Modal Section */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)} // Close modal when back button is pressed
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.label}>
                    Natural Disturbances/Threats/ Events issues (প্রাকৃতিক
                    সমস্যাসমূহ)
                  </Text>

                  <Dropdown
                    style={styles.input}
                    data={naturalIssue}
                    labelField="name"
                    valueField="code"
                    placeholder="Select natural disturbance"
                    placeholderStyle={{color: 'black', fontSize: 16}}
                    selectedTextStyle={{color: 'black', fontSize: 16}}
                    value={selectedNaturalIssue}
                    onChange={item => setSelectedNaturalIssue(item.code)}
                    dropdownStyle={{
                      backgroundColor: 'white',
                      borderRadius: 8,
                    }}
                    itemTextStyle={{
                      color: 'black',
                      fontSize: 16,
                    }}
                  />

                  <Text style={styles.label}>Frequency (মাত্রা)</Text>

                  <Dropdown
                    style={styles.input}
                    data={rankOptions}
                    labelField="label"
                    valueField="value"
                    placeholder="Select frequency"
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

                  {/* Close Button */}
                  <Button
                    title="Close"
                    onPress={() => setModalVisible(false)}
                  />
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>

        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            5.B. Human interference within Beat/Camp/SFPC and its landscape
            (বিট/ক্যাম্প/এসএফপিসি ও তৎসংলগ্ন এলাকায় মানুষের কার্যক্রম)
          </Text>
          <Button title="Add New"></Button>
        </View>

        <View style={styles.box}>
          <View>
            <Text style={styles.label}>
              Human interference issues (মানুষের কার্যক্রম)
            </Text>
          </View>
          <Dropdown
            style={styles.input}
            data={humanIssue} // Use rank options from the hook
            labelField="name"
            valueField="code"
            placeholder="Select human issue"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedHumanIssue} // Bind the selected value from the hook
            onChange={item => {
              setSelectedHumanIssue(item.value); // Update selected rank via the hook
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

          <Text style={styles.label}>Rank (মাত্রা)</Text>
          <Dropdown
            style={styles.input}
            data={rankOptions} // Use rank options from the hook
            labelField="label"
            valueField="value"
            placeholder="Select rank"
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
        </View> */}

        <View style={styles.container}>
          {/* Add New Button */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>
              5.B. Human interference within Beat/Camp/SFPC and its landscape
              (বিট/ক্যাম্প/এসএফপিসি ও তৎসংলগ্ন এলাকায় মানুষের কার্যক্রম)
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible2(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          {/* Modal */}
          <Modal
            visible={modalVisible2}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible2(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.label}>
                    Human interference issues (মানুষের কার্যক্রম)
                  </Text>
                  <Dropdown
                    style={styles.input}
                    data={humanIssue}
                    labelField="name"
                    valueField="code"
                    placeholder="Select human disturbance"
                    placeholderStyle={{color: 'black', fontSize: 16}}
                    selectedTextStyle={{color: 'black', fontSize: 16}}
                    value={selectedHumanIssue}
                    onChange={item => setSelectedHumanIssue(item.code)}
                    dropdownStyle={{
                      backgroundColor: 'white',
                      borderRadius: 8,
                    }}
                    itemTextStyle={{
                      color: 'black',
                      fontSize: 16,
                    }}
                  />

                  <Text style={styles.label}>Rank (মাত্রা)</Text>
                  <Dropdown
                    style={styles.input}
                    data={rankOptions}
                    labelField="label"
                    valueField="value"
                    placeholder="Select frequency"
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

                  <Text style={styles.label}>Notes</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type your notes here"
                    value={inputValue1}
                    onChangeText={text => setInputValue1(text)}
                    placeholderTextColor="black"
                  />

                  <Button
                    title="Close"
                    onPress={() => setModalVisible2(false)}
                  />
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>

        {/* <View style={styles.button}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('beatThree' as never)}></Button>
        </View> */}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('beatThree' as never)}>
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
    placeholderTextColor: 'black',
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

export default beatTwo;
