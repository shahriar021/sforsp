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
import {useNavigation} from '@react-navigation/native';
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
import {yes_no_lists_api, yes_no_lists_list} from '../../database/sqlDatabase';

const consultThree = () => {
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

  const [selectedyes_no_lists1, setSelectedDyes_no_lists1] = useState(null);
  const [selectedyes_no_lists2, setSelectedDyes_no_lists2] = useState(null);
  const [selectedyes_no_lists3, setSelectedDyes_no_lists3] = useState(null);
  const [selectedyes_no_lists4, setSelectedDyes_no_lists4] = useState(null);
  const [selectedyes_no_lists5, setSelectedDyes_no_lists5] = useState(null);
  const [selectedyes_no_lists6, setSelectedDyes_no_lists6] = useState(null);
  const [selectedyes_no_lists7, setSelectedDyes_no_lists7] = useState(null);

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

  const consultThree = () => {
    console.log(
      inputValue1,
      inputValue2,

      selectedyes_no_lists1,
      selectedyes_no_lists2,
      selectedyes_no_lists3,
      selectedyes_no_lists4,
      selectedyes_no_lists5,
      selectedyes_no_lists6,
      selectedyes_no_lists7,
    );
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community Consult</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.headerLabel}>
          D. Social and Environmental Impacts (Safeguards) (সামাজিক ও পরিবেশগত
          সুরক্ষা)
        </Text>

        <Text style={styles.label}>
          D.1. Will proposed interventions impact negatively on the life and
          livelihoods of local communities? (প্রস্তাবিত বনায়ন কার্যক্রম স্থানীয়
          জনগোষ্ঠীর জীবন-জীবিকার উপর কোন বিরূপ প্রভাব ফেলবে কি?):
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
          onChange={item => setSelectedDyes_no_lists1(item.value)} // Update the selected value based on 'id'
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
          D.2. Will there be any Indigenous community at risk due to restoration
          interventions? (প্রস্তাবিত বনায়ন কার্যক্রমে কোন ক্ষুদ্র ণৃ-গোষ্ঠী
          ঝুঁকির সম্মুখীন হবে কি?)
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
          onChange={item => setSelectedDyes_no_lists2(item.value)} // Update the selected value based on 'id'
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
          D.3. Will there be any risk to ‘existing cultural rights or norms’?
          (বিদ্যমান কৃষ্টি বা সংস্কৃতি’র উপর কোন বিরূপ প্রভাব ফেলবে কি?)
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
          onChange={item => setSelectedDyes_no_lists3(item.value)} // Update the selected value based on 'id'
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
          D.4. Will the restoration interventions bring any environmental risks
          in the area? (অত্র এলাকায় বন পুনঃপ্রতিষ্ঠা কার্যক্রম কোন ধরণের
          পরিবেশগত বিরূপ প্রভাব ফেলবে কি?)
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
          onChange={item => setSelectedDyes_no_lists4(item.value)} // Update the selected value based on 'id'
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
          D.5. Will the initiative bring any invasive or exotic species of
          potential risks in the forests? (বন পুনঃপ্রতিষ্ঠা কার্যক্রমের মাধ্যমে
          কোন আগ্রাসী /ক্ষতিকর বা বিদেশী প্রজাতি বিস্তারের হুমকি রয়েছে কি?):
        </Text>
        <Dropdown
          style={styles.input}
          data={yes_no_lists}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select yes no type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedyes_no_lists5}
          onChange={item => setSelectedDyes_no_lists5(item.value)} // Update the selected value based on 'id'
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
          D.6. Do you (all) agree on the restoration activities discussed?
          (আলোচ্য বন পুনঃপ্রতিষ্ঠার কার্যক্রমে আপনারা সহমত পোষণ করেন কি?):
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
          onChange={item => setSelectedDyes_no_lists6(item.value)} // Update the selected value based on 'id'
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
          D.7. Will you support BFD in restoration and protecting the new
          plantation? (বনায়ন কার্যক্রমে বন অধিদপ্তরকে সহায়তায় সম্মত আছে কি?):
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
          onChange={item => setSelectedDyes_no_lists7(item.value)} // Update the selected value based on 'id'
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
            1. Take picture of the sign sheets of the participants (উপস্থিতি ও
            স্বাক্ষর এর ছবি তুলুন):
          </Text>
          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>
          1.1. Participants: Male (উপস্থিতিঃ পুরুষ):
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Male"
          onChangeText={text => setInputValue1(text)}
        />

        <Text style={styles.label}>
          1.2. Participants: Female (উপস্থিতিঃ নারী):
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Female"
          onChangeText={text => setInputValue2(text)}
        />

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            2. Take picture of the Consultation Notes (আলোচনার নোট এর ছবি
            তুলুন):
          </Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => consultThree()}>
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

export default consultThree;
