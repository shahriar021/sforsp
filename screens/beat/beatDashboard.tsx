import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Collapsible from 'react-native-collapsible';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';
import Table from './Table';

const beatDashboard = () => {
  const navigation = useNavigation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);
  const [isCollapsed6, setIsCollapsed6] = useState(true);
  const [isCollapsed7, setIsCollapsed7] = useState(true);
  const [isCollapsed8, setIsCollapsed8] = useState(true);

  const toggleExpanded = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleExpanded2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };

  const toggleExpanded3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };

  const toggleExpanded4 = () => {
    setIsCollapsed4(!isCollapsed4);
  };

  const toggleExpanded5 = () => {
    setIsCollapsed5(!isCollapsed5);
  };

  const toggleExpanded6 = () => {
    setIsCollapsed6(!isCollapsed6);
  };

  const toggleExpanded7 = () => {
    setIsCollapsed7(!isCollapsed7);
  };
  const toggleExpanded8 = () => {
    setIsCollapsed8(!isCollapsed8);
  };

  const [fileName, setFileName] = useState(null);

  const handleFileSelect = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setFileName(res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled file picker');
      } else {
        throw err;
      }
    }
  };

  const handleUpload = () => {
    if (fileName) {
      console.log('Uploading file:', fileName);
      // Add your file upload logic here
    } else {
      console.log('No file selected');
    }
  };

  const data = [
    {
      id: '1',
      upzilla: 'CHAKARIA',
      union: 'Kuthakhali',
      village: 'Shegun bagica',
      latitude: 'Latitude: 92.0458400000',
      longitude: 'Longitude: 21.3725900000',
      distance: '2.00',
      totalHouseholds: '4.00',
      forestVillagers: '90',
      socialForestryParticipants: '25',
      conservationParticipants: '0',
    },
    {
      id: '2',
      upzilla: 'CHAKARIA',
      union: 'Khutakhali',
      village: 'Bagainna para',
      latitude: 'Latitude: 92.0507400000',
      longitude: 'Longitude: 21.3718500000',
      distance: '9.00',
      totalHouseholds: '10.00',
      forestVillagers: '4',
      socialForestryParticipants: '0',
      conservationParticipants: '0',
    },
  ];

  return (
    <>
      <View style={styles.headera}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beat Information</Text>
        <TouchableOpacity
          onPress={() => navigation.push('beatOne')}
          style={styles.editButton}>
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={toggleExpanded} style={styles.headerb}>
          <Text style={styles.headerText}>
            1. General Information (প্রাথমিক তথ্য)
          </Text>
          {isCollapsed ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>
        <ScrollView>
          <Collapsible collapsed={isCollapsed}>
            <View style={styles.content}>
              <Text style={styles.textColor}>
                1a. Information Collection date (তথ্য সংগ্রহের তারিখ): 20 May
                2021
              </Text>
              <Text style={styles.textColor}>
                1.b. Name of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
                কর্মকর্তার নাম): SAYED Mahamudul haque shiraji
              </Text>
              <Text style={styles.textColor}>
                1.c. Mobile number Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
                কর্মকর্তার মোবাইল নং): 01812346944
              </Text>
              <Text style={styles.textColor}>
                1.d. Address of the Office (Beat/Camp/SFPC)
                (বিট/ক্যাম্প/এসএফপিসি অফিসের ঠিকানা): Khuthakhali beat office
              </Text>
              <Text style={styles.textColor}>
                1.e. GPS Location of the Beat/Camp/SFPC Office
                (বিট/ক্যাম্প/এসএফপিসি অফিসের জিপিএস রিডিং):
                21.6170273833,92.0704978000,-6.00,1.50
              </Text>
            </View>
          </Collapsible>
        </ScrollView>

        <TouchableOpacity onPress={toggleExpanded2} style={styles.headerb}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              2. Location Data (Beat/Camp/SFPC Information) (এলাকার তথ্য)
            </Text>
          </View>
          {isCollapsed2 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>
        {/* <Collapsible collapsed={isCollapsed2}>
          <View style={styles.content}>
            <Text>This is the collapsible content</Text>
          </View>
        </Collapsible> */}

        <Collapsible collapsed={isCollapsed2}>
          <ScrollView
            style={[styles.content, {maxHeight: 300}]}
            nestedScrollEnabled={true}>
            <Text style={styles.sectionHeader}>
              Forest Landscape (বনের ধরণ):
            </Text>
            <Text style={styles.detailText}>Hill</Text>
            <View style={styles.box}>
              <Text style={styles.sectionHeader}>
                2.1. Forest Administration Information (বন প্রশাসনিক তথ্য)
              </Text>
              <Text style={styles.detailText}>
                2.1.a. Forest Circle (বন অঞ্চল): Chattogram Circle
              </Text>
              <Text style={styles.detailText}>
                2.1.b. Forest Division (বন বিভাগ): Cox’s Bazar North Forest
                Division
              </Text>
              <Text style={styles.detailText}>
                2.1.c. Range/SFNTC (রেঞ্জ/এফইএনটিসি): Fulchari
              </Text>
              <Text style={styles.detailText}>
                2.1.d. Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি): Khutakhali
              </Text>
              <Text style={styles.detailText}>
                2.1.d.1. Block (ব্লক): Not Available
              </Text>
              <Text style={styles.detailText}>
                2.1.d.2. Char (চর): Not Available
              </Text>

              <Text style={styles.sectionHeader}>
                2.2. Civil Administrative Information (নাগরিক প্রশাসনিক তথ্য)
              </Text>
              <Text style={styles.detailText}>
                2.2.a. Division (বিভাগ): Chattagram Division
              </Text>
              <Text style={styles.detailText}>
                2.2.b. District (জেলা): COX'S BAZAR
              </Text>
              <Text style={styles.detailText}>
                2.2.c. Upazila (উপজেলা): CHAKARIA
              </Text>
              <Text style={styles.detailText}>
                2.2.d. Union (ইউনিয়ন): Kuthakhali
              </Text>

              {/* <Text style={styles.sectionHeader}>
                2.3. Mouza Information (মৌজার তথ্যাদি)
              </Text>
              <Text style={styles.detailText}>
                2.3.a. Name of Mouza (মৌজার নাম): Jongol koutakhali
              </Text>
              <Text style={styles.detailText}>
                2.3.b. Survey Types (সার্ভের ধরণ): rs
              </Text>
              <Text style={styles.detailText}>
                2.3.c. Sheet Number (সিট নম্বর): Dite pare nai
              </Text> */}

              <View style={styles.tableContainer}>
                {/* Header Row */}
                <View style={styles.tableRow}>
                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Name of Mouza (মৌজার নাম)
                  </Text>
                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Survey Types (সার্ভের ধরণ)
                  </Text>
                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Sheet Number (সিট নম্বর)
                  </Text>
                </View>

                {/* Data Row */}
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Jongol koutakhali</Text>
                  <Text style={styles.tableCell}>rs</Text>
                  <Text style={styles.tableCell}>Dite pare nai</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded3} style={styles.headerb}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              3. Index Map of the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি - এর
              ইনডেক্স ম্যাপ)
            </Text>
          </View>
          {isCollapsed3 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed3}>
          <ScrollView
            style={[styles.content, {maxHeight: 300}]}
            nestedScrollEnabled={true}>
            <View style={styles.row}>
              <Text style={styles.label}>Select Image</Text>
              <TouchableOpacity
                style={styles.fileButton}
                onPress={handleFileSelect}>
                <Text>{fileName || 'Choose File'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleUpload}>
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.sectionHeader}>
              3.a. Take a picture of Index Map of your Beat/Camp/SFPC
              (বিট/ক্যাম্প/এসএফপিসি এর ইনডেক্স ম্যাপের ছবি তুলুন)
            </Text>

            <View style={styles.tableContainer}>
              {/* Header Row */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Sl. No.
                </Text>

                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Image from Field
                </Text>
              </View>

              {/* Data Row */}
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1</Text>
                <Text style={styles.tableCell}>image</Text>
              </View>
            </View>

            <Text style={styles.sectionHeader}>3.a. GIS Index Map</Text>

            <View style={styles.tableContainer}>
              {/* Header Row */}
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Sl. No.
                </Text>
                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Title
                </Text>
                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Image from GIS
                </Text>
              </View>

              {/* Data Row */}
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>1</Text>
                <Text style={styles.tableCell}>Feature 2</Text>
                <Button title="image" />
              </View>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded4} style={styles.headerb}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              4. Land information of the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসির
              ভূমির তথ্যাদি)
            </Text>
          </View>
          {isCollapsed4 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed4}>
          <ScrollView
            style={[styles.content, {maxHeight: 300}]}
            nestedScrollEnabled={true}>
            <View style={styles.box}>
              <Text style={styles.sectionHeader}>
                4.1. Forest land as per legal status (আইন অনুযায়ী বনভূমির
                পরিমাণ)
              </Text>
              <View>
                <Text style={styles.detailText}>
                  4.1.a. Reserved Forests (Hectar) (সংরক্ষিত বনভূমি (হেক্টর)):
                  1,003.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.b. Forest land under section 6 (Hectar) (ধারায় বনভূমি
                  (হেক্টর)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.c. Forest Land, Declared under Section 4 (Hectar) (৪ ধারায়
                  বনভূমি (হেক্টর)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.d. Protected Forests (PF) (Hectar) (রক্ষিত বন (হেক্টর)):
                  24.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.e. Vested Forests (Hectar) অর্পিত বনভূমি (হেক্টর): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.f. Aquired Forests (Hectar) (অর্জিত বনভূমি (হেক্টর)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.g. Forest Land (Others) (Hectar) (অন্যান্য বনভূমি
                  (হেক্টর)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.1.h. Total Beat/Camp/SFPC area: (Hectar)
                  (বিট/ক্যাম্পের/এসএফপিসির আওতাধীন মোট বনভূমি (হেক্টর) ):
                  1,027.00
                </Text>
              </View>

              <Text style={styles.sectionHeader}>
                4.2. Protected Area (রক্ষিত এলাকার পরিমাণ):
              </Text>
              <View>
                <Text style={styles.detailText}>
                  4.2.a. Wildlife Sanctuaries (Hectar) বন্যপ্রাণি অভয়ারন্য
                  (হেক্টর): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.2.b. National Park (Hectar) জাতীয় উদ্যান (হেক্টর): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.2.c. Eco-Park (Hectar) ইকো-পার্ক (হেক্টর): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.2.d. Safari Park (Hectar) সাফারী পার্ক (হেক্টর): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.2.e. Special Biodiversity Conservation Area (Hectar) বিশেষ
                  জীববৈচিত্র্য সংরক্ষণ এলাকা (হেক্টর): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.2.f. Protected Area (Others) (Hectar) অন্যান্য (হেক্টর):
                  0.00
                </Text>
              </View>

              <Text style={styles.sectionHeader}>
                4.3. Forest Cover Types (বনাচ্ছাদনের ধরণ)
              </Text>
              <View>
                <Text style={styles.detailText}>
                  4.3.a. Natural Forests (Hectar) (প্রাকৃতিক বন (হেক্টর)): 10.00
                </Text>
                <Text style={styles.detailText}>
                  4.3.b.1. Social Forestry/Participatory Plantations (Hectar)
                  (সামাজিক/ অংশীদারিত্ব বনায়ন (হেক্টর)): 10.00
                </Text>
                <Text style={styles.detailText}>
                  4.3.b.2. Social Forestry/Participatory Plantations (SKM)
                  (সামাজিক/ অংশীদারিত্ব বনায়ন (কি.মি.)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.3.c.1. Non Participatory Plantations (Hectar) (অংশীদারিত্ব
                  বিহীন বনায়ন (হেক্টর)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.3.c.2. Non Participatory Plantations (SKM) (অংশীদারিত্ব
                  বিহীন বনায়ন (কি.মি.)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.3.d.1. Forest Cover Area (Others) (Hectar) (অন্যান্য
                  (হেক্টর)): 0.00
                </Text>
                <Text style={styles.detailText}>
                  4.3.d.2. Forest Cover Area (Others) (SKM) (অন্যান্য (কি.মি.)):
                  0.00
                </Text>
              </View>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded5} style={styles.headerb}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              5. Existing problems and its their intensity in Forest land
              (বনভূমির বিদ্যমান সমস্যা এবং সমস্যার মাত্রা)
            </Text>
          </View>
          {isCollapsed5 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed5}>
          <ScrollView
            style={[styles.content, {maxHeight: 300}]}
            nestedScrollEnabled={true}>
            <View style={styles.box}>
              <View style={styles.tableContainer}>
                {/* Header Row */}
                <View style={styles.tableRow}>
                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Natural Disturbances/Threats/ Events issues (প্রাকৃতিক
                    সমস্যাসমূহ)
                  </Text>
                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Frequency (মাত্রা)
                  </Text>
                </View>

                {/* Data Row */}
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Drought (খরা)</Text>
                  <Text style={styles.tableCell}>very_high</Text>
                </View>

                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>Flood (বন্যা)</Text>
                  <Text style={styles.tableCell}>medium</Text>
                </View>
              </View>

              <Text style={styles.sectionHeader}>
                5.B. Human interference within Beat/Camp/SFPC and its landscape
                (বিট/ক্যাম্প/এসএফপিসি ও তৎসংলগ্ন এলাকায় মানুষের কার্যক্রম)
              </Text>
              <View style={styles.tableRow}>
                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Human interference issues (মানুষের কার্যক্রম)
                </Text>
                <Text style={[styles.tableHeader, styles.tableCell]}>
                  Rank (মাত্রা)
                </Text>
              </View>

              {/* Data Row */}
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Brick fields (ইটভাটা)</Text>
                <Text style={styles.tableCell}>medium</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Agriculture (কৃষিকাজ)</Text>
                <Text style={styles.tableCell}>medium</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Fire (আগুন)</Text>
                <Text style={styles.tableCell}>medium</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>
                  Sand Collection (বালি উত্তোলন)
                </Text>
                <Text style={styles.tableCell}>medium</Text>
              </View>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded6} style={styles.headerb}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              6. Existing Manpower and logistics in the Beat/Camp/SFPC
              (বিট/ক্যাম্প/এসএফপিসিতে বিদ্যমান জনবল ও সরবরাহ)
            </Text>
          </View>
          {isCollapsed6 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed6}>
          <ScrollView
            style={[styles.content, {maxHeight: 300}]}
            nestedScrollEnabled={true}
            contentContainerStyle={styles.scrollContent}>
            <View style={styles.box}>
              <Text style={styles.sectionHeader}>
                6.1. Existing Manpower (বিদ্যমান জনবল)
              </Text>
              <View>
                <Text style={styles.detailText}>Name: Majharul Islam</Text>
                <Text style={styles.detailText}>Rank: Forester</Text>
                <Text style={styles.detailText}>
                  Joining date of the Range/Beat: 22 November 2020
                </Text>
                <Text style={styles.detailText}>
                  Mobile Number: 01818432546
                </Text>
                <Text style={styles.detailText}>NID: 352356322</Text>
                <Text style={styles.detailText}>E-mail: Rr</Text>
              </View>

              <Text style={styles.sectionHeader}>
                6.1.b.Beat/Camp/SFPC in charge (বিট কর্মকর্তা)
              </Text>
              <View>
                <Text style={styles.detailText}>
                  Name: Sayed Mahamudul Haque Shiraji
                </Text>
                <Text style={styles.detailText}>Rank: Forester</Text>
                <Text style={styles.detailText}>
                  Joining date of the Range/Beat: 12 November 2020
                </Text>
                <Text style={styles.detailText}>
                  Mobile Number: 01812346944
                </Text>
                <Text style={styles.detailText}>NID: 321777382</Text>
                <Text style={styles.detailText}>
                  E-mail: Sayedbo2@gmail.com
                </Text>
              </View>

              <Text style={styles.sectionHeader}>
                6.1.c. All other staffs (অন্যান্য কর্মচারীর তথ্যাদি)
              </Text>
              <View style={styles.table}>
                {/* Table Header */}
                <View style={styles.tableHeader}>
                  <Text style={styles.headerText}>Name</Text>
                  <Text style={styles.headerText}>Rank</Text>
                  <Text style={styles.headerText}>
                    Joining date of the Range/Beat
                  </Text>
                  <Text style={styles.headerText}>Mobile Number</Text>
                  <Text style={styles.headerText}>NID</Text>
                  <Text style={styles.headerText}>E-mail</Text>
                </View>

                {/* Table Cells */}
                <View style={styles.tableRow}>
                  <Text style={styles.cellText}>FOYSAL</Text>
                  <Text style={styles.cellText}>FG</Text>
                  <Text style={styles.cellText}>20 May 2019</Text>
                  <Text style={styles.cellText}>01874432837</Text>
                  <Text style={styles.cellText}>324456552</Text>
                  <Text style={styles.cellText}></Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.cellText}>Jahander m</Text>
                  <Text style={styles.cellText}>FG</Text>
                  <Text style={styles.cellText}>02 March 2021</Text>
                  <Text style={styles.cellText}>01731607891</Text>
                  <Text style={styles.cellText}>354323455</Text>
                  <Text style={styles.cellText}></Text>
                </View>
              </View>

              <Text style={styles.sectionHeader}>
                6.2. Existing logistics in the Beat/Camp/SFPC
                (বিট/ক্যাম্প/এসএফপিসিতে বিদ্যমান সরবরাহ সমূহ)
              </Text>
              <View style={styles.tableHeader}>
                <Text style={styles.headerText}>6.2.1. Land Transports</Text>
                <Text style={styles.headerText}>Available quantity</Text>
                <Text style={styles.headerText}>
                  Condition of the logistics
                </Text>
              </View>

              {/* Table Cells */}
              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.1.a. Motorbike:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.1.b. Bi-Cycle:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>
                  6.2.1.c. Other (Please specify):
                </Text>
                <Text style={styles.cellText}></Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableHeader}>
                <Text style={styles.headerText}>6.2.2. Water transports</Text>
                <Text style={styles.headerText}>Available quantity</Text>
                <Text style={styles.headerText}>
                  Condition of the logistics
                </Text>
              </View>

              {/* Table Cells */}
              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.2.a. Speed Boat:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.2.b. Engine Trawler:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.2.c. Country Boat:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>
                  6.2.2.d. Other (Please specify):
                </Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableHeader}>
                <Text style={styles.headerText}>6.2.3. Fire Arms</Text>
                <Text style={styles.headerText}>Available quantity</Text>
                <Text style={styles.headerText}>
                  Condition of the logistics
                </Text>
              </View>

              {/* Table Cells */}
              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.3.a. 303 Rifle:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>
                  6.2.3.b. Self-Loading Rifle (SLR):
                </Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.3.c. Short gun:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.cellText}>6.2.3.d. Chinese Rifle:</Text>
                <Text style={styles.cellText}>1</Text>
                <Text style={styles.cellText}>None</Text>
              </View>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded7} style={styles.headerb}>
          <View style={styles.textContainer}>
            <Text
              style={styles.headerText}
              numberOfLines={6}
              ellipsizeMode="tail">
              7. Villages and Community: Information of each village, in nd
              around Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি সংলগ্ন গ্রামীণ
              জনগোষ্ঠীর তথ্য)
            </Text>
          </View>
          {isCollapsed7 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed7}>
          <ScrollView
            style={[styles.content, {maxHeight: 300}]}
            horizontal={true}>
            <View style={styles.box7}>
              <SafeAreaView style={{flex: 1}}>
                <Table />
              </SafeAreaView>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity
          onPress={toggleExpanded8}
          style={[
            styles.headerb,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <View style={styles.textContainer}>
            <Text
              style={styles.headerText}
              numberOfLines={2}
              ellipsizeMode="tail">
              8. Additional Notes with Image (সার্বিক অবস্থার তথ্যাদির বিস্তারিত
              খাতায় লিখে ছবি তুলে আপলোড করুন)
            </Text>
          </View>
          {isCollapsed8 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed8}>
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
            <View style={styles.box}>
              <View style={styles.row}>
                <Text style={styles.label}>Select Image</Text>
                <TouchableOpacity
                  style={styles.fileButton}
                  onPress={handleFileSelect}>
                  <Text>{fileName || 'Choose File'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={handleUpload}>
                  <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tableContainer}>
                {/* Header Row */}
                <View style={styles.tableRow}>
                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Sl. No.
                  </Text>

                  <Text style={[styles.tableHeader, styles.tableCell]}>
                    Image
                  </Text>
                </View>

                {/* Data Row */}
                <View style={styles.tableRow}>
                  <Text style={styles.tableCell}>1</Text>
                  <Text style={styles.tableCell}>image</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </Collapsible>
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     backgroundColor: 'white', // Background color for the header
//     elevation: 2, // Shadow for Android
//     shadowColor: '#000', // Shadow color for iOS
//     shadowOffset: {width: 0, height: 2}, // Offset for iOS
//     shadowOpacity: 0.2, // Opacity for iOS
//     shadowRadius: 2, // Radius for iOS
//     width: '100%',
//     marginTop: 20,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     marginLeft: 10, // Space between back arrow and title
//   },
//   editButton:{
//     alignSelf:"flex-end"
//   }
// });

const styles = StyleSheet.create({
  headera: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items on left and right
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white', // Background color for the header
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // Offset for iOS
    shadowOpacity: 0.2, // Opacity for iOS
    shadowRadius: 2, // Radius for iOS
    width: '100%',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10, // Space between back arrow and title
  },
  editButton: {
    marginLeft: 0, // Remove any additional margins
    alignSelf: 'flex-start', // Align button on the left side
  },

  container: {
    flex: 1,
    padding: 20,
  },
  headerb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items on left and right
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#68bbe3', // Background color for the header
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 2}, // Offset for iOS
    shadowOpacity: 0.2, // Opacity for iOS
    shadowRadius: 2, // Radius for iOS
    width: '100%',
    marginTop: 20,
    color: 'white',
  },
  textContainer: {
    flex: 1,
    // Set a max width if needed to limit text space
    maxWidth: '80%', // Adjust this value to fit your layout
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    color: 'black',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },

  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: '#333',
    backgroundColor: '#b2efec',
  },
  detailText: {
    fontSize: 14,
    marginLeft: 10,
    color: 'black',
  },

  box: {
    borderWidth: 2,
    borderColor: '#D3D3D3',
  },
  box7: {
    borderWidth: 2,
    borderColor: '#D3D3D3',
    height: 300,
  },

  scrollContent: {
    paddingBottom: 50, // Add some padding to the bottom
  },

  tableContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 10,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
    flexDirection: 'row',
    color: 'black',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
    textAlign: 'center',
    color: 'black',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  fileButton: {
    flex: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  cellText: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
  },
  cell: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textColor: {
    color: 'black',
  },
});

export default beatDashboard;
