// screens/SectionListExample/index

// http://www.reactnativeexpress.com/sectionlist

import React, { Component } from "react";
import {
  SectionList,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

const sections = [
  // Homogenous Row Example
  {
    id: 0,
    title: "Basic Components",
    data: [
      { id: 0, text: "View" },
      { id: 1, text: "Text" },
      { id: 2, text: "Image" },
      { id: 3, text: "Movie" }
    ]
  },
  {
    id: 1,
    title: "List Components",
    data: [
      { id: 3, text: "ScrollView" },
      { id: 4, text: "ListView" }
    ]
  },
  // Heterogenous Row Example
  {
    id: 3,
    title: "List Components2",
    data: [
      { id: 3, text: "ScrollView" },
      { id: 4, text: "ListView" }
    ],
    renderItem: ({ item }) => {
      return <Text style={styles.rowDark}>{item.text}</Text>;
    }
  }
];

const extractKey = ({ id }) => id;

export default class App extends Component {
  renderItem = ({ item }) => {
    return <Text style={styles.row}>{item.text}</Text>;
  };

  renderSectionHeader = ({ section }) => {
    return <Text style={styles.header}>{section.title}</Text>;
  };

  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex>
        <NavBar
          title="SectionList Example"
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

        <SectionList
          style={styles.container}
          sections={sections}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={extractKey}
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
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "steelblue",
    color: "white",
    fontWeight: "bold"
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "steelblue"
  }
});
