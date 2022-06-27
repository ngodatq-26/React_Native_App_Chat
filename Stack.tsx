import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './modules/auth/screens/LoginScreen';
import HomeScreen from './modules/Home/screens/HomeScreens';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { AuthNavigatorList, StackNavigatorList } from './types';
import SignUpScreen from './modules/auth/screens/SignUpScreen';
import CookieManager from '@react-native-cookies/cookies';
import { ACCESS_TOKEN_KEY } from './utils/constant';
import ChatScreen from './modules/chat/screens/ChatScreen';

const Stack = createStackNavigator<StackNavigatorList>();
const Stack2 = createStackNavigator<AuthNavigatorList>();


export const MainStackNavigator = () =>{
  const isLogin = 1;
  return (<>
    { isLogin ?
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator> : 
    <Stack2.Navigator screenOptions={{headerShown : false}}>
       <Stack2.Screen name="Login" component = {LoginScreen} />
       <Stack2.Screen name="Register" component={SignUpScreen} />
    </Stack2.Navigator>
    }</>
  )
}