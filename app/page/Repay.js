/**
 * Created by Administrator on 2017/9/6.
 */
import React, {PureComponent} from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import RepayList from './RepayList'

const width = Dimensions.get('window').width

export default class Repay extends PureComponent{
    render(){
        let titles = ['已还记录', '未还']
        return (
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
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
        backgroundColor: '#fff'
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        marginLeft:width/8,
        marginRight:width/8,
        backgroundColor: '#FE566D'
    },

})