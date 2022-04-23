import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import OrderSumSection from "../Components/OrderSumSection";
import Footer from "../Components/Footer";

const foodList = [
  { name: "Chicken", options: ["wing", "thigh"], quantity: "1", price: "100" },
  { name: "Noodle", options: ["extra"], quantity: "2", price: "200" },
];
const mockCost = {
  foodCost: "300",
  deliveryCost: "60",
  total: "360",
};

const OrderSummary = (props) => {
  const defaultShopName = "GrabKitchen";

  useEffect(() => {
    props.navigation.setOptions({
      title: defaultShopName,
    });
  }, [props.navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scroll}>
        <OrderSumSection foodList={foodList} cost={mockCost} />
      </ScrollView>
      <View>
        <Footer total={mockCost.total} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
});

export default OrderSummary;
