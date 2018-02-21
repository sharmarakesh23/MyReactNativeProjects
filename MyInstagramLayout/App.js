import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { StackNavigator } from "react-navigation"
import Main from "./Components/screens/Main"

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />
  }
}

const AppStackNavigator = StackNavigator({
  Main: { screen: Main }
})

