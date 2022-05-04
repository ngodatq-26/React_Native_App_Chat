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
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { MainStackNavigator } from './Stack';

const App = () =>{

  return (
    <NavigationContainer independent={true}>
       <MainStackNavigator />
    </NavigationContainer>
  )
}

export default App;