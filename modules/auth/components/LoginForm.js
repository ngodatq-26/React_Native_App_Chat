import React, { useEffect, useState } from 'react';
import {  Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { Card, TextInput,Button } from 'react-native-paper';
import { NavigationContainer} from '@react-navigation/native';
import { Actions } from 'react-native-router-flux';
import { useNavigation } from '@react-navigation/core';
import Ionicons from'react-native-vector-icons/Ionicons';
import { auth } from '../../../src/firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () =>{

  const navigation = useNavigation();

  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isUser, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //const uid = user.uid;
        setUser(true);
        navigation.navigate("Home");
      } else {
        // User is signed out
      }
    });
    return unsubscribe
  }, [])

  const signInUser=() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsSignIn(true);
        console.log("ok");
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/user-not-found") {
          alert("User not found");
        }
        if (error.code === "auth/wrong-password") {
          alert("Wrong password");
        }
      });
  }

  const {height} = useWindowDimensions();
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
              value={password}
              mode="flat"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              theme={{ roundness: 0 }}
          />
        </View>
        <Button mode="contained" 
                onPress = {signInUser}
                style={[styles.cusButton]}
                theme={{ roundness: 0 }}
                icon = "login"
        >Login
        </Button>
        <Button mode="contained" 
                onPress = {() => navigation.navigate("Register")}
                icon="pencil"
                style={[styles.cusButton]}
                theme={{ roundness: 0 }}
        >Register
        </Button>
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
    fontSize : 20,
    margin : 0
  }
})
export default LoginForm;