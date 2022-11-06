import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => { 
    return (
    <Tab.Navigator screenOptions ={{ "tabBarStyle": {backgroundColor: '#fff', color: '#419D47'}}}>
      <Tab.Screen
        name="Home" 
        component={HomeScreen} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <Entypo name="home" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
      <Tab.Screen 
        name="Search" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({focused}) => ( <Feather name="search" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
      <Tab.Screen 
        name="Orders" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({focused}) => ( <Ionicons name="list-outline" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
      <Tab.Screen 
        name="Profile" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({focused}) => ( <Ionicons name="person-outline" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
    </Tab.Navigator>
    )
 }

export default HomeTabs;

