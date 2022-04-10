import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import { Text } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationComponent from '../../common/components/BottomNavigationComponent';


const Tab= createBottomTabNavigator();

const HomeScreen = () =>{
    const {height} = useWindowDimensions();

    return (   

     <BottomNavigationComponent/> 

    )
}

const styles = StyleSheet.create({
    container :{
        
        justifyContent : 'center',
    },
    navigationBottom : {
        display : 'flex',
        flex : 1,
    }
})

export default HomeScreen;