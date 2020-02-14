// screens/FlexboxExample
// http://www.reactnativeexpress.com/flexbox

import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";

import Toggle from "screens/FlexboxExample/Toggle";
import theme from "constants/theme";

export default class App extends Component {
  state = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  };

  render() {
    const { flexDirection, alignItems, justifyContent } = this.state;
    const layoutStyle = { flexDirection, justifyContent, alignItems };

    const primaryAxis = flexDirection === "row" ? "Horizontal" : "Vertical";
    const secondaryAxis = flexDirection === "row" ? "Vertical" : "Horizontal";

    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="Flexbox Example"
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
          <Toggle
            label={"Primary axis (flexDirection)"}
            value={flexDirection}
            options={["row", "column"]}
            onChange={option => this.setState({ flexDirection: option })}
          />
          <Toggle
            label={primaryAxis + " distribution (justifyContent)"}
            value={justifyContent}
            options={[
              "flex-start",
              "center",
              "flex-end",
              "space-around",
              "space-between"
            ]}
            onChange={option => this.setState({ justifyContent: option })}
          />
          <Toggle
            label={secondaryAxis + " alignment (alignItems)"}
            value={alignItems}
            options={["flex-start", "center", "flex-end", "stretch"]}
            onChange={option => this.setState({ alignItems: option })}
          />
          <View style={[styles.layout, layoutStyle]}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
        </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 5
  },
  layout: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)"
  },
  box: {
    padding: 25,
    backgroundColor: "steelblue",
    margin: 5
  }
});
