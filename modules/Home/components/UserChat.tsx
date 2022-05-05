import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'

const UserChat = () => {
  return (
    <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 00 </Text>
                       <Text style = {styles.viewMes}>kkk</Text>
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
    viewName : {
        display : 'flex',
        fontSize : 18,
        fontWeight : 'bold',
        color : 'black',
        paddingLeft : 10
    },
    viewMes : {
        display : 'flex',
        paddingLeft : 10,
        color : 'black'
    },
    search :{
        borderRadius : 100,
        margin : 10,
    },
    Appbar : {
        backgroundColor : 'white'
    }
})

export default UserChat