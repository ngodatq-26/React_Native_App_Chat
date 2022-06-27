import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-paper'
import { StackNavigatorList } from '../../../types';

const UserChat = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat')} style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 00 </Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
    </TouchableOpacity>
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