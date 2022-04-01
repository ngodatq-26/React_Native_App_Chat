import React from 'react';
import {  Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { Card, TextInput,Button } from 'react-native-paper';

const LoginForm = () =>{

  const formValues = React.useState({
    email : '',
    password : ''
  })
  
  const {height} = useWindowDimensions();
    return (
      <View>
        
        <View style={styles.viewInput}>
          <TextInput
              label="Email"
              mode="flat"
              theme={{ roundness: 0 }}
              placeholder="mời bạn nhập email"
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
              label="Password"
              placeholder="mời bạn nhập email"
              mode="flat"
              secureTextEntry
              theme={{ roundness: 0 }}
          />
        </View>
        <Button mode="contained" 
                onPress={() => console.log('Pressed')} 
                style={[styles.cusButton,{marginLeft : height*0.14}]}
                theme={{ roundness: 5 }}
        >Login
        </Button>
        <Button mode="contained" 
                onPress={() => console.log('Pressed')} 
                style={[styles.cusButton,{marginLeft : height*0.14}]}
                theme={{ roundness: 5 }}
        >Register
        </Button>
      </View>
    )
}

const styles = StyleSheet.create({
  cusButton :{
    width : 180,
    marginBottom : 15
  },
  viewInput : {
    marginBottom : 15
  }
})
export default LoginForm;