import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Avatar, Searchbar } from 'react-native-paper';
import UserChat from './UserChat';

const HomeComponent = () =>{

    const [search,setSearch] = React.useState('');
    const [loading,setLoading] = React.useState(false);
    const handleChangeSearch = (e : any) =>{
        setSearch(e.target.value)
    }
    
    const [data,setData] = React.useState();
    
    const onSearch = React.useCallback(async ()=>{
        setLoading(true);
        
        setLoading(false);
    },[]);

    return(
        <View>
            <Appbar.Header style={styles.Appbar}>
               <Appbar.Action icon="menu" />
               <Appbar.Content title="Chat App" />
               <Avatar.Image size={40} source={require('../../../src/images/Avatar/Profile.jpg')} />
            </Appbar.Header>
            <Searchbar
                style={styles.search}
                placeholder='Search'
                value={search}
                onChange = {handleChangeSearch}
            />
            <ScrollView>
                <UserChat />
            </ScrollView>
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

export default HomeComponent