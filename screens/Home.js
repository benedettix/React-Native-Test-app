import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import Bring from "../components/Bring";
import GetNotified from "../components/GetNotified";
import Icons from "../components/Icons";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <View>
      <StatusBar style="auto" />
      <Nav />
      <Bring />
      <GetNotified />
      <Icons />
    </View>
  );
}
