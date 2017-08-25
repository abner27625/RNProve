
import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import {flexCenter} from '../../base/style'

import {connect} from 'react-redux'

class _Tabbar extends Component {
  
  constructor(props){
    super()
  }
  switch_to(name){
    store.dispatch({
      type : "SWITCH_TAB",
      active : name 
    })
  }
  _press(name){
    return (() => {
      this.switch_to(name)
    }).bind(this)
  }
  render() {
    const {children,active} = this.props
    console.log("render @Tabbar active:" + active)
    return (
      <View style={{flex : 1, flexDirection : 'column', justifyContent : 'flex-start', overflow : 'hidden'}}>
        <View style={{flex : 1}}>
          {children.map((child, i) => {
            return React.cloneElement(child, {key : i, active, switch_to : this.switch_to.bind(this)})
          })}
        </View>
        <View style={{backgroundColor : "white", height : 48, flexDirection : "row", borderTopWidth : 1, borderColor : "#ccc" }}>
          {children.map((child, i) => {
            const {title, name, icon, activeIcon} = child.props
            return <TouchableOpacity onPress={this._press(name).bind(this)} key={i} style={{flex : 1, height : 48, ...flexCenter}}>
              <View style={{...flexCenter}}>
                <Image source={name == active ? activeIcon : icon} resizeMode="contain"  style={{width : 20, height : 20, marginBottom : 5}} />
                <Text>{title}</Text>
              </View>
            </TouchableOpacity>
          })}
        </View>
      </View>
    )
  }
}
