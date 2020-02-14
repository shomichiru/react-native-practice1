// screens/TodoReduxExample/index

import React from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

import store from "screens/TodoReduxExample/store";
import { actionCreators } from "screens/TodoReduxExample/todoListRedux";

import List from "screens/TodoReduxExample/List";
import Input from "screens/TodoReduxExample/Input";
import Title from "screens/TodoReduxExample/Title";

export default class App extends React.Component {
  state = {};

  UNSAFE_componentWillMount() {
    const { todos } = store.getState();
    this.setState({ todos });

    this.unsubscribe = store.subscribe(() => {
      const { todos } = store.getState();
      this.setState({ todos });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTodo = text => {
    store.dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    store.dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.state;
    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="TodoRedux Example"
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
          <Title>To-Do List: Usign Redux</Title>
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
