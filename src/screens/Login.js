import React, {Component} from 'react'
import {View, StatusBar, Keyboard, ImageBackground, Dimensions, Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import { Field, reduxForm} from 'redux-form'
import AppInput from '../common/AppInput'
import { Button } from 'native-base'
import AppText from '../common/AppText'
import { Navigation } from 'react-native-navigation'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const validate = values => {
    const errors = {}

    if(!values.email) {
        errors.email = 'مطلوب'
    }
    if(!values.password) {
        errors.password = 'مطلوب'
    }
    return errors
}

class InputComponent extends Component {
    render() {
        const {
            inputRef,returnKeyType,onSubmit,onChange,input,label,borderColor,
            type,password, numeric,textColor,icon,iconType,marginBottom,labelColor,
            isRTL,iconColor,editable,isRequired,meta: { touched, error, warning },
        } = this.props;

        let hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <AppInput
                onEndEditing={() => input.onBlur(input.value)}
                onBlur={() => input.onBlur(input.value)}
                onChange={onChange}
                ref={inputRef}
                icon={icon}
                iconType={iconType}
                textColor={textColor}
                marginBottom={marginBottom}
                hasError={hasError && touched}
                error={error}
                input={input}
                label={label}
                labelColor= {labelColor}
                type={type}
                isRTL={this.props.isRTL}
                password={password}
                numeric={numeric}
                editable={editable}
                borderColor={borderColor}
                iconColor={iconColor}
                onSubmit={onSubmit}
                blurOnSubmit={false}
                returnKeyType={returnKeyType}
                isRequired={isRequired}
            />
        );
    }
}

class Login extends Component {

    renderLogo = ()=> {
        return(
            <View style={{position:'absolute', top:0, left:0, right:0, height:hp(25), width: WIDTH}}>
                 <Image
                      source={require('../assets/imgs/Group.png')} 
                      style={{width: wp(40), height: hp(20), alignSelf:'center', marginVertical: hp(8)}}     
                /> 
            </View>
        )
    }

    renderContent = ()=> {
        return(
            <View style={{width:wp(85), marginHorizontal:hp(3), alignSelf:'center'}}>
                <Field name='email' label='البريد الالكتروني'
                       component={InputComponent} 
                       type='email-address'
                       onSubmit={()=> Keyboard.dismiss()}
                       returnKeyType='done'
                       labelColor= 'white'
                       borderColor= 'white'
                />

                <Field name='password' label='كلمه المرور'
                       component={InputComponent} 
                       password
                       onSubmit={()=> Keyboard.dismiss()}
                       returnKeyType='done'
                       labelColor= 'white'
                       borderColor= 'white'
                />
                
            </View>
        )
    }

    renderButton = ()=> {
        return(
            <View style={{position:'absolute', bottom:0, left:0, right:0, height:hp(25)}}>
               <LinearGradient  colors={['#F6813A', '#FAC858']} style={{width: wp(80), height: hp(9), alignSelf:'center', borderRadius:wp(1), elevation:2}}>
                <Button block transparent
                            style={{ width: wp(80), height: hp(9), alignSelf:'center'}}
                            onPress={()=> Navigation.push('AppStack', {
                                component:{
                                    name:'Home',
                                    options: {
                                        topBar: {
                                            visible: false,
                                            drawBehind: true
                                        }  
                                    }
                                }
                            })}
                            >
                    <AppText text='تسجيل الدخول' fontSize={wp(4)} alignSelf='center' color='white'/>
                    </Button>
               </LinearGradient>

                <View style={{flexDirection:'row', width: WIDTH, alignItems:'center', justifyContent:'center', marginTop:hp(3)}}>
                    <Button transparent>
                        <AppText text = 'تسجيل الدخول' fontSize={wp(4)} alignSelf='center' color='white'/>
                    </Button>

                    <AppText text= '-' color='white' fontSize={wp(4)} marginHorizontal={wp(2)}/>

                    <Button transparent>
                        <AppText text = 'لديك حساب' fontSize={wp(4)} alignSelf='center' color='white'/>
                    </Button>
                </View>
            </View>       
        )
    }
    render() {
        return(
            <View style={{flex:1}}>
                <StatusBar hidden/>
                <ImageBackground
                         source={require('../assets/imgs/Home-repair.png')}
                         style={{width: WIDTH, height: HEIGHT}}   
                >
                    
                    <View style={{backgroundColor:'black', opacity:0.8, width: WIDTH, height: HEIGHT, justifyContent:'center'}}>
                        {this.renderLogo()}   
                        {this.renderContent()}
                        {this.renderButton()}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const LoginForm = reduxForm({
    form: 'LOGIN',
    validate
})(Login)

export default LoginForm