// screens/SwitchNavigatorExample/index
// https://www.reactnativeschool.com/complex-navigation-example-with-react-navigation

import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import ScrollViewExample from "screens/ScrollViewExample";
import TodoReduxExample from "screens/TodoReduxExample";
import GesturesExample from "screens/GesturesExample";
import AnimatedExample from "screens/AnimatedExample";
import FlexboxExample from "screens/FlexboxExample";

const HomeStack = createStackNavigator({
  Home: {
    screen: ScrollViewExample,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  Details: {
    screen: TodoReduxExample,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: "Home"
    }
  },
  Feed: {
    screen: GesturesExample,
    navigationOptions: {
      tabBarLabel: "Feed"
    }
  },
  Search: {
    screen: AnimatedExample,
    navigationOptions: {
      tabBarLabel: "Search"
    }
  },
  Discover: {
    screen: FlexboxExample,
    navigationOptions: {
      tabBarLabel: "Discover"
    }
  }
});

export default createAppContainer(MainTabs);
