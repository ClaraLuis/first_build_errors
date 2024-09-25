import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install this package for icons
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import appConfig from "../../app.json";
import { data } from "../../temp";
import { useNavigation } from "@react-navigation/native";

const ProductInfoModal = ({ visible, onClose, item }) => {
  const navigation = useNavigation();

  const templateType = appConfig.expo.extra.te;

  const selectedTemplate = data.templates.find(
    (template) => template?.type === templateType
  );

  const callToAction = selectedTemplate?.callToAction;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue > 0) {
      setQuantity(newValue);
    }
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      // Retrieve existing cart items from AsyncStorage
      const cartData = await AsyncStorage.getItem("cart");
      const cartItems = cartData ? JSON.parse(cartData) : [];

      // Check if item is already in the cart
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        cartItems[existingItemIndex].count += quantity;
      } else {
        // Add new item to the cart
        cartItems.push({ ...item, count: quantity });
      }

      // Save updated cart back to AsyncStorage
      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
      navigation.navigate("Cart");

      // Alert.alert("Success", `Added ${quantity} ${item.title_en} to cart.`);
      onClose(); // Close the modal after adding to cart
    } catch (error) {
      Alert.alert("Error", "Failed to add item to cart");
      console.error(error);
    }
  };

  return (
    <Modal
      transparent={false}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={30} color="black" />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity onPress={onClose}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.title_en}</Text>
            <Text style={styles.price}>{item.sale_price} EGP</Text>
            {item.sale_price && (
              <Text style={styles.salePrice}>{item.price} EGP</Text>
            )}
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={decrementQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.quantityInput}
                keyboardType="numeric"
                value={quantity.toString()}
                onChangeText={handleQuantityChange}
              />
              <TouchableOpacity
                onPress={incrementQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleAddToCart}
              style={styles.addToCartButton}
            >
              <Text style={styles.addToCartButtonText}>{callToAction}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 80,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  salePrice: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FF6347",
    marginTop: 5,
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#f0f0f0",
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  quantityInput: {
    width: 60,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  addToCartButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
});

export default ProductInfoModal;
