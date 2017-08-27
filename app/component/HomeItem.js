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

        }
    }
    onPress(){
        this.props.onPress && this.props.onPress()
    }
    render(){
        <TouchableOpacity
            onPress={this.onPress.bind(this)}
            style={{backgroundColor, width,  height, ...flexCenter, borderRadius, ...this.props.style}}>
            <Image style={styles.image} source={}/>
            <Text style={{color : 'white', fontSize : 20, fontWeight : Platform.OS === 'android' ? "bold" : "normal"}}>{children}</Text>
        </TouchableOpacity>
    }
}

const style = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width /6,
        height:50,
        marginLeft:10
    }

})