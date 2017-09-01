/**
 * Created by Administrator on 2017/8/25.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

export class AccountPage extends PureComponent{
    renderImg(){
        //使用swiper存在一个问题，缺少unique key，url---->有道笔记
        var images = [url];
        /*var images = [];*/
        var imageViews=[{name:url,key:1}];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1}}
                    source={{uri:images[i]}}
                />
            );
        }
        //imageViews.push(<Text>lalala</Text>);
        return imageViews;
    }
    render(){
        return(
            <View>
                <Swiper height={200}
                        loop={true}
                    // showsButtons={true}
                        index={0}
                        autoplay={true}
                        horizontal={false}>
                    {this.renderImg()}
                </Swiper>
            </View>
        );
    }
}