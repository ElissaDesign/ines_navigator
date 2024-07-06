import React, { useState } from 'react';
import { Button, View, Image, Alert } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const UploadScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const handleImagePickerResponse = (response) => {
    if (!response.didCancel && !response.error) {
      setImageUri(response.assets[0].uri);
    }
  };

  const openImagePicker = () => {
    launchImageLibrary({}, handleImagePickerResponse);
  };

  const openCamera = () => {
    launchCamera({}, handleImagePickerResponse);
  };

  return (
    <View>
      <Button title="Select Image" onPress={openImagePicker} />
      <Button title="Open Camera" onPress={openCamera} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />}
    </View>
  );
};

export default UploadScreen;
