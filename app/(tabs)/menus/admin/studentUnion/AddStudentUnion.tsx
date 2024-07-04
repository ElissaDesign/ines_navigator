// import { useNavigation } from "@react-navigation/native";
// import * as DocumentPicker from "expo-document-picker";
// import { addDoc, collection } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { db, storage } from "../../../../../dbConnection";

// export default function () {
//   const CollectionRef = collection(db, "studentUnion");

//   const [name, setName] = useState("");
//   const [position, setPosition] = useState("");
//   const [phone, setPhone] = useState("");
//   const [department, setDepartment] = useState("");
//   const [fileName, setFileName] = useState("");
//   const [fileUrl, setFileUrl] = useState("");

//   const [isLoading, setIsLoading] = useState(false);

//   const navigation = useNavigation();

//   const handleFilePicker = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync();
//       if (result.type === "success") {
//         const response = await fetch(result.uri);

//         const blob = await response.blob();

//         const storageRef = ref(storage, result.name);

//         uploadBytes(storageRef, blob)
//           .then((snapshot) => {
//             return getDownloadURL(snapshot.ref);
//           })
//           .then((downloadURL) => {
//             console.log("File uploaded successfully!");
//             console.log("Download URL:", downloadURL);
//             setFileUrl(downloadURL);
//           })
//           .catch((error) => {
//             console.log("Error uploading file:", error);
//           });

//         setFileName(result.name);
//       }
//     } catch (error) {
//       console.log("Error picking file:", error);
//     }
//   };

//   const handleSubmit = async () => {
//     if (name && name.length > 0 && fileUrl && fileUrl.length > 0) {
//       setIsLoading(true);

//       const data = {
//         fileUrl,
//         position,
//         name,
//         department,
//         phone,
//       };

//       try {
//         const docRef = await addDoc(CollectionRef, data);
//         console.log("Submitted:", docRef.id);
//         setIsLoading(false);
//         navigation.navigate("Student Union");
//         return;
//       } catch (error) {
//         alert(error);
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <KeyboardAvoidingView>
//       <ScrollView className="bg-white h-[100%]">
//         <SafeAreaView className="bg-white max-h-full">
//           <View className="w-[95%] mx-auto">
//             <Text className="text-md text-center text-lg font-medium">
//               Add Info
//             </Text>

//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">Names:</Text>
//               <TextInput
//                 onChangeText={(text) => setName(text)}
//                 value={name}
//                 placeholder="Enter names..."
//                 className="border border-[#3287C2] rounded-md p-2"
//               />
//             </View>
//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">
//                 Upload Image: {!fileName ? "No file" : fileName}
//               </Text>

//               <TouchableOpacity
//                 onPress={handleFilePicker}
//                 className="bg-[#3287C2] rounded px-4 py-[10px]"
//               >
//                 <Text className="text-white">Select image</Text>
//               </TouchableOpacity>
//             </View>
//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">Position:</Text>
//               <TextInput
//                 onChangeText={(text) => setPosition(text)}
//                 value={position}
//                 placeholder="Enter position..."
//                 className="border border-[#3287C2] rounded-md p-2"
//               />
//             </View>
//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">Department:</Text>
//               <TextInput
//                 onChangeText={(text) => setDepartment(text)}
//                 value={department}
//                 placeholder="Enter department..."
//                 className="border border-[#3287C2] rounded-md p-2"
//               />
//             </View>
//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">Phone:</Text>
//               <TextInput
//                 onChangeText={(text) => setPhone(text)}
//                 value={phone}
//                 placeholder="Enter phone..."
//                 className="border border-[#3287C2] rounded-md p-2"
//               />
//             </View>

//             <TouchableOpacity
//               onPress={handleSubmit}
//               className="mt-6 bg-[#3287C2] px-4 py-2 rounded "
//             >
//               <Text className="text-lg font-semibold text-white text-center">
//                 {isLoading ? "Loading..." : "Post"}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
