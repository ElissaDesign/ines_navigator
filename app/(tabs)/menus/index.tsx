import { SafeAreaView, StyleSheet, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { View } from "react-native";

export default function MenuScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="justify-center my-2 px-4 ">
        <View>
          <Text className="text-center text-xl my-2 ">MenuScreen</Text>

          <Link
            href="/menus/administration"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Administration
            </Text>
          </Link>
          <Link
            href="/menus/finance"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Finance
            </Text>
          </Link>
          <Link
            href="/menus/faculties"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Programs
            </Text>
          </Link>
          <Link
            href="/menus/register"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Registration
            </Text>
          </Link>
          <Link
            href="/menus/departments"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Departments
            </Text>
          </Link>
          <Link
            href="/menus/partners"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Partnership
            </Text>
          </Link>
          <Link
            href="/menus/student_union"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Student Union
            </Text>
          </Link>
          <Link
            href="/menus/ines_status"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Status
            </Text>
          </Link>
          <Link
            href="/menus/admin"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">Login</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
