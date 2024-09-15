import React, { useRef, useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.75;

const Carousel = ({
  images,
  autoScroll = true,
  interval = 3000,
  destination = "Products",
}) => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;
    if (autoScroll && images.length > 1) {
      intervalId = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }, interval);
    }
    return () => intervalId && clearInterval(intervalId);
  }, [currentIndex, autoScroll, images.length, interval]);

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const renderItem = ({ item }) => {
    // Ensure image paths are correctly resolved
    // const imageSource = require(`${item.image}`);
    // const imageSource = `../../${item.image}`;
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate(destination)}
      >
        <Image source={item.image} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    paddingVertical: 10,
  },
});

export default Carousel;
