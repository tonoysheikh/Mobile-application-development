import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Btn = ({ text, colorText, onPress, zero }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={zero ? styles.zeroContainer : styles.container}
    >
      <Text style={colorText ? styles.textLight : styles.textDark}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    alignItems: "center",
    justifyContent: "center",
    borderWidth : 1,
    borderColor: "#19153E",
  },
  zeroContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#19153E"
  },
  textLight: {
    fontSize: 25,
    color: "#fff"
  },
  textDark: {
    fontSize: 34,
    color: "#575757"
  }
});
export default Btn;
