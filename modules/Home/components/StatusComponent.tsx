import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
import { API_PATHS } from '../../../configs/Api';
import { fetchAPI } from '../../common/customAxios';
import AddFriend from './AddFriend';
import UserOnline from './UserOnline';

const StatusComponent = () =>{
    const [search,setSearch] = React.useState('');
    const [loading,setLoading] = React.useState(false);
    const [data,setData] = React.useState<any>();

    const handleChangeSearch = React.useCallback(async () =>{
        setLoading(true);

        await fetchAPI(API_PATHS.search,'POST',{search : search}).then(result =>{
            setData(result);
            console.log(data)
        })
        setLoading(false);
    },[])

    
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
                onChangeText = {(e) =>{
                    setSearch(e);
                }}
                onIconPress = {handleChangeSearch}
            />
            
            <ScrollView>
                
                <UserOnline />
                <UserOnline />
                <View>
                    <Text>add friend list</Text>
                </View>
                <AddFriend />
                {
                    loading ? <Text>loading</Text> : <Text>not loading</Text>
                }
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