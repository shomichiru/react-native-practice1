// screens/GesturesExample

// http://www.reactnativeexpress.com/gestures
// https://facebook.github.io/react-native/docs/panresponder.html
// In React Native, gestures are created using the PanResponder API.

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  TouchableOpacity,
  Linking
} from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      initialTop: 50,
      initialLeft: 50,
      offsetTop: 0,
      offsetLeft: 0
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }

  render() {
    const {
      dragging,
      initialTop,
      initialLeft,
      offsetTop,
      offsetLeft
    } = this.state;

    // Update style with the state of the drag thus far
    const style = {
      backgroundColor: dragging ? "skyblue" : "steelblue",
      top: initialTop + offsetTop,
      left: initialLeft + offsetLeft
    };

    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="Gestures Example"
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

        <View style={styles.container}>
          <View
            // Put all panHandlers into the View's props
            {...this.panResponder.panHandlers}
            style={[styles.square, style]}
          >
            <Text style={styles.text}>DRAG ME</Text>
          </View>
        </View>
      </Block>
    );
  }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true;
  };

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    this.setState({ dragging: true });
  };

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    // Keep track of how far we've moved in total (dx and dy)
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx
    });
  };

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const { initialTop, initialLeft } = this.state;

    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    this.setState({
      dragging: false,
      initialTop: initialTop + gestureState.dy,
      initialLeft: initialLeft + gestureState.dx,
      offsetTop: 0,
      offsetLeft: 0
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 12
  }
});
