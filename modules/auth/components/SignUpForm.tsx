import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import { SignUpSchema } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNavigatorList } from '../../../types';
interface props {
    onSignUp(email : string,password : string) : void
}
const SignUpForm = (props : props) =>{

    const {onSignUp} = props;
    const navigation = useNavigation<NativeStackNavigationProp<AuthNavigatorList>>();

    const formik = useFormik({
        initialValues: {
          password:'Datdatdat',
          email: 'ngoquangdatjpnd@gmail.com',
          confirmPassword : 'Datdatdat'
        },
        validationSchema : SignUpSchema,
        onSubmit: values => {
        },
     });

    const RegisterClick = () =>{
       if(!formik.errors.password && !formik.errors.confirmPassword && !formik.errors.email && formik.values.email != ""){
        onSignUp(formik.values.email,formik.values.password);
       }
    }

    return (
        <View>
        <View style={styles.viewInput}>
          <TextInput
              label="Email"
              mode="flat"
              value={formik.values.email}
              theme={{ roundness: 0 }}
              placeholder="mời bạn nhập email"
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
          />
          { formik.touched.email && formik.errors.email ?
              <Text style={{ fontSize: 11, color: 'red' }}>{formik.errors.email}</Text> : null
            }
        </View>
        <View style={styles.viewInput}>
          <TextInput
              value={formik.values.password}
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              label="Password"
              placeholder="mời bạn nhập email"
              mode="flat"
              secureTextEntry
              theme={{ roundness: 0 }}
          />
          { formik.touched.password && formik.errors.password ?
              <Text style={{ fontSize: 11, color: 'red' }}>{formik.errors.password}</Text> : null
            }
        </View>
        <View style={styles.viewInput}>
          <TextInput
              value={formik.values.confirmPassword}
              onChangeText={formik.handleChange('confirmPassword')}
              onBlur={formik.handleBlur('confirmPassword')}
              label="Password"
              placeholder="mời bạn nhập email"
              mode="flat"
              secureTextEntry
              theme={{ roundness: 0 }}
          />
          { formik.touched.confirmPassword && formik.errors.confirmPassword ?
              <Text style={{ fontSize: 11, color: 'red' }}>{formik.errors.confirmPassword}</Text> : null
            }
        </View>
        <Button mode="contained" 
                icon="pencil"
                onPress={RegisterClick}
                style={[styles.cusButton]}
                theme={{ roundness: 0 }}
        >Register
        </Button>
      </View>
    )
}

const styles = StyleSheet.create({
    cusButton :{
        marginBottom : 15
      },
      viewInput : {
        marginBottom : 15
      },
      textOr : {
        justifyContent : "center",
        fontSize : 20,
        margin : 0
    }
})

export default SignUpForm;