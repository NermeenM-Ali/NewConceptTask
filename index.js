import { YellowBox } from 'react-native'
import {registerScreens} from './src/screens'
import { Navigation } from 'react-native-navigation';
import SideMenu from './src/components/SideMenu'

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: ...'])

registerScreens()

Navigation.events().registerAppLaunchedListener(()=> {    
Navigation.setRoot({
    root: {
        sideMenu: {
            right: {
              component: {
                    id: 'SideMenu',
                   name: 'SideMenu',
                   
              }
            },
            center: {
                stack: {
                    id: 'AppStack',
                    children: [
                        {
                            component: {
                                name: 'Login',
                                options: {  
                                    topBar: {
                                        visible: false,
                                        drawBehind: true
                                      },
                                      sideMenu: {
                                          right: {
                                            enabled: false
                                             
                                          }
                                      } 
                                  },
                                    
                            }
                           
                        }
                    ]
                },
            }
        }
    }
})
})
































/*
import {Navigation} from 'react-native-navigation'
import App from './App';
import Login from './test/screens/Login';
import Home from './test/screens/Home';


// Da 34an a3ml register l screen
Navigation.registerComponent("Login", () => Login)
//Navigation.registerComponent("Home", () => Home)

// 34an a3ml register ll app nfso b2a 
// Navigation.events().registerAppLaunchedListener = AppRegistery.RegisterComponent
Navigation.events().registerAppLaunchedListener(()=> {
    Navigation.setRoot({
        root: {
           stack: {
               id:'AppStack',
               children: [ // array of objects w kol object 3obara 3n screen
                   {
                        component: {
                            name:'Login',
                            options: {
                                topBar: {
                                    visible: false
                                }
                            }
                        }
                   }
               ]
           }
        }
    })
})*/