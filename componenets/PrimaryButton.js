import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PrimaryButton({ text, onPress, style, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.btn, style, disabled ? { opacity: 0.5 } : {}]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    backgroundColor: "purple",
    borderRadius: 6,
    margin: 10,
    alignItems: "center",
    elevation: 6
  },
  txt: {
    color: "white",
    fontSize: 24
  }
});
