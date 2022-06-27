import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

const FriendChat = () => {

const [messages, setMessages] = React.useState<any>([]);
const {height} = useWindowDimensions();
const windowWidth = Dimensions.get('window').width;
  return (
    <View style={[styles.view,{width : windowWidth*0.7}]}> 
      <Text style={styles.text}>testdsfdsfdsfsdfsdf dsdasdadasfdsfdsfdsfsd</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    view : {
        marginTop : 15,
        marginBottom : 15,
        marginLeft : 0
    },
    text : {
      borderWidth : 1,
      color :'#373b3b',
      borderColor :'#E8EAEA',
      fontSize : 18,
      borderRadius : 8,
      backgroundColor : '#D9E4E4'
    }
  })

export default FriendChat