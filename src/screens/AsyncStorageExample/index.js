// screens/AsyncStorageExample
// http://www.reactnativeexpress.com/asyncstorage
//

import React, { Component } from "react";
import { View, AsyncStorage, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

import Input from "screens/AsyncStorageExample/Input";

const STORAGE_KEY = "ASYNC_STORAGE_NAME_EXAMPLE";

export default class App extends Component {
  state = { name: "World" };

  UNSAFE_componentWillMount() {
    this.load();
  }

  load = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name !== null) {
        this.setState({ name });
      }
    } catch (e) {
      console.error("Failed to load name.");
    }
  };

  save = async name => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);

      this.setState({ name });
    } catch (e) {
      console.error("Failed to save name.");
    }
  };

  render() {
    const { name } = this.state;
    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="AsyncStorage Example"
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
          <Input
            placeholder={"Type your name, hit enter, and refresh!"}
            onSubmitEditing={this.save}
          />
          <Text style={styles.text}>Hello {name}!</Text>
        </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 30
  },
  text: {
    padding: 15,
    backgroundColor: "skyblue"
  }
});
