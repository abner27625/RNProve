/**
 * Created by Administrator on 2017/9/4.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Alert
} from 'react-native'
import HomeGridView from '../component/HomeGridView'

const api = "http://api.meituan.com/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7"

export default class HomeGrid extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            infos:[
                {
                    index:1,
                    title:"Jan",
                    imageurl:require("../../img/me_icon_jiekuan.png")
                },
                {
                    index:2,
                    title:"Feb",
                    imageurl:require("../../img/me_icon_sign.png")
                },
                {
                    index:3,
                    title:"Mar",
                    imageurl:require("../../img/me_icon_tixian.png")
                },
                {
                    index:4,
                    title:"Apr",
                    imageurl:require("../../img/me_icon_plan.png")
                },
                {
                    index:5,
                    title:"May",
                    imageurl:require("../../img/me_icon_qus.png")
                },
                {
                    index:6,
                    title:"Jun",
                    imageurl:require("../../img/me_icon_about.png")
                }
            ]
        }

    }

    /*componentDidMount() {
        this.requestData()
    }

    async requestData(){
        try {
            let response = await fetch(api)
            let json = await response.json()
            console.log(json.data)
            this.setState({ infos: json.data })
        } catch (error) {
            Alert.alert(error)
        }
    }*/

    render(){
        return(
            <HomeGridView infos={this.state.infos} onPress={this.onGridSelected.bind(this)}/>
        )
    }

    onGridSelected(){
        Alert.alert('黄小琥  没什么  洒脱也是一种态度')
    }
}