import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import SHProfileCardView from './SHProfileCardView';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      loading: false,
    };
  }

  async fetchUsers() {
    this.setState({ loading: true });
    const users = await axios.get('https://randomuser.me/api?results=10');
    this.setState({ profiles: users.data.results });
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const profiles = this.state.profiles;
    console.log(profiles.length);

    if (this.state.loading) {
      return (
        <View style={{ flex: 1, paddingTop: 50 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <SHProfileCardView key = "cardView"  profiles = {this.state.profiles} />
    );
  }
}


