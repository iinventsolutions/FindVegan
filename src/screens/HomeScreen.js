import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native'
import NearestRestaurants from '../components/NearestRestaurants';
import TopRestaurants from '../components/TopRestaurants';
import AllRestaurants from '../components/AllRestaurants';
import { DataStore, Predicates } from 'aws-amplify' 
import { Restaurant } from '../models/index'
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useStateValue } from '../components/BasketContex/StateProvider';

const HomeScreen = () => {

    const index = useNavigationState(state => state.index);

    const [restaurant, setRestaurant] = useState([])
    const [{ basket }, dispatch] = useStateValue()

    const fetchRestaurants = async () =>{
        try {
            // await DataStore.delete(Restaurant, Predicates.ALL);
            const results = await DataStore.query(Restaurant);
            setRestaurant(results)
        } catch (error) {
            console.log("Loading restaurant error: ",error)
        }
        
    }
    


    useEffect(() => {
        fetchRestaurants()
        console.log("Home Stack state: ", index);
    }, [])
    

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
