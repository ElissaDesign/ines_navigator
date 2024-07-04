import { styled } from "nativewind";
import { useCallback } from "react";
import {
  Alert,
  Dimensions,
  Linking,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Card, Divider, Text } from "react-native-paper";

const StyledView = styled(View);
const StyledText = styled(Text);
export default function PdfReader() {
  const ines_structure =
    "https://firebasestorage.googleapis.com/v0/b/ines-guidance-app.appspot.com/o/inesmap.pdf?alt=media&token=ab4773f2-788d-42fe-b686-c2cbe6f722c5";
  type OpenURLButtonProps = {
    url: string;
    children: string;
    style: any;
  };

  const ines_google_earth_link =
    "https://earth.google.com/earth/d/1FM1UBmBRSlYU-y6715AJWMZyDQPaUqOm?usp=sharing";

  const OpenURLButton = ({ url, children, style }: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <Button style={style} icon="map" mode="contained" onPress={handlePress}>
        {children}
      </Button>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">Ines Map Structure</Text>
          <StyledText style={styles.text}>
            The map figure shows how ines is structured, boundaries and
            buildings, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras consectetur mattis velit at lobortis.
          </StyledText>
          <Text> </Text>
        </Card.Content>

        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.image}
        />

        <OpenURLButton url={ines_structure} style={styles.button}>
          Open Ines Map
        </OpenURLButton>

        <Divider style={styles.divider} />

        <Card.Content>
          <Text variant="titleLarge">Ines Map With Google Earth</Text>
          <StyledText style={styles.text}>
            The map figure shows how ines is structured, boundaries and
            buildings, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras consectetur mattis velit at lobortis.
          </StyledText>
          <Text> </Text>
        </Card.Content>

        {/* <Image source={ines_structure} /> */}
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={styles.image}
        />

        <OpenURLButton url={ines_google_earth_link} style={styles.button}>
          Open Google Earth URL
        </OpenURLButton>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  h: {
    marginBottom: 30,
    marginTop: 30,
    fontSize: 30,
  },
  text: {
    marginBottom: 10,
    marginTop: 3,
    fontSize: 16,
    lineHeight: 25,
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    // width: Dimensions.get("window").width,
    height: 100,
    resizeMode: "contain",
    borderRadius: 0,
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    // marginLeft: 10,
    // marginRight: 10,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
