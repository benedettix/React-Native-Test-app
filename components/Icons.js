// import { Icon } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TextComp from "./TextComp";

export default function Icons() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
        }}
      >
        <Icon name="facebook" color="black" style={styles.icon} />
        <Icon name="twitter" color="black" style={styles.icon} />
        <Icon name="instagram" color="black" style={styles.icon} />
        <Icon name="linkedin" color="black" style={styles.icon} />
        <Icon name="youtube" color="black" style={styles.icon} />
      </View>
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          paddingTop: 10,
        }}
      />
      <TextComp
        title={`Copyright © 2022 Soora. All rights reserved`}
        family={"InterRegular"}
        size={12}
        color={"black"}
        textAlign={"center"}
        paddingTop={20}
      />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    padding: 13,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 15,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
