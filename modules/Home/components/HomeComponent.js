import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Avatar, Searchbar } from 'react-native-paper';

const HomeComponent = () =>{

    const [search,setSearch] = React.useState('');

    const handleChangeSearch = (e) =>{
        setSearch(e.target.value)
    }
    
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
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 00 </Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 01</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá 02</Text>
                       <Text style = {styles.viewMes}>kkk</Text>
                    </View>
                </View>
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