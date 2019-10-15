import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Navigation } from 'react-native-navigation'


export default class Home extends Component {
    render() {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text 
                        onPress={()=> {
                            Navigation.push(this.props.componentId,{
                                component: {
                                    name: 'Login'
                                }
                            })
                        }}
                >Home</Text>
            </View>
        )
    }
}