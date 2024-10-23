// import Geolocation from '@react-native-community/geolocation';
// import {useRoute} from '@react-navigation/native';
// import React, {useRef} from 'react';
// import {
//   Animated,
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   SafeAreaView,
// } from 'react-native';

// import {SERVER_IP_ADDRESS} from '@env';

// const App = () => {
//   const route = useRoute();
//   const {id} = route.params;
//   console.log(id, 'live function..');
//   console.log(SERVER_IP_ADDRESS);

//   const handleLiveLocation = id => {
//     console.log(id, 'live...');
//     Geolocation.getCurrentPosition(info => {
//       const {latitude, longitude} = info.coords;
//       console.log(latitude, longitude);
//       console.log(id, 'location function..');
//       const data = {
//         user_id: id,
//         latitude: latitude,
//         longitude: longitude,
//       };

//       // Make a POST request to your API endpoint
//       fetch('http://192.168.0.113:5000/geo_location/geo_location_create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           console.log('Location data posted successfully:', data);
//         })
//         .catch(error => {
//           console.error('Error posting location data:', error);
//           // Log detailed error message if available
//           if (error.message) {
//             console.error('Detailed error message:', error.message);
//           }
//         });
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Button
//         title="live tracking...."
//         color={'red'}
//         onPress={() => handleLiveLocation(id)}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   Button,
//   ActivityIndicator,
//   SafeAreaView,
//   Image,
// } from 'react-native';
// import MapView, {Marker, Polyline} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import {useRoute} from '@react-navigation/native';
// import Header from '../../components/header';

// const App = ({navigation}) => {
//   const route = useRoute();
//   const {id} = route.params;

//   const [markers, setMarkers] = useState([]);
//   const [place, setPlace] = useState('');
//   const [region, setRegion] = useState({
//     latitude: 23.8041, // Default latitude
//     longitude: 90.4152, // Default longitude
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });
//   const [loading, setLoading] = useState(false);

//   const fetchPlaceName = async (latitude, longitude) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBl2KMc9LbMRujisdxzC4mgcRR10P7mvHw`,
//       );
//       const data = await response.json();
//       if (data.status === 'OK') {
//         const placeName = data.results[0]?.formatted_address || 'Unknown place';
//         return placeName;
//       } else {
//         throw new Error('Unable to fetch place name');
//       }
//     } catch (error) {
//       console.error('Error fetching place name:', error);
//       return 'Unknown place';
//     }
//   };

//   const handleLiveLocation = () => {
//     setLoading(true);
//     Geolocation.getCurrentPosition(async info => {
//       const {latitude, longitude} = info.coords;
//       const placeName = await fetchPlaceName(latitude, longitude);
//       console.log(placeName, 'place name..');
//       setPlace(placeName);
//       const data = {
//         user_id: id,
//         latitude,
//         longitude,
//       };

//       fetch('http://192.168.0.113:5000/geo_location/geo_location_create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(() => {
//           // Fetch the newly inserted marker
//           fetch(
//             `http://192.168.0.113:5000/geo_location/geo_location_marker_live_list/${id}`,
//           )
//             .then(response => response.json())
//             .then(newMarkerData => {
//               // Convert latitude and longitude from strings to numbers
//               const newMarkers = newMarkerData.map(marker => ({
//                 ...marker,
//                 latitude: parseFloat(marker.latitude),
//                 longitude: parseFloat(marker.longitude),
//               }));

//               setMarkers(prevMarkers => [...prevMarkers, ...newMarkers]);

//               if (newMarkers.length > 0) {
//                 setRegion({
//                   ...region,
//                   latitude: newMarkers[0].latitude,
//                   longitude: newMarkers[0].longitude,
//                 });
//               }
//               setLoading(false);
//             })
//             .catch(error => {
//               console.error('Error fetching new marker data:', error);
//               setLoading(false);
//             });
//         })
//         .catch(error => {
//           console.error('Error posting location data:', error);
//           setLoading(false);
//         });
//     });
//   };

//   // useEffect(()=>{
//   //   const fetchPlaceName = async (place.latitude, place.longitude) => {
//   //     try {
//   //       const response = await fetch(
//   //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${"AIzaSyBl2KMc9LbMRujisdxzC4mgcRR10P7mvHw"}`,
//   //       );
//   //       const data = await response.json();
//   //       if (data.status === 'OK') {
//   //         const placeName = data.results[0]?.formatted_address || 'Unknown place';
//   //         return placeName;
//   //       } else {
//   //         throw new Error('Unable to fetch place name');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching place name:', error);
//   //       return 'Unknown place';
//   //     }
//   //   };
//   //   fetchPlaceName(place.latitude, place.longitude)
//   //  },[])

