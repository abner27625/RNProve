/**
 * Created by lenovo on 2017/8/27.
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
} from 'react-native'

export class HomeItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            url:"",
            text:""
        }
    }
    onPress(){
        this.props.onPress && this.props.onPress()
    }
    render(){
        <TouchableOpacity
            onPress={this.onPress.bind(this)}
            style={{backgroundColor, width,  height, ...flexCenter, borderRadius, ...this.props.style}}>
            <Image style={style.image} source={this.state.require(url)}/>
            <Text style={style.text} >{this.state.text}</Text>
        </TouchableOpacity>
    }
}

const style = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width /6,
        height:50,
        marginLeft:Dimensions.get('window').width /12,
    },
    text:{
        color : 'white',
        width: Dimensions.get('window').width /6,
        height:'wrap',
        fontSize:20,
        marginLeft:Dimensions.get('window').width /12,
        fontWeight : Platform.OS === 'android' ? "bold" : "normal"
    }
})