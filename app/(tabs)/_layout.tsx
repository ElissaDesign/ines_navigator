import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Dimensions, Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  function LogoTitle() {
    return (
      <Image
        style={{
          width: Dimensions.get("window").width,
          height: 50,
          backgroundColor: "#FFF",
        }}
        source={require("../../assets/images/logo.png")}
        resizeMode="contain"
      />
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: () => <LogoTitle />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
        }}
      />
      <Tabs.Screen
        name="menus"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "grid" : "grid-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "map" : "map-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
