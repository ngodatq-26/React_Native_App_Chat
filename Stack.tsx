import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './modules/auth/screens/LoginScreen';
import HomeScreen from './modules/Home/screens/HomeScreens';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from "../AwesomeTSProject/redux/configureStore"
import BottomNavigationComponent from './modules/common/components/BottomNavigationComponent';
import { StackNavigatorList } from './types';


const Stack = createStackNavigator<StackNavigatorList>();

export const MainStackNavigator = () =>{
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainScreen" component={BottomNavigationComponent} />
    </Stack.Navigator>
  )
}