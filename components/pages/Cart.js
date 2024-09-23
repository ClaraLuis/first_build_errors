import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const { width } = Dimensions.get("screen");

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchCartItems = useCallback(async () => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      const parsedCartItems = cartData ? JSON.parse(cartData) : [];
      setCartItems(parsedCartItems);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchCartItems();
    }, [fetchCartItems])
  );

  const handleCheckout = async () => {
    if (name.trim() === "" || address.trim() === "") {
      Alert.alert("Warning", "Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await AsyncStorage.removeItem("cart");
      setCartItems([]);
      setTimeout(() => {
        setLoading(false);
        Alert.alert("Success", "Your order has been placed successfully!", [
          {
            text: "OK",
            onPress: () =>
              navigation.navigate("Home", {
                orderNumber: Math.floor(Math.random() * 1000000),
                totalAmount: cartItems.reduce(
                  (total, item) => total + item.price * item.count,
                  0
                ),
              }),
          },
        ]);
      }, 2000);
    } catch (error) {
      console.error("Failed to clear cart", error);
      setLoading(false);
      Alert.alert("Error", "An error occurred while processing your order.");
    }
  };

  // Check if cart is empty
  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {cartItems.map((item, index) => (
        <View key={index} style={styles.itemSection}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>{item.title_en}</Text>
            <Text style={styles.itemPrice}>{item.price} EGP</Text>
            {item.sale_price && (
              <Text style={styles.itemSalePrice}>{item.sale_price} EGP</Text>
            )}
            <View style={styles.itemCount}>
              <Text style={styles.countText}>Quantity: {item.count}</Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.formSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.checkoutButtonText}>Checkout now</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  itemSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 8,
  },
  itemSalePrice: {
    fontSize: 14,
    color: "#ff5722",
    marginTop: 4,
    textDecorationLine: "line-through",
  },
  itemCount: {
    marginTop: 12,
    backgroundColor: "#e9ecef",
    padding: 8,
    borderRadius: 5,
  },
  countText: {
    fontSize: 14,
    color: "#333",
  },
  formSection: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    backgroundColor: "#f1f3f5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  checkoutButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 30,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Cart;
