import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MainDishDetails from '../screens/MainDishDetails';
import CartScreen from '../screens/CartScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import CardListScreen from '../screens/CardListScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';
import ReferToFriendsScreen from '../screens/ReferToFriendsScreen';
import AddSocialScreen from '../screens/AddSocialScreen';
import OrderPlacingScreen from '../screens/OrderPlacingScreen';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="HomeList" component={HomeTabs} options={{headerShown: false}}/>
      {/* <Stack.Screen  name="RestaurantDetails" component={RestaurantDetailsScreen} options={{headerShown: false}}/> */}
    </Stack.Navigator>
  )
}

const HomeStackNavigator = () => { 
  return(
    <HomeStack.Navigator>
      <Stack.Screen  name="Restaurants" component={HomeScreen} options={{headerShown: true}}/>
      <Stack.Screen  name="RestaurantDetails" component={RestaurantDetailsScreen} options={{headerShown: false}}/>
      <Stack.Screen  name="Main Dish" component={MainDishDetails}/>
      
      <Stack.Screen  name="Cart Details" component={OrderDetailsScreen}/>
      <Stack.Screen  name="Payment Options" component={CardListScreen}/>
      <Stack.Screen  name="Payment Confirmed" component={OrderConfirmationScreen}/>
      <Stack.Screen  name="Placing Order" component={OrderPlacingScreen}/>
    </HomeStack.Navigator>
  )
 }

 const ProfileStackNavigator = () => { 
    return(
      <ProfileStack.Navigator>
        <Stack.Screen  name="Profile" component={ProfileScreen} />
        <Stack.Screen  name="Profile settings" component={ProfileInfoScreen}/>
        <Stack.Screen  name="Add Social" component={AddSocialScreen} />
        <Stack.Screen  name="Refer" component={ReferToFriendsScreen}/>
    </ProfileStack.Navigator>
    )
  }

  const OrderStackNavigator = () => { 
    return(
      <OrderStack.Navigator>
        <Stack.Screen  name="Order List" component={OrdersScreen} options={{headerShown: true}} />
        <Stack.Screen  name="Order Details" component={CartScreen}/>
    </OrderStack.Navigator>
    )
  }


const Tab = createBottomTabNavigator();

const HomeTabs = () => { 
    return (
    <Tab.Navigator screenOptions ={{ "tabBarStyle": {backgroundColor: '#fff', color: '#419D47'}}}>
      <Tab.Screen
        name="Home" 
        component={HomeStackNavigator} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <Entypo name="home" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ tabBarIcon: ({focused}) => ( <Feather name="search" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
      <Tab.Screen 
        name="Orders" 
        component={OrderStackNavigator} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <Ionicons name="list-outline" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
      <Tab.Screen 
        name="Profile " 
        component={ProfileStackNavigator} 
        options={{headerShown: false, tabBarIcon: ({focused}) => ( <Ionicons name="person-outline" size={24} color={focused ? '#419D47' : '#000'} />)}}
        />
    </Tab.Navigator>
    )
 }

export default RootNavigator;

