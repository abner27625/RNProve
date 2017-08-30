/**
 * Created by Administrator on 2017/8/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Navigator,
    Image
} from 'react-native';

import SplashScreen from "react-native-splash-screen"
import {PButton} from "./component/PButton"
import TabNavigator from "react-native-tab-navigator"

import {flexCenter} from './base/style'

 import {AccountPage} from './page/AccountPage'
import {AccountpageScrollview} from './page/AccountpageScrollview'
import {AccountPageViewpager} from './page/AccountPageViewpager'
//var AccountPageViewpager = require('./page/AccountPageViewpager')
//import {Listview} from './page/Listview'
export class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: ACCOUNT}
    }
    //界面添加启动页
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        setTimeout(()=>{
            SplashScreen.hide()
        },3000)
    }
    //此渲染仅为测试
    /*render(){
        return (
            <View style={{flex:1,...flexCenter}}>

                <Text>人生如戏，戏如人生</Text>
                <PButton>也许这就是生活</PButton>
            </View>
        );
    }*/
    _renderTabItem(img, selectedImg, tag,title, childView) {
        return (
            <TabNavigator.Item
                title={title}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }
    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(ACCOUNT_NORMAL, ACCOUNT_FOCUS, ACCOUNT,ACCOUNT_TITLE,<AccountPageViewpager/>)}
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, HOME_TITLE,<AccountpageScrollview></AccountpageScrollview>)}
                </TabNavigator>
            </View >
        );
    }
}

const ACCOUNT = 'account';
const ACCOUNT_TITLE = '借款';
const ACCOUNT_NORMAL = require('../img/home_toolbar_jie.png');
const ACCOUNT_FOCUS = require('../img/home_toolbar_jie_hover.png');
const HOME = 'home';
const HOME_TITLE = '我的';
const HOME_NORMAL = require('../img/home_toolbar_wo.png');
const HOME_FOCUS = require('../img/home_toolbar_wo_hover.png');

const styles = StyleSheet.create({
    tab: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 12.5
    },
    tabText:{
        fontSize: 15,
        color:'#666666'
    },
    selectedTabText:{
        fontSize: 15,
        color: '#008dfe'
    }
});
