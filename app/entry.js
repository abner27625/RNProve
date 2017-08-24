/**
 * Created by Administrator on 2017/8/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

import SplashScreen from "react-native-splash-screen"
import {PButton} from "./component/PButton"

import {flexCenter} from './base/style'

export class Entry extends Component {
    //界面添加启动页
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        setTimeout(()=>{
            SplashScreen.hide()
        },3000)
    }
    render(){
        return (
            <View style={{flex:1,...flexCenter}}>

                <Text>人生如戏，戏如人生</Text>
                <PButton>也许这就是生活</PButton>
            </View>
        );
    }
}


