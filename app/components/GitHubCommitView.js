import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getGitHubRepositoryCommits } from '../services/GitHubService';

export default class GitHubCommitView extends Component {

    constructor(props){
        super(props);
        this.state={
            commitData:[],
            DEFAULT_REPO: props.repo 
        }
    }

    componentDidMount(){
        this.props.onRef(this);
         this.loadData(this.state.DEFAULT_REPO);
    }

    loadData(repo){
        getGitHubRepositoryCommits(repo).then((res) => {
            this.setState({ commitData: res })
        })
    }

    render() {
        console.log("data : "+this.state.commitData);
       return (this.state.commitData.map(item =>
        <>
            <Text style={styles.description}>
                ______________________________________________
            </Text>
            <Text style={styles.author}>
                Author : {item.commit.author.name}
            </Text>
            <Text style={styles.messagekey}>
                Commit# 
            </Text>
            <Text style={styles.messagevalue}>
                {item.sha}
            </Text>
            <Text style={styles.messagekey}>
                Commit Message : 
            </Text>
            <Text  style={styles.messagevalue}>{item.commit.message}</Text>
        </>
    )); 
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        marginTop: 60,
    },
    messagekey: {
        marginBottom: 20,
        fontSize: 14,
        textAlign: 'left',
        color: 'black'
    },
    messagevalue: {
        marginBottom: 20,
        fontSize: 14,
        textAlign: 'left',
        color: '#656565'
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