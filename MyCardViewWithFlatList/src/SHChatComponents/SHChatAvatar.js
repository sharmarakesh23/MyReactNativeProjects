import React from "react";
import { View, Image } from "react-native";

export default class SHChatAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  
   getPlaceHolderImage = () => {
    var icon = this.props.profile.gender == "female" ?
    require('./Assets/Silhouette_Female.png') :
    require('./Assets/Silhouette_Male.png')
    return icon
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
        defaultSource = {this.getPlaceHolderImage()} 
        source = {this.props.profile.photo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 30
  },
  image: {
    flex: 1
  }
});
