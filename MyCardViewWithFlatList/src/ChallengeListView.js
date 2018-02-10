import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import axios from 'axios';

export default class ChallengeListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {

    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    const users = await axios.get(url)
      .then(res => {
        this.setState({
          data: page === 1 ? res.data.results : [...this.state.data, ...res.data.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }
  

  pullToRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.fetchUsers();
      }
    );
  };

  fetchNextPage = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.fetchUsers();
      }
    );
  };

  getSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  getHeaderView = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  getFooterView = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.getSeparatorView}
          ListHeaderComponent={this.getHeaderView}
          ListFooterComponent={this.getFooterView}
          onRefresh={this.pullToRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.fetchNextPage}
          onEndReachedThreshold={1000}
        />
      </List>
    );
  }
}