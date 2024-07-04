import React from "react";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function () {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="bg-white h-[100%]">
      <SafeAreaView className="bg-white">
        <View className="my-4 px-2">
          <Text className="text-xl font-bold text-center">
            Ines Registration
          </Text>
          <Text className="text-base my-2 text-[#515355] text-center">
            This is the part which give fast help to every one who wants to
            attend the courses provides by University of INES Ruhengeri in
            different departments according to the will of selfly
          </Text>
          <Text className="text-base my-2 text-[#515355] text-center">
            So below there is the different ways given to the different parties
            for RWANDAN and INTERNATIONAL students in different departments and
            levels
          </Text>
          <Text className="text-base my-2 text-[#515355] text-center">
            You will se also the requirements needed for program to attend.
          </Text>
          <Text className="font-semibold text-base text-center">
            Here at Ines, you have to correct the needed information in order to
            attend registration form:
          </Text>
          <View className="flex flex-row items-center my-4">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Your CV information (names, ages, status, dates of birth and high
              school attendance and etc).
            </Text>
          </View>
          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Your soft-hardcopy of ID or PASSPORT to the international
              students.
            </Text>
          </View>
          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">Your Soft-hardcopy of diploma.</Text>
          </View>
          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Your soft-photo passport to attach on your profile image to print
              on your student Card.
            </Text>
          </View>

          <View className="flex flex-row items-center my-4">
            <Text className="ml-2 font-bold text-lg">Note:</Text>
          </View>

          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              you apply online through Ines Ruhengeri platform/ digital campus.
              Click here:
            </Text>
          </View>
          <TouchableOpacity
            className="mx-2"
            onPress={() => {
              handleOpenLink("https://digitalcampus.ines.ac.rw/");
            }}
          >
            <Text className="text-[#3287C2]">DIGITAL CAMPUS (ines.ac.rw)</Text>
          </TouchableOpacity>

          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Then after submit, pay the registration fees
            </Text>
          </View>
          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Head to registration office to continue other processes where they
              check if you fulfill the requirements needed by program you are
              wanting or interested.
            </Text>
          </View>
          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Also in registration office, there is people to assists you for
              all about your registration issues.
            </Text>
          </View>
          <View className="flex flex-row items-center my-4">
            <Text className="ml-2  text-base">
              So, below there is some questions mostly asked to the registration
              staff but not concerned Like:
            </Text>
          </View>

          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Program entry requirements. Courses related to program you want,
              aggregate needed and etc.
            </Text>
          </View>
          <TouchableOpacity
            className="mx-2"
            onPress={() => {
              handleOpenLink(
                "https://www.ines.ac.rw/program-entry-requirements"
              );
            }}
          >
            <Text className="text-[#3287C2]">
              Click here: Program entry requirements (ines.ac.rw)
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row items-center my-2">
            <Icon name="list-circle-outline" size={15} color="#515355" />
            <Text className="ml-2">
              Fees required to be paid for each program, time and them
              instruments while sponsored or privately.
            </Text>
          </View>
          <TouchableOpacity
            className="mx-2"
            onPress={() => {
              handleOpenLink("https://www.ines.ac.rw/tuition-fees/");
            }}
          >
            <Text className="text-[#3287C2]">
              Click here: https://www.ines.ac.rw/tuition-fees/
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
