import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function AppIndexPage() {
  return (
    <View className="flex-1 items-center justify-center bg-green-300">
      <Text className="text-2xl font-bold text-rose-500">Home</Text>
      <Link push href="/home">
        Home Page
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
