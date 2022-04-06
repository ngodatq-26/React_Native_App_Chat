import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from '../../Home/components/HomeComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileComponent from '../../Home/components/ProfileComponent'

const Tab= createBottomTabNavigator();

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>

const Account = ()=> <Text>Account</Text>


const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";


const BottomNavigationComponent = () =>{
    return (
        <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeComponent}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="home" color={color} size={size} />)
                }}
            />
            <Tab.Screen 
                name="Status" 
                component={MusicRoute}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="heartbeat" color={color} size={size} />)
                }}
            />
            <Tab.Screen 
                name="User" 
                component={ProfileComponent}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name="user" color={color} size={size} />)
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigationComponent