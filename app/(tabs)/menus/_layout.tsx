import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          headerTintColor: "#3287C2",
          headerStyle: {
            backgroundColor: "#3287C2",
          },
        }}
      />
    </Stack>
  );
}
