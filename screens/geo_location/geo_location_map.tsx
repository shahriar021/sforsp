// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/
// Import React
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
// Import required components
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// Import Map and Marker
import MapView, {Marker, Polyline} from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/header';
import axios from 'axios';
import { liveApi } from '../../constants/server_api';
const geo_location_map = ({navigation}) => {
  const route = useRoute();
  const {id} = route.params;
  console.log(id, 'this id from geo location map');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geoLatLong, setGeoLatLong] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [number, onChangeNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const [initialMarker, setInitialMarker] = useState({
    ilatitude: 21.4272,
    ilongitude: 92.0061,
    title: 'Initial Marker',
    description: 'This is the initial marker',
  });
  const [initialMarkerVisible, setInitialMarkerVisible] = useState(true);
  const [polylineVisible, setPolylineVisible] = useState(false);
  const [firstData, setFirstData] = useState('');

  const formatDateToString = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState('');
  const [show, setShow] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [showDate2, setShowDate2] = useState('');
  const [show2, setShow2] = useState(false);

  // console.log(showDate, 'date,,,');

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    const dateString = formatDateToString(currentDate);
    setShowDate(dateString);
    //const modifiedDate = reverseDateString(dateString);

    setDate(currentDate);
  };

  const onChange2 = (event, selectedDate2) => {
    const currentDate2 = selectedDate2 || date2;
    setShow2(Platform.OS === 'ios');
    const dateString2 = formatDateToString(currentDate2);
    setShowDate2(dateString2);
    //const modifiedDate = reverseDateString(dateString);

    setDate2(currentDate2);
  };

  // console.log(showDate2, 'date2,,,');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `${liveApi}/geo_location/geo_location_marker_list/${id}`,
        );
        const jsonData = await data.json();
        setGeoLatLong(jsonData);
        console.log(jsonData[jsonData.length - 1], 'for initial marker..');
        setFirstData(jsonData[jsonData.length - 1]);
        if (jsonData[jsonData.length - 1]) {
          setInitialMarker({
            ilatitude: parseFloat(jsonData[jsonData.length - 1].latitude),
            ilongitude: parseFloat(jsonData[jsonData.length - 1].longitude),
            title: 'Initial Marker',
            description: 'This is the initial marker',
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    if (firstData) {
      const createdDate = firstData.created_date.split('T')[0];
      if (createdDate !== formatDateToString(date)) {
        setInitialMarkerVisible(false);
      }
    }
  }, [firstData, date]);

  //console.log(geoLatLong, 'geo locatin map....');

  const parsedCoordinates = geoLatLong.map(location => ({
    latitude: parseFloat(location.latitude),
    longitude: parseFloat(location.longitude),
  }));

  const period_search = () => {
    setLoading(true);
    axios
      .post(`${liveApi}/geo_location/employee_location_search`, {
        id,
        date2,
        date,
      })
      .then(response => {
        setSearchResults(response.data.results);
        // console.log(response.data.results, '4565');
        setError(null);
        setLoading(false);
        setPolylineVisible(false);
      })
      .catch(error => {
        setError('An error occurred during search.', error);
        setSearchResults([]);
        setLoading(false);
      });
  };

  // console.log(searchResults, 'searchResults');

  const handleMarkerSelection = date => {
    setSelectedDate(date); // Update selected date state
    setGeoLatLong(
      searchResults.filter(info => info.created_date.split('T')[0] === date),
    );
    setInitialMarkerVisible(false);
    setPolylineVisible(true);
  };

  // Function to filter search results based on selected date
  const filteredResults = searchResults.filter(info => {
    // Assuming created_date is in ISO 8601 format like 'YYYY-MM-DDTHH:mm:ss'
    return info.created_date.split('T')[0] === selectedDate;
  });

  const uniqueDates = new Set(
    searchResults.map(info => info.created_date.split('T')[0]),
  );

  return (
    <>
      <Header header="Geo Location" navigation={navigation} />
      <View>
        <View style={styles.searchBox}>
          <Button
            onPress={() => setShow(true)}
            title={showDate !== '' ? showDate : formatDateToString(date)}
          />
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange1}
            />
          )}

          <Button
            onPress={() => setShow2(true)}
            title={showDate2 !== '' ? showDate2 : formatDateToString(date2)}
          />
          {show2 && (
            <DateTimePicker
              value={date2}
              mode="date"
              display="default"
              onChange={onChange2}
            />
          )}
        </View>
        <Button title="search" onPress={period_search} />
        <ScrollView horizontal style={styles.horizontalScrollView}>
          <View style={styles.horizontalView}>
            {/* {searchResults &&
              searchResults.map(info => (
                <View key={info.id} style={styles.horizontalItem}>
                  <TouchableOpacity
                    onPress={() => Alert.alert(info.id.toString())}>
                    <Text style={styles.dateText}>
                      {info.created_date.split('T')[0]}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))} */}

            {[...uniqueDates].map(date => (
              <TouchableOpacity
                key={date}
                style={[
                  styles.dateButton,
                  selectedDate === date && styles.selectedDateButton,
                ]}
                onPress={() => handleMarkerSelection(date)}>
                <Text style={styles.dateButtonText}>{date}</Text>
              </TouchableOpacity>
            ))}

            {/* {searchResults.map(info => (
              <TouchableOpacity
                key={info.id}
                style={[
                  styles.dateButton,
                  selectedDate === info.created_date.split('T')[0] &&
                    styles.selectedDateButton,
                ]}
                onPress={() =>
                  handleMarkerSelection(info.created_date.split('T')[0])
                }>
                <Text style={styles.dateButtonText}>
                  {info.created_date.split('T')[0]}
                </Text>
              </TouchableOpacity>
            ))} */}
          </View>
        </ScrollView>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 23.8041,
              longitude: 90.4152,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={mapStyle}>
            {initialMarkerVisible && (
              <Marker
                coordinate={{
                  latitude: initialMarker.ilatitude,
                  longitude: initialMarker.ilongitude,
                }}
                title={initialMarker.title}
                description={initialMarker.description}
              />
            )}
            {initialMarkerVisible === false &&
              filteredResults.map(info => (
                <Marker
                  key={info.id}
                  coordinate={{
                    latitude: parseFloat(info.latitude),
                    longitude: parseFloat(info.longitude),
                  }}
                  title={info.created_date.split('T')[0]}
                  //description={info.description}
                />
              ))}
            {polylineVisible && (
              <Polyline
                coordinates={parsedCoordinates}
                strokeColor="red"
                strokeWidth={5}
              />
            )}
          </MapView>
        </View>
      </SafeAreaView>
    </>
  );
};
export default geo_location_map;
const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  horizontalScrollView: {
    marginTop: 10,
  },
  horizontalView: {
    flexDirection: 'row',
  },
  horizontalItem: {
    marginRight: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    borderWidth: 1,
    margin: 5,
  },
  dateButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
  },
  selectedDateButton: {
    backgroundColor: '#2196f3',
  },
  dateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

