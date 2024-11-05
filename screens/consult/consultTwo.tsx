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
import {
  occupation_coms_api,
  occupation_coms_list,
  yes_no_lists_api,
  yes_no_lists_list,
} from '../../database/sqlDatabase';

const consultTwo = () => {
  const [yes_no_lists, setyes_no_lists] = useState([]);
  const [occupation_coms, setoccupation_coms] = useState([]);

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
  const [selectedoccupation_coms, setSelectedDoccupation_coms] = useState(null);

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
        //await yes_no_lists_api();
        const data = await yes_no_lists_list();
        setyes_no_lists(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    yes_no_lists();
  }, []);

  useEffect(() => {
    const occupation_coms = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/occupation_coms?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await occupation_coms_api();
        const data = await occupation_coms_list();
        setoccupation_coms(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    occupation_coms();
  }, []);

  const consultTwo = () => {
    console.log(
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,

      selectedyes_no_lists1,
      selectedyes_no_lists2,
      selectedyes_no_lists3,
      selectedyes_no_lists4,
      selectedyes_no_lists5,
      selectedyes_no_lists6,
    );
    navigation.navigate('communityconsultThree' as never);
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
        <View style={styles.txtNbutton}>
          <Text style={styles.headerLabel}>
            A. Take photographs during Community Consultations (গ্রামীন
            জনগোষ্ঠীর সাথে আলোচনার সময় একাধিক ছবি তুলে নিন)
          </Text>
          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>
          B. Community consultation issues (গ্রামীন জনগোষ্ঠীর সাথে আলোচনার
          বিষয়াবলী)
        </Text>
        <Text style={styles.label}>
          B.1. Biodiversity Conservation Issues (জীববৈচিত্র্য সংরক্ষণ):
        </Text>
        <Text style={styles.label}>
          B.1.a. Is there any biodiversity rich area in the Forest
          Beat/Camp/SFPC? (বিট/ক্যাম্প/এসএফপিসিতে বিশেষ জীববৈচিত্র্যপূর্ণ এলাকা
          আছে কি?):
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
          B.1.b.Is there prevailing threats to biodiversity loss in the Forest
          Beat/Camp/SFPC? (বিট/ক্যাম্প/এসএফপিসিতে জীববৈচিত্র্যের জন্য কোন হুমকি
          আছে কি?)
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
          B.1.c. Can restored biodersity (plants and Wildlife) benefit local
          community? (জীববৈচিত্র্য বা সার্বিক প্রতিবেশ পুনঃপ্রতিষ্ঠা কি
          জনগোষ্ঠীর জন্য কোন সুবিধা নিয়ে আসতে পারে?)
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
          B.2. Livelihoods and Alternative Income Generation Activities(AIGA)
          (জীবিকা ও বিকল্প আয়ের উৎস্য):
        </Text>
        <Text style={styles.label}>
          B.2.a. Is there any existing forest based/ conservation-focused
          livelihood activities in the village? (গ্রামে বন-সংরক্ষণ সহায়ক বা
          বন-ভিত্তিক ক্ষুদ্র ব্যবসা চলমান আছে কি?):
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

        <Text style={styles.label}>
          B.3. Forest Restoration: Scopes and Opportunities (বন পুনঃপ্রতিষ্ঠার
          সম্ভাবনা ও সুযোগ):
        </Text>
        <Text style={styles.label}>
          B.3.a. Are there any potential area for restoration in the
          Beat/Camp/SFPC area? (বন পুনঃপ্রতিষ্ঠার জন্য অত্র
          বিট/ক্যাম্প/এসএফপিসিতে সম্ভাব্য জায়গা আছে?):
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
          B.3.b. Will you support collaborative forest management for forest
          restoration? (আপনারা কি সহযোগিতামূলক বন ব্যবস্থাপনার আওতায় বন
          পুনঃপ্রতিষ্ঠার কাজে সমর্থন করেন?):
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

        <Text style={styles.label}>Others Question (অন্যান্য প্রশ্ন):</Text>
        <Text style={styles.label}>
          Others (Specify) (অন্যান্য (উল্লেখ করুন))
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Others"
          onChangeText={text => setInputValue1(text)}
        />

        <Text style={styles.label}>Answers (উত্তর)</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Answers"
          onChangeText={text => setInputValue2(text)}
        />

        <Text style={styles.label}>
          C. Community Engagement in Forest Restoration through Collaborative
          Forest Management (বন পুনঃপ্রতিষ্ঠা কার্যক্রমে সহযোগীতামূলক বন
          ব্যবস্থাপনা’র মাধ্যমে সংশ্লিষ্ট স্থানীয় জনগোষ্ঠীকে সম্পৃক্ত করা)
        </Text>
        <Text style={styles.label}>
          C.1. Community groups by occupation (পেশা-ভিত্তিক স্থানীয় জনগোষ্ঠীর
          ধরণ)
        </Text>
        <Dropdown
          style={styles.input}
          data={occupation_coms}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select Community groups by occupation type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedoccupation_coms}
          onChange={item => setSelectedDoccupation_coms(item.code)} // Update the selected value based on 'id'
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
          C.2. Expectation of the community groups on AIGAs from BFD for
          reducing forest dependency (বনের উপর নির্ভরশীলতা হ্রাসের জন্য বন
          বিভাগের বিকল্প জীবিকা কার্যক্রমে স্থানীয় জনগোষ্ঠীর চাহিদা)
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select AIGAs from BFD"
          onChangeText={text => setInputValue3(text)}
        />

        <Text style={styles.label}>
          C.3. Community role/commitment towards forest restoration (বনের উপর
          নির্ভরশীলতা হ্রাসের জন্য বন বিভাগের বিকল্প জীবিকা কার্যক্রমে স্থানীয়
          জনগোষ্ঠীর চাহিদা)
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Community role/commitment"
          onChangeText={text => setInputValue4(text)}
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => consultTwo()}>
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
});

export default consultTwo;
