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


const App = () =>{
  return (
    <View style={styles.body}>
      <HomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  body : {
    
  }
})

export default App;