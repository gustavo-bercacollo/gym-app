import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { gluestackUIConfig } from '../../config/gluestack-ui.config'

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'

import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'
import { Exercise } from '@screens/Exercise'
import { Platform } from 'react-native'

type AppRoutes = {
  home: undefined
  profile: undefined
  history: undefined
}

type ExerciseRoutes = {
  exercise: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>
export type ExerciseNavigatorRouteProps = NativeStackNavigationProp<ExerciseRoutes>

const Tab = createBottomTabNavigator<AppRoutes>()
const Stack = createNativeStackNavigator<ExerciseRoutes>()

export function AppRoutes() {
  const { tokens } = gluestackUIConfig
  const iconSize = tokens.space['7']

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray200,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray600,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: tokens.space['12'],
          paddingTop: tokens.space['3'],
          paddingHorizontal: tokens.space['5'],
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export function ExerciseRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="exercise" component={Exercise} />
    </Stack.Navigator>
  )
}
