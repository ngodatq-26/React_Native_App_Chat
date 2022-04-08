import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const StatusComponent = () =>{

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.Appbar}>
               <Appbar.BackAction />
               <Appbar.Content title="Status" />
            </Appbar.Header>
            <ScrollView>
                
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