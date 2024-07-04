import React from "react";
import { Linking, SafeAreaView, ScrollView, Text, View } from "react-native";

import { TouchableOpacity } from "react-native";

export default function () {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  const postGraduates = [
    {
      number: "1•",
      name: "Microfinance",
      link: "https://www.ines.ac.rw/programs/microfinance/",
    },
    {
      number: "2•",
      name: "Taxation",
      link: "https://www.ines.ac.rw/programs/taxation/",
    },
  ];
  const underGraduates = [
    {
      number: "1•",
      name: "Civil Engineering",
      link: "https://www.ines.ac.rw/programs/civil-engineering/",
    },
    {
      number: "2•",
      name: "Biomedical Laboratory Sciences",
      link: "https://www.ines.ac.rw/programs/biomedical-laboratory-sciences/",
    },
  ];
  const shortCources = [
    {
      number: "1•",
      name: "Computer System Technology.",
      link: "https://www.ines.ac.rw/programs/computer-system-technology/",
    },
    {
      number: "2•",
      name: "Computer Applications",
      link: "https://www.ines.ac.rw/programs/computer-applications/",
    },
  ];

  return (
    <ScrollView className="bg-white h-[100%]">
      <SafeAreaView className="bg-white">
        <View className="my-4 px-2">
          <Text className="text-xl font-bold text-center">Ines Faculties</Text>

          <Text className="text-lg font-semibold my-2 text-[#3287C2] px-2">
            Our programs
          </Text>

          <View>
            <Text className="text-lg font-medium my-2 text-[#3287C2] px-2">
              Post graduate programs
            </Text>
            <View className="ml-4">
              {postGraduates.map((data) => {
                return (
                  <View key={data.name} className="flex flex-row items-center">
                    <Text className="mr-2">{data.number}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        handleOpenLink(data.link);
                      }}
                    >
                      <Text className="">{data.name}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-lg font-medium my-2 text-[#3287C2] px-2">
              Undergraduate Programs
            </Text>
            <View className="ml-4">
              {underGraduates.map((data) => {
                return (
                  <View key={data.name} className="flex flex-row items-center">
                    <Text className="mr-2">{data.number}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        handleOpenLink(data.link);
                      }}
                    >
                      <Text className="">{data.name}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-lg font-medium my-2 text-[#3287C2] px-2">
              Short courses
            </Text>
            <View className="ml-4">
              {shortCources.map((data) => {
                return (
                  <View key={data.name} className="flex flex-row items-center">
                    <Text className="mr-2">{data.number}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        handleOpenLink(data.link);
                      }}
                    >
                      <Text className="">{data.name}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>

          <TouchableOpacity
            className="my-2"
            onPress={() => {
              handleOpenLink("https://www.ines.ac.rw");
            }}
          >
            <Text className="text-[#3287C2]">
              Program entry requirements (ines.ac.rw)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="my-2"
            onPress={() => {
              handleOpenLink("https://digitalcampus.ines.ac.rw/");
            }}
          >
            <Text className="text-[#3287C2]">
              Get to application Page DIGITAL CAMPUS (ines.ac.rw)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
