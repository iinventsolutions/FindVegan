import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native'
import NearestRestaurants from '../components/NearestRestaurants';
import TopRestaurants from '../components/TopRestaurants';
import AllRestaurants from '../components/AllRestaurants';
import { DataStore, Predicates } from 'aws-amplify' 
import { Restaurant } from '../models/index'
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useStateValue } from '../components/BasketContex/StateProvider';
import { UserMobile } from '../models/index';
import * as Location from 'expo-location';
import { useAuthContext } from '../contexts/AuthContext';



const HomeScreen = () => {

    const index = useNavigationState(state => state.index);

    const { dbUser } = useAuthContext();

    const [restaurant, setRestaurant] = useState([])
    const [locationdata, setLocationData] = useState(null); 
    const [{ basket }, dispatch] = useStateValue()

    const fetchRestaurants = async () =>{
        try {
            // await DataStore.delete(Restaurant, Predicates.ALL);
            const results = await DataStore.query(Restaurant);
            setRestaurant(results)
            console.log("List of restaurants: ", results)
        } catch (error) {
            console.log("Loading restaurant error: ",error)
        }
        
    }

    const updateUser = async () => { 
        await DataStore.save(
          UserMobile.copyOf(dbUser, updated => {
            updated.lat = parseFloat(locationdata?.coords?.latitude);
            updated.lng = parseFloat(locationdata?.coords?.longitude);
          })
        )
     }

    const getLocation = async () => {
        try {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
            }
        
            let location = await Location.getCurrentPositionAsync({});
            setLocationData(location);
            // console.log("Location details: ",location)
            if(location){
                console.warn("lat: ",location?.coords?.latitude, "lng: ", location?.coords?.longitude)
            }else{
                console.warn("Error getting location...")
            }

            // After getting user's info update the user info with the table
            updateUser()
            
        } catch (error) {
            Alert.alert(error)
        }
        
      };
    


    useEffect(() => {
        fetchRestaurants()

        console.log("Home Stack state: ", index);
    }, [])

    useEffect(() => {
        // getLocation()
    }, [dbUser])
    
    

  return (
    
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Top Restaurants</Text>
        </View>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.TopRestaurantsView}> */}
            {/* <TopRestaurants /> */}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {restaurant}
                renderItem = {({item})=> <TopRestaurants restaurant={item} />}
                showsVerticalScrollIndicator = {false}
            />
        {/* </ScrollView> */}
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Nearest Restaurants</Text>
        </View>
        {/* <NearestRestaurants /> */}
        <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {restaurant.filter((item)=>item.lat <= 46.5)}
                renderItem = {({item})=> <NearestRestaurants restaurant={item} />}
                showsVerticalScrollIndicator = {false}
            />
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Must Try</Text>
        </View>
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.TopRestaurantsView}> */}
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {restaurant.filter((item)=>item.rating >= 3)}
                renderItem = {({item})=> <TopRestaurants restaurant={item} />}
                showsVerticalScrollIndicator = {false}
            />
        {/* </ScrollView> */}
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>All Restaurants</Text>
        </View>
        {/* <NearestRestaurants /> */}
        <FlatList 
                vertical
                // showsVerticalScrollIndicator={false}
                data = {restaurant}
                renderItem = {({item})=> <AllRestaurants restaurant={item} />}
                showsVerticalScrollIndicator = {false}
            />
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#fff',
    //   marginTop: 40
    },

    TopRestaurantsView:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // borderWidth: 2
    }
  });
