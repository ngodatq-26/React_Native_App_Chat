import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Appbar, Avatar, TextInput } from 'react-native-paper'

const ChatScreen = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  return (   
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
        <View>
          <Appbar.Header style={[styles.Appbar]}>
               <Appbar.BackAction onPress={() => navigation.goBack()}/>
               <Appbar.Content title="Status" />
            </Appbar.Header>
         </View>
          <View style={styles.textInput}></View>
          <View style={styles.btnContainer}>
              <TextInput placeholder="message" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

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