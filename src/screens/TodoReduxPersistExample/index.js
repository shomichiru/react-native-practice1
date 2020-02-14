// screens/TodoReduxPersistExample/index

// https://github.com/rt2zz/redux-persist
// For redux-persist v6

import React from "react";
import { View, AsyncStorage, TouchableOpacity, Linking } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { Text, Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

// Import the reducer and create a store
import { reducer } from "screens/TodoReduxPersistExample/todoListRedux";

// Import the App container component
import App from "screens/TodoReduxPersistExample/App";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

class TodoRduxPersist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Block safe flex>
            <NavBar
              title="TodoReduxPersist Example"
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
                Platform.OS === "android"
                  ? { marginTop: theme.SIZES.BASE }
                  : null
              }
            />

            <App />
          </Block>
        </PersistGate>
      </Provider>
    );
  }
}

export default TodoRduxPersist;

// Pass the store into the Provider
// export default () => (
// 	<Provider store={store}>
// 		<PersistGate loading={null} persistor={persistor}>
// 			<App />
// 		</PersistGate>
// 	</Provider>
// );
