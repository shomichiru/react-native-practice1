// navigation/route
// DrawerNavigator

import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform
} from "react-native";
import { createAppContainer } from "react-navigation";
import { DrawerItems, createDrawerNavigator } from "react-navigation-drawer";

// screens
import FlexboxExample from "screens/FlexboxExample";
import ScrollViewExample from "screens/ScrollViewExample";
import FlatListExample from "screens/FlatListExample";
import SectionListExample from "screens/SectionListExample";
import TodoStateExample from "screens/TodoStateExample";
import ReduxSimpleExample from "screens/ReduxSimpleExample";
import TodoReduxExample from "screens/TodoReduxExample";
import TodoReactReduxExample from "screens/TodoReactReduxExample";
import AsyncStorageExample from "screens/AsyncStorageExample";
import TodoReduxPersistExample from "screens/TodoReduxPersistExample";
import NetworkingFetchExample from "screens/NetworkingFetchExample";
import NetworkingReduxThunkExample from "screens/NetworkingReduxThunkExample";
import AnimatedExample from "screens/AnimatedExample";
import RNAnimatableExample from "screens/RNAnimatableExample";
import GesturesExample from "screens/GesturesExample";
import StackNavigatorExample from "screens/StackNavigatorExample";
import SwitchNavigatorExample from "screens/SwitchNavigatorExample";
import BottomTabNavigatorExample from "screens/BottomTabNavigatorExample";

import theme from "constants/theme";
import { Block, Icon, Text } from "galio-framework";

const GalioDrawer = props => (
  <SafeAreaView
    style={styles.drawer}
    forceInset={{ top: "always", horizontal: "never" }}
  >
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}>
        <Image
          source={{ uri: "http://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
      </Block>
      <Block flex style={styles.middle}>
        <Text size={theme.SIZES.FONT * 0.875}>Galio Framework</Text>
        <Text muted size={theme.SIZES.FONT * 0.875}>
          React Native Express Example
        </Text>
      </Block>
    </Block>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  drawer: {
    flex: 1
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 0.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === "android" ? theme.SIZES.BASE * 2 : null
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25
  },
  middle: {
    justifyContent: "center"
  }
});

const MenuIcon = ({ name, family, focused }) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? theme.COLORS.WHITE : "#5D5D5D"}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool
};

const screenLists = [
  "FlexboxExample",
  "ScrollViewExample",
  "FlatListExample",
  "SectionListExample",
  "TodoStateExample",
  "ReduxSimpleExample",
  "TodoReduxExample",
  "TodoReactReduxExample",
  "AsyncStorageExample",
  "TodoReduxPersistExample",
  "NetworkingFetchExample",
  "NetworkingReduxThunkExample",
  "AnimatedExample",
  "RNAnimatableExample",
  "GesturesExample",
  "StackNavigatorExample"
];

const screens = {
  Home: {
    screen: FlexboxExample,
    navigationOptions: {
      drawerLabel: "Flexbox",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  ScrollView: {
    screen: ScrollViewExample,
    navigationOptions: {
      drawerLabel: "ScrollView",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  FlatList: {
    screen: FlatListExample,
    navigationOptions: {
      drawerLabel: "FlatList",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  SectionList: {
    screen: SectionListExample,
    navigationOptions: {
      drawerLabel: "SectionList",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  TodoState: {
    screen: TodoStateExample,
    navigationOptions: {
      drawerLabel: "TodoState",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  ReduxSimpleExample: {
    screen: ReduxSimpleExample,
    navigationOptions: {
      drawerLabel: "ReduxSimple",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  TodoReduxExample: {
    screen: TodoReduxExample,
    navigationOptions: {
      drawerLabel: "TodoRedux",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  TodoReactReduxExample: {
    screen: TodoReactReduxExample,
    navigationOptions: {
      drawerLabel: "TodoReactRedux",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  AsyncStorageExample: {
    screen: AsyncStorageExample,
    navigationOptions: {
      drawerLabel: "AsyncStorage",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  TodoReduxPersistExample: {
    screen: TodoReduxPersistExample,
    navigationOptions: {
      drawerLabel: "TodoReduxPersist",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  NetworkingFetchExample: {
    screen: NetworkingFetchExample,
    navigationOptions: {
      drawerLabel: "NetworkingFetch",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  NetworkingReduxThunkExample: {
    screen: NetworkingReduxThunkExample,
    navigationOptions: {
      drawerLabel: "NetworkingReduxThunk",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  AnimatedExample: {
    screen: AnimatedExample,
    navigationOptions: {
      drawerLabel: "Animated",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  RNAnimatableExample: {
    screen: RNAnimatableExample,
    navigationOptions: {
      drawerLabel: "RNAnimatable",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  GesturesExample: {
    screen: GesturesExample,
    navigationOptions: {
      drawerLabel: "Gestures",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  StackNavigatorExample: {
    screen: StackNavigatorExample,
    navigationOptions: {
      drawerLabel: "StackNavigator",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  SwitchNavigatorExample: {
    screen: SwitchNavigatorExample,
    navigationOptions: {
      drawerLabel: "SwitchNavigator",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  },
  BottomTabNavigatorExample: {
    screen: BottomTabNavigatorExample,
    navigationOptions: {
      drawerLabel: "BottomTabNavigator",
      drawerIcon: props => (
        <MenuIcon name="flag" family="font-awesome" focused={props.focused} />
      )
    }
  }
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: "500",
      color: theme.COLORS.GREY,
      fontSize: theme.SIZES.FONT * 0.875,
      marginLeft: theme.SIZES.BASE * 0.75
    },
    activeLabelStyle: {
      color: theme.COLORS.WHITE
    },
    activeBackgroundColor: theme.COLORS.THEME,
    itemsContainerStyle: {
      paddingVertical: 0
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 1.65
      // marginRight: theme.SIZES.BASE * 0.76,
    }
  }
};

const _RNExpressApp = createDrawerNavigator(screens, options);
const RNExpressApp = createAppContainer(_RNExpressApp);

export default RNExpressApp;
