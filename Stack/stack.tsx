import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../modules/Home/screens/HomeScreens";
import LoginScreen from "../modules/auth/screens/LoginScreen";
const Stack = createStackNavigator();

export const homeStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export const loginStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}

