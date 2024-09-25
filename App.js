import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Splashlogos } from "./AppIcons/index";
import Constants from "expo-constants";
import HomeScreen from "./components/pages/HomeScreen";
import GeneralProducts from "./components/pages/GeneralProducts";
import Cart from "./components/pages/Cart";
import { Ionicons } from "@expo/vector-icons";
import RunningUpdates from "./RunningUpdates";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create StackNavigator

const HeaderLogo = () => {
  const [logo, setLogo] = React.useState(null);
  const navigation = useNavigation();

  React.useEffect(() => {
    setLogo(Constants?.expoConfig?.slug);
  }, [Constants?.expoConfig?.slug]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Products");
      }}
      style={styles.header}
    >
      <Image
        source={Splashlogos[logo]}
        style={{
          width: 100, // Adjusted size
          height: 100,
          resizeMode: "cover",
          borderRadius: 1000,
        }}
      />
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "list" : "list-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={GeneralProducts} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <RunningUpdates />

      <NavigationContainer>
        <HeaderLogo />

        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingTop: 30,
  },
};
