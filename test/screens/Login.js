import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Navigation } from 'react-native-navigation'


export default class Login extends Component {
    render() {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text
                        onPress={()=> {
                            Navigation.push(this.props.componentId,{
                                component: {
                                    name: 'Home'
                                }
                            })
                        }}
                >Login</Text>
            </View>
        )
    }
}