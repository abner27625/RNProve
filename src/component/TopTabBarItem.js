import React, { PureComponent } from 'react'
import { Image } from 'react-native'

// create a component
export default class TabBarItem extends PureComponent {
    render() {
        return (
            <Image
                source={require('../../img/home_banner_enjoy.png')}




            />
        );
    }
}
