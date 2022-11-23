import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native'
import PopularOrders from '../components/PopularOrders';
import { useRoute } from '@react-navigation/native';

import { AntDesign,
        MaterialIcons,
        Ionicons
        } from '@expo/vector-icons';
import MainDishesListItem from '../components/MainDishesListItem';

const RestaurantDetailsScreen = ({navigation}) => {

  const [restaurant, setRestaurant] = useState(null)

  const route = useRoute();
  const id = route.params?.id

  console.warn(id)

  // if(!restaurant){
  //   return(
  //     <ActivityIndicator />
  //   )
  // }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.DeliverTo}>
          <Text style={{color: '#419D47'}}>Deliver to</Text>
          <View style={{display: 'flex', justifyContent: 'space-between', paddingRight: 10, paddingLeft: 10, alignItems: 'center', flexDirection: 'row', width: '100%'}}>
            <Text></Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 22, }}>East Legon</Text>
              <MaterialIcons name="keyboard-arrow-down" size={34} color="black" />
            </View>
            <View>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </View>
          </View>
        </View>

        <View>
              <Image
                  source={require('../../assets/details.png')}
                  style={{ width: "100%", height: 310, }}
                  // resizeMode="cover"
              />
              <Ionicons
                name='arrow-back-circle'
                size={50}
                color="white"
                style={styles.backIcon}
                onPress={()=>{navigation.goBack()}}
             />
        </View>

        <View style={styles.restaurantName}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Mayfield Bakery & Cafe</Text>
          <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 30}}>$$ &#8226; Chinese &#8226; American &#8226; Deshi food</Text>
          <View style={{display: 'flex', flexDirection: 'row', width: 150, justifyContent: 'space-between', marginTop: 15}}>
            <Text>4.3</Text>
            <Ionicons name="star-sharp" size={18} color="#419D47" />
            <Text>200+ Ratings</Text>
          </View>
        </View>

        <View style={styles.foodOptions}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/dollar.png')} style={{ width: 22, height: 22, }} />
            <Text style={styles.deliver}>Free{'\n'}<Text style={styles.deliver2}>Delivery</Text></Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/time.png')} style={{ width: 22, height: 22, }} />
            <Text style={styles.deliver}>25{'\n'}<Text style={styles.deliver2}>minutes</Text></Text>
          </View>
          <View style={{width: 130, height: 50, borderWidth: 1.3, borderColor: '#419D47', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#419D47'}}>TAKE AWAY</Text>
          </View>
        </View>

      </View>

      <Text style={{padding: 15, fontSize: 23, fontWeight: 'bold'}}>Popular Orders</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.TopRestaurantsView}>
          <PopularOrders />
          <PopularOrders />
          <PopularOrders />
          <PopularOrders />
          <PopularOrders />
      </ScrollView>
      <View>
        <Text style={{padding: 15, fontSize: 23, fontWeight: 'bold'}}>Main Dishes</Text>
      </View>
      <View style={styles.ListItemsContainer}>
        <MainDishesListItem />
        <MainDishesListItem />
        <MainDishesListItem />
        <MainDishesListItem />
      </View>
    </ScrollView>
  )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    width: '100%',
    // borderWidth: 1,
    marginTop: 45
  },

  DeliverTo: {
    display: 'flex',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 5,

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },

  restaurantName: {
    // borderWidth: 5,
    height: 130,
    padding: 15,
  },

  foodOptions: {
    // borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  deliver: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  deliver2: {
    fontSize: 14, 
    fontWeight: 'normal', 
    color: '#343F49',
    opacity: 0.5
  },

  TopRestaurantsView:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // borderWidth: 2
  },
  ListItemsContainer: {
    // marginTop: 15,
    // borderWidth: 1,
    width: '100%',
    // height: '49%',
    padding: 10
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10
  },

});