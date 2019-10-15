import React, {Component} from 'react'
import {View, Image, Dimensions} from 'react-native'
import {List, ListItem, Icon, Content, Button} from 'native-base'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import AppText from '../common/AppText'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default class SideMenu extends Component {
    constructor() {
        super()
       
    }
    render() {
        return(
            <View style={{flex:1}}>
                 <View style={{flex:1,backgroundColor:'lightgray', alignItems:'center',justifyContent:'center'}}>
                     <Image source={require('../assets/imgs/Group.png')} style={{width:wp(30), height:hp(12)}}/>
                </View>   
                <LinearGradient colors={['#F6813A', '#FAC858']} style={{width:WIDTH, height:hp(1)}}></LinearGradient>
                <View style={{flex:5, backgroundColor:'white'}}>
                    <Content  >
                            <List >
                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='ios-home' type='Ionicons' style={{fontSize:wp(6),color: '#FAC858' }}  />
                                    <AppText text='الرئيسيه'  color= 'gray'  marginHorizontal= {wp(4)} fontSize={wp(4)} />
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }}  >
                                    <Icon name='hammer' type='MaterialCommunityIcons' style={{fontSize:wp(6),color: '#FAC858' }}  />
                                    <AppText text='طلباتي'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)} />
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='wallet' type='MaterialCommunityIcons' style={{fontSize:wp(6),color: '#FAC858' }} />
                                    <AppText text='المحفظه'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='location-on' type='MaterialIcons' style={{fontSize:wp(6),color: '#FAC858' }}  />
                                    <AppText text='العناوين'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='ios-unlock' type='Ionicons' style={{fontSize:wp(6),color: '#FAC858' }} />
                                    <AppText text='سياسه الضمان'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='book' type='MaterialCommunityIcons' style={{fontSize:wp(6),color: '#FAC858' }}  />
                                    <AppText text='الشروط و الاحكام'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='help-outline' type='MaterialIcons' style={{fontSize:wp(6),color: '#FAC858' }}  />
                                    <AppText text='عن التطبيق'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='settings' type='MaterialCommunityIcons' style={{fontSize:wp(6),color: '#FAC858' }}  />
                                    <AppText text='الاعدادات'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>

                                <ListItem  style={{flexDirection: 'row-reverse' }} >
                                    <Icon name='share-variant' type='MaterialCommunityIcons' style={{fontSize:wp(6) ,color: '#FAC858'}}  />
                                    <AppText text='شارك التطبيق'  color='gray'  marginHorizontal= {wp(4)} fontSize={wp(4)}/>
                                </ListItem>
                            </List>

                            
                    </Content>
                    <LinearGradient colors={['#F6813A', '#FAC858']} style={{position:'absolute', bottom:0, left:0, right:0, height:hp(7)}}>
                                <Button block transparent style={{justifyContent:'center', alignItems:'center' }}>
                                    <AppText text='تسجيل الخروج' color='white' fontSize={wp(4)} />
                                </Button>
                    </LinearGradient>        
                </View>
            </View>
        )
    }
} 