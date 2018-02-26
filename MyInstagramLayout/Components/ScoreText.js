import React, { Component } from "react";
import { View, Text } from "react-native";

export default class componentName extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>{this.props.score}</Text>
        <Text style={{ fontSize: 10, color: "grey" }}>{this.props.text}</Text>
      </View>
    );
  }
}
