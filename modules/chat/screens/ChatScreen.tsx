import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Appbar, Avatar, TextInput } from 'react-native-paper'
import FriendChat from '../components/FriendChat'
import MeChat from '../components/MeChat'

const ChatScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  return (   
    <View style={styles.container}>
         <View>
          <Appbar.Header style={[styles.Appbar]}>
               <Appbar.BackAction onPress={() => navigation.goBack()}/>
               <Appbar.Content title="Status" />
            </Appbar.Header>
         </View>
         <ScrollView>
           <FriendChat />
           <MeChat />
           <FriendChat />
           <FriendChat />
           <FriendChat />
           <FriendChat />
           <MeChat />
           <FriendChat />
           <MeChat />
           <MeChat />
         </ScrollView>
         <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "position"}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View >
                    <TextInput style={{display : 'flex'}} placeholder="message" />
                </View>
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 50
  },
  textInput: {
    marginBottom: 50
  },
  btnContainer: {
    marginTop: 20
  },
  Appbar : {
    backgroundColor : 'white'
}
})

export default ChatScreen