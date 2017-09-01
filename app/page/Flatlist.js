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

export class Flatlist extends PureComponent {
    constructor() {
        super();
        this.state = {
            dataSource: [
                {
                    key:1,
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    key:2,
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    key:3,
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    key:4,
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    key:5,
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    key:6,
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
            ]
        }
    }
    _keyExtractor = (item, index) => item.key;
    _renderRow = ({item})=>{
        return(
            <TouchableOpacity onPress={()=>Alert.alert('生活无限美好',null,null)}>
                <View style={styles.row}>
                    <Image source={item.image} style={styles.productsImage}></Image>
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <Text style={styles.productSubTitle}>{item.subTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _renderSeperator(){
        return (
            <View style={styles.divider}></View>
        )
    }
    render() {
        return (
            <View style={styles.products}>
                <FlatList  data={this.state.dataSource} renderItem={this._renderRow}
                           keyExtractor={this._keyExtractor}
                           ItemSeparatorComponent={this._renderSeperator}/>
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
        marginLeft:10,
        backgroundColor:'#008dfe'
    }
});