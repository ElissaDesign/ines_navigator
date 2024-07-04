import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../../../dbConnection";

export default function () {
  const CollectionRef = collection(db, "administration");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [header, setHeader] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === "success") {
        const response = await fetch(result.uri);
        const blob = await response.blob();
        const storageRef = ref(storage, result.name);
        uploadBytes(storageRef, blob)
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((downloadURL) => {
            console.log("File uploaded successfully!");
            console.log("Download URL:", downloadURL);
            setFileUrl(downloadURL);
          })
          .catch((error) => {
            console.log("Error uploading file:", error);
          });
        setFileName(result.name);
      }
    } catch (error) {
      console.log("Error picking file:", error);
    }
  };

  const handleSubmit = async () => {
    if (name && name.length > 0 && fileUrl && fileUrl.length > 0) {
      setIsLoading(true);

      const data = {
        header,
        fileUrl,
        position,
        name,
        email,
        phone,
      };

      try {
        const docRef = await addDoc(CollectionRef, data);
        console.log("Submitted:", docRef.id);
        setIsLoading(false);
        // navigation.navigate("Administration");
        return;
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  };

  // here=====================

  // const [image, setImage] = useState(null);

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  return (
    <KeyboardAvoidingView>
      <ScrollView className="bg-white h-[100%]">
        <SafeAreaView className="bg-white max-h-full">
          <View className="p-4 ">
            <Text className="text-md text-center text-lg font-medium">
              Add Info
            </Text>

            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">Header:</Text>
              <TextInput
                onChangeText={(text) => setHeader(text)}
                value={header}
                placeholder="Enter heading..."
                className="border border-[#3287C2] rounded-md p-2"
              />
            </View>
            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">
                Upload file: {!fileName ? "No file" : fileName}
              </Text>

              <TouchableOpacity
                onPress={handleFilePicker}
                className="bg-[#3287C2] rounded px-4 py-[10px]"
              >
                <Text className="text-white">Select image</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">Position:</Text>
              <TextInput
                onChangeText={(text) => setPosition(text)}
                value={position}
                placeholder="Enter position..."
                className="border border-[#3287C2] rounded-md p-2"
              />
            </View>
            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">Names:</Text>
              <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                placeholder="Enter full name..."
                className="border border-[#3287C2] rounded-md p-2"
              />
            </View>
            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">Email:</Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Enter email..."
                className="border border-[#3287C2] rounded-md p-2"
              />
            </View>
            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">Phone:</Text>
              <TextInput
                onChangeText={(text) => setPhone(text)}
                value={phone}
                placeholder="Enter phone..."
                className="border border-[#3287C2] rounded-md p-2"
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              className="mt-6 bg-[#3287C2] px-4 py-2 rounded "
            >
              <Text className="text-lg font-semibold text-white text-center">
                {isLoading ? "Loading..." : "Post"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Start */}

          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} />}

          {/* End */}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
