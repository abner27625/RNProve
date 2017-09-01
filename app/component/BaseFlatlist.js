/**
 * Created by lenovo on 2017/8/28.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    StyleSheet,
    Alert,
} from 'react-native'

import {BaseItemList} from '../basic/BaseItemList'


export class BaseFlatlist extends PureComponent {
    constructor() {
        super();
        this.state = {
            dataSource: [
                {
                    key:1,
                    image:require('../../img/me_icon_jiekuan.png'),
                    title:"我的借款"
                },
                {
                    key:2,
                    image:require('../../img/me_icon_sign.png'),
                    title:"我要签约"
                },
                {
                    key:3,
                    image:require('../../img/me_icon_tixian.png'),
                    title:"提现"
                },
                {
                    key:4,
                    image:require('../../img/me_icon_plan.png'),
                    title:"还款计划"
                },
                {
                    key:5,
                    image:require('../../img/me_icon_qus.png'),
                    title:"常见问题"
                },
                {
                    key:6,
                    image:require('../../img/me_icon_about.png'),
                    title:"关于"
                },
            ]
        }
    }
    _keyExtractor = (item, index) => item.key;
    _renderRow = ({item})=>{
        return(
            <TouchableOpacity onPress={()=>this._getAlert(item.key)} style={{marginTop: item.key === 5 ? 20 : 0}}>
                <BaseItemList
                    index={item.key}
                    width={56}
                    height={50}
                    fontSize={16}
                    source={item.image}
                    color={"#000000"}
                >{item.title}</BaseItemList>
            </TouchableOpacity>
        )
    }
    _renderSeperator(){
        return (
            <View style={styles.divider}></View>
        )
    }

    _getAlert(index){
        switch (index){
            case 1:
                Alert.alert('生活无限美好'+ index,null,null);
                break;
            case 2:
                Alert.alert('生活无限美好'+ index,null,null);
                break;
            case 3:
                Alert.alert('生活无限美好'+ index,null,null);
                break;
            case 4:
                Alert.alert('生活无限美好'+ index,null,null);
                break;
            case 5:
                Alert.alert('生活无限美好'+ index,null,null);
                break;
            case 6:
                Alert.alert('生活无限美好'+ index,null,null);
                break;
        }

    }
    render() {
        return (
            <View style={styles.products}>
                <FlatList  data={this.state.dataSource} renderItem={this._renderRow}
                           keyExtractor={this._keyExtractor}
                           ItemSeparatorComponent={this._renderSeperator}
                           style={{backgroundColor:'#f7f7f7'}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    products: {
        flex: 1,
    },
    row:{
        height:100,
        flexDirection:'row',
        // justifyContent:"center",
        // alignContent:'center'
        backgroundColor:'white'
    },
    productsImage:{
        marginLeft:10,
        marginRight:10,
        width:40,
        height:40,
        alignSelf:'center'
    },
    productTitle:{
        flex:3,
        fontSize:20
    },
    productSubTitle:{
        flex:2,
        fontSize:18,
        color:'gray'
    },
    productText:{
        flex:1,
        marginTop:10,
        marginBottom:10
    },
    divider:{
        height:1,
        width:Dimensions.get('window').width - 5,
        marginLeft:5,
        backgroundColor:'#008dfe'
    }
});