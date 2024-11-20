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
import {baseApi, token} from '../../constants/base_api';
import {
  months_api,
  months_list,
  plant27_2021_community_month_create,
  plant27_2021_community_month_list,
  plant27_2021_core_list,
  plant27_2021_core_update8,
  plant27_2021_gtrts_climber_cutting_climber_month_create,
  plant27_2021_gtrts_community_protection_create,
  plant27_2021_gtrts_community_protection_list,
  plant27_2021_gtrts_compost_compost_month_create,
} from '../../database/sqlDatabase';
import MonthPicker from 'react-native-month-year-picker';
import {getCurrentDateandTime} from '../../hooks/dateUtils';
import useUUID from '../../hooks/useUUID';
import useCreateUri from '../../hooks/useCreatUri';

const interventionEight = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [months, setMonths] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [inputValue6, setInputValue6] = useState('');
  const [inputValue7, setInputValue7] = useState('');

  const [date, setDate] = useState(new Date());
  const [selectedForest, setSelectedForest] = useState(null);
  const [planYear, setPlanYear] = useState('');

  const [selectedMonths1, setSelectedMonths1] = useState(null);
  const [selectedMonths2, setSelectedMonths2] = useState(null);
  const [selectedMonths3, setSelectedMonths3] = useState(null);
  const [selectedMonths4, setSelectedMonths4] = useState(null);

  const [showPicker, setShowPicker] = useState(false);
  const [showPicker2, setShowPicker2] = useState(false);
  const [showPicker3, setShowPicker3] = useState(false);
  const [showPicker4, setShowPicker4] = useState(false);
  const [showPicker5, setShowPicker5] = useState(false);
  const [plant27Dat, setPlant27Dat] = useState([]);
  const [gtrtCommun, setgtrtCommun] = useState([]);
  const [CommungMonth, setCommungMonth] = useState([]);

  const {initialUUID, generateUUID} = useUUID();
  const [newUUID, setNewUUID] = useState('');
  const [oridianl, setoridianl] = useState(0);
  const uri = useCreateUri();
  console.log(uri, 'uri...........................');

  const navigation = useNavigation();
  const route = useRoute();
  const {uId} = route.params;
  const uid = uId;
  console.log(uid, 'uuid in page 8');

  const onDocumentPress = async () => {
    const res = await DocumentPicker.pick({
      type: ['application/*', 'text/*'], // General MIME types to capture all related formats
    });
  };

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShowPicker(Platform.OS === 'ios'); // Hide the picker after selection (Android closes automatically)
  //   setDate(currentDate);
  //   const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  //   setInputValue100(formattedDate); // Update TextInput with selected date and time
  // };

  // const showDatePicker = () => {
  //   setShowPicker(true); // Show the DateTimePicker when the TextInput is pressed
  // };

  const handleValueChange = (event, newDate) => {
    // When user selects a date
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`; // Formats as yyyy-mm-07 (sets the day as 07)
      setInputValue1(formattedDate);
      // TODO: Save `formattedDate` to the database as needed
    }
    setShowPicker(false); // Hide the picker after selection
  };

  const handleValueChange2 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`; // Formats as yyyy-mm-07
      setInputValue2(formattedDate);
    }
    setShowPicker2(false);
  };

  const handleValueChange3 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`;
      setInputValue3(formattedDate);
    }
    setShowPicker3(false);
  };

  const handleValueChange4 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`;
      setInputValue4(formattedDate);
    }
    setShowPicker4(false);
  };

  const handleValueChange5 = (event, newDate) => {
    if (newDate) {
      const formattedDate = `${newDate.getFullYear()}-${String(
        newDate.getMonth() + 1,
      ).padStart(2, '0')}-07`;
      setInputValue5(formattedDate);
    }
    setShowPicker5(false);
  };

  const forestOptions = [
    {label: 'Tropical Rainforest', value: 'tropical'},
    {label: 'Mangrove Forest', value: 'mangrove'},
    {label: 'Deciduous Forest', value: 'deciduous'},
    {label: 'Coniferous Forest', value: 'coniferous'},
    {label: 'Bamboo Forest', value: 'bamboo'},
  ];
  setTimeout(() => setShowPicker(false), 0);
  setTimeout(() => setShowPicker2(false), 0);
  setTimeout(() => setShowPicker3(false), 0);
  setTimeout(() => setShowPicker4(false), 0);
  setTimeout(() => setShowPicker5(false), 0);

  useEffect(() => {
    const months = async () => {
      try {
        // const response = await fetch(`${baseApi}/months?token=${token}`);
        // // console.log('data: ' + response);
        // if (!response.ok) {
        //   //throw new Error('Network response was not ok');
        // }

        // const jsonData = await response.json();
        // console.log(jsonData, 'fetched jsonData'); // Log the fetched data
        //await months_api();
        const data = await months_list();
        setMonths(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    months();
  }, []);

  const addNew = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID); // If you need it later in the state, set it
    const updatedOrdinalNumber = oridianl + 1; // Increment the value directly here
    setoridianl(updatedOrdinalNumber);

    const dataToInsertadd1 = {
      _URI: newGeneratedUUID, // Use the freshly generated UUID
      _CREATOR_URI_USER: uri,
      _PARENT_AURI: initialUUID,
      _TOP_LEVEL_AURI: initialUUID,
      _CREATION_DATE: getCurrentDateandTime(),
      _LAST_UPDATE_DATE: getCurrentDateandTime(),

      COMMUNITY_YEAR: inputValue5,
      _ORDINAL_NUMBER: updatedOrdinalNumber,
    };

    const dataToInsertadd2 = {
      _URI: newGeneratedUUID, // Use the freshly generated UUID
      _CREATOR_URI_USER: uri,
      _PARENT_AURI: initialUUID,
      _TOP_LEVEL_AURI: initialUUID,
      _CREATION_DATE: getCurrentDateandTime(),
      _LAST_UPDATE_DATE: getCurrentDateandTime(),
      // VALUE: selectedMonth4,
      VALUE: selectedMonths3,

      _ORDINAL_NUMBER: updatedOrdinalNumber,
    };

    console.log(dataToInsertadd1, 'datato insert', dataToInsertadd2);

    try {
      await plant27_2021_gtrts_community_protection_create(dataToInsertadd1);
      // setTimeout(async () => {
      //   await plant27_2021_weeding_month_create(dataToInsertadd2);
      // }, 2000);
      console.log('Before weeding month insertion');
      await plant27_2021_community_month_create(dataToInsertadd2);
      console.log('After weeding month insertion');

      console.log('All data inserted successfully');
    } catch (error) {
      console.error('Failed to insert data:', error.message || error);
    }
  };

  const interventionEight = async () => {
    const newGeneratedUUID = generateUUID(); // Generate a new UUID
    setNewUUID(newGeneratedUUID);
    console.log(
      inputValue1,
      inputValue2,
      inputValue3,
      planYear,
      selectedMonths1,
      selectedMonths2,
      selectedMonths3,
      selectedMonths4,
      'eight',
    );

    const dataToInsert = {
      GTRTS_COMPOST_COMPOST_YEAR_RAW: inputValue1,
      GTRTS_CLIMBER_CUTTING_CLIMBER_YEAR_RAW: inputValue2,
      GTRTS_OTHER_TREATMENT_OTHERS_SPECIFIED: inputValue3,
      GTRTS_OTHER_TREATMENT_OTHER_YEAR_RAW: inputValue4,

      // NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NAME: inputValue1,
      // NURSERY_OTHERS_INFO_CARETAKER_INFO_CAREKATER_MOBILE: inputValue2,
      // NURSERY_OTHERS_INFO_CARETAKER_INFO_CARETAKER_NID: inputValue3,
    };

    const dataToInsertcompostMonth = {
      _uri: newGeneratedUUID,
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      value: selectedMonths1,
    };

    const dataToInsertcompostClimberMonth = {
      _uri: newGeneratedUUID,
      _creator_uri_user: uri,
      _parent_auri: initialUUID,
      _top_level_auri: initialUUID,
      _creation_date: getCurrentDateandTime(),
      _last_update_date: getCurrentDateandTime(),
      value: selectedMonths2,
    };

    try {
      //await plant27_2021_core_update8(dataToInsert);
      await plant27_2021_gtrts_compost_compost_month_create(
        dataToInsertcompostMonth,
      );
      await plant27_2021_gtrts_climber_cutting_climber_month_create(
        dataToInsertcompostClimberMonth,
      );
      console.log('All data updated successfully');
    } catch (error) {
      console.error('Failed to updated data:', error.message || error); // Log the error message
    }
  };

  useEffect(() => {
    const plant27_2021_core_list_funct = async () => {
      const data = await plant27_2021_core_list();
      setPlant27Dat(data);
    };
    plant27_2021_core_list_funct();
  }, []);

  // console.log(plant27Dat, 'new data');

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

  // const interventionSync = async () => {
  //   const datelala = getCurrentDateandTimeMain();

  //   const lastData = plant27Dat[plant27Dat.length - 1];

  //   // Ensure lastData is not empty
  //   if (!lastData) {
  //     console.error('No data available in plant27Dat.');
  //     return;
  //   }

  //   const formData = new FormData();

  //   // Append values to formData
  //   formData.append('_uri', lastData._uri);
  //   formData.append('_creator_uri_user', uri);
  //   formData.append('_creation_date', datelala);
  //   formData.append('_last_update_date', datelala);
  //   formData.append('_model_version', lastData._model_version);
  //   formData.append('_ui_version', lastData._ui_version);
  //   formData.append('_is_complete', lastData._is_complete);
  //   formData.append('_submission_date', lastData._submission_date);
  //   formData.append(
  //     '_marked_as_complete_date',
  //     lastData._marked_as_complete_date,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_bio_other_plant_ha',
  //     lastData.land_statistics_beat_land_bio_other_plant_ha,
  //   );
  //   formData.append(
  //     'guser_tloc_fd_beat_point_lng',
  //     lastData.guser_tloc_fd_beat_point_lng,
  //   );
  //   formData.append('fbli_fa_tloc_fd_beat', lastData.fbli_fa_tloc_fd_beat);
  //   formData.append(
  //     'logistics3_countryboat_condition',
  //     lastData.logistics3_countryboat_condition,
  //   );
  //   formData.append(
  //     'logistics4_gfirearms_303rifle',
  //     lastData.logistics4_gfirearms_303rifle,
  //   );
  //   formData.append(
  //     'land_statistics_beat_mgt_approach_other_pa_area_ha',
  //     lastData.land_statistics_beat_mgt_approach_other_pa_area_ha,
  //   );
  //   formData.append(
  //     'logistics4_others_water_tra',
  //     lastData.logistics4_others_water_tra,
  //   );
  //   formData.append('bo_info_bo_cell', lastData.bo_info_bo_cell);
  //   formData.append(
  //     'logistics3_tvessel_condition',
  //     lastData.logistics3_tvessel_condition,
  //   );
  //   formData.append('ro_info_ro_cell', lastData.ro_info_ro_cell);
  //   formData.append(
  //     'logistics4_tfirearms_chineserifle_avail',
  //     lastData.logistics4_tfirearms_chineserifle_avail,
  //   );
  //   formData.append(
  //     'logistics3_tvessel_avail',
  //     lastData.logistics3_tvessel_avail,
  //   );
  //   formData.append(
  //     'fbli_fa_tloc_fd_beat_txt',
  //     lastData.fbli_fa_tloc_fd_beat_txt,
  //   );
  //   formData.append(
  //     'logistics3_speedboat_condition',
  //     lastData.logistics3_speedboat_condition,
  //   );
  //   formData.append(
  //     'fbli_fa_tloc_fd_division',
  //     lastData.fbli_fa_tloc_fd_division,
  //   );
  //   formData.append(
  //     'land_transports_bicycle_avail',
  //     lastData.land_transports_bicycle_avail,
  //   );
  //   formData.append(
  //     'logistics3_others_water_tra_condition',
  //     lastData.logistics3_others_water_tra_condition,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_info_vested_forest_ha',
  //     lastData.land_statistics_beat_land_info_vested_forest_ha,
  //   );
  //   formData.append('subscriberid', lastData.subscriberid);
  //   formData.append('guser_user', lastData.guser_user);
  //   formData.append('ro_info_name_of_ro', lastData.ro_info_name_of_ro);
  //   formData.append('fbli_fa_tloc_fd_block', lastData.fbli_fa_tloc_fd_block);
  //   formData.append('deviceid', lastData.deviceid);
  //   formData.append(
  //     'land_transports_motorb_condition',
  //     lastData.land_transports_motorb_condition,
  //   );
  //   formData.append(
  //     'fbli_generated_note_name_18',
  //     lastData.fbli_generated_note_name_18,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_bio_generated_note_name_74',
  //     lastData.land_statistics_beat_land_bio_generated_note_name_74,
  //   );
  //   formData.append(
  //     'logistics4_chineserifle_condition',
  //     lastData.logistics4_chineserifle_condition,
  //   );
  //   formData.append(
  //     'logistics3_speedboat_avail',
  //     lastData.logistics3_speedboat_avail,
  //   );
  //   formData.append(
  //     'land_statistics_beat_mgt_approach_pa_ws_ha',
  //     lastData.land_statistics_beat_mgt_approach_pa_ws_ha,
  //   );
  //   formData.append(
  //     'logistics4_generated_note_name_152',
  //     lastData.logistics4_generated_note_name_152,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_bio_non_pp_ha',
  //     lastData.land_statistics_beat_land_bio_non_pp_ha,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_info_section_6_ha',
  //     lastData.land_statistics_beat_land_info_section_6_ha,
  //   );
  //   formData.append('simserial', lastData.simserial);
  //   formData.append('guser_dcollection_raw', lastData.guser_dcollection_raw);
  //   formData.append(
  //     'land_transports_bicycle_condition',
  //     lastData.land_transports_bicycle_condition,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_bio_social_accreted_ha',
  //     lastData.land_statistics_beat_land_bio_social_accreted_ha,
  //   );
  //   formData.append(
  //     'guser_generated_note_name_10',
  //     lastData.guser_generated_note_name_10,
  //   );
  //   formData.append(
  //     'land_statistics_beat_land_info_other_forestarea_ha',
  //     lastData.land_statistics_beat_land_info_other_forestarea_ha,
  //   );
  //   formData.append('bo_info_bo_nid', lastData.bo_info_bo_nid);
  //   formData.append(
  //     'land_transports_gbi_cycle',
  //     lastData.land_transports_gbi_cycle,
  //   );
  //   formData.append(
  //     'land_transports_bicycle_avail',
  //     lastData.land_transports_bicycle_avail,
  //   );
  //   formData.append(
  //     'logistics4_others_water_tra_avail',
  //     lastData.logistics4_others_water_tra_avail,
  //   );
  //   formData.append('guser_user', lastData.guser_user);

  //   // Your API call or further processing of formData
  //   try {
  //     const response = await fetch(
  //       'http://192.168.0.187:8000/api/plant27_2021_core_create?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
  //       {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //       },
  //     );
  //     // Handle response
  //     console.log(await response.json());
  //   } catch (error) {
  //     console.error('Error during the API call', error);
  //   }
  // };

  const interventionSync = async () => {
    const datelala = getCurrentDateandTimeMain();

    const lastData = plant27Dat[plant27Dat.length - 1];

    // Ensure lastData is not empty
    if (!lastData) {
      console.error('No data available in plant27Dat.');
      return;
    }

    const formData = new FormData();

    // Append values to formData
    formData.append('_uri', lastData._uri);
    formData.append('_creator_uri_user', uri);
    console.log(
      formData.append('_creation_date', getCurrentDateandTimeMain()),
      'creation date...........',
    );
    console.log(
      formData.append('_last_update_date', getCurrentDateandTimeMain()),
      'last update date....',
    );
    formData.append('_model_version', lastData._model_version);
    formData.append('_ui_version', lastData._ui_version);
    formData.append('_is_complete', lastData._is_complete);
    formData.append('_submission_date', lastData._submission_date);
    formData.append(
      '_marked_as_complete_date',
      lastData._marked_as_complete_date,
    );
    formData.append(
      'land_statistics_beat_land_bio_other_plant_ha',
      lastData.land_statistics_beat_land_bio_other_plant_ha,
    );
    formData.append(
      'guser_tloc_fd_beat_point_lng',
      lastData.guser_tloc_fd_beat_point_lng,
    );
    formData.append('fbli_fa_tloc_fd_beat', lastData.fbli_fa_tloc_fd_beat);
    formData.append(
      'logistics3_countryboat_condition',
      lastData.logistics3_countryboat_condition,
    );
    formData.append(
      'logistics4_gfirearms_303rifle',
      lastData.logistics4_gfirearms_303rifle,
    );
    formData.append(
      'land_statistics_beat_mgt_approach_other_pa_area_ha',
      lastData.land_statistics_beat_mgt_approach_other_pa_area_ha,
    );
    formData.append(
      'logistics4_others_water_tra',
      lastData.logistics4_others_water_tra,
    );
    formData.append('bo_info_bo_cell', lastData.bo_info_bo_cell);
    formData.append(
      'logistics3_tvessel_condition',
      lastData.logistics3_tvessel_condition,
    );
    formData.append('ro_info_ro_cell', lastData.ro_info_ro_cell);
    formData.append(
      'logistics4_tfirearms_chineserifle_avail',
      lastData.logistics4_tfirearms_chineserifle_avail,
    );
    formData.append(
      'logistics3_tvessel_avail',
      lastData.logistics3_tvessel_avail,
    );
    formData.append(
      'fbli_fa_tloc_fd_beat_txt',
      lastData.fbli_fa_tloc_fd_beat_txt,
    );
    formData.append(
      'logistics3_speedboat_condition',
      lastData.logistics3_speedboat_condition,
    );
    formData.append(
      'fbli_fa_tloc_fd_division',
      lastData.fbli_fa_tloc_fd_division,
    );
    formData.append(
      'land_transports_bicycle_avail',
      lastData.land_transports_bicycle_avail,
    );
    formData.append(
      'logistics3_others_water_tra_condition',
      lastData.logistics3_others_water_tra_condition,
    );
    formData.append(
      'land_statistics_beat_land_info_vested_forest_ha',
      lastData.land_statistics_beat_land_info_vested_forest_ha,
    );
    formData.append('subscriberid', lastData.subscriberid);
    formData.append('guser_user', lastData.guser_user);
    formData.append('ro_info_name_of_ro', lastData.ro_info_name_of_ro);
    formData.append('fbli_fa_tloc_fd_block', lastData.fbli_fa_tloc_fd_block);
    formData.append('deviceid', lastData.deviceid);
    formData.append(
      'land_transports_motorb_condition',
      lastData.land_transports_motorb_condition,
    );
    formData.append(
      'fbli_generated_note_name_18',
      lastData.fbli_generated_note_name_18,
    );
    formData.append(
      'land_statistics_beat_land_bio_generated_note_name_74',
      lastData.land_statistics_beat_land_bio_generated_note_name_74,
    );
    formData.append(
      'logistics4_chineserifle_condition',
      lastData.logistics4_chineserifle_condition,
    );
    formData.append(
      'logistics3_speedboat_avail',
      lastData.logistics3_speedboat_avail,
    );
    formData.append(
      'land_statistics_beat_mgt_approach_pa_ws_ha',
      lastData.land_statistics_beat_mgt_approach_pa_ws_ha,
    );
    formData.append(
      'logistics4_generated_note_name_152',
      lastData.logistics4_generated_note_name_152,
    );
    formData.append(
      'land_statistics_beat_land_bio_non_pp_ha',
      lastData.land_statistics_beat_land_bio_non_pp_ha,
    );
    formData.append(
      'land_statistics_beat_land_info_section_6_ha',
      lastData.land_statistics_beat_land_info_section_6_ha,
    );
    formData.append('simserial', lastData.simserial);
    formData.append('guser_dcollection_raw', lastData.guser_dcollection_raw);
    formData.append(
      'land_transports_bicycle_condition',
      lastData.land_transports_bicycle_condition,
    );
    formData.append(
      'land_statistics_beat_land_bio_social_accreted_ha',
      lastData.land_statistics_beat_land_bio_social_accreted_ha,
    );
    formData.append(
      'guser_generated_note_name_10',
      lastData.guser_generated_note_name_10,
    );
    formData.append(
      'land_statistics_beat_land_info_other_forestarea_ha',
      lastData.land_statistics_beat_land_info_other_forestarea_ha,
    );
    formData.append('bo_info_bo_nid', lastData.bo_info_bo_nid);
    formData.append(
      'land_transports_gbi_cycle',
      lastData.land_transports_gbi_cycle,
    );
    formData.append(
      'land_transports_bicycle_avail',
      lastData.land_transports_bicycle_avail,
    );
    formData.append(
      'logistics4_others_water_tra_avail',
      lastData.logistics4_others_water_tra_avail,
    );
    formData.append('guser_user', lastData.guser_user);

    // Log formData
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    // Your API call or further processing of formData
    try {
      const response = await fetch(
        'http://192.168.0.187:8000/api/plant27_2021_core_create?token=15694294d23a00f6852b5465cbe141f5aba0ff44',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        },
      );
      // Handle response
      console.log(await response.json());
    } catch (error) {
      console.error('Error during the API call', error);
    }
  };

  const tableData = [];

  useEffect(() => {
    const fbli = async () => {
      const data = await plant27_2021_gtrts_community_protection_list();
      setgtrtCommun(data);
    };
    fbli();
  }, []);

  console.log(gtrtCommun, 'Weeding data....');

  useEffect(() => {
    const fbli = async () => {
      const data = await plant27_2021_community_month_list();
      setCommungMonth(data);
    };
    fbli();
  }, []);

  console.log(CommungMonth, 'Weeding month data....');

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
          10.6.Fertilizer (Compost, NPK etc.)
        </Text>
        <View>
          <Text style={styles.label}>10.6.a. Plan Year:</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Text style={styles.input}>
              {inputValue1 || 'Select Plan Year'}
            </Text>
          </TouchableOpacity>

          {showPicker && (
            <MonthPicker
              onChange={handleValueChange}
              value={new Date()} // default value for picker, can be adjusted
              minimumDate={new Date(2000, 0)} // optional
              maximumDate={new Date(2030, 11)} // optional
              mode="short" // or "full"
            />
          )}
        </View>
        <Text style={styles.label}>10.6.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths1}
          onChange={item => setSelectedMonths1(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        <Text style={styles.label}>10.7. Climber cutting</Text>
        <Text style={styles.label}>10.7.a. Plan Year:</Text>
        <TouchableOpacity onPress={() => setShowPicker2(true)}>
          <Text style={styles.input}>{inputValue2 || 'Select Plan Year'}</Text>
        </TouchableOpacity>
        {showPicker2 && (
          <MonthPicker
            onChange={handleValueChange2}
            value={new Date()}
            minimumDate={new Date(2000, 0)}
            maximumDate={new Date(2030, 11)}
            mode="short"
          />
        )}
        <Text style={styles.label}>10.7.b. Plan Months:</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths2}
          onChange={item => setSelectedMonths2(item.code)} // Update the selected value based on 'id'
          dropdownStyle={{
            backgroundColor: 'white', // Ensure dropdown has a visible background
            borderRadius: 8, // Rounded corners for consistency
          }}
          itemTextStyle={{
            color: 'black', // Set item text color to black for visibility
            fontSize: 16, // Set an appropriate font size
          }}
        />
        {/* <View style={styles.txtNbutton}>
          <Text style={styles.label}>10.8. Community Protection</Text>
          <Button title="Add New"></Button>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>10.8.a. Plan Year</Text>
          <TextInput
            style={styles.input}
            value={inputValue1}
            onChangeText={text => setInputValue1(text)}
          />
          <Text style={styles.label}>10.8.b. Plan Months</Text>
          <Dropdown
            style={styles.input}
            data={months}
            labelField="name" // Display the 'name' field in the dropdown
            valueField="code" // Use the 'id' as the value field
            placeholder="Select month"
            placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
            selectedTextStyle={{color: 'black', fontSize: 16}}
            value={selectedMonths3}
            onChange={item => setSelectedMonths3(item.value)} // Update the selected value based on 'id'
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

        <View>
          {/* Button to open modal */}
          <View style={styles.txtNbutton}>
            <Text style={styles.label}>10.8. Community Protection</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableContainer}>
            {/* Headers */}
            <View style={styles.headerRowContainer}>
              <Text style={styles.headerLabel}>Plan Year</Text>
              <Text style={styles.headerSeparator}>|</Text>
              <Text style={styles.headerLabel}>Plan Months</Text>
            </View>

            {/* Data Rows */}
            {gtrtCommun.length > 0 ? (
              <FlatList
                data={gtrtCommun}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                  const planMonth = CommungMonth[index]
                    ? CommungMonth[index].VALUE
                    : ' '; // Default value if no corresponding planMonth is found
                  return (
                    <View style={styles.dataRowContainer}>
                      <Text style={styles.cellContent}>
                        {item.COMMUNITY_YEAR}
                      </Text>
                      <Text style={styles.cellSeparator}>|</Text>
                      <Text style={styles.cellContent}>{planMonth}</Text>
                    </View>
                  );
                }}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>No data available</Text>
              </View>
            )}
          </View>

          {/* Modal for community protection inputs */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>
                    Add Community Protection Details
                  </Text>

                  {/* Form inside modal */}
                  <View style={styles.box}>
                    <Text style={styles.label}>10.8.a. Plan Year</Text>
                    <TouchableOpacity onPress={() => setShowPicker5(true)}>
                      <Text style={styles.input}>
                        {inputValue5 || 'Select Plan Year'}
                      </Text>
                    </TouchableOpacity>
                    {showPicker5 && (
                      <MonthPicker
                        onChange={handleValueChange5}
                        value={new Date()}
                        minimumDate={new Date(2000, 0)}
                        maximumDate={new Date(2030, 11)}
                        mode="short"
                      />
                    )}

                    <Text style={styles.label}>10.8.b. Plan Months</Text>
                    <Dropdown
                      style={styles.input}
                      data={months}
                      labelField="name"
                      valueField="code"
                      placeholder="Select month"
                      placeholderStyle={{color: 'black', fontSize: 16}}
                      selectedTextStyle={{color: 'black', fontSize: 16}}
                      value={selectedMonths3}
                      onChange={item => setSelectedMonths3(item.code)} // Update the selected value based on 'code'
                      dropdownStyle={{
                        backgroundColor: 'white',
                        borderRadius: 8,
                      }}
                      itemTextStyle={{
                        color: 'black',
                        fontSize: 16,
                      }}
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

          {/* Other UI elements can go here */}
        </View>

        <Text style={styles.label}>10.9. Others Treatment</Text>
        <Text style={styles.label}>10.9.a. Others Specify:</Text>
        <TouchableOpacity onPress={() => setShowPicker3(true)}>
          <Text style={styles.input}>{inputValue3 || 'Select Plan Year'}</Text>
        </TouchableOpacity>
        {showPicker3 && (
          <MonthPicker
            onChange={handleValueChange3}
            value={new Date()}
            minimumDate={new Date(2000, 0)}
            maximumDate={new Date(2030, 11)}
            mode="short"
          />
        )}
        <Text style={styles.label}>10.9.b. Plan Year:</Text>
        <TouchableOpacity onPress={() => setShowPicker4(true)}>
          <Text style={styles.input}>{inputValue4 || 'Select Plan Year'}</Text>
        </TouchableOpacity>
        {showPicker4 && (
          <MonthPicker
            onChange={handleValueChange4}
            value={new Date()}
            minimumDate={new Date(2000, 0)}
            maximumDate={new Date(2030, 11)}
            mode="short"
          />
        )}
        <Text style={styles.label}>10.9.c. Plan Months</Text>
        <Dropdown
          style={styles.input}
          data={months}
          labelField="name" // Display the 'name' field in the dropdown
          valueField="code" // Use the 'id' as the value field
          placeholder="Select month"
          placeholderStyle={{color: 'black', fontSize: 16}} // Placeholder font size
          selectedTextStyle={{color: 'black', fontSize: 16}}
          value={selectedMonths4}
          onChange={item => setSelectedMonths4(item.code)} // Update the selected value based on 'id'
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
            11. Additional Notes with Image (সার্বিক অবস্থার তথ্যাদির বিস্তারিত
            খাতায় লিখে ছবি তুলে আপলোড করুন)
          </Text>

          <TouchableOpacity style={styles.addButton} onPress={onDocumentPress}>
            <Text style={styles.buttonText}>choose file</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => interventionEight()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => interventionSync()}>
          <Text style={styles.buttonText}>Sync</Text>
        </TouchableOpacity>
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

  buttonContainer: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-around', // Add space between buttons
    marginBottom: 50,
    margin: 5,
  },
  addButton: {
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#008CBA', // Set your desired background color
    padding: 10, // Add some padding
  },
  buttonText: {
    color: 'white', // Set the text color
    textAlign: 'center', // Center the text
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

export default interventionEight;
