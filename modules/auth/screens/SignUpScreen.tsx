import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ActivityIndicator, Button, Card } from 'react-native-paper';
import { NavigationType } from 'react-router-native';
import { API_PATHS } from '../../../configs/Api';
import { AuthNavigatorList } from '../../../types';
import { fetchAPI } from '../../common/customAxios';
import SignUpForm from '../components/SignUpForm';


const SignUpScreen = () =>{

    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigatorList>>();
    const [loading,setLoading] = React.useState(false);
    const [error,setError] = React.useState('');
    const [text,setText] = React.useState('');

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    const onSignUp = React.useCallback(async (email : string,password : string) =>{
        setLoading(true);
        await fetchAPI(API_PATHS.register,'POST',{email : email,password : password})
        .then(user =>{
            if(user?.data.success == "false") {
                setError(user?.data.message);
                setText('red');
            } 
            if(user?.data.success == "true") {
                setError(user?.data.message);
                setText('green');
            }
        }).catch((err)=>{
            setError(err);
        }) 
        setLoading(false)
    },[])

    const {height} = useWindowDimensions();

    return (
        <View>
            
            {loading ? <ActivityIndicator animating={true} /> :
          <Card style= {[styles.cardView,{height : height *0.9}]}>
              <View style={styles.imageView}>
                <Image source={require('../../../src/images/Logo.png')} 
                        style={[styles.logo,{height : height*0.15 }]}
                        resizeMode ="contain"
                />
              </View>
              <Text style={{color : text}}>{error}</Text>
              <View style={styles.formView}>    
                 <SignUpForm onSignUp = {onSignUp}/>
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

export default SignUpScreen;