import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { users } from "../config/data"
import { SafeArea } from "react-navigation"

export default class Me extends React.Component {
  render() {
    return users.map(profile => <Text>{profile.email}</Text>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  }
})
