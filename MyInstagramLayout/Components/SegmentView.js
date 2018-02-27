import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { Icon, Button } from "native-base";
import CardView from "./CardView";
var { height, width } = Dimensions.get("window");

const images = [
  require("../Components/assets/feed_images/1.jpg"),
  require("../Components/assets/feed_images/2.jpg"),
  require("../Components/assets/feed_images/3.png"),
  require("../Components/assets/feed_images/4.jpg"),
  require("../Components/assets/feed_images/5.jpg"),
  require("../Components/assets/feed_images/6.jpg"),
  require("../Components/assets/feed_images/7.jpg"),
  require("../Components/assets/feed_images/8.png"),
  require("../Components/assets/feed_images/9.jpg"),
  require("../Components/assets/feed_images/10.jpg"),
  require("../Components/assets/feed_images/11.jpg"),
  require("../Components/assets/feed_images/12.jpg")
];

export default class SegmentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  getButtons = () => {
    let buttonImages = [
      "ios-apps-outline",
      "ios-list-outline",
      "ios-people-outline",
      "ios-bookmark-outline"
    ];

    return buttonImages.map((iconName, index) => (
      <Button
        transparent
        onPress={() => this.segmentClicked(index)}
        active={this.state.activeIndex == index}
      >
        <Icon
          name={iconName}
          style={[this.state.activeIndex == index ? {} : { color: "grey" }]}
        />
      </Button>
    ));
  };

  renderSectionOne = () => {
    return images.map((img, index) => {
      return (
        <View
          key={index}
          style={[
            { width: width / 3 },
            { height: width / 3 },
            { marginBottom: 2 },
            index % 3 == 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
          ]}
        >
          <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            source={img}
          />
        </View>
      );
    });
  };

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderSectionOne()}
        </View>
      );
    }
    if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardView imageSource="1" likes="100" />
          <CardView imageSource="2" likes="100" />
          <CardView imageSource="3" likes="100" />
        </View>
      );
    }
  };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            borderTopWidth: 1,
            borderTopColor: "lightGrey"
          }}
        >
          {this.getButtons()}
        </View>
        {this.renderSection()}
      </View>
    );
  }
}
