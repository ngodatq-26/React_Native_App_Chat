import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { ScrollView } from 'react-native';
import Modal from 'react-native-modal/dist/modal';
import { Appbar, Avatar, Button, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { auth } from '../../../src/firebase/config';
import { signOut } from "firebase/auth";

const ProfileComponent = () =>{
  const navigation = useNavigation();
  
  const {height} = useWindowDimensions();
  const [switchButton,setSwitchButton] = React.useState(true);
  const [notification,setNotification] = React.useState(true);
  const [visibleModal, setVisibleModal] = React.useState(false);

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const toggleNotification = () =>{
    setNotification(!notification)
  }
  const toggle = () =>{
    setSwitchButton(!switchButton)
  }

  const SignOutUser=() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
      navigation.navigate("Login");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View style= {styles.container}>
      <Appbar.Header style={styles.Appbar}>
               <Appbar.BackAction onPress={() => navigation.goBack()}/>
               <Appbar.Content title="Profile" />
      </Appbar.Header>
      <ScrollView>
        <Modal isVisible={visibleModal} style={styles.modal}>
          <View><Text>You want exit this app</Text></View>   
          <View>
            <Button mode="contained" onPress={SignOutUser}>Ok</Button>
            <Button mode="contained" onPress={hideModal}>Cancel</Button>
          </View>
        </Modal>
        <View style={styles.avatar}>
          <Avatar.Image size={height*0.2} source={require('../../../src/images/Avatar/Profile.jpg')} />
          <View><Text style={{color : 'black',fontSize :20}}>TCheng</Text></View>
        </View>
        <View style={styles.viewSet}>
           {
             switchButton ?
             <View style={styles.icon}>
               <Icon name="user-check" size={30}/>
             </View> : 
             <View style={styles.icon}>
               <Icon name="user-lock" size={30}/>
             </View>
           }
           <View style={styles.textSet}>
             <Text>Set status</Text>
           </View>
           <View style={styles.icon}><Switch value={switchButton} onValueChange={toggle}/></View>
        </View>
        <View style={styles.viewSet}>
           <View style={styles.icon}>
             <Icon name="hammer" size={30}/>
           </View>
           <View style={styles.textSet}>
             <Text>Change password</Text>
           </View>
           <View style={styles.icon}></View>
        </View>
        <View style={styles.viewSet}>
          {notification ? 
            <View style={styles.icon}>
             <Ionicons name="notifications" size={30}/>
            </View> :
            <View style={styles.icon}>
            <Ionicons name="notifications-off" size={30}/>
            </View>
           }
           <View style={styles.textSet}>
             <Text>Set status</Text>
           </View>
           <View style={styles.icon}><Switch value={notification} onValueChange={toggleNotification}/></View>
        </View>
        <TouchableOpacity style={styles.viewSet} onPress={showModal}>
           <View style={styles.icon}>
             <Ionicons name="log-out" size={30}/>
           </View>
           <View style={styles.textSet}>
             <Text>Log out</Text>
           </View>
           <View style={styles.icon}></View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display : 'flex',
    flexDirection : 'column',
  },
  avatar :{
    justifyContent: 'center',
    alignItems :'center',
    width : '100%',
    marginTop : 20
  },
  Appbar : {
    backgroundColor : 'white'
  },
  viewSet :{
    display : 'flex',
    flexDirection : 'row',
    borderBottomWidth : 0.35
  },
  icon :{
    display : 'flex',
    flex : 1,
    margin : 15
  },
  textSet : {
    display : 'flex',
    flex : 5,
    margin : 20
  },
  modal : {
    backgroundColor : 'white',
    display :'flex'
  }
})

export default ProfileComponent;