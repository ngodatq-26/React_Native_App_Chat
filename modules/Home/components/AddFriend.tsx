import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-paper'

const AddFriend = () => {

  const [add,setAdd] = React.useState(false);
  return (
    <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View style={{display : 'flex',flexDirection : 'row'}}>
                       <View style = {styles.viewMes}>
                           <Text style = {styles.viewName}>user_name2</Text>
                       </View>
                       <View style = {styles.viewMes2}>
                           <Button>add</Button>
                       </View>
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
        paddingTop : 12,
        color : 'black'
    },
    viewName : {
        display : 'flex',
        fontSize : 18,
        fontWeight : 'bold',
        color : 'black',
        paddingLeft : 10
    },
    viewMes2 : {
        display : 'flex',
        paddingLeft : 100,
        paddingTop : 12,
        color : 'black'
    },
})

export default AddFriend