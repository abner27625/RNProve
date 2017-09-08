/**
 * Created by Administrator on 2017/8/31.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

export class BaseItemList extends PureComponent{
    static defaultProps  = {
        backgroundColor : "#fff",
        height : 50,
        width : 56,
        // loading : false,
        fontSize : 18,
        color:'#000000',
    }
    render(){
        const {height, width,color,children, fontSize, source} = this.props
        return (
            <View style={styles.container}>
                <Image style={{width,height}} source={source}/>
                <Text style={[styles.title,{fontSize,color}]}>{children}</Text>
                <View style={{ flex: 1, backgroundColor: '#000' }}></View>
                <Image style={styles.image} source={require("../../img/icon_arrow.png")}></Image>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
        backgroundColor:'#fff',
        height:60
    },
    icon:{
        // marginLeft:20,
        // marginTop:2,
        // flex:4
    },
    title:{
        marginLeft:26,
        width:100,
        // flex:20,
        // marginTop:14
    },
    image:{
        // marginRight:28,
        height:15,
        width:7,
        // flex:1,
        // marginTop:15
    }
})