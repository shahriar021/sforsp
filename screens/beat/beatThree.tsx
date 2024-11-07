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
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors, CommonStyles, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import useLogistic from '../../hooks/useLogistic';
import {gener43_2021_core_update2} from '../../database/sqlDatabase';

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
  const [inputValue6b1, setInputValue6b1] = useState('');
  const [inputValue6b2, setInputValue6b2] = useState('');
  const [inputValue6b3, setInputValue6b3] = useState('');
  const [inputValue6b4, setInputValue6b4] = useState('');
  const [inputValue6b5, setInputValue6b5] = useState('');
  const [inputValue6b6, setInputValue6b6] = useState('');
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

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);

  const [modalTitle, setModalTitle] = useState('');

  const navigation = useNavigation();

  const route = useRoute();
  const {uuid} = route.params;
  console.log(uuid, 'uuid in page 3');

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

  const tableData = [];

  const submitBeatThree = async () => {
    console.log(
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

      selectedLogistic1,
      selectedLogistic2,
      selectedLogistic3,
      selectedLogistic4,
      selectedLogistic5,
      selectedLogistic6,
      selectedLogistic7,
      selectedLogistic8,
      selectedLogistic9,
      selectedLogistic10,
      selectedLogistic11,
      selectedLogistic12,
    );
    const dataToInsert = {
      RO_INFO_NAME_OF_RO: inputValue1,
      RO_INFO_RO_RANK: inputValue2,
      RO_INFO_RO_JOINING_DATE_RAW: inputValue3,
      RO_INFO_RO_CELL: inputValue4,
      RO_INFO_RO_NID: inputValue5,
      RO_INFO_RO_MAIL: inputValue6,
      BO_INFO_NAME_OF_BO: inputValue6b1,
      BO_INFO_BO_RANK: inputValue6b2,
      BO_INFO_BO_JOINING_DATE_RAW: inputValue6b2,
      BO_INFO_BO_CELL: inputValue6b3,
      BO_INFO_BO_NID: inputValue6b4,
      BO_INFO_BO_MAIL: inputValue6b5,
      LAND_TRANSPORTS_MOTORB_AVAIL: inputValue7,
      LAND_TRANSPORTS_MOTORB_CONDITION: selectedLogistic1,
      LAND_TRANSPORTS_BICYCLE_AVAIL: inputValue8,
      LAND_TRANSPORTS_BICYCLE_CONDITION: selectedLogistic2,
      LAND_TRANSPORTS_OTHERS_LAND_TRA_AVAIL: inputValue9,
      LAND_TRANSPORTS_OTHERS_LAND_TRA_CONDITION: selectedLogistic3,

      LOGISTICS3_SPEEDBOAT_AVAIL: inputValue10,
      LOGISTICS3_SPEEDBOAT_CONDITION: selectedLogistic4,
      LOGISTICS3_TVESSEL_AVAIL: inputValue11,
      LOGISTICS3_TVESSEL_CONDITION: selectedLogistic5,
      LOGISTICS3_COUNTRYBOAT_AVAIL: inputValue12,
      LOGISTICS3_COUNTRYBOAT_CONDITION: selectedLogistic6,
      LOGISTICS3_OTHERS_WATER_TRA_AVAIL: inputValue13,
      LOGISTICS3_OTHERS_WATER_TRA_CONDITION: selectedLogistic7,

      LOGISTICS4_TFIREARMS_303RIFLE_AVAIL: inputValue14,
      LOGISTICS4_RIFLE303_CONDITION: selectedLogistic8,
      LOGISTICS4_TFIREARMS_SLR_AVAIL: inputValue15,
      LOGISTICS4_SLR_CONDITION: selectedLogistic9,
      LOGISTICS4_TFIREARMS_SHORTGUN_AVAIL: inputValue16,
      LOGISTICS4_SHORTGUN_CONDITION: selectedLogistic10,
      LOGISTICS4_TFIREARMS_CHINESERIFLE_AVAIL: inputValue17,
      LOGISTICS4_CHINESERIFLE_CONDITION: selectedLogistic11,
      LOGISTICS4_OTHERS_WATER_TRA_AVAIL: selectedLogistic11,
      LOGISTICS4_OTHERS_WATER_TRA_CONDITION: selectedLogistic11,
    };

    try {
      await gener43_2021_core_update2(uuid, dataToInsert);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error); // Log the error message
    }
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
        <View style={styles.txtNbutton}>
          <Text style={styles.label}>
            6.1.a.Range Officer/Officer in charge (SFNTC) (ফরেষ্ট রেঞ্জার)
          </Text>
          {/* <View style={styles.addButton}>
            <Button title="Add New"></Button>
          </View> */}
        </View>
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>Rank::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue2}
            onChangeText={text => setInputValue2(text)}
          />

          <Text style={styles.label}>Joining date of the Range/Beat::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue3}
            onChangeText={text => setInputValue3(text)}
          />

          <Text style={styles.label}>Mobile Number::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue4}
            onChangeText={text => setInputValue4(text)}
          />

          <Text style={styles.label}>NID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue5}
            onChangeText={text => setInputValue5(text)}
          />

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6}
            onChangeText={text => setInputValue6(text)}
          />

          <Text style={styles.label}>
            6.1.b.Beat/Camp/SFPC in charge (বিট কর্মকর্তা)
          </Text>

          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6b1}
            onChangeText={text => setInputValue6b1(text)}
          />

          <Text style={styles.label}>Rank::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6b2}
            onChangeText={text => setInputValue6b2(text)}
          />

          <Text style={styles.label}>Joining date of the Range/Beat::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6b3}
            onChangeText={text => setInputValue6b3(text)}
          />

          <Text style={styles.label}>Mobile Number::</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6b4}
            onChangeText={text => setInputValue6b4(text)}
          />

          <Text style={styles.label}>NID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6b5}
            onChangeText={text => setInputValue6b5(text)}
          />

          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={inputValue6b6}
            onChangeText={text => setInputValue6b6(text)}
          />
        </View>

        {/* <View style={styles.tableContainer}>
          
          <View style={styles.headerRowContainer}>
            <Text style={styles.headerLabel}>
              Name of Mouza <Text>(মৌজার নাম)</Text>{' '}
            </Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Survey Types (সার্ভের ধরণ)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Sheet Number (সিট নম্বর)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Actions</Text>
          </View>

          
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
        </View> */}

        {/* <View style={styles.tableContainer}>
         
          <View style={styles.headerRowContainer}>
            <Text style={styles.headerLabel}>
              Name of Mouza <Text>(মৌজার নাম)</Text>{' '}
            </Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Survey Types (সার্ভের ধরণ)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Sheet Number (সিট নম্বর)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Actions</Text>
          </View>

          
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
        </View> */}

        <View style={styles.txtNbutton}>
          {/* Section 6.1.c */}
          <Text style={styles.label}>
            6.1.c. All Other Staffs (অন্যান্য কর্মচারীর তথ্যাদি)
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
              Name of Mouza <Text>(মৌজার নাম)</Text>{' '}
            </Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Survey Types (সার্ভের ধরণ)</Text>
            <Text style={styles.headerSeparator}>|</Text>
            <Text style={styles.headerLabel}>Sheet Number (সিট নম্বর)</Text>
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
          value={inputValue8}
          keyboardType="numeric"
          onChangeText={text => setInputValue8(text)}
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
          value={inputValue9}
          keyboardType="numeric"
          onChangeText={text => setInputValue9(text)}
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
          value={inputValue10}
          keyboardType="numeric"
          onChangeText={text => setInputValue10(text)}
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
          value={inputValue11}
          keyboardType="numeric"
          onChangeText={text => setInputValue11(text)}
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
          value={inputValue12}
          keyboardType="numeric"
          onChangeText={text => setInputValue12(text)}
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
          value={inputValue13}
          keyboardType="numeric"
          onChangeText={text => setInputValue13(text)}
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
          value={inputValue14}
          keyboardType="numeric"
          onChangeText={text => setInputValue14(text)}
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
          value={inputValue15}
          keyboardType="numeric"
          onChangeText={text => setInputValue15(text)}
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
          value={inputValue16}
          keyboardType="numeric"
          onChangeText={text => setInputValue17(text)}
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
          value={inputValue18}
          keyboardType="numeric"
          onChangeText={text => setInputValue18(text)}
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
          value={inputValue19}
          keyboardType="numeric"
          onChangeText={text => setInputValue19(text)}
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
            onPress={() => submitBeatThree()}>
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

const tableStyles = StyleSheet.create({
  tableContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  headerRowContainer: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  headerSeparator: {
    fontSize: 16,
    color: '#333',
  },
  dataRowContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cellContent: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  cellSeparator: {
    fontSize: 16,
    color: '#333',
  },
});

export default beatThree;
