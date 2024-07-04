import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../dbConnection";

export default function () {
  const usersCollectionRef = collection(db, "users");

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    const queryRef = query(
      usersCollectionRef,
      where("password", "==", password),
      where("email", "==", email)
    );
    if (email && email.length > 0 && password && password.length > 0) {
      setIsLoading(true);
      try {
        // Get the documents that match the query
        const querySnapshot = await getDocs(queryRef);

        if (querySnapshot.empty) {
          alert("invalid credentials");
          setIsLoading(false);
        }
        setIsLoading(false);
        querySnapshot.forEach(async (doc) => {
          console.log("Document data:", doc.data());
          const user = doc.data();
          const jsonValue = JSON.stringify(user);

          await AsyncStorage.setItem("user", jsonValue);

          if (user.role == "admin") {
            return navigation.navigate("/menus/admin");
          }
          return navigation.navigate("/menus");
        });
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView className="bg-white h-[100%]">
        <SafeAreaView className="bg-white h-screen  pt-2">
          <View className="px-4 ">
            <Text className="text-md text-center text-lg font-medium">
              Please sign in!
            </Text>
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
              <Text className="text-gray-700 text-base mb-2">Password:</Text>
              <TextInput
                onChangeText={(text) => setPass(text)}
                value={password}
                placeholder="Enter password..."
                className="border border-[#3287C2] rounded-md p-2"
              />
            </View>
            <View className="mt-4">
              <Text className="text-gray-700 text-base mb-2">
                Don't have an account?{" "}
                <Text
                  onPress={() => navigation.navigate("Register")}
                  className="text-[#3287C2] font-medium"
                >
                  Please Sign up
                </Text>{" "}
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              className="mt-6 bg-[#3287C2] px-4 py-2 rounded "
            >
              <Text className="text-lg font-semibold text-white text-center">
                {isLoading ? "Loading.." : " Sign in"}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
