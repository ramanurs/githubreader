import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Header from './app/components/Header'
import GitHubCommitView from './app/components/GitHubCommitView';
import GitHubRepoSearchView from './app/components/GitHubRepoSearchView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
        <GitHubCommitView />
        </View>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFCE00',
    marginLeft: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
