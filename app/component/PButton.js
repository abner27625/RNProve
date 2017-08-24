/**
 * Created by Administrator on 2017/8/24.
 */
import React, {Component} from 'react'

import {
    View,
    Dimensions,
} from 'react-native'

import {COLOR_BUTTON} from "../base/color"
import {Button} from "../basic/Button"

export class PButton extends Component{
    render(){
        return (
            <Button height={42}
                    width={Dimensions.get('window').width - 40}
                    fontSize={14}
                    backgroundColor={COLOR_BUTTON}
                {...this.props}
            />
        )
    }

}