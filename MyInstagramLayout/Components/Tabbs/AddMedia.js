import React from "react"
import { StyleSheet, Text, View } from "react-native"
import {Icon} from "native-base"

export default class AddMedia extends React.Component {

  static navigationOptions = {
    tabBarIcon:({tintColor}) => (
      <Icon name = "ios-add-circle" style={{color:tintColor}}/>
    )
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>AddMedia</Text>
        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
},
});
