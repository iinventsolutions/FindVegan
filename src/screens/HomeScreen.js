import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import NearestRestaurants from '../components/NearestRestaurants';
import TopRestaurants from '../components/TopRestaurants';
import AllRestaurants from '../components/AllRestaurants';
import { DataStore } from 'aws-amplify' 
import { Restaurant } from '../models/index'

const HomeScreen = () => {

    const [restaurant, setRestaurant] = useState([])

    const fetchRestaurants = async () =>{
        const results = await DataStore.query(Restaurant);
        // console.log(results)
        setRestaurant(results)
    }

    useEffect(() => {
        fetchRestaurants()
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
