import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { colors } from ".././styles/base";
import TextComp from "./TextComp";
import ModalComp from "./ModalComp";

export default function Nav() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      {modalVisible ? (
        <ModalComp
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        ""
      )}
      <View style={styles.container}>
        <Image
          style={styles.logoImg}
          source={require(".././assets/images/logo.png")}
        />

        <TouchableOpacity style={styles.button} underlayColor="#fff">
          <TextComp
            title={"Contact us"}
            color={"white"}
            family={"InterBold"}
            onPressFunction={() => setModalVisible(true)}
          />
          <Image
            style={styles.contactImg}
            source={require(".././assets/images/contact-icon.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 17,
    paddingRight: 17,
  },
  button: {
    backgroundColor: colors.primary,
    marginLeft: 40,

    paddingTop: 10,
    paddingBottom: 10,
    padding: 10,

    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contactImg: {
    width: 10,
    height: 10,
    marginLeft: 10,
  },
  logoImg: {
    width: 77,
    height: 18,

    resizeMode: "contain",
  },
});
