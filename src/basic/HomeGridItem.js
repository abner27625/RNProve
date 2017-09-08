/**
 * Created by Administrator on 2017/9/4.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import ScreenUnit from '../base/ScreenUnit'

export default class HomeGridItem extends PureComponent{
    render(){
        let info = this.props.info
        console.log("----------------------------------------")
        console.log(info)
        return(
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>{info.title}</Text>
                <Image source={info.imageurl}></Image>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:ScreenUnit.width,
        height:50,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        borderBottomWidth:ScreenUnit.pixel,
        borderRightWidth:ScreenUnit.pixel
    },
    title:{
        fontSize:20,
        color:"#000",
    }
})