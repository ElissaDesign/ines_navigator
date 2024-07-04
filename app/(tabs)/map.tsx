import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import PdfReader from "@/components/PdfRead";

export default function MapTabScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={280} name="map" style={styles.headerImage} />
      }
    >
      <SafeAreaView>
        <PdfReader />
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
