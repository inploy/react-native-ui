import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";

const Footer = (props) => {
  const { total } = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>฿{total}</Text>
      </View>
      <Button title="Order" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    shadowColor: "#a3a3a3",
    shadowOffset: {
      width: 5,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  total: {
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Footer;
