import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { Clipboard } from "react-native";
import TextComp from "./TextComp";

export default function ModalComp({ modalVisible, setModalVisible }) {
  return (
    <View style={styles.centeredView}>
      <StatusBar backgroundColor="black" hidden />
      <Modal
        onPress={() => setModalVisible(!modalVisible)}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.centeredView}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Reach out to us through</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.modalEmail}>sooratheapp@gmail.com</Text>
                <View>
                  <Icon
                    onPress={() => Clipboard.setString("sooratheapp@gmail.com")}
                    name="copy"
                    color="black"
                    style={styles.icon}
                  />
                  <TextComp title={" copy"} />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100%",
  },
  modalEmail: {
    color: "blue",
    fontWeight: "semi-bold",
    marginRight: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  icon: {
    fontSize: 20,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
