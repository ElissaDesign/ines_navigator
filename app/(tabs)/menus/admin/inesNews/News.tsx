// import { useNavigation } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import {
//   KeyboardAvoidingView,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// import {
//   collection,
//   deleteDoc,
//   getDocs,
//   query,
//   where,
// } from "firebase/firestore";
// import { db } from "../../../../../dbConnection";
// export default function () {
//   const CollectionRef = collection(db, "news");
//   const navigation = useNavigation();

//   const [administration, setAdministration] = useState([]);

//   const [isLoading, setIsLoading] = useState(false);
//   const [isDeletingLoading, setIsDeletingLoading] = useState(false);

//   const deleteDocsByQuery = async (heading) => {
//     console.log(heading);
//     ///

//     setAdministration((prevAdministration) =>
//       prevAdministration.map((data) =>
//         data.heading === heading ? { ...data, deleting: true } : data
//       )
//     );

//     setIsDeletingLoading(true);

//     const queryRef = query(
//       collection(db, "news"),
//       where("heading", "==", heading)
//     );

//     try {
//       const querySnapshot = await getDocs(queryRef);

//       if (querySnapshot.empty) {
//         console.log("No matching documents found.");
//         return;
//       }

//       querySnapshot.forEach(async (doc) => {
//         try {
//           await deleteDoc(doc.ref);
//           console.log("Document deleted:", doc.id);
//           alert("done");
//         } catch (error) {
//           console.error("Error deleting document:", doc.id, error);
//         }
//       });
//     } catch (error) {
//       console.error("Error retrieving documents:", error);
//     }

//     setAdministration((prevAdministration) =>
//       prevAdministration.map((data) =>
//         data.heading === heading ? { ...data, deleting: false } : data
//       )
//     );
//     setIsDeletingLoading(false);
//   };

//   useEffect(() => {
//     const getAdministration = async () => {
//       const data = await getDocs(CollectionRef);
//       const Data = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setAdministration(Data);
//     };

//     getAdministration();

//     const interval = setInterval(getAdministration, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <KeyboardAvoidingView>
//       <ScrollView className="bg-white h-[100%]">
//         <SafeAreaView className="bg-white max-h-full">
//           <View className="p-4 ">
//             <View className=" w-[60%] bg-[#E5F0F7] pl-4 mx-auto flex flex-row items-center justify-between">
//               <Text className="text-base"> News</Text>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate("Add News")}
//                 className="px-4 py-2 bg-[#3287C2] rounded"
//               >
//                 <Text className="text-white text-base">Add</Text>
//               </TouchableOpacity>
//             </View>

//             {administration && administration.length == 0 ? (
//               <Text className="mt-8 text-center">
//                 No News available, Add them
//               </Text>
//             ) : (
//               <View className="mt-8">
//                 {administration.map((data) => {
//                   return (
//                     <View
//                       key={data.heading}
//                       className="mt-4 bg-[#E5F0F7] border border-[#3287C2]  w-full p-4 rounded shadow-md"
//                     >
//                       <View className="">
//                         <Text className="text-lg font-semibold text-gray-800">
//                           News Title: {data.heading}
//                         </Text>
//                       </View>

//                       <TouchableOpacity
//                         className="bg-[#3287C2] w-20 flex flex-row items-center rounded justify-between px-2 "
//                         onPress={() => {
//                           deleteDocsByQuery(data.heading);
//                         }}
//                       >
//                         <Text className="text-base font-medium text-white">
//                           {data.deleting ? "Deleting" : "Delete"}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   );
//                 })}
//               </View>
//             )}
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
