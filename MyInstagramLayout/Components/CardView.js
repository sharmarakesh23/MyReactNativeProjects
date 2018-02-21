import React from "react"
import { StyleSheet, Text, View , Platform, Image } from "react-native"
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

export default class CardView extends React.Component {
  
  render() {
    const images = {

        "1": require('../Components/assets/images/1.jpg'),
        "2": require('../Components/assets/images/2.jpg'),
        "3": require('../Components/assets/images/3.png')
    }
    return (
        <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../Components/assets/images/me.jpg')} />
                        <Body>
                            <Text>Rakesh Sharma </Text>
                            <Text note>Feb 20, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>

                    </Left>
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Rakesh Sharma : </Text>
                            Create React Native App is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
