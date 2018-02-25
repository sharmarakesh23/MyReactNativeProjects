import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { Container, Content, Icon, Thumbnail } from "native-base"
import CardView from "../CardView"
export default class Home extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  render() {
    const images = ["1.jpg", "2.jpg", "3.jpg", "Me.jpg"]
    return (
      <Container style={styles.container}>
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
              <Text>Stories</Text>
              <Text>Watch All</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "cetner",
                paddingRight: 5,
                paddingLeft: 5
              }}
            >
              this.images.map((thumbNail) =>{" "}
              {
                <Thumbnail
                  style={{
                    marginHorizontal: 5,
                    borderColor: "blue",
                    borderWidth: 2
                  }}
                  source={require("../assets/images/1.jpg")}
                />
              });
            </ScrollView>
            <View style={{ flex: 3 }} />
          </View>
          <CardView imageSource="1" likes="100" />
          <CardView imageSource="2" likes="100" />
          <CardView imageSource="3" likes="100" />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2"
  }
})
