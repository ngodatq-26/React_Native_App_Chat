/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './modules/auth/screens/LoginScreen';
import HomeScreen from './modules/Home/screens/HomeScreens';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from "../AwesomeTSProject/redux/configureStore"
import { MainStackNavigator } from './Stack';



const App = () =>{

  return (
    <NavigationContainer independent={true}>
       <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App;