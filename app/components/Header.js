import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFCE00',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
    title: {
        color: 'red',
        fontSize: 18,
        marginTop: 25,
        fontWeight: '600',
        textTransform: 'capitalize'
    }
});

export default Header;