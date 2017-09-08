/**
 * Created by Administrator on 2017/9/4.
 */
import React, {PureComponent} from 'react'
import {View,StyleSheet} from 'react-native'
import ScreenUnit from '../base/ScreenUnit'
import HomeGridItem from '../basic/HomeGridItem'

export default class HomeGridView extends PureComponent{

    static defaultProps={
        infos:[]
    }
    render(){
        console.log(this.props.infos)
        return(
        <View style={styles.container}>
            {
                this.props.infos.map((info,index)=>{
                    <HomeGridItem
                        info={info}
                        key={index}
                        onPress={()=>this.props.onPress}
                    />
                })
            }
        </View>)
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:'center',
        borderBottomWidth:ScreenUnit.pixel,
        borderRightWidth:ScreenUnit.pixel
    }
})