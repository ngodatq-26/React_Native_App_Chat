import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { Avatar } from 'react-native-paper'

const UserOnline = () => {
  const {height} = useWindowDimensions();
  return (
    <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style = {styles.viewName}>user_name</Text>
                       <Text style = {styles.viewMes}>online</Text>
                    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    viewMember : {
        display : 'flex',
        flexDirection : 'row',
        marginTop : 5,
        padding : 10,
        borderBottomColor : 'gray',
        borderBottomWidth : 0.3
    },
    viewMes : {
        display : 'flex',
        paddingLeft : 10,
        color : 'black'
    },
    viewName : {
        display : 'flex',
        fontSize : 18,
        fontWeight : 'bold',
        color : 'black',
        paddingLeft : 10
    },
})
export default UserOnline