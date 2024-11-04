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
  jur_fd_beats_api,
  jur_fd_beats_list,
  jur_fd_circles_api,
  jur_fd_circles_list,
  jur_fd_divisions_api,
  jur_fd_divisions_list,
  jur_fd_ecozones_api,
  jur_fd_ecozones_list,
  jur_fd_ranges_api,
  jur_fd_ranges_list,
} from '../../database/sqlDatabase';

const consultOne = () => {
  const [fstLnd, setFstLnd] = useState([]);
  const [fstCircle, setFstCircle] = useState([]);
  const [fstDivision, setFstDivision] = useState([]);
  const [fstrange, setFstRange] = useState([]);
  const [fstbeat, setFstbeat] = useState([]);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [inputValue8, setInputValue8] = useState('');
  const [inputValue9, setInputValue9] = useState('');
  const [inputValue100, setInputValue100] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [selectedForest, setSelectedForest] = useState(null);
  const [selectedForestCircle, setSelectedForestCircle] = useState(null);
  const [selectedForestDivision, setSelectedForestDivision] = useState(null);
  const [selectedForestrange, setSelectedForestRange] = useState(null);
  const [selectedForestbeat, setSelectedForestBeat] = useState(null);

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
    const forest_landscape = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_ecozones?token=${token}`,
        // );
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await jur_fd_ecozones_api();
        const data = await jur_fd_ecozones_list();
        setFstLnd(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_landscape();
  }, []);

  useEffect(() => {
    const forest_circle = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_circles?token=${token}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await jur_fd_circles_api();
        const data = await jur_fd_circles_list();
        setFstCircle(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_circle();
  }, []);

  useEffect(() => {
    const forest_division = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_divisions?token=${token}&&circle_code=${selectedForestCircle}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await jur_fd_divisions_api();
        const data = await jur_fd_divisions_list();
        setFstDivision(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_division();
  }, [selectedForestCircle]);

  useEffect(() => {
    const forest_range = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_ranges?token=${token}&&division_code=${selectedForestDivision}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await jur_fd_ranges_api();
        const data = await jur_fd_ranges_list();

        setFstRange(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_range();
  }, [selectedForestDivision]);

  useEffect(() => {
    const forest_beat = async () => {
      try {
        // const response = await fetch(
        //   `${baseApi}/jur_fd_beats?token=${token}&&range_code=${selectedForestrange}`,
        // );
        // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        await jur_fd_beats_api();
        const data = await jur_fd_beats_list();
        setFstbeat(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    forest_beat();
  }, [selectedForestrange]);

  const consultOne = () => {
    console.log(
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6,
      inputValue7,
      inputValue8,
      inputValue9,

      selectedForest,
      selectedForestCircle,
      selectedForestDivision,
      selectedForestrange,
      selectedForestbeat,
    );

    navigation.navigate('communityconsultTwo' as never);
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
            Part C: Community Consultation of the Beat (স্থানীয় জনগোষ্ঠির সাথে
            আলোচনা)
          </Text>
        </View>

        <Text style={styles.label}>1. General Information (প্রাথমিক তথ্য)</Text>
        <Text style={styles.label}>
          1.a. Name of the meeting place (সভার জায়গার নাম):
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select meeting place"
          onChangeText={text => setInputValue1(text)}
        />

        <Text style={styles.label}>1.b. Name of Union (ইউনিয়নের নাম):</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Name of Union"
          onChangeText={text => setInputValue2(text)}
        />

        <Text style={styles.label}>
          1.c. Consultation Date/s (আলোচনার তারিখ):
        </Text>
        <Text style={styles.label}>1.c.1. Start Date (শুরুর তারিখ):</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={styles.input}
            value={inputValue1}
            placeholder="Select date and time"
            editable={false} // Prevent manual editing
            pointerEvents="none" // Ensure the input doesn't focus, acting like a button
            onChangeText={text => setInputValue3(text)}
          />
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={onChange}
          />
        )}

        <Text style={styles.label}>1.c.2. End Date (শেষ তারিখ):</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={styles.input}
            value={inputValue1}
            placeholder="Select date and time"
            editable={false} // Prevent manual editing
            pointerEvents="none" // Ensure the input doesn't focus, acting like a button
            onChangeText={text => setInputValue4(text)}
          />
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={onChange}
          />
        )}

        <Text style={styles.label}>
          1.d. Name of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি কর্মকর্তার
          নাম):
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Name of Beat/Camp/SFPC Officer"
          onChangeText={text => setInputValue5(text)}
        />

        <Text style={styles.label}>
          1.e. Mobile number (Beat/Camp/SFPC Officer) (বিট/ক্যাম্প/এসএফপিসি
          কর্মকর্তার মোবাইল নং):
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Mobile number "
          onChangeText={text => setInputValue6(text)}
        />

        <Text style={styles.label}>
          1.f. Email address of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
          কর্মকর্তার ইমেইল আইডি):
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Email adress "
          onChangeText={text => setInputValue7(text)}
        />

        <Text style={styles.label}>
          2. Location Data (Beat/Camp/SFPC Information) (এলাকার তথ্য)
        </Text>
        <Text style={styles.label}>Forest Landscape (বনের ধরণ):</Text>
        <Dropdown
          style={styles.input}
          data={fstLnd}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="id" // Use the 'id' as the value field
          placeholder="Select Landscape type"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForest}
          onChange={item => setSelectedForest(item.value)} // Update the selected value based on 'id'
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
          2.1. Forest Administration Information (বন প্রশাসনিক তথ্য)
        </Text>
        <Text style={styles.label}>2.1.a. Forest Circle (বন অঞ্চল):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstCircle}
          labelField="name"
          valueField="id"
          placeholder="Select forest Circle"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestCircle}
          onChange={item => setSelectedForestCircle(item.id)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.1.b. Forest Division (বন বিভাগ):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstDivision}
          labelField="name"
          valueField="code"
          placeholder="Select forest division"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestDivision}
          onChange={item => setSelectedForestDivision(item.code)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.1.c. Range/SFNTC (রেঞ্জ/এফইএনটিসি):</Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstrange}
          labelField="name"
          valueField="code"
          placeholder="Select forest range"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestrange}
          onChange={item => setSelectedForestRange(item.code)}
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
          2.1.d. Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি):
        </Text>
        <Dropdown
          style={styles.input} // Reusing the input style for consistency
          data={fstbeat}
          labelField="name"
          valueField="id"
          placeholder="Select forest beat"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedForestbeat}
          onChange={item => setSelectedForestBeat(item.id)}
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />

        <Text style={styles.label}>2.1.d.1.Block (ব্লক):</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Block"
          onChangeText={text => setInputValue8(text)}
        />

        <Text style={styles.label}>2.1.d.2.Char (চর):</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="black"
          placeholder="select Char"
          onChangeText={text => setInputValue9(text)}
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => consultOne()}>
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
    marginTop: 5,
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

export default consultOne;
