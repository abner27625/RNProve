/**
 * Created by Administrator on 2017/9/7.
 */
import React, {PureComponent} from 'react'
import {StyleSheet, Dimensions,TouchableOpacity, Text,View,FlatList} from 'react-native'

import RepayListItem from '../component/RepayListItem'

export default class RepayList extends PureComponent{

      constructor(props) {
        super(props);
        this.state = {
            list:[{
                key:1,
                shouldBalance:'2000',
                shouldLateFee:'50.0',
                shouldPenaltyInterest:'20',
                monthBalance:'200',
                periodsNum:'1',
                repaymentDay:'2017-9-14'
            },
            {
                key:2,
                shouldBalance:'2000',
                shouldLateFee:'50.0',
                shouldPenaltyInterest:'20',
                monthBalance:'200',
                periodsNum:'2',
                repaymentDay:'2017-9-15'
            },
            {
                key:3,
                shouldBalance:'2000',
                shouldLateFee:'0.00',
                shouldPenaltyInterest:'0.00',
                monthBalance:'200',
                periodsNum:'3',
                repaymentDay:'2017-9-16'
            }]
        }
      }
    _keyExtractor = (item, index) => item.key;
    _renderRow = ({item})=>{
        return(
            <RepayListItem
                shouldBalance={item.shouldBalance}
                shouldLateFee={item.shouldLateFee}
                shouldPenaltyInterest={item.shouldPenaltyInterest}
                monthBalance={item.monthBalance}
                periodsNum={item.periodsNum}
                repaymentDay={item.repaymentDay}
            ></RepayListItem>
        )
    }
    _renderSeperator(){
        return (
            <View style={{height:2,backgroundColor:'#dadada'}}></View>
        )
    }
    render(){
        return(
           <FlatList
               data={this.state.list}
               renderItem={this._renderRow}
               keyExtractor={this._keyExtractor}
               ItemSeparatorComponent={this._renderSeperator}
           />
        )
    }

}