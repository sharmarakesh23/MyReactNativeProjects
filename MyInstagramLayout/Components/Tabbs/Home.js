import React from "react"
import { StyleSheet, Text, View } from "react-native"
import {Container,Content,Icon} from "native-base"
import CardView from  "../CardView"
export default class Home extends React.Component {
  
  static navigationOptions = {
    tabBarIcon:({tintColor}) => (
      <Icon name = "ios-home" style={{color:tintColor}}/>
    )
  }

  render() {
    return (
      <Container style ={styles.container}>
      <Content> 
      <CardView imageSource = "1" likes = "100"/>
      <CardView imageSource = "2" likes = "100"/>
      <CardView imageSource = "3" likes = "100"/>
      </Content>
      </Container>
    )
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
},
});