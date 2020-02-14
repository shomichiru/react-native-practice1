// timing(value, {toValue, duration = 500, delay = 0, easing = Easing.inOut(Easing.ease)})

import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";

// Wrap a component to make it animatable
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export default class Timing extends Component {
  state = { height: new Animated.Value(100) };

  startAnimation = () => {
    const { height } = this.state;

    // Reset the value if needed
    height.setValue(100);

    // Start a decay animation
    Animated.timing(height, { toValue: 150, duration: 500, delay: 0 }).start();
  };

  componentDidMount() {
    this.startAnimation();
  }

  render() {
    const { height } = this.state;

    return (
      <AnimatedTouchableOpacity
        onPress={this.startAnimation}
        style={[styles.button, { height }]}
      >
        <Text style={styles.text}>Tap Me : Timing</Text>
      </AnimatedTouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  text: {
    color: "white",
    fontSize: 42
  }
});
