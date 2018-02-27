import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
  Button
} from "native-base";

import Headers from "../Headers";
import ProfileView from "../ProfileView";
import ScoreText from "../ScoreText";
import SegmentView from "../SegmentView";

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={styles.container}>
        <Headers
          lname={"md-person-add"}
          bname={"Instagram"}
          rname={"ios-timer-outline"}
        />

        <Content>
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
            <ProfileView />
            <SegmentView />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
