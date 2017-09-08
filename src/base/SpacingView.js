
//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'


// create a component
export default class SpacingView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: '#f7f7f7',
    },
});
