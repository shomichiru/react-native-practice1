// screens/ReduxSimpleExample/index

// http://www.reactnativeexpress.com/redux
// http://redux.js.org/

// Minimal Example
import React from "react";
import { createStore } from "redux";
import { View, TouchableOpacity, Linking } from "react-native";
import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";
// Define action types
const types = {
  INCREMENT: "INCREMENT"
};

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return { count: state.count + 1 };
  }
  return state;
};

// Define the initial state of our store
const initialState = { count: 0 };

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState);

/// We're done! Redux is all set up. Here's how we can use it:

// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({ type: types.INCREMENT });
store.dispatch({ type: types.INCREMENT });
store.dispatch({ type: types.INCREMENT });

// Calling `store.getState()` returns our state object
export default class App extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block safe flex>
        <NavBar
          title="ReduxSimple Example"
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

        <Text style={{ fontSize: 100 }}>{store.getState().count}</Text>
      </Block>
    );
  }
}
