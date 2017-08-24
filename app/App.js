/**
 * Created by Administrator on 2017/8/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import {SplashScreen} from "react-native-splash-screen"
import {connect} from "react-redux"

class _App extends Component{
    constructor(){
        super()
        setTimeout( () => {
            SplashScreen.hide()
        }, 3000)
        this.nextTimeExit = false
    }

    render() {
        return (
            <View style={{flex:1,...flexCenter}}>
                <Text>人生如戏，戏如人生</Text>
                <PButton>也许这就是生活</PButton>
            </View>
        );
    }
}
export let App = connect(_App)