import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import AddFriend from './AddFriend';
import UserOnline from './UserOnline';

const StatusComponent = () =>{
    const [search,setSearch] = React.useState('');

    const handleChangeSearch = () =>{

    }
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.Appbar}>
               <Appbar.BackAction onPress={() => navigation.goBack()}/>
               <Appbar.Content title="Status" />
            </Appbar.Header>
            <Searchbar
                style={styles.search}
                placeholder='add user'
                value={search}
                onChange = {handleChangeSearch}
            />
            <ScrollView>
                <UserOnline />
                <UserOnline />
                <View>
                    <Text>add friend list</Text>
                </View>
                <AddFriend />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        display : 'flex'
    },
    Appbar :{
        display : 'flex',
        backgroundColor : 'white'
    },
    search : {
        borderRadius : 100,
        margin : 10,
    }
})

export default StatusComponent;