import {
  StyleSheet,
  View,
  Animated,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  Colors,
  Fonts,
  Sizes,
  CommonStyles,
  screenWidth,
} from '../../constants/styles';
import Header from '../../components/header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {liveApi} from '../../constants/server_api';

const Geo_location = ({navigation}) => {
  const [geoInfoList, setGeoInfoList] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          // `${liveApi}/geo_location/geo_location_list`,
          `http://192.168.0.190:5000/geo_location/geo_location_list`,
        );
        const jsonData = await data.json();
        setGeoInfoList(jsonData);
        console.log(jsonData, 'geoData');
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <View>
      <Header header="Geo Location" navigation={navigation} />
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Name</Text>
          <Text style={styles.tableHeader}>Designation</Text>

          <Text style={styles.tableHeader}>Action</Text>
          <Text style={styles.tableHeader}>Live</Text>
        </View>
        {/* Example row */}
        {geoInfoList &&
          geoInfoList.map(info => {
            return (
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{info.full_name}</Text>
                <Text style={styles.tableCell}>{info.designation_name}</Text>

                <Text style={styles.tableCell}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('geo_location_map' as never, {
                        id: info.id,
                      })
                    }>
                    <AntDesign name="earth" size={18} color={'blue'} />
                  </TouchableOpacity>
                </Text>

                <Text style={styles.tableCell}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('geo_location_live_map' as never, {
                        id: info.id,
                      })
                    }>
                    <AntDesign name="earth" size={18} color={'red'} />
                  </TouchableOpacity>
                </Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default Geo_location;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  tableContainer: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    color: 'black',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    color: 'black',
  },
});
