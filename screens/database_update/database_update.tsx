import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import an icon from the vector-icons library
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  age_plantations_delete,
  aspects_delete,
  directions_delete,
  dis_nurserys_delete,
  financial_years_delete,
  historys_delete,
  inundations_delete,
  jur_ad_districts_delete,
  jur_ad_divisions_delete,
  jur_ad_upazillas_delete,
  jur_fd_beats_delete,
  jur_fd_circles_delete,
  jur_fd_divisions_delete,
  jur_fd_ecozones_delete,
  jur_fd_ranges_delete,
  land_cover_delete,
  logistic_conditions_delete,
  month_inun_lists_delete,
  months_delete,
  mouza_types_delete,
  natural_issues_delete,
  planting_modes_delete,
  repro_types_delete,
  sources_delete,
  spatial_ref_sys_delete,
  yes_no_lists_delete,
} from '../../database/sqlDatabase';
import {ActivityIndicator} from 'react-native-paper';

const DatabaseUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);
  const navigation = useNavigation();

  const handlePress = async () => {
    setLoading(true); // Start loading state
    let timeTaken = 0; // Initialize timeTaken to zero

    try {
      const start = performance.now(); // Start time
      console.log('Button pressed');

      // Perform your database operations
      console.log('Starting yes_no_lists_delete...');
      await yes_no_lists_delete(); // First operation
      console.log('yes_no_lists_delete completed');

      console.log('Starting sources_delete...');
      await sources_delete(); // Second operation
      console.log('sources_delete completed');

      console.log('Starting age_plantations_delete...');
      await age_plantations_delete(); // Second operation
      console.log('age_plantations_delete completed');

      console.log('Starting age_plantations_delete...');
      await aspects_delete(); // Second operation
      console.log('age_plantations_delete completed');

      console.log('Starting directions_delete...');
      await directions_delete(); // Second operation
      console.log('directions_delete completed');

      console.log('Starting dis_nurserys_delete...');
      await dis_nurserys_delete(); // Second operation
      console.log('dis_nurserys_delete completed');

      console.log('Starting jur_ad_districts_delete...');
      await jur_ad_districts_delete(); // Second operation
      console.log('jur_ad_districts_delete completed');

      console.log('Starting jur_ad_divisions_delete...');
      await jur_ad_divisions_delete(); // Second operation
      console.log('jur_ad_divisions_delete completed');

      console.log('Starting jur_ad_upazillas_delete...');
      await jur_ad_upazillas_delete(); // Second operation
      console.log('jur_ad_upazillas_delete completed');

      console.log('Starting jur_fd_beats_delete...');
      await jur_fd_beats_delete(); // Second operation
      console.log('jur_fd_beats_delete completed');

      console.log('Starting jur_fd_circles_delete...');
      await jur_fd_circles_delete(); // Second operation
      console.log('jur_fd_circles_delete completed');

      console.log('Starting jur_fd_ecozones_delete...');
      await jur_fd_ecozones_delete(); // Second operation
      console.log('jur_fd_ecozones_delete completed');

      console.log('Starting jur_fd_ranges_delete...');
      await jur_fd_ranges_delete(); // Second operation
      console.log('jur_fd_ranges_delete completed');

      console.log('Starting months_delete...');
      await months_delete(); // Second operation
      console.log('months_delete completed');

      // console.log('Starting land_cover_delete...');
      // await land_cover_delete(); // Second operation
      // console.log('land_cover_delete completed');

      console.log('Starting historys_delete...');
      await historys_delete(); // Second operation
      console.log('historys_delete completed');

      console.log('Starting inundations_delete...');
      await inundations_delete(); // Second operation
      console.log('inundations_delete completed');

      console.log('Starting mouza_types_delete...');
      await mouza_types_delete(); // Second operation
      console.log('mouza_types_delete completed');

      // console.log('Starting logistic_conditions_delete...');
      // await logistic_conditions_delete(); // Second operation
      // console.log('logistic_conditions_delete completed');

      console.log(
        'Starting parallel operations: land_cover_delete and logistic_conditions_delete...',
      );
      const parallelTasks = [
        land_cover_delete().catch(error => {
          console.error('Error deleting data from land_cover:', error);
        }),
        logistic_conditions_delete().catch(error => {
          console.error('Error deleting data from logistic_conditions:', error);
        }),
      ];

      console.log('Starting month_inun_lists_delete...');
      await month_inun_lists_delete(); // Second operation
      console.log('month_inun_lists_delete completed');

      console.log('Starting jur_fd_divisions_delete...');
      await jur_fd_divisions_delete(); // Second operation
      console.log('jur_fd_divisions_delete completed');

      await Promise.all(parallelTasks);
      console.log(
        'Parallel operations land_cover_delete and logistic_conditions_delete completed',
      );

      console.log('Starting natural_issues_delete...');
      await natural_issues_delete(); // Second operation
      console.log('natural_issues_delete completed');

      console.log('Starting planting_modes_delete...');
      await planting_modes_delete(); // Second operation
      console.log('planting_modes_delete completed');

      console.log('Starting repro_types_delete...');
      await repro_types_delete(); // Second operation
      console.log('repro_types_delete completed');

      console.log('Starting financial_years_delete...');
      await financial_years_delete(); // Second operation
      console.log('financial_years_delete completed');

      const end = performance.now(); // End time
      timeTaken = end - start; // Calculate time taken
    } catch (err) {
      console.log('Error:', err.message || err); // Log any errors
    } finally {
      setLoading(false); // End loading state

      // Check if timeTaken is a valid number before alerting
      if (!isNaN(timeTaken)) {
        Alert.alert(
          `Updated successfully! Time taken: ${timeTaken.toFixed(2)} ms`,
        );
      } else {
        Alert.alert('Update failed. Unable to measure time.');
      }
    }
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Database Update</Text>
      </View>
      <View style={styles.container}>
        {/* Icon in the middle */}
        <MaterialCommunityIcons name="database-cog" size={50} color="#33BBFF" />

        {/* Button below the icon */}
        {!loading && (
          <View style={styles.buttonContainer}>
            <Button title="Update Database" onPress={handlePress} />
          </View>
        )}
        {loading && <ActivityIndicator size="large" color="#0000FF" />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
  },
  buttonContainer: {
    marginTop: 20, // Add space between the icon and the button
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
});

export default DatabaseUpdate;
