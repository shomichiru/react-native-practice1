// screens/FlatListExample

import React, { Component } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";

import theme from "constants/theme";

const rows = [
  { id: 0, text: "View" },
  { id: 1, text: "Text" },
  { id: 2, text: "Image" },
  { id: 3, text: "ScrollView" },
  { id: 4, text: "ListView" },
  { id: 5, text: "View2" },
  { id: 6, text: "Text2" },
  { id: 7, text: "Image2" },
  { id: 8, text: "ScrollView2" },
  { id: 9, text: "ListView2" }
];

export default class App extends Component {
  renderItem = ({ item }) => {
    return (
      <Text key={item.id} style={styles.row}>
        {item.text}
      </Text>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block flex safe>
        <NavBar
          title="FlatList Example"
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
        <FlatList
          style={styles.container}
          data={rows}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()} // The value of keyExtractor must be a string
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "skyblue"
  }
});
