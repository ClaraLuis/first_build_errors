import React, { useRef, useState } from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import CardProducts from "./CardProducts"; // Import CardProducts
import appConfig from "../../app.json";
import { data } from "../../temp";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const GeneralProducts = ({ navigation }) => {
  const type = appConfig.expo.extra.te;
  const products = data.templates.find(
    (template) => template.type === type
  )?.products;

  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 100,
          backgroundColor: "white",
          //   height: "100%",
        }}
      >
        <View style={styles.container}>
          {products.map((item) => (
            <CardProducts key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default GeneralProducts;
