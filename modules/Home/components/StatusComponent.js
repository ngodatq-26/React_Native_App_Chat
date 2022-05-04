import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const StatusComponent = () =>{
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.Appbar}>
               <Appbar.BackAction onPress={() => navigation.goBack()}/>
               <Appbar.Content title="Status" />
            </Appbar.Header>
            <ScrollView>
                <View>

                </View>
                <View>

                </View>
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
    }
})

export default StatusComponent;