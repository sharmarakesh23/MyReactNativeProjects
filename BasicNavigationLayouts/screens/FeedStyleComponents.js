import React from "react"
import { StyleSheet, Text, View } from "react-native"
import styled from "styled-components"

const ProfileContainer = styled.View`
  background-color: blueviolet;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MiddleContainer = Container.extend`
  background-color: red;
`

const Address = () => (
  <ProfileContainer>
    <Text>{`Address`}</Text>
  </ProfileContainer>
)

// with => no need to use curly braces
// If you have to use curly braces then will use return ()

export default class FeedStyleComponents extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Address />

        <MiddleContainer>
          <Text>{`Likes`}</Text>
        </MiddleContainer>

        <ProfileContainer>
          <Text>{`Shaadi`}</Text>
        </ProfileContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:
      "column" /* change the main and cross axis 
    "row" "column" by defualt main = Y and cross is = X 
    "row-reverse" , "column-reverse"
    */,
    justifyContent: "flex-end", // Works on Main axis 'flex-start' 'flex-end' 'center' , "space-around" , "space-between"
    alignItems: "stretch", //"flex-end", // wroks on corss axis  'flex-start' 'flex-end' 'center'
    backgroundColor: "skyblue"
  },
  address: {
    flex: 1,
    backgroundColor: "red"
    //alignSelf: 'stretch',
  },
  likes: {
    flex: 1,
    backgroundColor: "green"
    //alignSelf: 'stretch',
  },
  shaadi: {
    flex: 1,
    backgroundColor: "blue"
    //alignSelf: 'stretch',
  }
})
