import { Linking, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function () {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView className="bg-white h-[100%]">
      <SafeAreaView className="bg-white">
        <View className="my-4 px-2">
          <Text>Ines Departments</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
