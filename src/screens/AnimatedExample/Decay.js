// decay(value, {velocity, deceleration = 0.997}) - decay the value to 0, provided an initial velocity

import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";

// Wrap a component to make it animatable
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export default class Decay extends Component {
  state = { height: new Animated.Value(100) };

  startAnimation = () => {
    const { height } = this.state;

    // Reset the value if needed
    height.setValue(100);

    // Start a decay animation
    Animated.decay(height, { velocity: 1.0, deceleration: 0.99 }).start();
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
        <Text style={styles.text}>Tap Me : Decay</Text>
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
