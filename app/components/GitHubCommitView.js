import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getGitHubRepositoryCommits } from '../services/GitHubService';

export default class GitHubCommitView extends Component {
    
    constructor(props){
        super(props);
        this.state={
            commitData:[]
        }
    }

    componentDidMount(){
        
         getGitHubRepositoryCommits('repos/ramanurs/githubreader').then((res) => {
            this.setState({ commitData: res })
        })

       // this.setState({ commitData: data })
        
/*
        fetch('https://api.github.com/repos/ramanurs/githubreader/commits')
        .then(res => res.json())
        .then((data) => {
            this.setState({ commitData: data })
        })
        .catch(console.log)
         */
    }

    render() {
        console.log("data : "+this.state.commitData);
       return (this.state.commitData.map(item =>
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
    )); 
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