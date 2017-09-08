/**
 * Created by Administrator on 2017/9/7.
 */

import React, {PureComponent} from 'react'
import {StyleSheet, Dimensions,TouchableOpacity, Text,View} from 'react-native'
import SpacingView from '../base/SpacingView'

const width = Dimensions.get('window').width


export default class RepayListItem extends PureComponent{

    render(){
        let icon;
        let second;
        if(this.props.shouldLateFee !== '0.00'){
            icon = <Text style={styles.special}>应还违约金:{this.props.shouldLateFee}</Text>
            second = <Text style={styles.special}>应还罚息:{this.props.shouldPenaltyInterest}</Text>
        }
        return(
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.first}>
                        <Text>本期应还金额:{this.props.shouldBalance}</Text>
                        {icon}
                        {second}
                        <Text style={styles.special}>月还款额:{this.props.monthBalance}</Text>
                    </View>
                    <View style={styles.second}>
                        <Text>{this.props.periodsNum}</Text>
                        <Text style={styles.special}>{this.props.repaymentDay}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    first:{
        width:width * 0.7,
        backgroundColor:'red',
        paddingLeft:20
    },
    second:{
        width:width * 0.3,
        backgroundColor:'green',
        alignItems : 'center',
    },
    special:{
        marginTop:5
    }

})