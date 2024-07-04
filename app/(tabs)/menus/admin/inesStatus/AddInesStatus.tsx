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
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { db, storage } from "../../../../../dbConnection";

// export default function () {
//   const CollectionRef = collection(db, "inesStatus");
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
//             alert("Uploaded");
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
//     if (fileUrl && fileUrl.length > 0) {
//       setIsLoading(true);

//       const data = {
//         fileUrl,
//       };

//       try {
//         const docRef = await addDoc(CollectionRef, data);
//         console.log("Submitted:", docRef.id);
//         setIsLoading(false);
//         navigation.navigate("Ines Status");
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
