import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator, Image, Dimensions } from "react-native";

import Constants from "expo-constants";
import { Splashlogos } from "./AppIcons/index";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const AppLoading = (props) => {
  const [logo, setlogo] = useState(null);

  useEffect(() => {
    setlogo(Constants?.expoConfig?.slug);
  }, []);

  return (
    <View
      style={[
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: screenWidth,
          display: "flex",
        },
      ]}
    >
      <View
        style={{ width: screenWidth, height: "100%", backgroundColor: "white" }}
      >
        {/* <View style={[generalstyles.allcentered, { width: '100%', height: '100%', backgroundColor: Constants?.manifest?.splash?.backgroundColor, position: 'absolute', top: 0, left: 0 }]}> */}
        <View
          style={[
            {
              width: "100%",
              height: "100%",
              backgroundColor: Constants?.expoConfig?.splash?.backgroundColor,
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          {logo != null && (
            <>
              <Image
                source={Splashlogos[logo]}
                style={{
                  resizeMode: "contain",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
            </>
          )}

          <View
            style={{
              position: "absolute",
              bottom: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="#ccc" />
            <Text>V2i.0.1</Text>
            <Text>Updates..</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppLoading;
