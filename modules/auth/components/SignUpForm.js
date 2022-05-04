import React, { useState } from 'react';
import { Alert, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavigatorList, StackNavigatorList } from '../../../types';
import { auth } from '../../../src/firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () =>{

    const navigation = useNavigation();

    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {width} = useWindowDimensions();

    const signUpUser=() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setIsSignUp(true);
          console.log("ok");
          navigation.navigate("Login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
        });
    }

    return (
        <View>
        <View style={styles.viewInput}>
          <TextInput
              label="Email"
              mode="flat"
              value={email}
              theme={{ roundness: 0 }}
              placeholder="mời bạn nhập email"
              onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
              label="Password"
              mode="flat"
              value={password}
              secureTextEntry
              theme={{ roundness: 0 }}
              onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
              label="Repeat Password"
              mode="flat"
              value={password}
              secureTextEntry
              theme={{ roundness: 0 }}
              onChangeText={text => setPassword(text)}
          />
        </View>

        <Button mode="contained" 
                icon="pencil"
                style={[styles.cusButton]}
                theme={{ roundness: 0 }}
                onPress = {signUpUser}
        >Register
        </Button>
        <Text onPress={() =>{
            navigation.navigate('Login')
        }} style={[styles.textOr,{marginLeft : width*0.2}]}>
            if you have account, to login
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    cusButton :{
        marginBottom : 15
      },
      viewInput : {
        marginBottom : 15
      },
      textOr : {
        justifyContent : "center",
        fontSize : 15,
    }
})

export default SignUpForm;