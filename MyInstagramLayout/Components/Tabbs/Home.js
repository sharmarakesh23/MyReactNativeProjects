import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Container,
  Content,
  Icon,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";
import CardView from "../CardView";
import Stories from "../Stories";
import Headers from "../Headers";

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };
  render() {
    const images = [
      require("../assets/images/1.jpg"),
      require("../assets/images/2.jpg"),
      require("../assets/images/3.png"),
      require("../assets/images/me.jpg")
    ];

    return (
      <Container style={styles.container}>
        <Headers
          lname={"ios-camera-outline"}
          bname={"Instagram"}
          rname={"ios-send-outline"}
        />

        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Stories</Text>

              <View style={{ flexDirection: "row" }}>
                <Icon name="md-play" style={{ fontSize: 14 }} />
                <Text style={{ fontWeight: "bold" }}> Watch All</Text>
              </View>
            </View>

            <View style={styles.stories}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingEnd: 5,
                  paddingStart: 5
                }}
              >
                <Stories images={images} />
              </ScrollView>
            </View>
          </View>
          <CardView imageSource="1" likes="100" />
          <CardView imageSource="2" likes="100" />
          <CardView imageSource="3" likes="100" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  stories: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 2
  }
});
