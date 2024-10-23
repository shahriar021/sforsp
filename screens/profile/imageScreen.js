import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {liveApi} from '../../constants/server_api';

import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Header from '../../components/header';
import axios from 'axios';

const ImageScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [photo, setPhoto] = useState('');
  const [id, setId] = useState(null);

  useEffect(() => {
    const getUserID = async () => {
      try {
        const userID = await AsyncStorage.getItem('userId');
        const userName = await AsyncStorage.getItem('name');
        // const login = await AsyncStorage.getItem('last_login_time');
        // console.log(userID, 'dashboard..');
        console.log(userName, 'dashboard');
        setId(userID);

        //setLastLogin(login);
      } catch (error) {
        console.error('Failed to load userID', error);
      }
    };

    getUserID();
  }, []);

  useEffect(() => {
    const Info = async () => {
      const data = await fetch(`${liveApi}/specifi_user/${id}`);
      const jsonData = await data.json();

      setPhoto(jsonData[0].photo);
      console.log(jsonData[0].photo, 'photo...');
    };

    Info();
  }, [id]);

  const localImage = selectedImage?.uri;

  const selectImageHandler = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response?.assets[0]);
        console.log(response?.assets[0], 'what is this...?');
      }
    });
  };

  const selectImageCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response?.assets[0]);
        console.log(response?.assets[0], 'what is this...?');
      }
    });
  };

  // Function to handle image upload
  const uploadImageHandler = () => {
    if (!selectedImage) {
      Alert.alert('No image selected');
      return;
    }
    console.log(id, '4545');
    const formData = new FormData();
    formData.append('originalname', {
      uri: selectedImage.uri,
      type: selectedImage.type,
      name: selectedImage.fileName,
    });

    console.log(id);

    axios
      .post(`${liveApi}/upload/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log('Upload successful:', response.data);
        Alert.alert('Upload successful!');
      })
      .catch(error => {
        console.error('Error uploading image:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        }
        Alert.alert('Error uploading image. Please try again later.');
      });
  };

  return (
    <View>
      <Header header="Image Upload" navigation={navigation} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.singleButton}
          onPress={selectImageHandler}>
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.singleButton}
          onPress={selectImageCamera}>
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
      </View>
      {
        <Image
          source={
            localImage
              ? {uri: localImage}
              : photo
              ? {uri: `${liveApi}/uploads/${photo}`}
              : require('../../assets/avatar-15-32.png')
          }
          style={{
            width: 200,
            height: 200,
            marginBottom: 20,
            borderRadius: 200,
            marginTop: 5,
            alignSelf: 'center',
          }}
        />
      }
      <View style={styles.buttonsContainer}>
        {/* <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageHandler}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.singleButton}
            onPress={selectImageCamera}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.singleButton}
          onPress={uploadImageHandler}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleButton: {
    backgroundColor: '#9672FB',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ImageScreen;
