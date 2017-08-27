/**
 * Created by lenovo on 2017/8/26.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native'

export class AccountpageScrollview extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:0,
            bannerview:[
                {url:"http:/static.hexindai.com/attachment/cms/apphompeics/2017/08/17/15029675369412.png"},
                {url:"http:/app6.hexindai.com/top_pics/pic179_3.png"},
                {url:"http://static.hexindai.com/attachment/cms/apphompeics/2017/08/02/15016432070028.png"},
                {url:"http://app6.hexindai.com/top_pics/pic177_3.png"}
            ]
        }
    }
    componentDidMount(){
        this._startTimer();
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    _startTimer(){
        this.interval = setInterval(()=>{
            nextpage = this.state.currentPage +1;
            console.log(nextpage)
            if(nextpage >= this.state.bannerview.length){
                nextpage = 0;
            }
            this.setState({currentPage:nextpage});
            const offSetX = nextpage * Dimensions.get('window').width;
            this.refs.scrollview.scrollResponderScrollTo({x:offSetX,y:0,animated:true})
        },2000)
    }
    render(){
indicator        const indicatorWidth = circleSize * bannerviewCount + circleMargin * bannerviewCount * 2; //计算指示器的宽度
        const left = (Dimensions.get('window').width - indicatorWidth)/2; //计算指示器最左边的坐标位置
        return(
            <View style={styles.bannerview}>
                <ScrollView ref="scrollview"
                    horizontal={true}
                    //如果设置成true的话，这个将变成横条的
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>
                    {this.state.bannerview.map((bannerview,index)=>{
                        return (
                            <TouchableHighlight key={index} onPress={() => Alert.alert('生活无限美好', '我会好好的', null)}>
                                <Image style={styles.bannerviewContent} source={{uri: bannerview.url}}></Image>
                            </TouchableHighlight>
                            );
                        })
                    }
                </ScrollView>
                <View style={[styles.indicator,{left : left}]}>
                    {this.state.bannerview.map((bannerview,index)=>{
                        return (
                            <View key={index} style={(index === this.state.currentPage) ? styles.circleSelected : styles.circle}></View>
                        )
                    })}
                </View>
            </View>
        )
    }
}
const circleSize = 8;
const circleMargin = 5;

const styles = StyleSheet.create({
    bannerview:{
        height:200
    },
    bannerviewContent:{
        width:Dimensions.get('window').width,
        height:200
    },
    indicator:{
        position:'absolute',
        top:180,
        flexDirection:'row'
    },
    circle:{
        width:circleSize,
        height:circleSize,
        borderRadius:circleSize/2,
        backgroundColor:'gray',
        marginHorizontal:circleMargin
    },
    circleSelected:{
        width:circleSize,
        height:circleSize,
        borderRadius:circleSize/2,
        backgroundColor:'white',
        marginHorizontal:circleMargin
    }
})