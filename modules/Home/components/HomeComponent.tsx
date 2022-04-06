import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const HomeComponent = () =>{

    return(
        <View>
            <ScrollView>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text style={styles.viewName}>yêu Đạt quá</Text>
                       <Text>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text>yêu Đạt quá</Text>
                       <Text>kkk</Text>
                    </View>
                </View>
                <View style = {styles.viewMember}> 
                    <View>
                      <Avatar.Image size={60} source={require('../../../src/images/Avatar/Avatar.jpg')} />
                    </View>
                    <View>
                       <Text>yêu Đạt quá</Text>
                       <Text>kkk</Text>
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
        padding : 10
    },
    viewName : {
        display : 'flex',
        fontSize : 18
        ,
        fontWeight : 'bold',
        color : 'black'
    }
})

export default HomeComponent