import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ProductInfoModal from "./ProductInfoModal"; // Import the modal component

const CardProducts = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={handleOpenModal} // Open modal on press
      >
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title_en}</Text>
          <Text style={styles.price}>{item.sale_price} EGP</Text>
          {item.sale_price && (
            <Text style={styles.salePrice}>{item.price} EGP</Text>
          )}
        </View>
      </TouchableOpacity>

      <ProductInfoModal
        visible={modalVisible}
        onClose={handleCloseModal}
        item={item}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    margin: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 10,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  salePrice: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FF6347",
    marginTop: 5,
    textDecorationLine: "line-through",
  },
  iconContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
});

export default CardProducts;
