import React from 'react';
import {  Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native';
import { Card, TextInput,Button } from 'react-native-paper';
import { NavigationContainer} from '@react-navigation/native';
import { Actions } from 'react-native-router-flux';
import { useNavigation } from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorList } from '../../../types';
import Ionicons from'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik';
import { SignInSchema } from '../utils';
interface props {
  onLogin(email : string,password : string) : void,
  loading : boolean
}
const LoginForm = (props : props) =>{

  const {onLogin} = props;
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const formik = useFormik({
    initialValues: {
      password:'Datdatdat',
      email: 'ngoquangdatjpnd@gmail.com',
    },
    validationSchema : SignInSchema,
    onSubmit: values => {
    },
 });

 const onSubmitClick = () =>{
   onLogin(formik.values.email,formik.values.password)
 }

  const {height} = useWindowDimensions();
    return (
      <View>
        
        <View style={styles.viewInput}>
          <TextInput
              label="Email"
              mode="flat"
              value={formik.values.email}
              theme={{ roundness: 0 }}
              placeholder="mời bạn nhập email"
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
          />
          { formik.touched.email && formik.errors.email ?
              <Text style={{ fontSize: 11, color: 'red' }}>{formik.errors.email}</Text> : null
            }
        </View>
        <View style={styles.viewInput}>
          <TextInput
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              label="Password"
              placeholder="mời bạn nhập email"
              mode="flat"
              secureTextEntry
              theme={{ roundness: 0 }}
          />
          { formik.touched.password && formik.errors.password ?
              <Text style={{ fontSize: 11, color: 'red' }}>{formik.errors.password}</Text> : null
            }
        </View>
        <Button mode="contained" 
                onPress = {onSubmitClick}
                style={[styles.cusButton]}
                theme={{ roundness: 0 }}
                icon = "login"
        >Login
        </Button>
        <Button mode="contained" 
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