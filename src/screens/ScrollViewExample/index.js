// screens/ScrollViewExample/index

// http://www.reactnativeexpress.com/scrollview
// Scrollable contents: ScrollView (< 30), Flatlist (> 30)
//

import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

export default class App extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="ScrollView Example"
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

        <ScrollView style={styles.container}>
          <View style={styles.boxLarge} />
          <ScrollView horizontal>
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
          </ScrollView>
          <View style={styles.boxLarge} />
          <View style={styles.boxSmall} />
          <View style={styles.boxLarge} />
          <View style={styles.boxLarge} />
          <View style={styles.boxSmall} />
          <View style={styles.boxLarge} />
          <ScrollView horizontal>
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
          </ScrollView>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "skyblue"
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: "steelblue"
  }
});
