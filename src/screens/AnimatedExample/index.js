// screens/AnimatedExample/index.js

// http://www.reactnativeexpress.com/animated

import React, { Component } from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";

import Spring from "screens/AnimatedExample/Spring";
import Decay from "screens/AnimatedExample/Decay";
import Timing from "screens/AnimatedExample/Timing";
import theme from "constants/theme";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="Animated Example"
          right={
            <Button
              onlyIcon
              icon="heart"
              iconFamily="font-awesome"
              iconSize={theme.SIZES.BASE}
              iconColor={theme.COLORS.ICON}
              color="transparent"
              onPress={() => Linking.openURL("https://www.jacepark.com")}
            />
          }
          left={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          }
          style={
            Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
          }
        />
        <View>
          <Timing />
          <Decay />
          <Spring />
        </View>
      </Block>
    );
  }
}

export default App;
