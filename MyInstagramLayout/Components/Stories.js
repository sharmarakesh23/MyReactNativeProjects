import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon, Thumbnail } from "native-base";

export default class Sotries extends Component {
  getStories(images) {
    return images.map(thumbNail => (
      <Thumbnail
        style={{ marginHorizontal: 5, borderColor: "gray", borderWidth: 1 }}
        source={thumbNail}
      />
    ));
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        {this.getStories(this.props.images)}
      </View>
    );
  }
}
