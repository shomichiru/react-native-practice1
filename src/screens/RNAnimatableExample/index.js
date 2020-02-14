// screens/RNAnimatableExample/index

// http://www.reactnativeexpress.com/react_native_animatable
// https://github.com/oblador/react-native-animatable

import React, { Component } from "react";
import {
  StyleSheet,
  Linking,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

import * as Animatable from "react-native-animatable";

const colors = ["#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F"];
const animations = [
  "fadeIn",
  "bounceOutRight",
  "rubberBand",
  "zoomOut",
  "slideInDown"
];

export default class App extends Component {
  state = { animation: animations[0] };

  nextAnimation = () => {
    const { animation } = this.state;
    const nextIndex = (animations.indexOf(animation) + 1) % animations.length;

    this.setState({ animation: animations[nextIndex] });
  };

  renderItem = (color, i) => {
    const { animation } = this.state;

    return (
      <Animatable.View
        key={i}
        animation={animation}
        delay={i * 100}
        style={[styles.button, { backgroundColor: color }]}
      >
        <Text style={styles.text}>Tap me {i}</Text>
      </Animatable.View>
    );
  };

  render() {
    const { animation } = this.state;
    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="RNAnimatable Example"
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

        <TouchableOpacity
          // use key to force a re-render when we switch animations
          key={animation}
          onPress={this.nextAnimation}
        >
          {colors.map(this.renderItem)}
        </TouchableOpacity>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 20
  }
});
