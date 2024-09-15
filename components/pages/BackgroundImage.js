import React from "react";
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const BackgroundImage = ({ image, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (onPress) {
          onPress();
        } else {
          navigation.navigate("AllProducts");
        }
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default BackgroundImage;
