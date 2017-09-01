/**
 * Created by Administrator on 2017/8/24.
 */
import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {SplashScreen} from "react-native-splash-screen"
import {connect} from "react-redux"
import {Entry} from './entry'
import reducer from './reducer/index'
const store = createStore(reducer);

class _App extends PureComponent{

    render() {
        return (
            <Provider store={store}>
                <Entry></Entry>
            </Provider>
        );
    }
}
export let App = connect(_App)