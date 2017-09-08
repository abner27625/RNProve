/**
 * Created by Administrator on 2017/9/6.
 */
import React, {PureComponent} from 'react'
import {StyleSheet, Dimensions, Image,View,Text} from 'react-native'
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view'
import RepayList from './RepayList'

const width = Dimensions.get('window').width

export default class Repay extends PureComponent{
    render(){
        let titles = ['已还记录', '未还']
        return (
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#008dfe'
                tabBarInactiveTextColor='#999'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
                renderTabBar={() => <DefaultTabBar tabStyle={{paddingBottom: 0}}/>}
            >
                {titles.map((title, i) => (
                    <RepayList
                        tabLabel={titles[i]}
                        key={i}
                        navigation={this.props.navigation} />
                ))}
            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:300
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        width: width/4,
        marginLeft:width/8,
        marginRight:width/8,
        backgroundColor: '#008dfe'
    },
    img:{
        height:300,
        width: width
    }
})