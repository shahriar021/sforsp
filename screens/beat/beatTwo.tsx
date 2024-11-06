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
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, CommonStyles, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {baseApi, token} from '../../constants/base_api';
import useRank from '../../hooks/useRank';
import {
  gener43_2021_core_list,
  gener43_2021_core_update,
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
  const [inputValue8, setInputValue8] = useState('');
  const [inputValue9, setInputValue9] = useState('');
  const [inputValue10, setInputValue10] = useState('');
  const [inputValue11, setInputValue11] = useState('');
  const [inputValue12, setInputValue12] = useState('');
  const [inputValue13, setInputValue13] = useState('');
  const [inputValue14, setInputValue14] = useState('');
  const [inputValue15, setInputValue15] = useState('');
  const [inputValue16, setInputValue16] = useState('');
  const [inputValue17, setInputValue17] = useState('');
  const [inputValue18, setInputValue18] = useState('');
  const [inputValue19, setInputValue19] = useState('');
  const [inputValue20, setInputValue20] = useState('');
  const [inputValue21, setInputValue21] = useState('');
  const [inputValue22, setInputValue22] = useState('');
  const [inputValue23, setInputValue23] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);

  const [selectedNaturalIssue, setSelectedNaturalIssue] = useState(null);
  const [selectedHumanIssue, setSelectedHumanIssue] = useState(null);

  // console.log(selectedHumanIssue, 'human issue');
  // console.log(selectedNaturalIssue, 'natural issue');

  const route = useRoute();
  const {uId} = route.params;
  console.log(uId, 'uuid');

  const navigation = useNavigation();

  // const RankDropdown = useRank();
  const {rankOptions, selectedRank, setSelectedRank} = useRank();
  //console.log(rankOptions, '  Rank');

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
        //await natural_issues_api();
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
        //await human_issues_api();
        const data = await human_issues_list();
        sethumanIssue(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    human();
  }, []);

  // console.log(humanIssue, 'humanIssue issue..');

  const beatTwosubmit = async () => {
    // Log input values from inputValue1 to inputValue23
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
      inputValue10,
      inputValue11,
      inputValue12,
      inputValue13,
      inputValue14,
      inputValue15,
      inputValue16,
      inputValue17,
      inputValue18,
      inputValue19,
      inputValue20,
      inputValue21,
      inputValue22,
      inputValue23,
      selectedHumanIssue,
      selectedNaturalIssue,
      selectedRank,
    );

    const dataToInsert = {
      LAND_STATISTICS_BEAT_LAND_INFO_RESERVED_FOREST_HA: inputValue2,
      LAND_STATISTICS_BEAT_LAND_INFO_SECTION_6_HA: inputValue3,
      LAND_STATISTICS_BEAT_LAND_INFO_SECTION_4_HA: inputValue4,
      LAND_STATISTICS_BEAT_LAND_INFO_PROTECTED_FOREST_HA: inputValue5,
      LAND_STATISTICS_BEAT_LAND_INFO_VESTED_FOREST_HA: inputValue6,
      LAND_STATISTICS_BEAT_LAND_INFO_AQUIRED_FOREST_HA: inputValue7,
      LAND_STATISTICS_BEAT_LAND_INFO_OTHER_FORESTAREA_HA: inputValue8,
      LAND_STATISTICS_TOTAL_LEGAL_LAND_STATS: inputValue9,

      LAND_STATISTICS_BEAT_MGT_APPROACH_PA_WS_HA: inputValue10,
      LAND_STATISTICS_BEAT_MGT_APPROACH_PA_NP_HA: inputValue11,
      LAND_STATISTICS_BEAT_MGT_APPROACH_PA_ECOPARK_HA: inputValue12,
      LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SAFARIPARK_HA: inputValue13,
      LAND_STATISTICS_BEAT_MGT_APPROACH_PA_SBCA_HA: inputValue13,
      LAND_STATISTICS_BEAT_MGT_APPROACH_OTHER_PA_AREA_HA: inputValue13,

      LAND_STATISTICS_BEAT_LAND_BIO_NATURAL_TO_DC_HA: inputValue14,
      LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_HA: inputValue15,
      LAND_STATISTICS_BEAT_LAND_BIO_SOCIAL_ACCRETED_SKM: inputValue16,
      LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_HA: inputValue17,
      LAND_STATISTICS_BEAT_LAND_BIO_NON_PP_SKM: inputValue18,
      LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_HA: inputValue19,
      LAND_STATISTICS_BEAT_LAND_BIO_OTHER_PLANT_SKM: inputValue20,
    };

    try {
      await gener43_2021_core_update(uId, dataToInsert);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error); // Log the error message
    }

    // Navigate to the next screen
    navigation.navigate('beatThree', {uuid: uId});
  };
  const tableData = [];
  //  const [gener43_2021_core_listdata, setgener43_2021_core_list] = useState([]);
  // useEffect(() => {
  //   const gener43_2021_core_list_funct = async () => {
  //     const data = await gener43_2021_core_list();
  //     setgener43_2021_core_list(data);
  //   };
  //   gener43_2021_core_list_funct();
  // }, []);

  // console.log(gener43_2021_core_listdata, 'new data');

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
          value={inputValue2}
          keyboardType="numeric"
          onChangeText={text => setInputValue2(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.b. Forest land under section 6 (Hecter) (ধারায় বনভূমি (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest land "
          value={inputValue3}
          keyboardType="numeric"
          onChangeText={text => setInputValue3(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.c. Forest Land, Declared under Section 4 (Hecter) (৪ ধারায় বনভূমি
          (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Land, Declared under Section"
          value={inputValue4}
          keyboardType="numeric"
          onChangeText={text => setInputValue4(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.d. Protected Forests (PF) (Hecter) (রক্ষিত বন (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Protected Forests"
          value={inputValue5}
          keyboardType="numeric"
          onChangeText={text => setInputValue5(text)}
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.1.e. Vested Forests (Hecter) অর্পিত বনভূমি (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Vested Forests"
          value={inputValue6}
          keyboardType="numeric"
          onChangeText={text => setInputValue6(text)}
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
          value={inputValue8}
          onChangeText={text => setInputValue8(text)}
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
          value={inputValue9}
          onChangeText={text => setInputValue9(text)}
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
          value={inputValue10}
          onChangeText={text => setInputValue10(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.b. National Park (Hecter) জাতীয় উদ্যান (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here  National Park"
          value={inputValue11}
          onChangeText={text => setInputValue11(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.c. Eco-Park (Hecter) ইকো-পার্ক (হেক্টর) :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Eco-Park"
          value={inputValue12}
          onChangeText={text => setInputValue12(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.d. Safari Park (Hecter) সাফারী পার্ক (হেক্টর):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Safari Park"
          value={inputValue13}
          onChangeText={text => setInputValue13(text)}
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
          value={inputValue14}
          onChangeText={text => setInputValue14(text)}
          placeholderTextColor="black"
          keyboardType="numeric"
        />

        <Text style={styles.label}>
          4.2.f. Protected Area (Others) (Hecter) অন্যান্য (হেক্টর) :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Protected Area"
          value={inputValue15}
          onChangeText={text => setInputValue15(text)}
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
          value={inputValue16}
          onChangeText={text => setInputValue16(text)}
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
          value={inputValue17}
          onChangeText={text => setInputValue17(text)}
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
          value={inputValue18}
          onChangeText={text => setInputValue18(text)}
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
          value={inputValue19}
          onChangeText={text => setInputValue19(text)}
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
          value={inputValue20}
          onChangeText={text => setInputValue20(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.3.d.1 Forest Cover Area (Others) (Hecter) (অন্যান্য (হেক্টর)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Cover Area"
          value={inputValue21}
          onChangeText={text => setInputValue21(text)}
          keyboardType="numeric"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>
          4.3.d.2 Forest Cover Area (Others) (SKM) (অন্যান্য (কি.মি.)):
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here Forest Cover Area"
          value={inputValue22}
          onChangeText={text => setInputValue22(text)}
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

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>
                Natural Disturbances/Threats/ Events issues (প্রাকৃতিক
                সমস্যাসমূহ)
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Frequency (মাত্রা)</Text>
              <Text style={styles.headerSeparator}>|</Text>

              <Text style={styles.headerLabel}>Actions</Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.mouzaName}</Text>
                    <Text style={styles.cellContent}>{item.surveyType}</Text>
                    <Text style={styles.cellContent}>{item.sheetNumber}</Text>
                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.editButtonStyle}>
                        <Text style={styles.buttonTextStyle}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteButtonStyle}>
                        <Text style={styles.buttonTextStyle}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
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
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      margin: 5,
                    }}>
                    <Button title="Save" />
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

          <View style={styles.tableContainer}>
            {/* Header Row */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>
                Human interference issues <Text>(মানুষের কার্যক্রম)</Text>
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Rank (মাত্রা)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Notes</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Actions</Text>
            </View>

            {/* Data Rows */}
            {tableData.length > 0 ? (
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>{item.humanIssue}</Text>
                    <Text style={styles.cellContent}>{item.rank}</Text>
                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.editButtonStyle}>
                        <Text style={styles.buttonTextStyle}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteButtonStyle}>
                        <Text style={styles.buttonTextStyle}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
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
                    value={inputValue23}
                    onChangeText={text => setInputValue23(text)}
                    placeholderTextColor="black"
                  />

                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      margin: 5,
                    }}>
                    <Button title="Save" />
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

        {/* <View style={styles.button}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('beatThree' as never)}></Button>
        </View> */}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => beatTwosubmit()}>
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

export default beatTwo;
