import React, {Component} from 'react'
import { Navigation } from 'react-native-navigation'
import { Provider } from "react-redux"
import store from '../store'
import Login from './Login'
import Home from './Home'
import SideMenu from '../components/SideMenu'

// HOC 
function reduxStoreWrapper (MyComponent, store) {
        return class StoreWrapper extends Component {
            render () {
                return (
                    <Provider store={store}>
                        <MyComponent />
                    </Provider>
                );
            }
        };
}

export function registerScreens(){
    Navigation.registerComponent('Login', ()=> reduxStoreWrapper(Login, store))
    Navigation.registerComponent('Home', ()=> reduxStoreWrapper(Home, store))
    Navigation.registerComponent('SideMenu', ()=> reduxStoreWrapper(SideMenu, store))
}

