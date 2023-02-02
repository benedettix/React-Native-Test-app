import React from "react";
import { View, Text } from "react-native";

export default function TextComp({
  title,
  family = "InterRegular",
  size = 12,
  color = "black",
  onPressFunction,
  ...props
}) {
  return (
    <Text
      onPress={onPressFunction}
      style={{
        fontFamily: family,
        fontSize: size,
        color: color,
        ...props,
      }}
    >
      {title}
    </Text>
  );
}