// import {useRoute} from '@react-navigation/native';
// import React, {useEffect, useState} from 'react';
// import {
//   Alert,
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import MapView, {Marker, Polyline} from 'react-native-maps';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Header from '../../components/header';
// import axios from 'axios';

// const geo_location_map = ({navigation}) => {
//   const route = useRoute();
//   const {id} = route.params;

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [geoLatLong, setGeoLatLong] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [number, onChangeNumber] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [initialMarker, setInitialMarker] = useState({
//     ilatitude: 21.4272,
//     ilongitude: 92.0061,
//     title: 'Initial Marker',
//     description: 'This is the initial marker',
//   });
//   const [initialMarkerVisible, setInitialMarkerVisible] = useState(true);
//   const [polylineVisible, setPolylineVisible] = useState(false);
//   const [firstData, setFirstData] = useState('');

//   const formatDateToString = date => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const [date, setDate] = useState(new Date());
//   const [showDate, setShowDate] = useState('');
//   const [show, setShow] = useState(false);
//   const [date2, setDate2] = useState(new Date());
//   const [showDate2, setShowDate2] = useState('');
//   const [show2, setShow2] = useState(false);

//   const onChange1 = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     const dateString = formatDateToString(currentDate);
//     setShowDate(dateString);
//     setDate(currentDate);
//   };

//   const onChange2 = (event, selectedDate2) => {
//     const currentDate2 = selectedDate2 || date2;
//     setShow2(Platform.OS === 'ios');
//     const dateString2 = formatDateToString(currentDate2);
//     setShowDate2(dateString2);
//     setDate2(currentDate2);
//   };

//   useEffect(() => {
//     const fetchCurrentDateData = async () => {
//       try {
//         const currentDate = formatDateToString(new Date());
//         const response = await axios.get(
//           `http://192.168.0.113:5000/geo_location/geo_location_marker_list/${id}?date=${currentDate}`,
//         );
//         const jsonData = response.data;
//         setGeoLatLong(jsonData);

//         if (jsonData.length > 0) {
//           setFirstData(jsonData[jsonData.length - 1]);
//           setInitialMarker({
//             ilatitude: parseFloat(jsonData[jsonData.length - 1].latitude),
//             ilongitude: parseFloat(jsonData[jsonData.length - 1].longitude),
//             title: 'Initial Marker',
//             description: 'This is the initial marker',
//           });
//         } else {
//           setInitialMarkerVisible(false);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchCurrentDateData();
//   }, [id]);

//   console.log(firstData.created_date, 'first dat');
//   console.log(date, 'dat');

//   if (date != firstData.created_date) {
//     setInitialMarkerVisible(false);
//   }

//   const parsedCoordinates = geoLatLong.map(location => ({
//     latitude: parseFloat(location.latitude),
//     longitude: parseFloat(location.longitude),
//   }));

//   const period_search = () => {
//     setLoading(true);
//     axios
//       .post(`http://192.168.0.113:5000/geo_location/employee_location_search`, {
//         id,
//         date2,
//         date,
//       })
//       .then(response => {
//         setSearchResults(response.data.results);
//         setError(null);
//         setLoading(false);
//         setPolylineVisible(false);
//       })
//       .catch(error => {
//         setError('An error occurred during search.', error);
//         setSearchResults([]);
//         setLoading(false);
//       });
//   };

//   const handleMarkerSelection = date => {
//     setSelectedDate(date);
//     setGeoLatLong(
//       searchResults.filter(info => info.created_date.split('T')[0] === date),
//     );
//     setInitialMarkerVisible(false);
//     setPolylineVisible(true);
//   };

//   const filteredResults = searchResults.filter(info => {
//     return info.created_date.split('T')[0] === selectedDate;
//   });

//   const uniqueDates = new Set(
//     searchResults.map(info => info.created_date.split('T')[0]),
//   );

//   return (
//     <>
//       <Header header="Geo Location" navigation={navigation} />
//       <View>
//         <View style={styles.searchBox}>
//           <Button
//             onPress={() => setShow(true)}
//             title={showDate !== '' ? showDate : formatDateToString(date)}
//           />
//           {show && (
//             <DateTimePicker
//               value={date}
//               mode="date"
//               display="default"
//               onChange={onChange1}
//             />
//           )}
//           <Button
//             onPress={() => setShow2(true)}
//             title={showDate2 !== '' ? showDate2 : formatDateToString(date2)}
//           />
//           {show2 && (
//             <DateTimePicker
//               value={date2}
//               mode="date"
//               display="default"
//               onChange={onChange2}
//             />
//           )}
//         </View>
//         <Button title="search" onPress={period_search} />
//         <ScrollView horizontal style={styles.horizontalScrollView}>
//           <View style={styles.horizontalView}>
//             {[...uniqueDates].map(date => (
//               <TouchableOpacity
//                 key={date}
//                 style={[
//                   styles.dateButton,
//                   selectedDate === date && styles.selectedDateButton,
//                 ]}
//                 onPress={() => handleMarkerSelection(date)}>
//                 <Text style={styles.dateButtonText}>{date}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//       <SafeAreaView style={{flex: 1}}>
//         <View style={styles.container}>
//           <MapView
//             style={styles.mapStyle}
//             initialRegion={{
//               latitude: 23.8041,
//               longitude: 90.4152,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//             customMapStyle={mapStyle}>
//             {initialMarkerVisible && (
//               <Marker
//                 coordinate={{
//                   latitude: initialMarker.ilatitude,
//                   longitude: initialMarker.ilongitude,
//                 }}
//                 title={initialMarker.title}
//                 description={initialMarker.description}
//               />
//             )}
//             {initialMarkerVisible === false &&
//               filteredResults.map(info => (
//                 <Marker
//                   key={info.id}
//                   coordinate={{
//                     latitude: parseFloat(info.latitude),
//                     longitude: parseFloat(info.longitude),
//                   }}
//                   title={info.created_date.split('T')[0]}
//                 />
//               ))}
//             {polylineVisible && (
//               <Polyline
//                 coordinates={parsedCoordinates}
//                 strokeColor="red"
//                 strokeWidth={5}
//               />
//             )}
//           </MapView>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default geo_location_map;

// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {featureType: 'road', elementType: 'geometry', stylers: [{color: '#38414e'}]},
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//   },
//   mapStyle: {
//     width: '100%',
//     height: '100%',
//   },
//   searchBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     margin: 10,
//   },
//   horizontalScrollView: {
//     marginVertical: 10,
//   },
//   horizontalView: {
//     flexDirection: 'row',
//     flexWrap: 'nowrap',
//   },
//   dateButton: {
//     backgroundColor: '#e0e0e0',
//     padding: 10,
//     borderRadius: 5,
//     margin: 5,
//   },
//   selectedDateButton: {
//     backgroundColor: '#8e8e8e',
//   },
//   dateButtonText: {
//     color: '#333',
//   },
// });
