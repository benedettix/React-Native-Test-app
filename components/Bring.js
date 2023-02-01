import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import TextComp from "./TextComp";
import { Icon } from "@rneui/themed";

export default function Bring() {
  return (
    <View style={styles.container}>
      <View style={styles.font}>
        <Icon name="horizontal-rule" color="black" />

        <TextComp
          title={"Coming Soon"}
          family={"InterMedium"}
          size={12}
          color={"black"}
          textAlign={"center"}
        />
      </View>

      <View>
        <TextComp
          title={`Bringing \nMuslims Together`}
          family={"InterBold"}
          size={28}
          color={"black"}
          textAlign={"center"}
        />
      </View>

      <View style={styles.imgHolder}>
        <Image
          style={{ width: 120, resizeMode: "contain" }}
          source={require("../assets/images/google-play.png")}
        />
        <Image
          style={{ width: 120, resizeMode: "contain" }}
          source={require("../assets/images/apple-store.png")}
        />
      </View>

      <View>
        <Image
          style={{ width: 330, height: 330, resizeMode: "contain" }}
          source={require("../assets/images/landing-image-2.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    paddingTop: 70,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imgHolder: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
});
