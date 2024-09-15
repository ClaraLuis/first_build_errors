import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import appConfig from "../../app.json";
import { data } from "../../temp";
import BackgroundImage from "./BackgroundImage";
import Carousel from "./Carousel";
import ProductShowcase from "./ProductShowcase";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const HomeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const templateType = appConfig.expo.extra.te;

  const selectedTemplate = data.templates.find(
    (template) => template?.type === templateType
  );

  const images = selectedTemplate?.slideShow;
  const background = selectedTemplate?.background;
  const productsTop = selectedTemplate?.products.slice(0, 3);
  const productsBottom = selectedTemplate?.products.slice(3);
  const collections = selectedTemplate?.collections;

  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100, backgroundColor: "white" }}
      >
        <ProductShowcase items={collections} />
        <Carousel images={images} />
        <ProductShowcase items={productsTop} type="product" />
        <BackgroundImage image={background} />
        <ProductShowcase items={productsBottom} type="product" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default HomeScreen;
