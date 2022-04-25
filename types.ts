import { NavigatorScreenParams } from "@react-navigation/native"

export type TabNavigatorParamsList = {
    Home : undefined,
    Status : undefined,
    User : undefined,
}

export type StackNavigatorList = {
    Main : NavigatorScreenParams<TabNavigatorParamsList>
}

export type AuthNavigatorList = {
    Login : undefined,
    Register : undefined
}

