import React, { useRef, useState } from "react";
import { Dimensions, View, FlatList, StyleSheet, Text } from "react-native";
import CardProducts from "./CardProducts";
import CardCollections from "./CardCollections";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.8; // Adjust to give it more of a carousel look
const ITEM_HEIGHT = ITEM_WIDTH * 0.75;

const ProductShowcase = ({
  items,
  type,
  slide = "horizontal",
  cardsPerRow = 1,
}) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const renderItem = ({ item }) =>
    type === "product" ? (
      <CardProducts item={item} />
    ) : (
      <CardCollections item={item} />
    );

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.carouselTitle}>
        {type === "product" ? "Featured Products" : "Exclusive Collections"}
      </Text>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={slide === "horizontal"}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true} // Snap behavior
        decelerationRate="fast"
        snapToInterval={ITEM_WIDTH + 10} // Adjust snap distance based on item width
        snapToAlignment="center"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={styles.contentContainer}
        numColumns={slide === "horizontal" ? 1 : cardsPerRow} // Only allow columns when vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
  },
  carouselTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});

export default ProductShowcase;
