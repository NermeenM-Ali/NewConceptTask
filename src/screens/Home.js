import React, {Component} from 'react'
import {View, ImageBackground, StatusBar, Dimensions, Text, Image} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import {Button, Icon} from 'native-base'
import {
          RecyclerListView,
          DataProvider,
          LayoutProvider  
       } from 'recyclerlistview'
import HeaderSection from '../components/HeaderSection'
import AppText from '../common/AppText'



const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const IMAGE = <Image source={require('../assets/imgs/avatar.png')} style={{width:wp(25), height:hp(17), marginVertical:hp(1), marginHorizontal:wp(1), borderRadius:wp(2), borderColor:'lightgray', borderWidth:wp(0.2)}}/>
const NAME = 'محمد عبد الرحيم'
const POSITION = 'كهربائي'
const DETAILS = 'التفاصيل'

export default class Home extends Component {
    constructor(props) {
        super(props)
        const arrData=[]

        for(let i=0; i< 7 ; i++) {
            arrData.push({
                id: i,
                image: IMAGE,
                name: NAME,
                position: POSITION,
                details: DETAILS
            })
        }
        
        this.state={
            dataProvider: new DataProvider((r1, r2)=> {
                return r1 !== r2
            }).cloneWithRows(arrData)
        } 
        

        this.layoutProvider = new LayoutProvider(
            () => 1,
            (type, dim)=>{
                dim.width= WIDTH,
                dim.height= hp(20)
            }
        )
        
    }

    renderRow = (type, data)=> {
        const {name, image, position, details} = data
        return(
            <View style={{backgroundColor:'white', width:WIDTH, height:hp(19.8)}}>
               <View style={{flexDirection:'row-reverse'}}>
               <View style={{ elevation:2}}>
                       {image}
                   </View>
                  <View style={{marginHorizontal: wp(2), marginTop:hp(2)}}>
                     <AppText text={name} fontSize={wp(4)} color='black' marginHorizontal={wp(3)} fontWeight='500'/>
                     <AppText text= {position} fontSize={wp(4)} color='#95A5A6' marginHorizontal={wp(3)}/>
                     <Image source={require('../assets/imgs/rate.jpg')} style={{width:wp(24), height:hp(2), marginLeft:wp(11), marginTop:hp(1)}}/>   
                     <AppText text= {details} fontSize={wp(3)} color='#F6813A' marginHorizontal={wp(2)} marginTop={hp(1)} textDecorationLine='underline'/>

                  </View>
                   
                   <View style={{marginTop:hp(2), marginRight:wp(13)}}>
                        <LinearGradient colors={['#F6813A', '#FAC858']} style={{width:wp(17), height:hp(4), borderRadius:wp(2), elevation:2 }}>
                                <Button block transparent style={{width:wp(17), height:hp(4)}}>
                                            <AppText text='حجز' color='black' fontSize={wp(3.5)}/>
                                </Button> 
                        </LinearGradient>
                   </View>
                   
                   
               </View>
            </View>
        )
    }
    render() {
     //   alert(JSON.stringify(data[0]))
         
        return(
            <View style={{flex:1}}>
                <StatusBar hidden/>
               <View style={{width: WIDTH, height: hp(25)}}>
                    <ImageBackground 
                            style={{position:'absolute', top:0, left:0, right:0, height: hp(25)}}
                            source={require('../assets/imgs/Home-repair.png')}
                            >
                            <HeaderSection/>       
                            
                        </ImageBackground>
               </View>
               
               <View  style={{flex:1, backgroundColor:'#848484'}}>
                    <RecyclerListView
                                
                                    layoutProvider={this.layoutProvider}
                                    dataProvider={this.state.dataProvider}
                                    rowRenderer={this.renderRow}
                            />
               </View>
            </View>
        )
    }
}