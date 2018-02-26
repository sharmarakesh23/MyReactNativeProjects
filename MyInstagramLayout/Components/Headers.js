import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon, Header, Left, Right, Body } from "native-base";
export default class Headers extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Icon name={this.props.lname} style={{ paddingLeft: 10 }} />
        </Left>
        <Body>
          <Text>{this.props.bname}</Text>
        </Body>
        <Right>
          <Icon name={this.props.rname} style={{ paddingRight: 10 }} />
        </Right>
      </Header>
    );
  }
}
