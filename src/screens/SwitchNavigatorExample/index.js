// screens/SwitchNavigatorExample/index
// https://www.reactnativeschool.com/complex-navigation-example-with-react-navigation

import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import SwitchTabs from "screens/SwitchNavigatorExample/SwitchTabs";

const AppNavigator = createSwitchNavigator({
  Loading: {
    screen: SwitchTabs
  },
  Auth: {
    screen: SwitchTabs
  },
  App: {
    screen: SwitchTabs
  }
});

export default createAppContainer(AppNavigator);
