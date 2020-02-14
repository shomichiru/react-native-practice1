// screens/StackNavigatorExample/App
// https://www.wakuwakubank.com/posts/706-react-native-navigation/

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "screens/StackNavigatorExample/DetailsScreen";
import HomeScreen from "screens/StackNavigatorExample/HomeScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Home Screen"
      }
    },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
