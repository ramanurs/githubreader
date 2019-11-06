import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class GitHubRepoSearchView extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>GitHub View</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        marginTop: 60,
        
    }
})