//   console.log(place, 'place....');

//   return (
//     <>
//       <Header header="Geo Location Live" navigation={navigation} />
//       <SafeAreaView style={{flex: 1}}>
//         <View style={styles.container}>
//           <MapView
//             style={styles.map}
//             region={region}
//             onRegionChangeComplete={region => setRegion(region)}>
//             {markers.map((marker, index) => (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 pinColor={index === markers.length - 1 ? 'blue' : 'red'}
//                 title={`${marker.created_date.split('T')[0]} ${
//                   marker.created_date.split('T')[1].split('.')[0]
//                 }`}
//                 description={`Place: ${place}`}
//               />
//             ))}
//             <Polyline
//               coordinates={markers.map(marker => ({
//                 latitude: marker.latitude,
//                 longitude: marker.longitude,
//               }))}
//               strokeColor="blue"
//               lineDashPattern={[10, 5]} // Customize the polyline dash pattern
//               strokeWidth={6}
//             />
//           </MapView>
//           {loading && (
//             <View style={styles.loading}>
//               <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//           )}
//           <Button
//             title="Start Live Tracking"
//             color="red"
//             onPress={handleLiveLocation}
//           />
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   loading: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{translateX: -25}, {translateY: -25}],
//   },
// });

// export default App;









































































// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Button, ActivityIndicator, SafeAreaView } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { useRoute } from '@react-navigation/native';
// import Header from '../../components/header';

// const App = ({ navigation }) => {
//   const route = useRoute();
//   const { id } = route.params;

//   const [markers, setMarkers] = useState([]);
//   const [place, setPlace] = useState('');
//   const [region, setRegion] = useState({
//     latitude: 23.8041, // Default latitude
//     longitude: 90.4152, // Default longitude
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });
//   const [loading, setLoading] = useState(false);

//   // Function to fetch place name based on coordinates
//   const fetchPlaceName = async (latitude, longitude) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBl2KMc9LbMRujisdxzC4mgcRR10P7mvHw`,
//       );
//       const data = await response.json();
//       if (data.status === 'OK') {
//         const placeName = data.results[0]?.formatted_address || 'Unknown place';
//         return placeName;
//       } else {
//         throw new Error('Unable to fetch place name');
//       }
//     } catch (error) {
//       console.error('Error fetching place name:', error);
//       return 'Unknown place';
//     }
//   };

//   // Function to handle live location updates
//   const handleLiveLocation = () => {
//     setLoading(true);
//     Geolocation.getCurrentPosition(async (info) => {
//       const { latitude, longitude } = info.coords;
//       const placeName = await fetchPlaceName(latitude, longitude);

//       // Update the state with the fetched place name
//       setPlace(placeName);

//       const data = {
//         user_id: id,
//         latitude,
//         longitude,
//       };

//       // Make a POST request to store location data
//       fetch('http://192.168.0.113:5000/geo_location/geo_location_create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(() => {
//           // Fetch the newly inserted markers
//           fetch(
//             `http://192.168.0.113:5000/geo_location/geo_location_marker_live_list/${id}`,
//           )
//             .then(response => response.json())
//             .then(newMarkerData => {
//               // Convert latitude and longitude from strings to numbers
//               const newMarkers = newMarkerData.map(marker => ({
//                 ...marker,
//                 latitude: parseFloat(marker.latitude),
//                 longitude: parseFloat(marker.longitude),
//               }));

//               // Update the markers state
//               setMarkers(prevMarkers => [...prevMarkers, ...newMarkers]);

//               // Update the region to focus on the latest marker
//               if (newMarkers.length > 0) {
//                 setRegion({
//                   ...region,
//                   latitude: newMarkers[0].latitude,
//                   longitude: newMarkers[0].longitude,
//                 });
//               }
//               setLoading(false);
//             })
//             .catch(error => {
//               console.error('Error fetching new marker data:', error);
//               setLoading(false);
//             });
//         })
//         .catch(error => {
//           console.error('Error posting location data:', error);
//           setLoading(false);
//         });
//     });
//   };

