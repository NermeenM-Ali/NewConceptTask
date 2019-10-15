import React, {Component} from 'react'
import {View, Dimensions, Image} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import {Left, Body, Right, Icon, Button} from 'native-base'
import AppText from '../common/AppText'
import { Navigation } from 'react-native-navigation'
import SideMenu from './SideMenu'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default class HeaderSection extends Component {
    render() {
        return(
            <View style={{flex:1}}>
                <View style={{backgroundColor:'black', width:WIDTH, height: hp(13), opacity:0.9, flexDirection:'row'}}>
                    <Left style={{marginHorizontal: wp(2)}}>
                        <Button transparent style={{width:wp(12.5), height:hp(7.5) ,borderRadius:wp(22), borderColor:'#F6813A', borderWidth:wp(0.2)}} >
                            <Icon name='user' type='Entypo' style={{fontSize:wp(5.5), color:'#F6813A'}} />
                        </Button>
                    </Left> 

                    <Body>
                        <Image source={require('../assets/imgs/Group.png')}
                            style={{width: wp(22), height: hp(10)}} 
                        />
                    </Body>

                    
                    <Right style={{marginHorizontal: wp(1)}}>
                        <Button transparent style={{width:wp(13), height:hp(5)}}
                                    onPress={()=>{
                                        Navigation.mergeOptions('SideMenu', {
                                            sideMenu: {
                                                right: {
                                                    visible: true,
                                                    
                                                }
                                            }
                                        })
                                    }}
                            >
                                    <Icon name='ios-menu' type='Ionicons' style={{fontSize:wp(8),color:'#F6813A' }}/>
                                
                            </Button>
                     
                    </Right>
                </View>

                <View style={{backgroundColor:'black', width:WIDTH, height: hp(12), opacity:0.8, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{marginHorizontal: wp(2), marginVertical:hp(2)}}>
                       <LinearGradient colors={['#F6813A', '#FAC858']}  style={{width:wp(12.5), height:hp(7.5) ,borderRadius:wp(22)}}>
                        <Button rounded transparent
                                style={{width:wp(12.5), height:hp(7.5) ,}}>
                            <Icon name= 'filter' type='MaterialCommunityIcons' style={{fontSize:wp(6), color:'white'}}/>
                            </Button>
                       </LinearGradient>
                    </View> 
                   
                    <View style={{marginHorizontal: wp(1), flexDirection:'row-reverse', marginVertical:hp(3.5)}}>
                      <LinearGradient colors={['#F6813A', '#FAC858']} style={{width:wp(25), height:hp(5), borderRadius:wp(2), elevation:2}}>
                        <Button block transparent style={{width:wp(25), height:hp(5)}}>
                            <AppText text='كل الخدمات' color='white' fontSize={wp(3.5)}/>
                        </Button>
                      </LinearGradient>
                       
                      <LinearGradient colors={['#F6813A', '#FAC858']} style={{width:wp(25), height:hp(5), borderRadius:wp(2), elevation:2, marginHorizontal:wp(1)}}>
                        <Button block transparent style={{width:wp(25), height:hp(5)}}>
                            <AppText text='المهندسين' color='white' fontSize={wp(3.5)}/>
                        </Button>
                      </LinearGradient> 

                        <LinearGradient colors={['#F6813A', '#FAC858']} style={{width:wp(12), height:hp(5), borderRadius:wp(2), elevation:2}}> 
                            <Button block transparent style={{width:wp(12), height:hp(5)}}>
                                <AppText text='اليوم' color='white' fontSize={wp(3.5)}/>

                            </Button>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        )
    }
}