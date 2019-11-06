import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getGitHubRepositoryCommits } from '../services/GitHubService';

export default class GitHubCommitView extends Component {

    constructor(props){
        super(props);
        this.state={
            commitData:[],
            error: false
        }
    }

    componentDidMount(){
        const data = getGitHubRepositoryCommits('ramanurs/githubreader');
        this.setState({ commitData: data })
    }

    render() {
       return(
           <View>
               <Text>some text</Text>
           </View>
       )

     /*   return (this.state.commitData.map(item =>
        <>
            <Text style={styles.author}>
                Author : {item.commit.author.name}
            </Text>
            <Text style={styles.messagevalue}>
                Commit Message : {item.commit.message}
            </Text>
            <Text style={styles.sha}>
                Commit# : {item.sha}
            </Text>

            <Text style={styles.description}>
                ______________________________________________

            </Text>
        </>
    )); */
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        marginTop: 60,
    },shakey: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'left',
        color: '#856565'
    },
    shavalue: {
        marginBottom: 20,
        fontSize: 15,
        textAlign: 'left',
        color: '#656565'
    },
    messagekey: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'left',
        color: '#656565'
    },
    messagevalue: {
        marginBottom: 20,
        fontSize: 12,
        textAlign: 'left',
        color: '#856565'
    },

    author: {
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'left'
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'left',
        color: '#656565'
    },
    container: {
        padding: 10,
        marginTop: 65,
        alignItems: 'center',
        textAlign: 'left',
    },
})