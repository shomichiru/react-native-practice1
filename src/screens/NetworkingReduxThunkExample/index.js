// screens/NetworkingReduxThunkExample/index.js

// http://www.reactnativeexpress.com/networking_redux
// Large apps : Redux-saga, Middle apps: redux-thunk

import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { TouchableOpacity, Linking } from "react-native";
import { Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

// Import the reducer and create a store
import { reducer } from "screens/NetworkingReduxThunkExample/postsRedux";

// Import the App container component
import App from "screens/NetworkingReduxThunkExample/App";

// Add the thunk middleware to our store
const store = createStore(reducer, applyMiddleware(thunk));

class NetworkingReduxThunk extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Provider store={store}>
        <Block safe flex>
          <NavBar
            title="Networking ReduxThunk Example"
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

          <App />
        </Block>
      </Provider>
    );
  }
}

export default NetworkingReduxThunk;

// Pass the store into the Provider
// export default () => (
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// );
