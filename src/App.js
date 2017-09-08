/**
 * Created by Administrator on 2017/9/7.
 */
import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import RepayList from './page/RepayList'
import Repay from './page/Repay'
import HomeFlatlist from './page/HomeFlatlist'
import TabBarItem from './component/TabBarItem'

export default class App extends PureComponent {
    constructor() {
        super()
    }
    render() {
        return (
            <Navigator/>
        );
    }
}
const Tab = TabNavigator(
    {
        Loan: {
            screen: Repay,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/home_toolbar_jie.png')}
                        selectedImage={require('../img/home_toolbar_jie_hover.png')}
                    />
                )
            }),
        },
        Account: {
            screen: HomeFlatlist,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/home_toolbar_wo.png')}
                        selectedImage={require('../img/home_toolbar_wo_hover.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#008dfe',
            inactiveTintColor: '#666666',
            style: { backgroundColor: '#fff' },
        },
    }
);
const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        // Web: { screen: WebScene },
        // GroupPurchase: { screen: GroupPurchaseScene },
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            headerStyle: {
                backgroundColor: '#fff',
                height: 0,
            },
        },
    }
);