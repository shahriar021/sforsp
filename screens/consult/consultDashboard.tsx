// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import {useNavigation} from '@react-navigation/native';

// const InterventionDashboar = () => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <View style={styles.headera}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Intervention Information</Text>
//         <TouchableOpacity
//           onPress={() => navigation.push('interventionOne')}
//           style={styles.editButton}>
//           <Feather name="edit-2" size={24} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headera: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between', // Align items on left and right
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
//   editButton: {
//     marginLeft: 0, // Remove any additional margins
//     alignSelf: 'flex-start', // Align button on the left side
//   },
// });

// export default InterventionDashboar;

import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: '1',
    date: '23 May 2021',
    beat: 'Khutakhali',
    range: 'Fulchari',
    division: 'Cox’s Bazar North Forest Division',
    circle: 'Chattogram Circle',
    eco: 'hill',
    meet: 'Khutakhali',
  },

  // Add remaining data as needed
];

const consult = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.headera}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Community Consult</Text>
        <TouchableOpacity
          onPress={() => navigation.push('communityconsultOne')}
          style={styles.editButton}>
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={styles.container}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Sl.No.</Text>
            <Text style={styles.headerText}>Details</Text>
            <Text style={styles.headerText}>Actions</Text>

            <Text style={styles.headerText}>Beat Name</Text>
            <Text style={styles.headerText}>Range Name</Text>
            <Text style={styles.headerText}>Division Name</Text>
            <Text style={styles.headerText}>Circle Name</Text>
            <Text style={styles.headerText}>Ecozone Name</Text>
            <Text style={styles.headerText}>Meeting Place</Text>
          </View>

          {/* Data Rows */}
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.id}</Text>

                {/* Details Buttons */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Details</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button3}>
                  <Text style={styles.buttonText}>action</Text>
                </TouchableOpacity>

                <Text style={styles.cell}>{item.date}</Text>
                <Text style={styles.cell}>{item.beat}</Text>
                <Text style={styles.cell}>{item.range}</Text>
                <Text style={styles.cell}>{item.division}</Text>
                <Text style={styles.cell}>{item.circle}</Text>
                <Text style={styles.cell}>{item.eco}</Text>
                <Text style={styles.cell}>{item.meet}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#D0F9C4',
  },
  cell: {
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flex: 1,

    justifyContent: 'space-around',
  },
  button1: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button2: {
    backgroundColor: '#5bc0de',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button3: {
    backgroundColor: '#5cb85c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
});

export default consult;
