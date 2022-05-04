import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ActivityIndicator, Button, Card } from 'react-native-paper';
import { NavigationType } from 'react-router-native';
import SignUpForm from '../components/SignUpForm';


const SignUpScreen = ({navigation}) =>{

    const {height} = useWindowDimensions();

    return (
        <View>
          <Card style= {[styles.cardView,{height : height *0.9}]}>
              <View style={styles.imageView}>
                <Image source={require('../../../src/images/Logo.png')} 
                        style={[styles.logo,{height : height*0.15 }]}
                        resizeMode ="contain"
                />
              </View>
              <Text></Text>
              <View style={styles.formView}>    
                 <SignUpForm/>
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
        
    },
    textError : {
        color : 'red',
    }
});

export default SignUpScreen;