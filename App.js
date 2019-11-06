import React, { Component } from 'react';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";
import { StyleSheet, View, NavigatorIOS } from 'react-native';
import { StatusBar } from "react-native";

import GitHubCommitView from './app/components/GitHubCommitView';
import GitHubRepoSearchView from './app/components/GitHubRepoSearchView';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      DEFAULT_REPO: 'repos/ramanurs/githubreader'
    }
  }

  handleRepoSearch(){

  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>GitHub Commits Viewer</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <GitHubRepoSearchView repo={this.state.DEFAULT_REPO} loadCommitData={GitHubRepoSearchView.loadData}/>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Commits History:</Text>
                <GitHubCommitView repo={this.state.DEFAULT_REPO}/>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>

    );
  }
}

