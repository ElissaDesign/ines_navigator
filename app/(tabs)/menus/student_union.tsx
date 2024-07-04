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
import { db } from "../../../dbConnection";

export default function () {
  const CollectionRef = collection(db, "studentUnion");
  const [administration, setAdministration] = useState([]);

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
          <Text className="text-xl font-bold text-center">
            INES-SU (student union)
          </Text>
          <Text className="text-base my-2 text-[#515355] px-2">
            Every student come to study in university of Ines Ruhengeri, is
            automatically belong to our family called students union.
            {"\n"}
            {"\n"}Students’ union is a family of every student at Ines from
            every department and options, associations, different believers,
            locally or international students, and different shifts (day or
            weekend programs). The only condition to be in this union is to be a
            student of INES Ruhengeri {"\n"}
            {"\n"} So, because it is big number, that why we vote every year
            some from us who have will and able to sacrifice in behalf of other
            students to look for our living styles. It’s a big committee in
            their posts as mentioned below:
          </Text>
          <Text className="text-lg text-center font-bold">
            INES-SU COMMITTEE 2023-2024
          </Text>

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
                      <Image
                        style={{
                          width: 411,
                          height: 250,
                        }}
                        resizeMode="contain"
                        source={{ uri: data?.fileUrl }}
                      />
                    </View>

                    <View className="ml-6">
                      <Text className="font-semibold text-base mt-2">
                        Name: {data.name}
                      </Text>

                      <Text className="text-base text-[#3287C2] py-2">
                        Post: {data.position}
                      </Text>
                      <Text className="text-base">Phone: {data.phone}</Text>
                      <Text className="text-base">
                        Department: {data.department}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}

          {/*  */}
          <Text className="text-base my-2 px-2">
            Them responsibilities are to stand in behalf of all students to the
            high administrative, speak for students in their daily life issues
            in all matters. issues
          </Text>

          <TouchableOpacity
            className="my-2"
            onPress={() => {
              handleOpenLink("https://www.ines.ac.rw/");
            }}
          >
            <Text className="text-[#3287C2]">
              Extract more click here (www.Ines.ac.rw)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
