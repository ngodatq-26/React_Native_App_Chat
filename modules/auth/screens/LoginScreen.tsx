import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ActivityIndicator, Card, TextInput } from 'react-native-paper';
import LoginForm from '../components/LoginForm';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { API_PATHS } from '../../../configs/Api';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavigatorList, StackNavigatorList } from '../../../types';
import { fetchAPI } from '../../common/customAxios';
import { useSelector } from 'react-redux';
const LoginScreen= () =>{
    
    const [loading,setLoading] = React.useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigatorList>>();
    const {height} = useWindowDimensions();
    const [error,setError] = React.useState('');


    const onLogin = React.useCallback(async (email : string,password : string) =>{
        setLoading(true);
        await fetchAPI(API_PATHS.login,'POST',{email : email,password : password})
        .then(user =>{
            if(user?.data.success == "false") {
                setError(user?.data.message);
            } 
            if(user?.data.success == "true") {
                setError('ok')
            }

        }).catch((err)=>{
            setError(err);
        }) 
        setLoading(false)
    },[])

    return (
        <View style={styles.root}>
            {loading ? <ActivityIndicator animating={true} /> :
          <Card style= {[styles.cardView,{height : height *0.9}]}>
              <View style={styles.imageView}>
                <Image source={require('../../../src/images/Logo.png')} 
                        style={[styles.logo,{height : height*0.3 }]}
                        resizeMode ="contain"
                />
              </View>
              <Text style={styles.textError}>{error}</Text>
              <View style={styles.formView}>
                 <LoginForm onLogin={onLogin} loading={loading}/>
              </View>
          </Card>}
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

export default LoginScreen;