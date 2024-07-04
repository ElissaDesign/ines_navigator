import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const MenuScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="justify-center my-2 px-4 ">
        <View>
          <Text className="text-center text-xl my-2 ">Add Information</Text>

          {/* Admin Links  */}

          <Link
            href="/menus/admin/administration"
            className="w-full my-[4px] bg-[#3287C2] hover:bg-[#3287C2]/40 rounded-lg shadow-md py-[10px] text-center"
          >
            <Text className="text-center text-base text-white">
              INES Administration
            </Text>
          </Link>

          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Finance
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Programs
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Registration
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Departments
            </Text>
          </View>
          <View className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]">
            <Text className=" text-center text-base text-white">
              INES Sponsorship
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Student Union")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Student Union
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Ines Status")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">
              INES Status
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("News")}
            className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px]"
          >
            <Text className=" text-center text-base text-white">INES News</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
