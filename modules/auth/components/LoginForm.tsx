import React from 'react';
import {  Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { Card, TextInput,Button } from 'react-native-paper';
import { NavigationContainer} from '@react-navigation/native';
import { Actions } from 'react-native-router-flux';
import { useNavigation } from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorList } from '../../../types';

const LoginForm = () =>{

  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

  const [formValues,setFormValues] = React.useState({
    email : '',
    password : ''
  })
  
  const handleEmail = (e : any) =>{
    setFormValues({...formValues,email : e})
  }

  const handlePassword = (e : any) =>{
    setFormValues({...formValues,password : e})
  }

  const {height} = useWindowDimensions();
    return (
      <View>
        
        <View style={styles.viewInput}>
          <TextInput
              label="Email"
              mode="flat"
              value={formValues.email}
              theme={{ roundness: 0 }}
              placeholder="mời bạn nhập email"
              onChange={handleEmail}
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
                onPress = {() =>{
                  navigation.navigate("Main",{screen : 'Home'})
                }}
                style={[styles.cusButton,{marginLeft : height*0.14}]}
                theme={{ roundness: 5 }}
        >Login
        </Button>
        <Button mode="contained" 
                
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