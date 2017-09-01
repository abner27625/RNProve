/**
 * Created by Administrator on 2017/8/31.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'

export class BaseItemList extends PureComponent{
    static defaultProps  = {
        backgroundColor : "#fff",
        height : 50,
        width : 56,
        // loading : false,
        fontSize : 16,
        color:'#000000',
    }
    render(){
        const {height, width,color,children, fontSize, source} = this.props
        return (<View style={{backgroundColor:'#fff', height:60}}>
            <View style={{flexDirection: 'row'}}>
                <Image style={{width,height, marginLeft:20,marginTop:2, flex:4}} source={source}/>
                <Text style={{fontSize,color,marginLeft:26, flex:20,marginTop:14}}>{children}</Text>
                <Image style={{marginRight:28,height:30, width:14,flex:1,marginTop:15}} source={require("../../img/icon_arrow.png")} ></Image>
            </View>
        </View>)
    }
}