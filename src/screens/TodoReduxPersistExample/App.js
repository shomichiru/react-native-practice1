// screens/TodoReduxPersistExample/

import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { actionCreators } from "screens/TodoReduxPersistExample/todoListRedux";
import List from "screens/TodoReduxPersistExample/List";
import Input from "screens/TodoReduxPersistExample/Input";
import Title from "screens/TodoReduxPersistExample/Title";

const mapStateToProps = state => ({
  todos: state.todos
});

class App extends Component {
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
        <Title>To-Do List: Using Redux Persist</Title>
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
