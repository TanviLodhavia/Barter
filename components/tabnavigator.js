import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Donate from '../screens/donatescreen';
import Request from '../screens/requestscreen';

const TabNavigator = createBottomTabNavigator({
    Donate:{screen:Donate,
    navigationOptions:{
        tabBarIcon:<Image 
                style={{width:20, height:20}}
                source={require('../assets/request-list.png')}/>,
        tabBarLabel:'Donate Book'
    }},
    Request:{screen:Request,
    navigationOptions:{
        tabBarIcon:<Image 
            style={{width:20, height:20}}
            source={require('../assets/request-book.png')}/>,
        tabBarLabel:'Request Book'
    }}
})

export default TabNavigator;