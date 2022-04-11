import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import LoginForm from '../components/LoginForm';
import { createStackNavigator } from '@react-navigation/stack';

const LoginScreen= () =>{
    
    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
          <Card style= {[styles.cardView,{height : height *0.9}]}>
              <View style={styles.imageView}>
                <Image source={require('../../../src/images/Logo.png')} 
                        style={[styles.logo,{height : height*0.3 }]}
                        resizeMode ="contain"
                />
              </View>
              <View style={styles.formView}>
                 <LoginForm />
              </View>
          </Card>
       </View>
    )
}

const styles = StyleSheet.create({
    root : {
        alignItems : 'center',
        display : 'flex',
        paddingTop :10
    },
    cardView : {
        alignItems : 'center',
        padding : 20,
        margin : 'auto',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        maxWidth :370,
    },
    logo : {
        maxWidth : 340,
        maxHeight : 150,
    },
    imageView :{
        alignItems : 'center',
    },
    formView :{
        display :'flex',
        
    }
  });

export default LoginScreen;