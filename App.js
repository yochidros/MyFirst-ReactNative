/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>
          r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20}}>
          <ActivityIndicator style={{ backgroundColor: 'skyblue'}} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20}}>
        <ActivityIndicator style={{ backgroundColor: 'skyblue'}} />
      </View>
    );
    /*    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
    */
  }
}
