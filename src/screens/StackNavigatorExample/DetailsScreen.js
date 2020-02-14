// screens/MovineBetweenScreensExample/HomeScreen

import React from "react";
import { Button, View, Text } from "react-native";

export default DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="navigation.push('Details')"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="navigation.navigate('Home')"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="navigation.goBack()" onPress={() => navigation.goBack()} />
    </View>
  );
};
