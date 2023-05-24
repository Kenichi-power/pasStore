import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator'
import LoginScreen from '../screens/AuthenticationScreens/LoginScreen'
import RegisterScreen from '../screens/AuthenticationScreens/RegisterScreen'
// import HomeScreen from '../screens/MainScreens/HomeScreen'

export type MainStackParamList = {
  Login: undefined
  Register: undefined
  MainTabNavigator: undefined
}
export type AppStackScreenProps = NativeStackScreenProps<MainStackParamList, 'MainTabNavigator'>

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  const noHeaderStyle = {
    headerShown: false,
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} options={{ ...noHeaderStyle }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ ...noHeaderStyle }} />
          <Stack.Screen
            name="MainTabNavigator"
            component={MainTabNavigator}
            options={{ ...noHeaderStyle }}
          />
          {/* <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            options={{...noHeaderStyle}}
          /> */}
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator
