// screens/TodoStateExample/index

// http://www.reactnativeexpress.com/data_component_state
// 2020-02-05 18:38:26 by Jace Park

import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

import List from "screens/TodoStateExample/List";
import Input from "screens/TodoStateExample/Input";
import Title from "screens/TodoStateExample/Title";

export default class App extends Component {
  state = {
    todos: ["Click to remove", "Learn React Native", "Write Code", "Ship App"]
  };

  onAddTodo = text => {
    const { todos } = this.state;

    this.setState({
      todos: [text, ...todos]
    });
  };

  onRemoveTodo = index => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index)
    });
  };

  render() {
    const { todos } = this.state;
    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="TodoState Example"
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
          <Title>To-Do List: Using State Only</Title>
          <Input
            placeholder={"Type a todo, then hit enter!"}
            onSubmitEditing={this.onAddTodo}
          />
          <List list={todos} onPressItem={this.onRemoveTodo} />
        </View>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});
