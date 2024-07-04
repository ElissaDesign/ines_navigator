import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DataTable } from "react-native-paper";
import { db } from "../../../dbConnection";

export default function () {
  const CollectionRef = collection(db, "administration");
  const [administration, setAdministration] = useState([]);

  const positions = [
    {
      number: "01",
      name: "Dr. MAZARATI Jean Baptiste",
      position: "Chairperson",
    },
    {
      number: "02",
      name: "Dr. MUKAZAYIRE Marie Jeanne",
      position: "Vice Chairperson",
    },
    {
      number: "03",
      name: "Dr. MUKAZAYIRE Marie Jeanne",
      position: "Vice Chairperson",
    },
  ];

  useEffect(() => {
    const getAdministration = async () => {
      const data = await getDocs(CollectionRef);
      const Data = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAdministration(Data);
    };

    getAdministration();

    const interval = setInterval(getAdministration, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="bg-white h-[100%]">
      <SafeAreaView className="bg-white">
        <View className="w-[95%] mx-auto mt-4">
          <Text className="text-xl font-bold">The Ines Administration</Text>
          <Text className="text-base my-2 text-[#515355] text-center px-2">
            The Ines Administration is a governing part of university of Ines
            Ruhengeri that is the governing of the Ines community lifestyle, so
            that, it is responsible for governing and make plan, operations,
            surveys its implementation of activities in the daily life of the
            Ines Ruhengeri and its subsidiaries. Lastly its decisions takers for
            whole campus layerly sometimes depends of self- responsibilities or
            position.
          </Text>
          <Text className="text-lg text-center font-bold">
            Below there is administrative positions members and their
            identification in them honors:
          </Text>
          <Text className="text-base text-center font-semibold my-2">
            Ines leader is called Vice chancellor it is position name or title
            name
          </Text>
          {/*  */}
          {administration && administration.length == 0 ? (
            <Text className="mt-8 text-center">
              No Administrations, coming soon
            </Text>
          ) : (
            <View className="mt-4">
              {administration.map((data) => {
                return (
                  <View key={data.id} className="my-4 w-full">
                    <View className="flex flex-col items-center">
                      <Text className="text-lg font-bold text-[#3287C2]">
                        {data.header}
                      </Text>
                      <View>
                        <Image
                          style={{
                            width: 411,
                            height: 250,
                          }}
                          resizeMode="contain"
                          source={{ uri: data?.fileUrl }}
                        />
                      </View>
                    </View>

                    <View className="ml-6">
                      <Text className="text-base text-[#3287C2] py-2">
                        {data.position}
                      </Text>

                      <Text className="text-base">Name: {data.name}</Text>
                      <Text className="text-base">Email: {data.email}</Text>
                      <Text className="text-base">Phone: {data.phone}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}

          {/*  */}
          <Text className="text-base text-center font-semibold my-2 px-2">
            Here also there is Ines council. There are people who committing in
            decisions making or any unusual issued even to study to specifics
            issues
          </Text>

          <Text className="text-base text-center font-semibold my-2 text-[#3287C2] px-2">
            Board of Directors made up of the following members:
          </Text>
          <View className="bg-[#F5F9FC] w-full">
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Names</DataTable.Title>
                <DataTable.Title>Position</DataTable.Title>
              </DataTable.Header>
              {positions.map((data) => {
                return (
                  <DataTable.Row key={data.number}>
                    <DataTable.Cell>{data.name}</DataTable.Cell>
                    <DataTable.Cell>{data.position}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
          </View>
          <View className="mx-2">
            <Text className="mt-4">
              For better and full information about Ines administration visit
              Ines Ruhengeri platform by clicking here:
            </Text>
            <TouchableOpacity
              className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px] px-2"
              onPress={() => {
                handleOpenLink(
                  "https://www.ines.ac.rw/office-of-vice-chanellor/"
                );
              }}
            >
              <Text className="text-[#FFF]">
                Office of The Vice Chancellor (ines.ac.rw)
              </Text>
            </TouchableOpacity>

            <Text className="mt-4">
              For better and full information about Ines staffs visit Ines
              Ruhengeri platform by clicking here:
            </Text>
            <TouchableOpacity
              className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px] px-2"
              onPress={() => {
                handleOpenLink(
                  "https://www.ines.ac.rw/academics/staff-profile/"
                );
              }}
            >
              <Text className="text-[#FFF]">Staff Profile</Text>
            </TouchableOpacity>
            <Text className="mt-4">
              For better and full information about Ines academics visit Ines
              Ruhengeri platform by clicking here:
            </Text>
            <TouchableOpacity
              className="w-full my-[4px] bg-[#3287C2] rounded-lg shadow-md py-[10px] px-2"
              onPress={() => {
                handleOpenLink("https://www.ines.ac.rw/academics/");
              }}
            >
              <Text className="text-[#FFF]">
                https://www.ines.ac.rw/academics/
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
