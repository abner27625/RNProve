/**
 * Created by lenovo on 2017/8/26.
 */
import React, {PureComponent} from 'react'
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

export class AccountpageScrollview extends PureComponent{
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
        },3000)
    }
    //手动滑动
    _scrollEnd(){
        //水平方向的偏移量
        var offset = this.refs.scrollview.nativeEvent.contentOffset.x;
        //当前页数
        var currentPage = Math.floor(offset/Dimensions.get('window').width);
        //更新的当前页数
        this.setState({currentPage:currentPage});
    }
    //调用停止拖拽
    _onScrollEndDrag(){
        //开启计时器
        this._startTimer();
    }
    //调用开始拖拽
    _onScrollBeginDrag(){
        //停止计时器
        clearInterval(this.interval)
    }

    render(){
        const bannerviewCount = this.state.bannerview.length;  //指示器的圆点个数
        const indicatorWidth = circleSize * bannerviewCount + circleMargin * bannerviewCount * 2; //计算指示器的宽度
        const left = (Dimensions.get('window').width - indicatorWidth)/2; //计算指示器最左边的坐标位置
        return(
            <View style={styles.bannerview}>
                <ScrollView ref="scrollview"
                    horizontal={true}
                    //如果设置成true的话，这个将变成横条的indicator，false为隐藏水平滚动条
                    showsHorizontalScrollIndicator={false}
                    //自动分页
                    pagingEnabled={true}
                    //设置手动滑动
                    onMomentumScrollEnd={()=>this._scrollEnd()}
                    //开始拖拽
                    onScrollBeginDrag = {this._onScrollBeginDrag}
                    //停止拖拽
                    onScrollEndDrag = {this._onScrollEndDrag}
                >
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