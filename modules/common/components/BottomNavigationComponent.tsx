import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from '../../Home/components/HomeComponent';

const Tab= createBottomTabNavigator();

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>

const Account = ()=> <Text>Account</Text>

const BottomNavigationComponent = () =>{
    return (
        <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeComponent} />
                    <Tab.Screen name="Status" component={MusicRoute} />
                    <Tab.Screen name="Recent" component={RecentsRoute} />
                    <Tab.Screen name="Account" component={Account} />
                </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigationComponent