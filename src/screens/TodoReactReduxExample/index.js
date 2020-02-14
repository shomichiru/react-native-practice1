// screens/TodoReactReduxExample/index

import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Block, Button, NavBar, Icon } from "galio-framework";
import theme from "constants/theme";

// Import the App container component
import App from "screens/TodoReactReduxExample/App";

// Import the store
import store from "screens/TodoReactReduxExample/store";

class TodoReactRedux extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Provider store={store}>
        <Block safe flex>
          <NavBar
            title="TodoReactRedux Example"
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

export default TodoReactRedux;

// Pass the store into the Provider
// export default function AppWithStore() {
// 	return (
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	);
// }
