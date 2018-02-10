import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    ScrollView,
  } from 'react-native';
import { Card } from 'react-native-elements';


export default class SHProfileCardView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const profiles = this.props.profiles;
    console.log(profiles.length);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Card title="CARD WITH DIVIDER">
            {profiles.map((profile) => {
              return (
                <View key={profile.login.username} style={styles.user}>
                  <Image
                    style={{width: 70, height: 50}}
                    resizeMode="cover"
                    source={{ uri: profile.picture.thumbnail }}
                  />
                  <Text style={styles.name}>{profile.name.first}</Text>
                </View>
              );
            })}
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  scrollView: {
    flex: 1,
  },
  user:{
      flex : 1,
      flexDirection: 'row',
      margin: 5,
  },
  name:{
    flex : 1,
    margin: 15,
}
});
