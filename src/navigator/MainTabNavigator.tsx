import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Tabbar from '../screens/TabNavigatorScreens/TabBar/TabBar'

import styles from '../screens/TabNavigatorScreens/TabBar/styles'
import HomeScreen from '../screens/MainScreens/HomeScreen'
import InfoScreen from '../screens/MainScreens/InfoScreen'
import SettingScreen from '../screens/MainScreens/SettingScreen'

const Tab = createBottomTabNavigator()
const MainTabNavigator = () => {
  const { bottom, top } = useSafeAreaInsets()
  const paddingStyle = { paddingTop: top + 15, paddingBottom: bottom + 15 }
  const noHeaderStyle = { headerShown: false }
  return (
    <Tab.Navigator
      tabBar={props => <Tabbar {...props} style={[styles.containerWindow, paddingStyle]} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Главная', ...noHeaderStyle }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{ tabBarLabel: 'Инфо', ...noHeaderStyle }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ tabBarLabel: 'Настройки', ...noHeaderStyle }}
      />
      {/* <Tab.Screen
        name="Info"
        component={Info}
        options={{tabBarLabel: 'Инфо', ...noHeaderStyle}}
      />
      <Tab.Screen
        name="Settings"
        component={About}
        options={{tabBarLabel: 'О себе', ...noHeaderStyle}}
      /> */}
    </Tab.Navigator>
  )
}
export default MainTabNavigator
