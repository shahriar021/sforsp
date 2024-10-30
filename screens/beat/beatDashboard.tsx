import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Collapsible from 'react-native-collapsible';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
              <Text>
                1a. Information Collection date (তথ্য সংগ্রহের তারিখ): 20 May
                2021
              </Text>
              <Text>
                1.b. Name of Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
                কর্মকর্তার নাম): SAYED Mahamudul haque shiraji
              </Text>
              <Text>
                1.c. Mobile number Beat/Camp/SFPC Officer (বিট/ক্যাম্প/এসএফপিসি
                কর্মকর্তার মোবাইল নং): 01812346944
              </Text>
              <Text>
                1.d. Address of the Office (Beat/Camp/SFPC)
                (বিট/ক্যাম্প/এসএফপিসি অফিসের ঠিকানা): Khuthakhali beat office
              </Text>
              <Text>
                1.e. GPS Location of the Beat/Camp/SFPC Office
                (বিট/ক্যাম্প/এসএফপিসি অফিসের জিপিএস রিডিং):
                21.6170273833,92.0704978000,-6.00,1.50
              </Text>
            </View>
          </Collapsible>
        </ScrollView>

        <TouchableOpacity onPress={toggleExpanded2} style={styles.headerb}>
          <Text style={styles.headerText}>
            2. Location Data (Beat/Camp/SFPC Information) (এলাকার তথ্য)
          </Text>
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
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
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

              <Text style={styles.sectionHeader}>
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
              </Text>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded3} style={styles.headerb}>
          <Text style={styles.headerText}>
            3. Index Map of the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসি - এর
            ইনডেক্স ম্যাপ)
          </Text>
          {isCollapsed3 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed3}>
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
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

              <Text style={styles.sectionHeader}>
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
              </Text>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded4} style={styles.headerb}>
          <Text style={styles.headerText}>
            4. Land information of the Beat/Camp/SFPC (বিট/ক্যাম্প/এসএফপিসির
            ভূমির তথ্যাদি)
          </Text>
          {isCollapsed4 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed4}>
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
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

              <Text style={styles.sectionHeader}>
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
              </Text>
            </View>
          </ScrollView>
        </Collapsible>

        <TouchableOpacity onPress={toggleExpanded5} style={styles.headerb}>
          <Text style={styles.headerText}>
            5. Existing problems and its their intensity in Forest land (বনভূমির
            বিদ্যমান সমস্যা এবং সমস্যার মাত্রা)
          </Text>
          {isCollapsed5 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed5}>
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
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

              <Text style={styles.sectionHeader}>
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
              </Text>
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
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
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

              <Text style={styles.sectionHeader}>
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
              </Text>
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
          <ScrollView style={[styles.content, {maxHeight: 300}]}>
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

              <Text style={styles.sectionHeader}>
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
              </Text>
            </View>
          </ScrollView>
        </Collapsible>

        {/* <TouchableOpacity onPress={toggleExpanded6} style={styles.headerb}>
          <Text
            style={styles.headerText}
            numberOfLines={2}
            ellipsizeMode="tail">
            8. Additional Notes with Image (সার্বিক অবস্থার তথ্যাদির বিস্তারিত
            খাতায় লিখে ছবি তুলে আপলোড করুন)
          </Text>
          {isCollapsed3 ? (
            <AntDesign name="plus" size={24} color="black" />
          ) : (
            <AntDesign name="minus" size={24} color="black" />
          )}
        </TouchableOpacity> */}

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

              <Text style={styles.sectionHeader}>
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
              </Text>
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
    color: '#555',
  },

  box: {
    borderWidth: 2,
    borderColor: '#D3D3D3',
  },

  scrollContent: {
    paddingBottom: 50, // Add some padding to the bottom
  },
});

export default beatDashboard;
