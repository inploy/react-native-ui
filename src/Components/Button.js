import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#0eb32c",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
