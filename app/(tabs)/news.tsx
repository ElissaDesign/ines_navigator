import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { db } from "../../dbConnection";

export default function NewsTabScreen() {
  const CollectionRef = collection(db, "news");
  const [news, setNews] = useState([]);
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  useEffect(() => {
    const getNews = async () => {
      const data = await getDocs(CollectionRef);
      const Data = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNews(Data);
    };

    getNews();

    const interval = setInterval(getNews, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ScrollView className="w-full bg-white text-gray-900 ">
      <View className="flex flex-col items-center justify-center">
        <Text className="font-bold text-3xl my-4 text-black">
          Trending news
        </Text>
      </View>
      <View className="flex flex-col items-center">
        {news.map((newsItem, index) => (
          <View key={index} className="my-4">
            <Card className="bg-white text-black">
              <Card.Content>
                <Text className="text-xl font-bold my-2 text-black">
                  {newsItem?.heading}
                </Text>
                <Text
                  variant="bodyMedium"
                  className="text-black/80 font-medium"
                >
                  {newsItem?.text1}
                </Text>
              </Card.Content>
              <Card.Cover
                source={{ uri: newsItem?.fileUrl }}
                className="h-[300px] rounded-none"
              />
              <Text className="text-base text-gray-900  text-center px-2 italic"></Text>
              <Card.Content>
                <Text className="text-base my-1 text-black  text-center px-2 italic">
                  {newsItem?.imageDescr}
                </Text>
                <Text
                  variant="bodyMedium"
                  className="text-black/80 font-medium"
                >
                  {newsItem?.text2}
                </Text>
              </Card.Content>
            </Card>
          </View>
        ))}
      </View>
    </ScrollView>
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
