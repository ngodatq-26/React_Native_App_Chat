import React, { useEffect, useState } from 'react';
import LoginScreen from './modules/auth/screens/LoginScreen';
import HomeScreen from './modules/Home/screens/HomeScreens';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {  AuthNavigatorList, StackNavigatorList } from './types';
import messengerScreen from './modules/Messenger/screens/messengerScreen';
import SignUpScreen from './modules/auth/screens/SingUpScreen';
import { auth } from './src/firebase/config';
import { onAuthStateChanged } from "firebase/auth";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createStackNavigator()

export const MainStackNavigator = () =>{
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component ={messengerScreen} />
      <Stack.Screen name="Login" component ={LoginScreen} />
      <Stack.Screen name="Register" component ={SignUpScreen} />
    </Stack.Navigator> 
  )
}