import React from "react";
import {
  TextInput,
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import TextComp from "./TextComp";
import { Icon } from "@rneui/themed";
import { colors } from "../styles/base";

export default function GetNotified() {
  const [msg, setMsg] = React.useState("Your email address has been recieved");
  const [clicked, setClicked] = React.useState(false);

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
          title={`Get Notified \nWhen we Launch`}
          family={"InterBold"}
          size={28}
          color={"black"}
          textAlign={"center"}
        />
      </View>

      <View
        style={{
          width: "100%",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <TextInput
            style={styles.input}
            //   onChangeText={onChangeNumber}
            //   value={number}

            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button}>
            <TextComp
              title="Notify Me"
              color="white"
              size={16}
              family={"InterMedium"}
              onPressFunction={() => setClicked(true)}
            />
          </TouchableOpacity>
        </View>
        {clicked ? (
          <TextComp
            title={msg}
            color="blue"
            size={12}
            family={"InterRegular"}
            textAlign={"center"}
            marginTop={10}
          />
        ) : (
          ""
        )}

        <TextComp
          title={"Don't worry, we won't spam you :) "}
          family={"InterRegular"}
          size={12}
          color={"black"}
          textAlign={"center"}
          marginTop={10}
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
  input: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 15,
    width: "100%",
    fontSize: 11,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    position: "absolute",
    top: 3,
    right: 3,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
