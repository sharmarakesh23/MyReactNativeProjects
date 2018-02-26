import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Icon } from "native-base";
import { TabNavigator } from "react-navigation";

import Home from "../Tabbs/Home";
import Search from "../Tabbs/Search";
import Media from "../Tabbs/AddMedia";
import Profile from "../Tabbs/Profile";
import Likes from "../Tabbs/Likes";

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = TabNavigator(
  {
    Home: { screen: Home },
    Search: { screen: Search },
    Media: { screen: Media },
    Profile: { screen: Profile },
    Likes: { screen: Likes }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#2F6DFF",
      inactiveTintColor: "#99A4FF",
      showLabel: false,
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
