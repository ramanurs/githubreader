import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class GitHubRepoSearchView extends Component {
    constructor(props){
        super(props);
        this.state={
            DEFAULT_REPO: props.repo
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
            DEFAULT_REPO: e.nativeEvent.text
        });
      }
      handleSubmit() {
        this.props.handleRepoSearch(this.state.DEFAULT_REPO);
      }

    render() {
        return (
            <View style={styles.main}>
            <Text style={styles.title}>Search For Github Repo:</Text>
            <TextInput
                  style={styles.searchInput}
                  onChange={this.handleChange}
                  value={this.state.DEFAULT_REPO}
                />
            <TouchableHighlight
                    style = {styles.button}
                    underlayColor= "white"
                    onPress = {this.handleSubmit}
                  >
                  <Text
                      style={styles.buttonText}>
                      SEARCH
                  </Text>
                </TouchableHighlight>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2a8ab7'
      },
      title: {
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center'
      },
      searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
      },
      buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
      },
      button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor:'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
      }
})