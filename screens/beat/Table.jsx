import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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

const Table = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>7.1. Upzilla (উপজেলা)</Text>
        <Text style={styles.headerText}>7.2. Union (ইউনিয়ন)</Text>
        <Text style={styles.headerText}>
          7.3. Name of the Villages/Para (গ্রাম/পাড়ার নাম)
        </Text>
        <Text style={styles.headerText}>
          7.4. Geographic Location (গ্রামের অবস্থান)
        </Text>
        <Text style={styles.headerText}>7.5. Distance (কিমি)</Text>
        <Text style={styles.headerText}>
          7.6. Total Households (মোট খানার সংখ্যা)
        </Text>
        <Text style={styles.headerText}>
          7.7. Forest Villagers (বন জায়গীরদার)
        </Text>
        <Text style={styles.headerText}>
          7.8. Social Forestry Participants (সামাজিক বনায়নের উপকারভোগী)
        </Text>
        <Text style={styles.headerText}>
          7.9. Conservation Participants (গ্রামে এফসিভি/ভিসিএফ)
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.upzilla}</Text>
            <Text style={styles.cell}>{item.union}</Text>
            <Text style={styles.cell}>{item.village}</Text>
            <Text style={styles.cell}>{item.latitude}</Text>
            <Text style={styles.cell}>{item.longitude}</Text>
            <Text style={styles.cell}>{item.distance}</Text>
            <Text style={styles.cell}>{item.totalHouseholds}</Text>
            <Text style={styles.cell}>{item.forestVillagers}</Text>
            <Text style={styles.cell}>{item.socialForestryParticipants}</Text>
            <Text style={styles.cell}>{item.conservationParticipants}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left', // Align header text to the left
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'black',
  },
  cell: {
    flex: 1,
    textAlign: 'left', // Align cell text to the left
    color: 'black',
  },
});

export default Table;
