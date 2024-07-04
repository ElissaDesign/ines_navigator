import { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function HomeScreen() {
  const [imageActive, setImageActive] = useState(0);
  const images = [
    "https://cdn.pixabay.com/photo/2023/06/18/13/40/cinquefoil-8072071_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/22/03/58/animals-8080446_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/22/14/49/dandelion-8010882_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/21/09/52/pied-flycatcher-8078925_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/20/09/47/woman-8076569_1280.jpg",
  ];

  const onchange: any = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imageActive) {
        setImageActive(slide);
      }
    }
  };
  return (
    <SafeAreaView className="h-screen bg-[#F5F9FC]">
      <View className="flex flex-row items-center justify-center my-14 ">
        <View>
          <Text className="text-2xl font-bold text-center text-black">
            Ines Guiding Assistant
          </Text>
          <Text className="text-base text-black font-normal text-center my-10">
            Hello, this is Bing. Lorem ipsum is a placeholder or dummy text used
            in typesetting and graphic design for previewing layouts12. It
            features scrambled Latin text, which emphasizes the design over
            content of the layout1. It is the standard placeholder text of the
            printing and publishing industries
          </Text>

          {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView> */}

          <View className="bg-[#DCEBF5]">
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.wrap}
            >
              {images.map((image, index) => (
                <Image
                  key={image}
                  style={{
                    width: 411,
                    height: 300,
                    marginRight: 4,
                  }}
                  resizeMode="contain"
                  source={{ uri: image }}
                />
              ))}
            </ScrollView>
            <View style={styles.wrapDot}>
              {images.map((e, index) => (
                <Text
                  key={e}
                  style={imageActive == index ? styles.dotActive : styles.dot}
                >
                  ●
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    // height: HEIGHT * 2.5,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "#BBB",
  },
});
