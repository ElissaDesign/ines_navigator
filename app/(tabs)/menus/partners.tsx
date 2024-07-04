import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Linking,
} from "react-native";
import { db } from "../../../dbConnection";
import { collection, getDocs } from "firebase/firestore";
import { TouchableOpacity } from "react-native";

export default function () {
  const CollectionRef = collection(db, "inesStatus");
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
          <Text className="text-xl font-bold text-center">INES-STATUS</Text>

          {administration && administration.length == 0 ? (
            <Text className="mt-8 text-center">
              No Administrations, coming soon
            </Text>
          ) : (
            <View className="mt-4">
              {administration.map((data) => {
                return (
                  <View key={data.fileUrl} className="my-4 w-full">
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
                  </View>
                );
              })}
            </View>
          )}

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
