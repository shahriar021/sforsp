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
import useUUID from '../../hooks/useUUID';
import useCreateUri from '../../hooks/useCreatUri';
import {
  gener43_2021_core_list,
  gener43_2021_core_sync,
  gener43_2021_core_to_live,
  gener43_2021_fbli_m_sh1_list,
  gener43_2021_fbli_m_sh1_sync,
  gener43_2021_gvillages_create,
  gener43_2021_gvillages_list,
  gener43_2021_overallnotes_ima_blb_create,
  gener43_2021_overallnotes_ima_ref_create,
} from '../../database/sqlDatabase';
import {getCurrentDateandTime} from '../../hooks/dateUtils';
import RNFetchBlob from 'rn-fetch-blob';

const beatFour = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [VillageList, setVillageList] = useState([]);

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

  const [oridianl, setoridianl] = useState(0);
  const {initialUUID, generateUUID} = useUUID();
  const [newUUID, setNewUUID] = useState('');
  const [fetchagain, setfetchagain] = useState(false);
  const [gener43_2021_core_listdata, setgener43_2021_core_list] = useState([]);
  const [fbliData, setFbliData] = useState([]);

  const [image, setImage] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const {uId} = route.params;
  console.log(uId, 'uuid in page 4');
  const uri = useCreateUri();

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

  // useEffect(() => {
  //   const gener43_2021_core_list_funct = async () => {
  //     const data = await gener43_2021_core_list();
  //     setgener43_2021_core_list(data);
  //   };
  //   gener43_2021_core_list_funct();
  // }, []);

  // console.log(gener43_2021_core_listdata, 'new data');

  const addNewSave = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const currentDate = getCurrentDateandTime();

    const dataToInsertadd = {
      _URI: newGeneratedUUID, // Use the freshly generated UUID
      _CREATOR_URI_USER: uri,
      _PARENT_AURI: uId,
      _TOP_LEVEL_AURI: uId,
      _CREATION_DATE: currentDate,
      _LAST_UPDATE_DATE: currentDate,
      VILLA_AD_UPZILLA: inputValue1,
      VILLA_AD_UNION: inputValue2,
      TVILLAGE_NAME: inputValue3,
      VILLA_DIST: inputValue6,
      TOT_HH: inputValue7,
      FOREST_VILGRS: inputValue8,
      SOCFOR_PARTIC: inputValue9,
      VSITEPOINT_LAT: inputValue4,
      VSITEPOINT_LNG: inputValue5,
      _ORDINAL_NUMBER: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd, 'datato insert');

    try {
      await gener43_2021_gvillages_create(dataToInsertadd);
      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  const handleInputChange = (name, value) => {
    setInputValues(prevValues => ({...prevValues, [name]: value}));
  };

  function getCurrentDateandTimeMain() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format: YYYY-MM-DD HH:mm:ss (no milliseconds)
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  // const beatSynca = async () => {
  //   // setfetchagain(true);
  //   //fmetyhod(uri);
  //   // const datelala = getCurrentDateandTimeMain();
  //   // // console.log(datelala, 'date,,,,,');
  //   // // console.log(
  //   // //   '_uri',
  //   // //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]._uri,
  //   // // );
  //   // // console.log(
  //   // //   '_creator_uri_user',
  //   // //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   // //     ._creator_uri_user,
  //   // // );
  //   // // console.log(
  //   // //   '_creation_date',
  //   // //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   // //     ._creation_date,
  //   // // );
  //   // // console.log(
  //   // //   '_last_update_date',
  //   // //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   // //     ._last_update_date,
  //   // // );
  //   // const formData = new FormData();
  //   // // formData.append(
  //   // //   '_uri',
  //   // //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]._uri,
  //   // // );
  //   // // formData.append(
  //   // //   '_creator_uri_user',
  //   // //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   // //     ._creator_uri_user,
  //   // // );

  //   // formData.append(
  //   //   '_uri',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]._uri,
  //   // );
  //   // formData.append(
  //   //   '_creator_uri_user',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     ._creator_uri_user,
  //   // );
  //   // formData.append('_creation_date', getCurrentDateandTimeMain());
  //   // formData.append('_last_update_date', getCurrentDateandTimeMain());
  //   // formData.append(
  //   //   '_model_version',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     ._model_version,
  //   // );
  //   // formData.append(
  //   //   '_ui_version',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     ._ui_version,
  //   // );
  //   // formData.append(
  //   //   '_is_complete',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     ._is_complete,
  //   // );
  //   // formData.append(
  //   //   '_submission_date',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     ._submission_date,
  //   // );
  //   // formData.append(
  //   //   '_marked_as_complete_date',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     ._marked_as_complete_date,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_bio_other_plant_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_bio_other_plant_ha,
  //   // );
  //   // formData.append(
  //   //   'guser_tloc_fd_beat_point_lng',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .guser_tloc_fd_beat_point_lng,
  //   // );
  //   // formData.append(
  //   //   'fbli_fa_tloc_fd_beat',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .fbli_fa_tloc_fd_beat,
  //   // );
  //   // formData.append(
  //   //   'logistics3_countryboat_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_countryboat_condition,
  //   // );
  //   // formData.append(
  //   //   'logistics4_gfirearms_303rifle',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_gfirearms_303rifle,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_mgt_approach_other_pa_area_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_mgt_approach_other_pa_area_ha,
  //   // );
  //   // formData.append(
  //   //   'logistics4_others_water_tra',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_others_water_tra,
  //   // );
  //   // formData.append(
  //   //   'bo_info_bo_cell',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .bo_info_bo_cell,
  //   // );
  //   // formData.append(
  //   //   'logistics3_tvessel_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_tvessel_condition,
  //   // );
  //   // formData.append(
  //   //   'ro_info_ro_cell',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .ro_info_ro_cell,
  //   // );
  //   // formData.append(
  //   //   'logistics4_tfirearms_chineserifle_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_tfirearms_chineserifle_avail,
  //   // );
  //   // formData.append(
  //   //   'logistics3_tvessel_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_tvessel_avail,
  //   // );
  //   // formData.append(
  //   //   'fbli_fa_tloc_fd_beat_txt',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .fbli_fa_tloc_fd_beat_txt,
  //   // );
  //   // formData.append(
  //   //   'logistics3_speedboat_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_speedboat_condition,
  //   // );
  //   // formData.append(
  //   //   'fbli_fa_tloc_fd_division',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .fbli_fa_tloc_fd_division,
  //   // );
  //   // formData.append(
  //   //   'land_transports_bicycle_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_transports_bicycle_avail,
  //   // );
  //   // formData.append(
  //   //   'logistics3_others_water_tra_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_others_water_tra_condition,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_info_vested_forest_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_info_vested_forest_ha,
  //   // );
  //   // formData.append(
  //   //   'subscriberid',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .subscriberid,
  //   // );
  //   // formData.append(
  //   //   'guser_user',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .guser_user,
  //   // );
  //   // formData.append(
  //   //   'ro_info_name_of_ro',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .ro_info_name_of_ro,
  //   // );
  //   // formData.append(
  //   //   'fbli_fa_tloc_fd_block',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .fbli_fa_tloc_fd_block,
  //   // );
  //   // formData.append(
  //   //   'deviceid',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .deviceid,
  //   // );
  //   // formData.append(
  //   //   'land_transports_motorb_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_transports_motorb_condition,
  //   // );
  //   // formData.append(
  //   //   'fbli_generated_note_name_18',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .fbli_generated_note_name_18,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_bio_generated_note_name_74',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_bio_generated_note_name_74,
  //   // );
  //   // formData.append(
  //   //   'logistics4_chineserifle_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_chineserifle_condition,
  //   // );
  //   // formData.append(
  //   //   'logistics3_speedboat_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_speedboat_avail,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_mgt_approach_pa_ws_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_mgt_approach_pa_ws_ha,
  //   // );
  //   // formData.append(
  //   //   'logistics4_generated_note_name_152',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_generated_note_name_152,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_bio_non_pp_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_bio_non_pp_ha,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_info_section_6_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_info_section_6_ha,
  //   // );
  //   // formData.append(
  //   //   'simserial',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .simserial,
  //   // );
  //   // formData.append(
  //   //   'guser_dcollection_raw',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .guser_dcollection_raw,
  //   // );
  //   // formData.append(
  //   //   'land_transports_bicycle_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_transports_bicycle_condition,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_bio_social_accreted_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_bio_social_accreted_ha,
  //   // );
  //   // formData.append(
  //   //   'guser_generated_note_name_10',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .guser_generated_note_name_10,
  //   // );
  //   // formData.append(
  //   //   'land_statistics_beat_land_info_other_forestarea_ha',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_statistics_beat_land_info_other_forestarea_ha,
  //   // );
  //   // formData.append(
  //   //   'bo_info_bo_nid',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .bo_info_bo_nid,
  //   // );
  //   // formData.append(
  //   //   'land_transports_gbi_cycle',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_transports_gbi_cycle,
  //   // );
  //   // formData.append(
  //   //   'land_transports_bicycle_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .land_transports_bicycle_avail,
  //   // );
  //   // formData.append(
  //   //   'logistics4_others_water_tra_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_others_water_tra_avail,
  //   // );
  //   // formData.append(
  //   //   'guser_user',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .guser_user,
  //   // );
  //   // formData.append(
  //   //   'logistics3_speedboat_avail',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics3_speedboat_avail,
  //   // );
  //   // formData.append(
  //   //   'logistics4_others_water_tra_avail_condition',
  //   //   gener43_2021_core_listdata[gener43_2021_core_listdata.length - 1]
  //   //     .logistics4_others_water_tra_avail_condition,
  //   // );

  //   // ------------------------formdata2----------------------------------
  //   // const formData2 = new FormData();
  //   //const lastData2 = fbliData[fbliData.length - 1];

  //   // formData2.append('_uri', lastData2._uri);
  //   // console.log('Appended _uri:', lastData2._uri);
  //   // formData2.append('_creator_uri_user', uri);
  //   // console.log(
  //   //   formData2.append('_creation_date', getCurrentDateandTimeMain()),
  //   //   'creation date...........',
  //   // );
  //   // console.log(
  //   //   formData2.append('_last_update_date', getCurrentDateandTimeMain()),
  //   //   'last update date....',
  //   // );
  //   // //formData2.append('_parent_auri', initialUUID);
  //   // formData2.append('_ordinal_number', oridianl);
  //   // formData2.append('_top_level_auri', initialUUID);
  //   // formData.append('mouza1', lastData2.mouza1);
  //   // formData.append('survey_types', lastData2.survey_types);
  //   // formData.append('others_s_types', lastData2.others_s_types);
  //   // formData.append('sheet1', lastData2.sheet1);
  //   // formData.append(
  //   //   'generated_note_name_40',
  //   //   lastData2.generated_note_name_40,
  //   // );

  //   try {
  //     // const response = await fetch(
  //     //   'http://192.168.0.187:8000/api/gener43_2021_core_create?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
  //     //   {
  //     //     method: 'POST',
  //     //     body: formData,
  //     //     headers: {
  //     //       Accept: 'application/json',
  //     //     },
  //     //   },
  //     // );

  //     // const responseData = await response.json();
  //     // console.log('Response:', responseData);

  //     // const response2 = await fetch(
  //     //   'http://192.168.0.187:8000/api/gener43_2021_fbli_m_sh1_create?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
  //     //   {
  //     //     method: 'POST',
  //     //     body: formData2,
  //     //     headers: {
  //     //       Accept: 'application/json',
  //     //     },
  //     //   },
  //     // );
  //     // const result2 = await response2.json();
  //     // console.log('Second API result:', result2);

  //     // const requestData = {
  //     //   // _uri: lastData2._uri,
  //     //   _uri: 'uuid:4fbfaa95-b0b9-9a2f-fbd8-9234b7a8f2629',
  //     //   _creator_uri_user: uri,
  //     //   _creation_date: getCurrentDateandTimeMain(),
  //     //   _last_update_date: getCurrentDateandTimeMain(),
  //     //   _ordinal_number: 1,
  //     //   // Add other necessary fields here as well
  //     // };

  //     // console.log('Request Data:', requestData);

  //     // //Send the request as JSON
  //     // const response2 = await fetch(
  //     //   'http://192.168.0.187:8000/api/gener43_2021_fbli_m_sh1_create?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
  //     //   {
  //     //     method: 'POST',
  //     //     headers: {
  //     //       Accept: 'application/json',
  //     //       'Content-Type': 'application/json', // Important for sending JSON
  //     //     },
  //     //     body: JSON.stringify(requestData), // Convert the object to a JSON string
  //     //   },
  //     // );

  //     // const result2 = await response2.json();
  //     // console.log('Response from API:', result2);

  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const beatSync = async () => {
    console.log('clicked,,,,,', uId);

    await gener43_2021_core_sync(uId);
    await gener43_2021_fbli_m_sh1_sync(uId);
  };

  const beatFour = async () => {
    // console.log(
    //   inputValues.upzilla,
    //   inputValues.union,
    //   inputValues.villages,
    //   inputValues.location1,
    //   inputValues.location2,
    //   inputValues.distance,
    //   inputValues.households,
    //   inputValues.forestVillagers,
    //   inputValues.forestryParticipants,
    //   inputValues.conservationParticipants,
    // );

    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const subUri = newGeneratedUUID;
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);
    // Log input values from inputValue1 to inputValue23
    //

    const dataToInsertimageOne = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: uId,
      _top_level_auri: uId,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      value: image,

      _ordinal_number: updatedOrdinalNumber,
    };
    const dataToInsertimageTwo = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: uId,
      _top_level_auri: uId,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
    };
    const dataToInsertimageThree = {
      _uri: newGeneratedUUID, // Use the freshly generated UUID
      _creator_uri_user: uri,
      _parent_auri: uId,
      _top_level_auri: uId,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      _sub_auri: subUri,
    };

    console.log('Data to insert:', dataToInsertimageOne);

    try {
      //await gener43_2021_core_update(uId, dataToInsert);
      await gener43_2021_overallnotes_ima_blb_create(dataToInsertimageOne);
      //await gener43_2021_xpic_beat_index_bn_create(dataToInsertimageTwo);
      await gener43_2021_overallnotes_ima_ref_create(dataToInsertimageThree);

      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error); // Log the error message
    }
  };

  useEffect(() => {
    const fbli = async () => {
      const data = await gener43_2021_fbli_m_sh1_list();
      setFbliData(data);
    };
    fbli();
  }, []);

  //console.log(fbliData, 'fbli data....');

  useEffect(() => {
    const gnaissu = async () => {
      const data = await gener43_2021_gvillages_list();
      setVillageList(data);
    };
    gnaissu();
  }, []);

  const tableData = [];

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

        <ScrollView style={styles.tableContainer} horizontal={true}>
          {/* Headers */}
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>Upzilla (উপজেলা)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Union (ইউনিয়ন)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Name of Villages/Para (গ্রাম/পাড়ার নাম)
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Geographic Location (গ্রামের অবস্থান)
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Distance from Beat (KM)</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Total Households (মোট খানার সংখ্যা)
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Number of Forest Villagers</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Social Forestry Participants
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>
                Conservation Forum Participants
              </Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Actions</Text>
            </View>
            <View>
              {/* Data Rows */}
              {VillageList.length > 0 ? (
                <FlatList
                  data={VillageList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View style={styles.dataRowContainer}>
                      <Text style={styles.cellContent}>
                        {item.VILLA_AD_UPZILLA}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.VILLA_AD_UNION}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.TVILLAGE_NAME}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.VSITEPOINT_LAT}>
                        {item.location1}, {item.location2}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>{item.VILLA_DIST}</Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>{item.TOT_HH}</Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.FOREST_VILGRS}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.SOCFOR_PARTIC}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>
                        {item.conservationForum}
                      </Text>
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
          </View>
        </ScrollView>

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
                    value={inputValue1}
                    onChangeText={text => setInputValue1(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>7.2. Union (ইউনিয়ন)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Union"
                    value={inputValue2}
                    onChangeText={text => setInputValue2(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.3. Name of the Villages/Para (গ্রাম/পাড়ার নাম)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Villages/Para"
                    value={inputValue3}
                    onChangeText={text => setInputValue3(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.4. Geographic Location of the village (গ্রামের অবস্থান)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Lat"
                    value={inputValue4}
                    onChangeText={text => setInputValue4(text)}
                    placeholderTextColor="black"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Lon"
                    value={inputValue5}
                    onChangeText={text => setInputValue5(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.5. Distance from Beat (KM) (বিটের সীমানা হতে গ্রামের
                    দুরত্ব)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Distance from Beat"
                    value={inputValue6}
                    onChangeText={text => setInputValue6(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.6. Total Households (মোট খানার সংখ্যা)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Total Households"
                    value={inputValue7}
                    onChangeText={text => setInputValue7(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.7. Number of Forest Villagers (বন জায়গীরদার / খানার
                    সংখ্যা)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Number of Forest Villagers"
                    value={inputValue8}
                    onChangeText={text => setInputValue8(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.8. Social Forestry Participants (সামাজিক বনায়নের
                    উপকারভোগী)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Social Forestry Participants"
                    value={inputValue9}
                    onChangeText={text => setInputValue9(text)}
                    placeholderTextColor="black"
                  />

                  <Text style={styles.label}>
                    7.9. Conservation Forum Participants (গ্রামে এফসিভি/ভিসিএফ)
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Type here Conservation Forum Participants "
                    value={inputValue10}
                    onChangeText={text => setInputValue10(text)}
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
                      onPress={addNewSave}>
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
          <TouchableOpacity
            style={styles.addButton1}
            onPress={() => beatFour()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton2}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton3} onPress={() => beatSync()}>
          <Text style={styles.buttonText}>Sync</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
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
    borderRadius: 5,
    backgroundColor: '#008CBA', // Set your desired background color
    padding: 10, // Add some padding
  },
  addButton1: {
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#008CBA', // Set your desired background color
    padding: 10, // Add some padding
    flex: 1,
    justifyContent: 'space-between',
    margin: 5,
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
  addButton2: {
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#FF0000', // Set your desired background color
    padding: 10, // Add some padding
    flex: 1,
    justifyContent: 'space-between',
    margin: 5,
  },
  addButton3: {
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: '#02590F', // Set your desired background color
    padding: 10, // Add some padding
    flex: 1,
    justifyContent: 'space-between',
    margin: 5,
  },
});

export default beatFour;
