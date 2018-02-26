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
import ScoreText from "../ScoreText";
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
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../assets/images/me.jpg")}
                  style={{ width: 80, height: 80, borderRadius: 40 }}
                />
              </View>

              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <ScoreText score="20" text="posts" />
                  <ScoreText score="206" text="Followers" />
                  <ScoreText score="167" text="Following" />
                </View>

                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      justifyContent: "center",
                      height: 30,
                      marginLeft: 10
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      marginLeft: 5,
                      marginRight: 10,
                      height: 30
                    }}
                  >
                    <Icon name="settings" />
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <View style={{ paddingHorizontal: 10, paddingTop: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Rakesh Sharma</Text>
                <Text>Associat Team Lead Mobile</Text>
                <Text>www.shaadi.com</Text>
              </View>
            </View>
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
