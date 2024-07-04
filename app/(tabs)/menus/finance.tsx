import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native";

export default function () {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="bg-white h-[100%]">
      <SafeAreaView className="bg-white">
        <View className="flex flex-col items-center justify-center my-4 ">
          <Text className="text-xl font-bold">The Ines Finance</Text>
          <Text className="text-base my-2 text-[#515355] text-center px-2">
            As institutions as others, financial is a very important part to out
            viewed to the communities in order to run a guided and planed life
            of development.
          </Text>
          <Text className="text-base my-2 text-[#515355] text-center px-2">
            So, at Ines Ruhengeri, financial part is mostly part everyone
            willing to know about like students, staff, parents of students,
            visitors, sponsor even investors and others concerns with this very
            important sector.
          </Text>
          <Text className="text-base my-2 text-[#515355] text-center px-2">
            Ines Ruhengeri financial sector or offices and concerns to this, is
            a part which is very responsible for controlling every single money
            issue like: tuitions, salaries, wages, investment, sponsorship, and
            ins and outs of money (cashflow)
          </Text>
          <Text className="text-lg text-center font-semibold px-2">
            So, as students, parents, sponsors, the link below guide you enough
            about tuitions can help much:
          </Text>
          <Text className="mt-4 px-2">
            For better and full information about Ines academics visit Ines
            Ruhengeri platform by clicking here:
          </Text>
          <TouchableOpacity
            className="my-2"
            onPress={() => {
              handleOpenLink("https://www.ines.ac.rw/tuition-fees/");
            }}
          >
            <Text className="text-[#3287C2]">
              https://www.ines.ac.rw/tuition-fees/
            </Text>
          </TouchableOpacity>

          <View className="my-4 w-full">
            <View className="flex flex-col items-center">
              <Text className="text-lg font-bold text-[#3287C2]">
                Deputy Vice-Chancellor Administration and Finance
              </Text>
              <View>
                <Image
                  style={{
                    width: 411,
                    height: 250,
                  }}
                  resizeMode="contain"
                  source={{
                    uri: "https://www.ines.ac.rw/static/images/dvcaf.jpg",
                  }}
                />
              </View>
            </View>

            <View className="ml-6">
              <Text className="text-base text-[#3287C2] py-2">
                Deputy Vice-Chancellor
              </Text>

              <Text className="text-base">Name: KAYISHEMA Alexis</Text>
              <Text className="text-base">Email: dvcaf@ines.ac.rw</Text>
              <Text className="text-base">Phone: +250787763967</Text>
            </View>
          </View>

          <TouchableOpacity
            className="my-2"
            onPress={() => {
              handleOpenLink("https://www.ines.ac.rw");
            }}
          >
            <Text className="text-[#3287C2]">
              More accurate information visit: https://www.ines.ac.rw.
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
