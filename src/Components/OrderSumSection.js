import React from "react";
import { View, StyleSheet, Text } from "react-native";

const OrderSumSection = (props) => {
  const { foodList, cost } = props;
  const FoodList = () => {
    return foodList.map((data) => (
      <View>
        <View style={styles.row}>
          <View>
            <View style={styles.quantitySection}>
              <Text style={styles.quantity}>{data.quantity}x</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={styles.name}>{data.name}</Text>
            {data?.options?.map((option) => (
              <Text>{option}</Text>
            ))}
          </View>
          <Text>{data.price}</Text>
        </View>
        <View style={styles.line}></View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>
      <FoodList />
      <View style={styles.row}>
        <Text style={styles.flex}>Total food cost</Text>
        <Text>฿{cost.foodCost}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.flex}>Delivery cost</Text>
        <Text>{cost.deliveryCost}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  flex: {
    flex: 1,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  quantitySection: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#b5b5b5",
    borderRadius: 4,
    marginRight: 20,
  },
  quantity: {
    fontSize: 14,
    color: "#326cc2",
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb",
    marginVertical: 20,
  },
});

export default OrderSumSection;
