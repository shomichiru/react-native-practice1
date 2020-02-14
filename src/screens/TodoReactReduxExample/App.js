// screens/TodoReactReduxExample/App

import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { actionCreators } from "screens/TodoReactReduxExample/todoListRedux";
import List from "screens/TodoReactReduxExample/List";
import Input from "screens/TodoReactReduxExample/Input";
import Title from "screens/TodoReactReduxExample/Title";

const mapStateToProps = state => ({
  todos: state.todos
});

class App extends React.Component {
  onAddTodo = text => {
    const { dispatch } = this.props;

    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { dispatch } = this.props;

    dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.props;

    return (
      <View>
        <Title>To-Do List: Using React Redux</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(App);
