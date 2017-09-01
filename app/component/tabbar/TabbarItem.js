
import React, {PureComponent} from "react"
import {View, Dimensions} from 'react-native'

export class TabbarItem extends PureComponent{
  render(){
    const {children, name, active, switch_to} = this.props
    const style = {overflow : 'hidden'}
    if(active != name) {
      style.height = 0
      style.width = 0
    } else {
      style.height = Dimensions.get('window').height - 48 
    }
    return <View style={style}>
      {React.cloneElement(children, {switch_to})}
    </View>
  }
}