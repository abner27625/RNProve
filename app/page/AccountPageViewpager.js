/**
 * Created by Administrator on 2017/8/25.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native'
/**
 * 踩了个大坑，多加了{}
 * 目前个人理解是使用react-native自带的不需要带{}，使用自定义的需要带上{}
 * */
import ViewPager from "react-native-viewpager"

export class AccountPageViewpager extends Component{

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
        console.log(dataSource)
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }
    //存在一个优化问题，最后一张跳到第一张的时候界面会闪一下，类似重新刷新一次
    render(){
        return (
            <ViewPager
                style={{height:200}}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
        )
    }
}
const BANNER_IMGS = [
    require('../../img/home_banner.png'),
    require('../../img/home_banner_enjoy.png'),
    require('../../img/home_banner.png'),
    require('../../img/home_banner_enjoy.png'),
];

const styles = StyleSheet.create({
   page: {
       flex: 1,
       height: 200,
       resizeMode: 'stretch'
   },
});
