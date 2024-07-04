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
//   const CollectionRef = collection(db, "news");

//   const [heading, setHeading] = useState("");
//   const [text1, setText1] = useState("");
//   const [text2, setText2] = useState("");
//   const [imageDescr, setImageDescr] = useState("");
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
//     if (heading && heading.length > 0 && fileUrl && fileUrl.length > 0) {
//       setIsLoading(true);

//       const data = {
//         heading,
//         fileUrl,
//         text1,
//         text2,
//         imageDescr,
//       };

//       try {
//         const docRef = await addDoc(CollectionRef, data);
//         console.log("Submitted:", docRef.id);
//         setIsLoading(false);
//         navigation.navigate("News");
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
//               <Text className="text-gray-700 text-base mb-2">Heading:</Text>
//               <TextInput
//                 onChangeText={(text) => setHeading(text)}
//                 value={heading}
//                 multiline={true}
//                 numberOfLines={2}
//                 placeholder="Enter heading..."
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
//               <Text className="text-gray-700 text-base mb-2">
//                 Image Description:
//               </Text>
//               <TextInput
//                 onChangeText={(text) => setImageDescr(text)}
//                 value={imageDescr}
//                 placeholder="Enter image desc..."
//                 className="border border-[#3287C2] rounded-md p-2"
//               />
//             </View>
//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">Paragraph 1:</Text>
//               <TextInput
//                 onChangeText={(text) => setText1(text)}
//                 value={text1}
//                 multiline={true}
//                 numberOfLines={4}
//                 placeholder="Enter paragraph 1..."
//                 className="border border-[#3287C2] rounded-md p-2"
//               />
//             </View>
//             <View className="mt-4">
//               <Text className="text-gray-700 text-base mb-2">Paragraph 2:</Text>
//               <TextInput
//                 onChangeText={(text) => setText2(text)}
//                 value={text2}
//                 multiline={true}
//                 numberOfLines={4}
//                 placeholder="Enter paragraph 2..."
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