//   return (
//     <>
//       <Header header="Geo Location Live" navigation={navigation} />
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={styles.container}>
//           <MapView
//             style={styles.map}
//             region={region}
//             onRegionChangeComplete={region => setRegion(region)}>
//             {markers.map((marker, index) => (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: marker.latitude,
//                   longitude: marker.longitude,
//                 }}
//                 pinColor={index === markers.length - 1 ? 'blue' : 'red'}
//                 title={`${marker.created_date.split('T')[0]} ${
//                   marker.created_date.split('T')[1].split('.')[0]
//                 }`}
//                 description={`Place: ${place}`} // Display place name here
                
//               />
//             ))}
//             <Polyline
//               coordinates={markers.map(marker => ({
//                 latitude: marker.latitude,
//                 longitude: marker.longitude,
//               }))}
//               strokeColor="blue"
//               lineDashPattern={[10, 5]} // Customize the polyline dash pattern
//               strokeWidth={6}
//             />
//           </MapView>
//           {loading && (
//             <View style={styles.loading}>
//               <ActivityIndicator size="large" color="#0000ff" />
//             </View>
//           )}
//           <Button
//             title="Start Live Tracking"
//             color="red"
//             onPress={handleLiveLocation}
//           />
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   loading: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -25 }, { translateY: -25 }],
//   },
// });

// export default App;













































import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, ActivityIndicator, SafeAreaView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/header';
import { liveApi } from '../../constants/server_api';

const App = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;

  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState({
    latitude: 23.8041, // Default latitude
    longitude: 90.4152, // Default longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(false);

  // Function to fetch place name based on coordinates
  const fetchPlaceName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBl2KMc9LbMRujisdxzC4mgcRR10P7mvHw`,
      );
      const data = await response.json();
      if (data.status === 'OK') {
        const placeName = data.results[0]?.formatted_address || 'Unknown place';
        return placeName;
      } else {
        throw new Error('Unable to fetch place name');
      }
    } catch (error) {
      console.error('Error fetching place name:', error);
      return 'Unknown place';
    }
  };

  // Function to handle live location updates
  const handleLiveLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(async (info) => {
      const { latitude, longitude } = info.coords;
      const placeName = await fetchPlaceName(latitude, longitude);

      const data = {
        user_id: id,
        latitude,
        longitude,
      };

      // Make a POST request to store location data
      fetch(`${liveApi}/geo_location/geo_location_create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => {
          // Fetch the newly inserted markers
          fetch(
            `${liveApi}/geo_location/geo_location_marker_live_list/${id}`,
          )
            .then(response => response.json())
            .then(async (newMarkerData) => {
              // Convert latitude and longitude from strings to numbers
              const newMarkers = await Promise.all(newMarkerData.map(async (marker) => {
                const placeName = await fetchPlaceName(parseFloat(marker.latitude), parseFloat(marker.longitude));
                return {
                  ...marker,
                  latitude: parseFloat(marker.latitude),
                  longitude: parseFloat(marker.longitude),
                  placeName: placeName,
                };
              }));

              // Update the markers state
              setMarkers(prevMarkers => [...prevMarkers, ...newMarkers]);

              // Update the region to focus on the latest marker
              if (newMarkers.length > 0) {
                setRegion({
                  ...region,
                  latitude: newMarkers[0].latitude,
                  longitude: newMarkers[0].longitude,
                });
              }
              setLoading(false);
            })
            .catch(error => {
              console.error('Error fetching new marker data:', error);
              setLoading(false);
            });
        })
        .catch(error => {
          console.error('Error posting location data:', error);
          setLoading(false);
        });
    });
  };

  return (
    <>
      <Header header="Geo Location Live" navigation={navigation} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}>
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                pinColor={index === markers.length - 1 ? 'blue' : 'red'}
                title={`${marker.created_date.split('T')[0]} ${
                  marker.created_date.split('T')[1].split('.')[0]
                }`}
                description={`Place: ${marker.placeName}`} // Display place name here
              />
            ))}
            <Polyline
              coordinates={markers.map(marker => ({
                latitude: marker.latitude,
                longitude: marker.longitude,
              }))}
              strokeColor="blue"
              lineDashPattern={[10, 5]} // Customize the polyline dash pattern
              strokeWidth={6}
            />
          </MapView>
          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          <Button
            title="Start Live Tracking"
            color="red"
            onPress={handleLiveLocation}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default App;



