/**
 * Created by lenovo on 2017/8/28.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ListView,
    StyleSheet,
    Alert
} from 'react-native'

const ds = new ListView().DataSource({
    rowHasChanged:(r1,r2) => r1 !== r2
})

export class Listview extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
                {
                    image:require('../../img/home_toolbar_jie_hover.png'),
                    title:'商品1',
                    subTitle:'描述1'
                },
            ])
        }
    }
    _renderRow = (rowData,sectionId,rowId)=>{
        return(
            <TouchableOpacity onPress={()=>Alert.alert('生活无限美好',null,null)}>
                <View style={styles.row}>
                    <Image source={rowData.image} style={styles.productsImage}></Image>
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>{rowData.title}</Text>
                        <Text style={styles.productSubTitle}>{rowData.subTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _renderSeperator(sectionId,rowId,adjacentRowHighlighted){
        return (
            <View key={`${sectionId}-${rowId}`} style={styles.divider}>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.products}>
                <ListView  dataSource={this.state.dataSource} renderRow={this._renderRow} initialListSize={6}
                    renderSeparator={this._renderSeperator()}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    products: {
        flex: 1,
    },
    row:{
        height:50,
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
        width:Dimensions.get('window').width-5,
        marginLeft:5,
        backgroundColor:'lightgray'
    }
});