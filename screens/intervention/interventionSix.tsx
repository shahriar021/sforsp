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
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
import {
  dis_nurserys_api,
  dis_nurserys_list,
  plant27_2021_core_update6,
  yes_no_lists_api,
  yes_no_lists_list,
} from '../../database/sqlDatabase';
import { useGlobalState } from '../../hooks/globalStateContext';

const interventionSix = () => {
  const [dis_nursery, setDisNursery] = useState([]);
  const [yes_no_lists, setyes_no_lists] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [inputValue100, setInputValue100] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedDisNursery, setSelectedDisNursery] = useState(null);
  const [selectedyes_no_lists, setSelectedDyes_no_lists] = useState(null);
  const [selectedyes_no_lists1, setSelectedDyes_no_lists1] = useState(null);
  const [selectedyes_no_lists2, setSelectedDyes_no_lists2] = useState(null);
  const [selectedyes_no_lists3, setSelectedDyes_no_lists3] = useState(null);
  const [selectedyes_no_lists4, setSelectedDyes_no_lists4] = useState(null);
  const [selectedyes_no_lists5, setSelectedDyes_no_lists5] = useState(null);
  const [selectedyes_no_lists6, setSelectedDyes_no_lists6] = useState(null);
  const [selectedyes_no_lists7, setSelectedDyes_no_lists7] = useState(null);
  const [selectedyes_no_lists8, setSelectedDyes_no_lists8] = useState(null);
  const [selectedyes_no_lists9, setSelectedDyes_no_lists9] = useState(null);
  const [selectedyes_no_lists10, setSelectedDyes_no_lists10] = useState(null);
  const [selectedyes_no_lists11, setSelectedDyes_no_lists11] = useState(null);
  const [selectedyes_no_lists12, setSelectedDyes_no_lists12] = useState(null);

  const {isSelected} = useGlobalState()
  const navigation = useNavigation();
  const route = useRoute();
  const {uuid} = route.params;
  const uid = uuid;
  console.log(uid, 'uuid in page 6');

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
    const dis_nurserys = async () => {
      try {
        // const response = await fetch(`${baseApi}/dis_nurserys?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await dis_nurserys_api();
        const data = await dis_nurserys_list();
        setDisNursery(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    dis_nurserys();
  }, []);

  useEffect(() => {
    const yes_no_lists = async () => {
      try {
        // const response = await fetch(`${baseApi}/yes_no_lists?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await yes_no_lists_api();
        const data = await yes_no_lists_list();
        setyes_no_lists(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    yes_no_lists();
  }, []);

  const interventionSixSubmit = async () => {
    console.log(
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue6,
      inputValue7,

      selectedDisNursery,
      selectedyes_no_lists,
      selectedyes_no_lists1,
      selectedyes_no_lists2,
      selectedyes_no_lists3,
      selectedyes_no_lists4,
      selectedyes_no_lists5,
      selectedyes_no_lists6,
      selectedyes_no_lists7,
      selectedyes_no_lists8,
      selectedyes_no_lists9,
      selectedyes_no_lists10,
      selectedyes_no_lists11,
    );

    const dataToInsert = {
      NURSERY_NURSERY_SITE_NURSERY_LOCATION: inputValue1,
      NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LAT: inputValue2,
      NURSERY_NURSERY_SITE_PSITEPOINT_NUR_LNG: inputValue3,
      NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_DIS: selectedDisNursery,
      NURSERY_NUR_SITE_SELECTION_HILL_SAL_WATER_SOURCE: selectedyes_no_lists,
      NURSERY_NUR_SITE_SELECTION_HILL_SAL_HIGH_LAND: selectedyes_no_lists1,
      NURSERY_NUR_SITE_SELECTION_HILL_SAL_DRAINAGE_FAC: selectedyes_no_lists2,
      NURSERY_NUR_SITE_SELECTION_HILL_SAL_NURSERY_AREA: selectedyes_no_lists3,
      NURSERY_NUR_SITE_SELECTION_HILL_SAL_NUESERY_SUNLIGH:
        selectedyes_no_lists4,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_NURSERY_DIS2:
        selectedyes_no_lists5,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA1:
        selectedyes_no_lists6,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA2:
        selectedyes_no_lists7,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA3:
        selectedyes_no_lists8,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA4:
        selectedyes_no_lists9,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA5:
        selectedyes_no_lists10,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA6:
        selectedyes_no_lists11,
      NURSERY_NUR_SITE_SELECTION_COASTAL_AREA_COASTAL_AREA7:
        selectedyes_no_lists12,
      NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME: inputValue1,
      NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE: inputValue2,
      NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID: inputValue3,
    };

    try {
      await plant27_2021_core_update6(uid, dataToInsert);
      console.log('All data updated successfully');
    } catch (error) {
      console.error('Failed to updated data:', error.message || error); // Log the error message
    }

    navigation.navigate('interventionSeven' as never, {uuid: uid});
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
          9. Nursery Planning (নার্সারি পরিকল্পনা)
        </Text>
        <Text style={styles.label}>9.a. Nursery Site:</Text>
        <Text style={styles.label}>9.a.1. Location Name:</Text>
        <TextInput
          style={styles.input}
          value={inputValue1}
          onChangeText={text => setInputValue1(text)}
          placeholderTextColor="black"
          placeholder="select Location Name"
        />
        <Text style={styles.label}>
          9.a.2. Geographic Nursery location: Easting:
        </Text>
        <TextInput
          style={styles.input}
          value={inputValue2}
          onChangeText={text => setInputValue2(text)}
          placeholderTextColor="black"
          placeholder="select Geographic Nursery location"
        />
        <Text style={styles.label}>
          9.a.3. Geographic Nursery location: Northing:
        </Text>
        <TextInput
          style={styles.input}
          value={inputValue3}
          onChangeText={text => setInputValue3(text)}
          placeholderTextColor="black"
          placeholder="select Geographic Nursery location"
        />

        <Text style={styles.label}>
          9.b. Nursery Site Selection (Quick assessment):
        </Text>
        <Text style={styles.label}>9.b.1. For Hill and Sal forests</Text>
        <Text style={styles.label}>
          9.b.1.1. What is the distance between proposed nursery and plantation
          site?
        </Text>

        <Dropdown
          style={styles.input}
          data={dis_nursery}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select nursery type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedDisNursery}
          onChange={item => setSelectedDisNursery(item.code)} // Update the selected value based on 'id'
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
          9.b.1.2. Are there water sources available nearby the nursery site?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists}
          onChange={item => setSelectedDyes_no_lists(item.code)} // Update the selected value based on 'id'
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
          9.b.1.3. Is the nursery site situated in a flat area of slightly high
          land?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists1}
          onChange={item => setSelectedDyes_no_lists1(item.code)} // Update the selected value based on 'id'
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
          9.b.1.4. Is the nursery site having adequate drainage facility?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists2}
          onChange={item => setSelectedDyes_no_lists2(item.code)} // Update the selected value based on 'id'
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
          9.b.1.5. Is this nursery area easily accessible?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists3}
          onChange={item => setSelectedDyes_no_lists3(item.code)} // Update the selected value based on 'id'
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
          9.b.1.6. Is the nursery area having scope of adequate sunlight?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists4}
          onChange={item => setSelectedDyes_no_lists4(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>9.b.2. For Coastal Areas</Text>
        <Text style={styles.label}>
          9.b.2.1. What is the distance between proposed nursery and plantation
          site?
        </Text>
        <Dropdown
          style={styles.input}
          data={dis_nursery}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists5}
          onChange={item => setSelectedDyes_no_lists5(item.code)} // Update the selected value based on 'id'
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
          9.b.2.2. The proposed nursery site is completely situated behind old
          plantation?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists6}
          onChange={item => setSelectedDyes_no_lists6(item.code)} // Update the selected value based on 'id'
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
          9.b.2.3. Does the nursery site has risk of coastal erosion/wave
          action?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists7}
          onChange={item => setSelectedDyes_no_lists7(item.code)} // Update the selected value based on 'id'
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
          9.b.2.4. Is the site has risk of silt deposition?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists8}
          onChange={item => setSelectedDyes_no_lists8(item.code)} // Update the selected value based on 'id'
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
          9.b.2.5. Is the soil of nursery site being clay or loamy, not sandy?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists9}
          onChange={item => setSelectedDyes_no_lists9(item.code)} // Update the selected value based on 'id'
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
          9.b.2.6. Is the nursery site close to canal or khal or river?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists10}
          onChange={item => setSelectedDyes_no_lists10(item.code)} // Update the selected value based on 'id'
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
          9.b.2.7. Is the nursery site inundated during normal / daily tides?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists11}
          onChange={item => setSelectedDyes_no_lists11(item.code)} // Update the selected value based on 'id'
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
          9.b.2.8. Is the nursery site inundated only during high/spring
          tides/vora kotal/joga goon?
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists12}
          onChange={item => setSelectedDyes_no_lists12(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>9.c.1. Nursery Caretaker Information</Text>
        <Text style={styles.label}>9.c.1.1 Name of nursery caretaker:</Text>
        <TextInput
          style={styles.input}
          value={inputValue4}
          onChangeText={text => setInputValue4(text)}
          placeholderTextColor="black"
          placeholder="select nursery caretaker"
        />
        <Text style={styles.label}>9.c.1.2. Mobile no. of the Caretaker:</Text>
        <TextInput
          style={styles.input}
          value={inputValue5}
          onChangeText={text => setInputValue5(text)}
          placeholderTextColor="black"
          placeholder="select  Mobile no. of the Caretaker"
        />

        <Text style={styles.label}>9.c.1.2. NID no. of the Caretaker:</Text>
        <TextInput
          style={styles.input}
          value={inputValue6}
          onChangeText={text => setInputValue6(text)}
          placeholderTextColor="black"
          placeholder="select NID no. of the Caretaker"
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionSixSubmit()}>
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

export default interventionSix;
