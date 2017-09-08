/**
 * Created by Administrator on 2017/9/4.
 */

import {Dimensions, Platform, PixelRatio} from 'react-native'

/*export const width = Dimensions.get('window').width
export const height = Dimensions.get('window').height
export const pixel = 1/PixelRatio.get()
export const statusHeight =Platform.OS === "ios" ? "20" : "0"*/

export default {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    pixel:1/PixelRatio.get(),
    statusHeight:(Platform.OS === "ios" ? "20" : "0")
}