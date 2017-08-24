/**
 * Created by Administrator on 2017/8/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Dimensions,
    BackAndroid
} from 'react-native';

import {COLOR_TEST_BUTTON} from "./base/color"

import {Provider} from 'react-redux'
import {App} from './App'

export class Entry extends Component {
    constructor(){
        super()
        this.state = {
            store : null
        }
        this.nextTimeExit = false
    }

    componentDidMount(){

        BackAndroid.addEventListener('hardwareBackPress', (() => {
            const navigator = this.refs.navigator
            if(!navigator) {
                return false
            }
            const routes = navigator.getCurrentRoutes()
            if(routes.length === 1) {
                if(this.nextTimeExit) {
                    return false
                } else {
                    this.nextTimeExit = true
                    alert("再按一次回退键退出珠峰课堂")
                    setTimeout( (() => {
                        this.nextTimeExit = false
                    }).bind(this), 5000)
                    return false
                }
                return
            } else if(routes.length > 1) {
                navigator.pop()
                return true
            }
        }).bind(this));
    }
    render(){
        const {store} = this.state
        if(!store) {
            return null
        }
        return <Provider store={store}>
            <App />
        </Provider>
    }
}


