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
import {Colors, CommonStyles, Fonts, Sizes} from '../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  plant27_2021_gr_regen_create,
  plant27_2021_gr_regen_list,
  plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb_create,
  plant27_2021_gregen_gregen_plot_reg_cen_to_e_bn_create,
  plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref_create,
} from '../../database/sqlDatabase';
import {getCurrentDateandTime} from '../../hooks/dateUtils';
import useCreateUri from '../../hooks/useCreatUri';
import useUUID from '../../hooks/useUUID';
import RNFetchBlob from 'rn-fetch-blob';

const interventionThree = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [inputValue1, setInputValue1] = useState(null);
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');
  const [inputValue8, setInputValue8] = useState('');
  const [gr_regen, setgr_regen] = useState([]);
  const [image, setImage] = useState([]);
  const [image2, setImage2] = useState([]);
  const [image3, setImage3] = useState([]);
  const [image4, setImage4] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);

  const {initialUUID, generateUUID} = useUUID();
  const [newUUID, setNewUUID] = useState('');
  const [oridianl, setoridianl] = useState(0);
  const uri = useCreateUri();

  const navigation = useNavigation();
  const route = useRoute();
  const {uuid} = route.params;
  const uid = uuid;
  console.log(uid, 'uuid in page 3');

  const onDocumentPress = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['application/*', 'text/*', 'image/*'], // MIME types to cover general files
      });

      // Ensure a file is selected
      if (res && res.length > 0) {
        const fileUri = res[0].uri;
        console.log(fileUri, 'fileUri');

        // Read the file using rn-fetch-blob as base64
        const base64Data = await RNFetchBlob.fs.readFile(fileUri, 'base64');

        // Create a Blob from Base64 data
        const blob = RNFetchBlob.base64.decode(base64Data);
        setImage(blob);

        //console.log('Blob created successfully:', blob);
      }
    } catch (error) {
      console.error('Error picking or creating Blob from file:', error);
    }
  };

  const onDocumentPress2 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['application/*', 'text/*', 'image/*'], // MIME types to cover general files
      });

      // Ensure a file is selected
      if (res && res.length > 0) {
        const fileUri = res[0].uri;
        console.log(fileUri, 'fileUri');

        // Read the file using rn-fetch-blob as base64
        const base64Data = await RNFetchBlob.fs.readFile(fileUri, 'base64');

        // Create a Blob from Base64 data
        const blob = RNFetchBlob.base64.decode(base64Data);
        setImage2(blob);

        //console.log('Blob created successfully:', blob);
      }
    } catch (error) {
      console.error('Error picking or creating Blob from file:', error);
    }
  };

  const onDocumentPress3 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['application/*', 'text/*', 'image/*'], // MIME types to cover general files
      });

      // Ensure a file is selected
      if (res && res.length > 0) {
        const fileUri = res[0].uri;
        console.log(fileUri, 'fileUri');

        // Read the file using rn-fetch-blob as base64
        const base64Data = await RNFetchBlob.fs.readFile(fileUri, 'base64');

        // Create a Blob from Base64 data
        const blob = RNFetchBlob.base64.decode(base64Data);
        setImage3(blob);

        //console.log('Blob created successfully:', blob);
      }
    } catch (error) {
      console.error('Error picking or creating Blob from file:', error);
    }
  };

  const onDocumentPress4 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['application/*', 'text/*', 'image/*'], // MIME types to cover general files
      });

      // Ensure a file is selected
      if (res && res.length > 0) {
        const fileUri = res[0].uri;
        console.log(fileUri, 'fileUri');

        // Read the file using rn-fetch-blob as base64
        const base64Data = await RNFetchBlob.fs.readFile(fileUri, 'base64');

        // Create a Blob from Base64 data
        const blob = RNFetchBlob.base64.decode(base64Data);
        setImage4(blob);

        //console.log('Blob created successfully:', blob);
      }
    } catch (error) {
      console.error('Error picking or creating Blob from file:', error);
    }
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

  const addNew = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInsertadd = {
      _URI: newGeneratedUUID, // Use the freshly generated UUID
      _CREATOR_URI_USER: uri,
      _PARENT_AURI: initialUUID,
      _TOP_LEVEL_AURI: initialUUID,
      _CREATION_DATE: getCurrentDateandTime(),
      _LAST_UPDATE_DATE: getCurrentDateandTime(),
      GREGEN_GREGEN_PLOT_REGEN_PLOT_NO: inputValue1,
      GREGEN_GREGEN_PLOT_RSITEPOINT_LAT: inputValue2,
      GREGEN_GREGEN_PLOT_RSITEPOINT_LNG: inputValue3,
      GREGEN_GREGEN_PLOT_CROWN_CLOSURE: inputValue4,
      _ORDINAL_NUMBER: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd, 'datato insert');

    try {
      await plant27_2021_gr_regen_create(dataToInsertadd);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  // const interventionThree = async () => {
  //   const newGeneratedUUID = generateUUID(); // Generate a new UUID
  //   setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
  //   const subUri = newGeneratedUUID;
  //   const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
  //   setoridianl(updatedOrdinalNumber);
  //   console.log(
  //     console.log('inputValue1:', inputValue1),
  //     console.log('inputValue2:', inputValue2),
  //     console.log('inputValue3:', inputValue3),
  //     console.log('inputValue4:', inputValue4),
  //     console.log('inputValue5:', inputValue5),
  //     console.log('inputValue6:', inputValue6),
  //     console.log('inputValue7:', inputValue7),
  //     console.log('inputValue8:', inputValue8),
  //   );
  //   const dataToInsertimage1One = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     VALUE: image,

  //     _ORDINAL_NUMBER: updatedOrdinalNumber,
  //   };
  //   // const dataToInsertimage1Two = {
  //   //   _uri: newGeneratedUUID, // Use the freshly generated UUID
  //   //   _creator_uri_user: uri,
  //   //   _parent_auri: uId,
  //   //   _top_level_auri: uId,
  //   //   _creation_date: getCurrentDateandTime(),
  //   //   _last_update_date: getCurrentDateandTime(),
  //   // };
  //   const dataToInsertimage1Three = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     _SUB_AURI: subUri,
  //   };

  //   const dataToInsertimage2One = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     VALUE: image,

  //     _ORDINAL_NUMBER: updatedOrdinalNumber,
  //   };
  //   // const dataToInsertimage2Two = {
  //   //   _uri: newGeneratedUUID, // Use the freshly generated UUID
  //   //   _creator_uri_user: uri,
  //   //   _parent_auri: uId,
  //   //   _top_level_auri: uId,
  //   //   _creation_date: getCurrentDateandTime(),
  //   //   _last_update_date: getCurrentDateandTime(),
  //   // };
  //   const dataToInsertimage2Three = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     _SUB_AURI: subUri,
  //   };

  //   const dataToInsertimage3One = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     VALUE: image,

  //     _ORDINAL_NUMBER: updatedOrdinalNumber,
  //   };
  //   // const dataToInsertimage3Two = {
  //   //   _uri: newGeneratedUUID, // Use the freshly generated UUID
  //   //   _creator_uri_user: uri,
  //   //   _parent_auri: uId,
  //   //   _top_level_auri: uId,
  //   //   _creation_date: getCurrentDateandTime(),
  //   //   _last_update_date: getCurrentDateandTime(),
  //   // };
  //   const dataToInsertimage3Three = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     _SUB_AURI: subUri,
  //   };

  //   const dataToInsertimage4One = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     VALUE: image,

  //     _ORDINAL_NUMBER: updatedOrdinalNumber,
  //   };
  //   // const dataToInsertimage4Two = {
  //   //   _uri: newGeneratedUUID, // Use the freshly generated UUID
  //   //   _creator_uri_user: uri,
  //   //   _parent_auri: uId,
  //   //   _top_level_auri: uId,
  //   //   _creation_date: getCurrentDateandTime(),
  //   //   _last_update_date: getCurrentDateandTime(),
  //   // };
  //   const dataToInsertimage4Three = {
  //     _URI: newGeneratedUUID, // Use the freshly generated UUID
  //     _CREATOR_URI_USER: uri,
  //     _PARENT_AURI: uid,
  //     _TOP_LEVEL_AURI: uid,
  //     _CREATION_DATE: getCurrentDateandTime(),
  //     _LAST_UPDATE_DATE: getCurrentDateandTime(),
  //     _SUB_AURI: subUri,
  //   };
  //   //console.log(dataToInsertimageOne, 'data to image..');
  //   try {
  //     await plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb_create(
  //       dataToInsertimage1One,
  //     );
  //   } catch (error) {
  //     console.error('Error during imageOne creation:', error);
  //   }
  //   try {
  //     await plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref_create(
  //       dataToInsertimage1Three,
  //     );
  //   } catch (error) {
  //     console.error('Error during imageThree creation:', error);
  //   }
  //   navigation.navigate('interventionFour', {uuid: uid});
  // };
  const interventionThree = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // Set it to state if needed later
    const subUri = newGeneratedUUID;
    const updatedOrdinalNumber = oridianl + 1; // Increment ordinal value
    setoridianl(updatedOrdinalNumber);

    // Log input values for debugging
    console.log({
      inputValue1,
      inputValue2,
      inputValue3,
      inputValue4,
      inputValue5,
      inputValue6,
      inputValue7,
      inputValue8,
    });

    // Data objects for all images
    const dataSets = [
      // Image 1
      {
        one: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          VALUE: image,
          _ORDINAL_NUMBER: updatedOrdinalNumber,
        },
        three: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          _SUB_AURI: subUri,
        },
      },
      // Image 2
      {
        one: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          VALUE: image2,
          _ORDINAL_NUMBER: updatedOrdinalNumber,
        },
        three: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          _SUB_AURI: subUri,
        },
      },
      // Image 3
      {
        one: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          VALUE: image3,
          _ORDINAL_NUMBER: updatedOrdinalNumber,
        },
        three: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          _SUB_AURI: subUri,
        },
      },
      // Image 4
      {
        one: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          VALUE: image4,
          _ORDINAL_NUMBER: updatedOrdinalNumber,
        },
        three: {
          _URI: newGeneratedUUID,
          _CREATOR_URI_USER: uri,
          _PARENT_AURI: uid,
          _TOP_LEVEL_AURI: uid,
          _CREATION_DATE: getCurrentDateandTime(),
          _LAST_UPDATE_DATE: getCurrentDateandTime(),
          _SUB_AURI: subUri,
        },
      },
    ];

    // Iterate over each data set and insert the data
    for (const [index, data] of dataSets.entries()) {
      try {
        // Insert data for "one"
        await plant27_2021_gregen_gregen_plot_reg_cen_to_e_blb_create(data.one);
        console.log(`Image${index + 1}One inserted successfully`);
      } catch (error) {
        console.error(`Error during Image${index + 1}One creation:`, error);
      }

      try {
        // Insert data for "three"
        await plant27_2021_gregen_gregen_plot_reg_cen_to_e_ref_create(
          data.three,
        );
        console.log(`Image${index + 1}Three inserted successfully`);
      } catch (error) {
        console.error(`Error during Image${index + 1}Three creation:`, error);
      }
    }

    // Navigate to the next screen after all insertions are complete
    navigation.navigate('interventionFour', {uuid: uid});
  };

  const tableData = [];

  useEffect(() => {
    const fbli = async () => {
      const data = await plant27_2021_gr_regen_list();
      setgr_regen(data);
    };
    fbli();
  }, []);

  //console.log(gr_regen, 'fbli data....');

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
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            5.a.2. Geographic Plot location (at Plot center)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            5.a.2. Geographic Plot location (at Plot center)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />

          <Text style={styles.label}>
            {' '}
            5.a.7. Crown Closure (%) at plot center (ocular
            extimation/densiometer)
          </Text>

          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
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

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>Plot No (প্লট নং)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Geographic Plot Location 1</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Geographic Plot Location 2</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Crown Closure (%) at Plot Center
              </Text>
            </View>

            {/* Data Rows */}
            {gr_regen.length > 0 ? (
              <FlatList
                data={gr_regen}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.dataRowContainer}>
                    <Text style={styles.cellContent}>
                      {item.GREGEN_GREGEN_PLOT_REGEN_PLOT_NO}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.GREGEN_GREGEN_PLOT_RSITEPOINT_LAT}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.GREGEN_GREGEN_PLOT_RSITEPOINT_LNG}
                    </Text>
                    <Text style={styles.cellSeparator}>|</Text>
                    <Text style={styles.cellContent}>
                      {item.GREGEN_GREGEN_PLOT_CROWN_CLOSURE}
                    </Text>
                  </View>
                )}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
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
                      value={inputValue2}
                      placeholder="Enter Geographic Location 1"
                      onChangeText={text => setInputValue2(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      5.a.3. Geographic Plot Location (at Plot Center)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue3}
                      placeholder="Enter Geographic Location 2"
                      onChangeText={text => setInputValue3(text)}
                      placeholderTextColor="black"
                    />

                    <Text style={styles.label}>
                      5.a.7. Crown Closure (%) at Plot Center (ocular
                      estimation/densiometer)
                    </Text>
                    <TextInput
                      style={styles.input}
                      value={inputValue4}
                      placeholder="Enter Crown Closure (%)"
                      onChangeText={text => setInputValue4(text)}
                      placeholderTextColor="black"
                    />

                    {/* Close modal button */}
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 5,
                      }}>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 5,
                          padding: 10,
                          backgroundColor: '#007AFF', // Default iOS button color. Use '#2196F3' for Android.
                          borderRadius: 5,
                        }}
                        onPress={addNew}>
                        <Text style={{color: 'white'}}>Save</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 5,
                          padding: 10,
                          backgroundColor: '#007AFF', // Same default color as above
                          borderRadius: 5,
                        }}
                        onPress={() => setModalVisible(false)}>
                        <Text style={{color: 'white'}}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>5.a.3. From Plot center to North</Text>

          {/* <TextInput
          style={styles.input}
          value={inputValue5}
          onChangeText={text => setInputValue5(text)}
          placeholderTextColor="black"
          placeholder="select  From Plot center to North"
        /> */}
          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>5.a.4. From Plot center to East</Text>

          {/* <TextInput
          style={styles.input}
          value={inputValue6}
          onChangeText={text => setInputValue6(text)}
          placeholderTextColor="black"
          placeholder="select From Plot center to East"
        /> */}
          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress2}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txtNbutton}>
          <Text style={styles.label}>5.a.5. From Plot center to South</Text>

          {/* <TextInput
          style={styles.input}
          value={inputValue7}
          onChangeText={text => setInputValue7(text)}
          placeholderTextColor="black"
          placeholder="select From Plot center to South"
        /> */}
          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress3}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.txtNbutton}>
          <Text style={styles.label}> 5.a.6. From Plot center to West</Text>

          {/* <TextInput
          style={styles.input}
          value={inputValue8}
          onChangeText={text => setInputValue8(text)}
          placeholderTextColor="black"
          placeholder="select From Plot center to West"
        /> */}
          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress4}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionThree()}>
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
    borderRadius: 5,
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

export default interventionThree;
